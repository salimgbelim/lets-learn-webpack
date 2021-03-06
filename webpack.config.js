const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js'],
        about: ['babel-polyfill', './src/js/about.js'],
        es6Training: ['babel-polyfill', './src/js/es6-training.js']
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader', options: {sourceMap: true}},
                        {loader: 'postcss-loader', options: {sourceMap: true}},
                        {loader: 'sass-loader', options: {sourceMap: true}}
                    ]
                })
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader"}
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/views/about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            filename: 'es6-training.html',
            template: 'src/views/es6-training.html',
            chunks: ['es6Training']
        }),
        new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8080'
            },
            {
                reload: false
            })
    ]
}