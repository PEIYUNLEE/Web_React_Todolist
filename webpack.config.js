const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    //rules的值是一個陣列可以存放多個loader物件
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
            },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ExtractTextPlugin("assets/css/style.css"),
  ],
  //增加一個給devserver的設定
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3030,
  },
};
