var path = require("path");
var webpack = require("webpack");
var WebpackObfuscator = require("webpack-obfuscator");
var LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["lodash"],
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackObfuscator({
      splitStrings: true,
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new LodashModuleReplacementPlugin(),
  ],
};
