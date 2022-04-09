const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path:path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port:8080,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })
    ]

}
