const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

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
      config.module.rules.push(
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          }),
        }
      )
      // Service Worker
      config.plugins.push(
        new ProgressPlugin(),
        new ExtractTextPlugin('[name].[chunkhash:8].css'),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }), // remove unused css
        new PurifyCSSPlugin({
          // Give paths to parse for rules. These should be absolute!
          moduleExtensions: ['.jsx', '.html', '.js'],
          paths: glob.sync(
            path.join(
              __dirname,
              'modules/Customers/components/CreateCustomerForm.js'
            ),
            path.join(
              __dirname,
              'modules/Customers/components/CustomersList.js'
            ),
            path.join(__dirname, 'modules/Layout/BottomFooter.js'),
            path.join(__dirname, 'modules/Layout/Main.js'),
            path.join(__dirname, 'modules/Layout/NavControl.js'),
            path.join(__dirname, 'modules/Layout/NavSidebar.js'),
            path.join(__dirname, 'node_modules/grommet/components/**/*.js')
          ),
        }),
        //new OptimizeCssAssetsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|html)$/,
          threshold: 10240,
          minRatio: 0.9,
        })
      )
    }
    return config
  },
}
