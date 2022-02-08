const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "", "../src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env", "@babel/preset-react"] },
          },
        ],
      },
      {
        test: /\.(s?css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|jpe?g|png)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "", "../public/index.html"),
    }),
  ],
};
