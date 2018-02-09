const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const libraryName = '[name]';
const plugins = [];
let outputFile;

module.exports = env => {
	if (env === 'build') {
		plugins.push(new UglifyJsPlugin({ minimize: true }));
		outputFile = libraryName + '.min.js';
	} else {
		outputFile = libraryName + '.js';
	}

	return {
		entry: {
			helpers: __dirname + '/src/helpers.ts'
		},
		output: {
			path: path.resolve(__dirname, 'lib'),
			filename: outputFile,
			library: [libraryName, '[name]'],
			libraryTarget: 'umd',
			umdNamedDefine: true
		},
		module: {
			rules: [
				{
					test: /(\.tsx|\.ts|\.js)$/,
					loader: 'ts-loader',
					exclude: /(node_modules|bower_components)/
				}
			]
		},
		plugins: plugins,
		resolve: {
			extensions: ['.ts', '.js']
		}
	};
};
