const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
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
      // Service Worker
      config.plugins.push(
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
        }),
        new ProgressPlugin(),
        // remove unused css
        new PurifyCSSPlugin({
          // Give paths to parse for rules. These should be absolute!
          moduleExtensions: ['.jsx', '.html', '.js'],
          paths: glob.sync(
            path.join(__dirname, 'pages/index.js'),
            path.join(__dirname, 'pages/customers.js'),
            path.join(__dirname, 'pages/signature.js'),
            path.join(
              __dirname,
              'node_modules/custom-grommet-package/components/**/*.js'
            ),
            path.join(
              __dirname,
              'node_modules/custom-grommet-package/components/*.js'
            )
          ),
        }),
        //new OptimizeCssAssetsPlugin(),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|html)$/,
          threshold: 10240,
          minRatio: 0.8,
        })
      )
    }
    return config
  },
}
