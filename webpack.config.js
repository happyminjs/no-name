const path = require('path');
const webpack = require('webpack');
/*const apiMocker = require('webpack-api-mocker');
const mocker = path.resolve('./mocker.js');*/

const entryConfig = require('./webpack-config/entry.config.js');
const moduleConfig = require('./webpack-config/module.config.js');
const outputConfig = require('./webpack-config/output.config.js');
const pluginsConfig = require('./webpack-config/plugins.config.js');
const resolveConfig = require('./webpack-config/resolve.config.js');

let config = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	resolve: resolveConfig,
	plugins: pluginsConfig,
	devtool: false,
	mode: "production",
	externals:{
		echarts: "echarts"
	},
	optimization:{
		splitChunks:{
			cacheGroups:{				
				commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendors",
		            chunks: "all"
		        }
			}
		}
	},
	
};
if (process.env.NODE_ENV !== 'production') {
	config.devtool = 'inline-cheap-source-map';
	config.devServer = {
		contentBase: path.resolve(__dirname, './src'),
		host: 'dev.58.com',
		port: 3001,
		hot:true,
		compress:true,
		proxy: {
			"/ajax": {
				target: "http://3g.ganji.com",
				changeOrigin: true,
				secure: false
			},
			"/fangapi":{
				target: "http://fangapi.ganji.com",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/fangapi': ''
				}
			}
		},
		/*before(app){
			apiMocker(app, mocker)
		}*/
	};
}
module.exports = config;