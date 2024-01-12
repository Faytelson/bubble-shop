import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const { VueLoaderPlugin } = require('vue-loader')

export default (env: any) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    context: path.resolve(__dirname, "src"),
    entry: path.resolve(__dirname, "src", "main.js"),
    devtool: "inline-source-map",
    // devServer: {
    //   static: "dist",
    //   watchFiles: ["src/*.html"],
    //   hot: true,
    // },
    plugins: [
      new HTMLWebpackPlugin({
        template: "index.html",
        filename: "index.html",
        cache: false,
      }),
      new MiniCssExtractPlugin(),
      new VueLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(s(a|c)ss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].bundle.js",
      assetModuleFilename: "assets/[name][ext]",
      clean: true,
    },
  };
  return config;
};