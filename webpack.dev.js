const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
   },
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization'
        },
      inline: true,
      port: 8085
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                      [
                          '@babel/preset-env',
                      ],
                      '@babel/preset-react'
                  ],
                  plugins: [
                      ['@babel/plugin-proposal-class-properties'],
                      [
                          'import',
                          { libraryName: 'antd', "libraryDirectory": "es", style: 'css' },
                          'antd'
                      ],
                      ['@babel/plugin-transform-runtime'],
                      ['@babel/transform-object-assign']
                  ],
                  sourceType: 'unambiguous'
              }
            }
         }
         ,
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     // you can specify a publicPath here
                     // by default it uses publicPath in webpackOptions.outputx
                     // publicPath: '../',
                     hmr: process.env.MODE === 'dev'
                  }
               },
               'css-loader'
            ]
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            //   outputPath: 'Images/',
            //   publicPath: '/Images/'
            },
          },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         filename: './index.html',
         minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          },
          inject: true
      }),
      new Dotenv({
         path: './.env.development'
      })
      ,
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: '[name].css',
         chunkFilename: '[id].css'
       }),
       CopyWebpackPlugin([
        ]),
   ]
}