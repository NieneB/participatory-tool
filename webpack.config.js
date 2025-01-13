const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    publicPath: '/', //with ./ for deployment?
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
        {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ["file-loader"]
      }, 
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    hot: true, // hot reloading
    port: 3001, // port on which server will run
    open: true, // open browser automatically on start
    historyApiFallback: true  },
};
