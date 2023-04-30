const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    filename: "[name ].[contenthash].js",
    path: path.resolve(__dirname, "./production"),
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
          "css-loader",
        ],
      },
      // {
      //   test: /\.(woff2|woff|ttf)$/,
      //   use: [
      //     {
      //       loader:'file-loader',
      //       options:{
      //         name:"[name].[ext]",
      //         ouputPath:'fonts/'
      //       }
      //     }
      //   ],
      // },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"], // ['stage-0']
            plugins: ["transform-class-properties"],
          },
        },
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
