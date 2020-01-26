/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '..');
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src');
const BUILD_DIRECTORY = path.join(ROOT_DIRECTORY, 'build');

const baseConfig = {
  entry: [path.resolve(SRC_DIRECTORY, 'index.jsx')],

  output: {
    path: BUILD_DIRECTORY,
    filename: 'js/bundle.[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [SRC_DIRECTORY, path.resolve(__dirname, '../node_modules')],
  },

  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true'],
      },
      {
        test: /\.css$/,
        include: path.join(SRC_DIRECTORY, 'styles'),
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: path.join(SRC_DIRECTORY, 'assets'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(ROOT_DIRECTORY, 'public', 'index.html'),
    }),
    new HardSourceWebpackPlugin(),
  ],
};

module.exports = baseConfig;
