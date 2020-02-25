/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '..');
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src');
const BUILD_DIRECTORY = path.join(ROOT_DIRECTORY, 'build');

const mode = process.env.NODE_ENV || 'production';

const baseConfig = {
  mode,

  entry: [path.resolve(SRC_DIRECTORY, 'index.jsx')],

  output: {
    path: BUILD_DIRECTORY,
    filename: 'js/bundle.[name].js',
  },

  resolve: {
    modules: [SRC_DIRECTORY, path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.jsx'],
    mainFiles: ['index'],
  },

  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.css$/,
        include: path.join(SRC_DIRECTORY, 'styles'),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: mode === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: path.join(SRC_DIRECTORY, 'assets'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your options here */
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
      minify: {
        // compress HTML
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
};

module.exports = baseConfig;
