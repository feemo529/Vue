const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
});
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map',
    // 只定位行数不显示源码
    // devtool: 'nosources-source-map',
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        // 在http协议中，如果端口号是80，则可以被省略
        port: 80,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}