const base = require('./base')
const merge = require('webpack-merge')

module.exports = merge(base, {
  mode: 'development',

  entry: [
    `${ __rootdir }/src/index.js`,
  ],

  output: {
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(css|styl)$/,
        use: [
        'style-loader',
        'css-loader',
        'stylus-loader'
        ],
      },
    ],
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  }
})
