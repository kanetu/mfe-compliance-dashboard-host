const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        taskOverview: "taskOverview@http://localhost:3001/remoteEntry.js",
        complianceStatus:
          "complianceStatus@http://localhost:3002/remoteEntry.js",
        recentActivity: "recentActivity@http://localhost:3003/remoteEntry.js",
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
  ],
};
