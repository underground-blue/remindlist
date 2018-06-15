const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
	{
		entry: './source/javascript/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './contents/assets/js/'),
		},
		module: {
			rules: [
				{
					test: /\.(js)$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									['env', {'modules': false}]
								]
							}
						},
						{
							loader: 'eslint-loader',
							options: {
								failOnError: true
							}
						}
					]
				}
			]
		},
	},
	{
		entry: {
			'common': './source/sass/common.scss'
		},
		output: {
			path: path.resolve(__dirname, './contents/assets/css/'),
			filename: '[name].css'
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						use: [{loader: 'css-loader', options: {url: false}}, 'sass-loader'],
					})
				}
			],
		},
		plugins: [
			new ExtractTextPlugin('common.css'),
		],
	}
]
