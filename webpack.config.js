const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')
const webpack = require('webpack');
const WebpackBundleTime =require('./CustomWebpackPlugin/WebpackBundleTime')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path:path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader','css-loader']
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
            ,
            {
                test:/\.png$/,
                use:['file-loader'],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port:8080,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    }),
        new MiniCssExtractPlugin({
            filename: 'common.css',
        })
        ,new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner: () => `빌드 날짜: ${new Date().toLocaleString()}`,
        }),
        new WebpackBundleTime(),
    ]

}
