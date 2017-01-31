const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const webpackConfig = require('../../webpack.config.js');
const config = require('./config');

const api = require('./api/api');

const env = process.env.NODE_ENV || 'local';
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

mongoose.Promise = global.Promise;
mongoose.connect(config.db);

app.use(bodyParser.json());

app.use('/api/', api);


if (env === 'local') {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.render('index');
    });
} else {
    // app.get('*', function response(req, res) {
    //     res.sendFile(path.join(__dirname, 'app/index.html'));
    // });
}



app.listen(port, '0.0.0.0', err => {
    if (err) console.log(err);

    console.info(`Listening on port ${port}`);
});