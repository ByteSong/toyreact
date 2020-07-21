const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./main.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  pragma: "ToyReact.createElement",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: "development",
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
};
