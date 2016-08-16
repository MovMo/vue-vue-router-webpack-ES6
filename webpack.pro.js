var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); //清理文件夹
var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
	//清空输出目录
	new CleanPlugin(['dist'], {
		"root": path.resolve(__dirname, './'),
		verbose: true,
		dry: false
	}),
	//将样式统一发布到style.css中
	new ExtractTextPlugin("style/style.css", {
		allChunks: true
	}),
	// 压缩代码
	new webpack.optimize.UglifyJsPlugin({
	    compress: {
	        warnings: false
	    }
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	//提公用js到common.js文件中
	new webpack.optimize.CommonsChunkPlugin({
		name: 'common',
		filename: 'libs/common.js'
	}),
	new HtmlWebpackPlugin({
		filename: '../index.html',
		template: path.resolve(__dirname, './src/index.html'),
		inject: true
	})
];

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: path.resolve(__dirname, './src/main.js'),
	//输出的文件名 合并以后的js会命名为bundle.js
	output: {
		path: path.resolve(__dirname, './dist/static'),
		// 指向异步加载的路径
		publicPath: 'static/',
		filename: '[name].js',
		// 非主文件的命名规则输出
		chunkFilename: 'components/[id].[chunkhash].js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue',
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'url',
			query: {
				limit: 20000,
				name: 'images/[name].[ext]?[hash:7]'
			}
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.vue']
	},
	plugins: plugins
};