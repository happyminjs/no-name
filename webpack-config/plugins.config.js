const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const configEntry = require('./entry.config.js');

const pluginConfig = [
    new CleanWebpackPlugin(
        ['build'],
        {
            root: path.resolve(__dirname,'../'),    //根目录
            verbose:true,                           //开启在控制台输出信息
            dry:false                               //启用删除文件
        }
    ),
    /*new webpack.ProvidePlugin({
        "$": "zepto-webpack"
    }),*/
    new webpack.DefinePlugin({
        "NODE_ENV": JSON.stringify(true),
        "process.env": {
            NODE_ENV: true
        }
    }),
    new ExtractTextPlugin('[name].css')
];


for (let key in configEntry){
	let htmlConfig = {
	    chunks: [key],
        title: key.split('/')[1],
        filename:  key + '.html',
        template: path.resolve(__dirname, '../src') + '/' + key + '.html',
        inject: 'body'
	};
	pluginConfig.push(new HtmlwebpackPlugin(htmlConfig));
}

if (process.env.NODE_ENV == 'development') {
	pluginConfig.push(
		new webpack.HotModuleReplacementPlugin()
	);
}
module.exports = pluginConfig;