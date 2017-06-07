const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackMiddleware = require("webpack-dev-middleware");
const compiler = webpack(config);
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

/*app.use(webpackMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    lazy: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    publicPath : config.output.publicPath, 
    index: "index.html",
    headers: { "X-Custom-Header": "yes" },
    stats: {
        colors: true,
    },
    reporter: null,
    serverSideRender: false,
}));*/

require('./app/routes')(app);
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/app/front/index.html');
});

app.listen(port, () => {
	console.log('We are live at port ' + port);
});
