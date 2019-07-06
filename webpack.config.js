const path = require("path");

module.exports = {
  entry: "./src/App.tsx",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts", ".json"] }
};
