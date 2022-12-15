const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, '/dist'),
		},
		compress: true,
		port: 9000,
		open: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Main page",
			filename: 'index.html',
			template: "/app/pages/index.html",
			inject: 'body',
			meta: {viewport: 'width=device-width, initial-scale=1'},
			minify: true,
			chunks: ['index'],

		}),
		new HtmlWebpackPlugin({
			title: "Ticket",
			filename: 'ticket.html',
			template: "/app/pages/ticket.html",
			inject: 'body',
			meta: {viewport: 'width=device-width, initial-scale=1'},
			minify: true,
			chunks: ['ticket']
		})
	],
	entry: {
		index: './app/index.ts',
		ticket: './app/assets/js/ticket.ts',
		tours: './app/assets/js/tours.ts'
	},

	module: {
		rules: [
			{
				test: /\.(png|jp?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '/img/',
							name: '[name].[ext]'
						}
					},
				]
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {

		alias: {
			'@rest': path.resolve(__dirname, './app/services/rest/'),
			'@services': path.resolve(__dirname, './app/services/'),
			'@assets': path.resolve(__dirname, './app/assets/'),
			"@myCss": path.resolve(__dirname, './app/assets/styles/main.scss'),
		},

		extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
		clean: true,
	},

	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}

};