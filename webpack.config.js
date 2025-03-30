const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const remoteConfig = require("./remoteConfig");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "./.env"),
});

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    port: dotenv.parsed.REACT_APP_HOST_PORT,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        taskOverview: `${remoteConfig.remotes.taskOverview.scope}@${remoteConfig.remotes.taskOverview.url}`,
        complianceStatus: `${remoteConfig.remotes.complianceStatus.scope}@${remoteConfig.remotes.complianceStatus.url}`,
        recentActivity: `${remoteConfig.remotes.recentActivity.scope}@${remoteConfig.remotes.recentActivity.url}`,
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.1.0", eager: false },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.0",
          eager: false,
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: "^7.4.1",
          eager: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};
