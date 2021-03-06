const { IgnorePlugin } = require('webpack')

const path = require('path')
const glob = require('glob')
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
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
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
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new ProgressPlugin(),
        // Check for errors, and refuse to emit anything with issues
        new webpack.NoEmitOnErrorsPlugin(),
        // Optimise chunk IDs
        new webpack.optimize.OccurrenceOrderPlugin(),
        // A plugin for a more aggressive chunk merging strategy
        new CompressionPlugin({
          // Overwrite the default 80% compression-- anything is better than
          // nothing
          minRatio: 0.99
        }),
        // Service Worker
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            // Precache all static files by default
            'static/**/*'
          ],
          forceDelete: true,
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/ // cache all files
            }
          ]
        })
      )
    }
    return config
  }
}
