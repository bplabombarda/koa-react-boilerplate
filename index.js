'use strict';

const { resolve } = require('path');

const express = require('express');
const chokidar = require('chokidar');

const app = express();

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackConfig = require('./webpack.config');
	const middlewareOptions = {
		stats: { colors: true },
		noInfo: false,
		lazy: false,
		headers: {
		  "Access-Control-Allow-Origin": "http://localhost"
		},
		publicPath: webpackConfig.output.publicPath
	};
	const compiler = webpack(webpackConfig);
	const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, middlewareOptions);
	app.use(webpackDevMiddlewareInstance);

	const webpackHotMiddleware = require('webpack-hot-middleware');
	app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('public'));

app.use((req, res, next) => {
	require('./server')(req, res, next);
});

const watcher = chokidar.watch('./server');

watcher.on('ready', function() {
	watcher.on('all', function() {
		console.log("Clearing /server/ module cache from server");
		Object.keys(require.cache).forEach(function(id) {
			if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
		});
	});
});

app.get('*', (req, res) => {
	res.sendFile(resolve(__dirname, './public/index.html'));
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));