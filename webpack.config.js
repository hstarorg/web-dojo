'use strict';

let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = (() => {
  let config = {
    debug: true,
    entry: {
      dojo: './src/bootstrap.js',
      vendor: './src/vendor.js'
    },
    output: {
      path: './dist/assets/js',
      publicPath: '/assets/js',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.js', '.vue', '.html'],
      alias: {
        jquery: 'jquery/src/jquery'//,
        //  tether: 'tether/src/js/tether'
      }
    },
    module: {
      // avoid webpack trying to shim process
      noParse: /es6-promise\.js$/,
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue'
        },
        {
          test: /\.js$/,
          // excluding some local linked packages.
          // for normal use cases only node_modules is needed.
          exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
          loader: 'babel'
        }
      ]
    },
    babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
    },
    devServer: {
      host: 'localhost',
      port: 7410,
      contentBase: './src',
      // hot: true,
      historyApiFallback: true,
      open: true
    }
  };
  if (process.env.NODE_ENV === 'production') {
    config.plugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
  } else {
    config.plugins = [
      new CommonsChunkPlugin({
        name: ['vendor']
      })
    ];
    config.devtool = '#source-map'
  };

  return config;
})();