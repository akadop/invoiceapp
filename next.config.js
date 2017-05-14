const { IgnorePlugin } = require('webpack')
const { compose, merge } = require('ramda')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const addPlugins = (...args) => config =>
  merge(config, {
    plugins: [...config.plugins, ...args],
  })

const addLoaders = (...args) => config => {
  config.module.rules.push(...args)

  return config
}

const devPlugins = []

const prodPlugins = [
  new SWPrecacheWebpackPlugin({
    filename: 'sw.js',
    minify: true,
    staticFileGlobsIgnorePatterns: [/\.next\//],
    staticFileGlobs: [
      'static/**/*', // Precache all static files by default
    ],
    forceDelete: true,
    runtimeCaching: [
      {
        handler: 'fastest',
        urlPattern: /[.](png|jpg|css)/,
      },
      {
        handler: 'networkFirst',
        urlPattern: /^http.*/, // cache all files
      },
    ],
  }),
]

const devAndProdLoaders = [
  {
    test: /\.css$/,
    loader: 'emit-file-loader',
    options: {
      name: 'dist/[path][name].[ext]',
    },
  },
  {
    test: /\.css$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader'],
  },
]

module.exports = {
  webpack: (config, { dev }) => {
    const loaders = addLoaders(...devAndProdLoaders)
    const plugins = dev ? addPlugins(...devPlugins) : addPlugins(...prodPlugins)
    const build = compose(loaders, plugins)

    return build(config)
  },
}
