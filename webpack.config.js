var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
	//提公用js到common.js文件中
	new webpack.optimize.CommonsChunkPlugin({
		name: 'common',
		filename: 'libs/common.js'
	}),
	//将样式统一发布到style.css中
	new ExtractTextPlugin("style/style.css", {
		allChunks: true
	}),
	// 使用 ProvidePlugin 加载使用率高的依赖库
	new webpack.ProvidePlugin({
		$: 'webpack-zepto'
	})
];

module.exports = {
	//入口文件
	entry: {
		app: path.resolve(__dirname, 'src/main.js')
	},
	//输出的文件名
	output: {
		// 指向异步加载的路径
		publicPath : '/dist/',
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		// 非主文件的命名规则
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
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url?limit=40000'
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
	vue: {
		css: ExtractTextPlugin.extract("css"),
		sass: ExtractTextPlugin.extract("css!sass-loader")
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},
	plugins: plugins
};