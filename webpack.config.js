const path = require('path')

module.exports ={
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'webpack.bundle.js',
      },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        "port": 4444,
        open: true,
    }
}