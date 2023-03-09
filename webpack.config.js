const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'webpack.bundle.js',
      },
      module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              }
        ]
      },
      plugins: [new HtmlWebpackPlugin({ template: "src/index.html"})],
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        "port": 4444,
        open: true,
    }
}