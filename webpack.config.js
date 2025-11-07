const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './app.js',
	output: {
		filename: 'baseball.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'lib')
		}
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'index.html', to: '' }
			]
		})
	]
};