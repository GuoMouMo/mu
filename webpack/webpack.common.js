const path = require('path');
const { entry, setHtmlPlugin, commonConfig } = require('./configuration');
module.exports = {
    entry,
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '..', 'assets'),
        publicPath: '/',
    },
    ...commonConfig,
    optimization: {
        // 使用默认的分包配置
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        ...setHtmlPlugin,
        // // 添加全局变量
        // new webpack.ProvidePlugin({
        //     _: 'lodash',
        // }),
    ]
}
