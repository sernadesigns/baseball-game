const path = require('path');

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
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env']
				}
			}
		]
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, 'lib')
		}
	}
};