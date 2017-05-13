const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    // For the development version, we'll use React.
    // Because, it support react hot loading and so on.
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    )
    if (!dev) {
      if (config.resolve.alias) {
        delete config.resolve.alias.react
        delete config.resolve.alias['react-dom']
      }
      config.plugins.push(
        new webpack.DefinePlugin({
          // React constantly checking process.env.NODE_ENV causes massive
          // slowdowns during rendering. Replacing process.env.NODE_ENV
          // with a string not only removes this expensive check, it allows
          // a minifier to remove all of React's warnings in production.
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new ProgressPlugin(),
        // Check for errors, and refuse to emit anything with issues
        new webpack.NoEmitOnErrorsPlugin(),
        // Minify, optimise
        new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
          },
          output: {
            comments: false,
          },
          exclude: [/\.min\.js$/gi], // skip pre-minified libs
        }),
        // Optimise chunk IDs
        new webpack.optimize.OccurrenceOrderPlugin(),
        // A plugin for a more aggressive chunk merging strategy
        new webpack.optimize.AggressiveMergingPlugin(),
        // Compress assets into .gz files, so that our express server handler serves those
        // instead of the fullsized versions
        new CompressionPlugin({
          // Overwrite the default 80% compression-- anything is better than
          // nothing
          minRatio: 0.99,
        }),
        // remove unused css
        new PurifyCSSPlugin({
          // Give paths to parse for rules. These should be absolute!
          moduleExtensions: ['.jsx', '.html', '.js'],
          paths: glob.sync(path.join(__dirname, 'pages/index.js')),
        }),
        // Service Worker
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*', // Precache all static files by default
          ],
          forceDelete: true,
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, //cache all files
            },
          ],
        })
      )
    }
    return config
  },
}
