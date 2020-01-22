const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'SoundCloud',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.css', '.js', '.vue']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'css': [
            'vue-style-loader',
            'css-loader',
          ]
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }],
  },
  externals: {
    'classnames': 'classnames',
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;