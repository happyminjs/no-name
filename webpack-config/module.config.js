const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    rules:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                { loader: "babel-loader" }
            ]
        },
        {
            test:/\.css$/,
            exclude:/node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader','less-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         config: {
                    //             path: path.join(__dirname, 'postcss.config.js')
                    //         }
                    //     }
                    // },
                    // {
                    //     loader: 'less-loader',
                    //     options: {
                    //         plugins: require('./less-plugins'),
                    //         sourceMap: false,
                    //     }
                    // }
                ]
            })
        },
    ]
}