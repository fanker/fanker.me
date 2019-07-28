/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].js',
  },
  mode: 'production',
  devtool: 'cheap-source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BabelMinifyWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    // css分包
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
      chunkFilename: 'index.[chunkhash:8].css',
    }),
    // 只匹配中文
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    // new VisualizerPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 10,
      cacheGroups: {
        'react-vendors': {
          test: /(react|react-dom|react-dom-router)/,
          name: 'react-vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        'moment-vendors': {
          test: /moment/,
          name: 'moment-vendors',
          priority: 9,
          reuseExistingChunk: true,
        },
        'lodash-vendors': {
          test: /lodash/,
          name: 'lodash-vendors',
          priority: 8,
          reuseExistingChunk: true,
        },
        'braft-vendors': {
          test: /(braft|draft)/,
          name: 'braft-vendors',
          priority: 7,
          reuseExistingChunk: true,
        },
        'antd-vendors': {
          test: /(antd|@ant-design)/,
          name: 'antd-vendors',
          priority: 6,
          reuseExistingChunk: true,
        },
        'async-commons': {
          chunks: 'async',
          name: 'async-commons',
          priority: 5,
        },
        commons: {
          name: 'commons',
          priority: 4,
        },
      },
    },
  },
};
