const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "./prod"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "sass-loader",
          "css-loader",
        ],
      },
    ],
  },
  // for css optimizations
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    // splitChunks:{ chunks:"all",minSize:10000,autmoaticNameDelimiter:"_"}
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "_style.[contenthash].css",
      // chunkFilename: "style.chunk.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    new HtmlWebpackPlugin({
      title: "Custom App | POWERED BY ENJOYS",
      template: "./src/index.html",
      // description:"" install handle bars to use  custom
      // template:"./src/index.hbs"
      // chunks:[]
    }),
  ],
};
