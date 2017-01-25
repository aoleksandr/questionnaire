const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    debug: true,
    devtool: 'eval-source-map',
    noInfo: true,
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './app/frontend/index.js'
    ],
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    'presets': ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.ico$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /(\.css|\.scss)$/,
                loader: 'style!css'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};