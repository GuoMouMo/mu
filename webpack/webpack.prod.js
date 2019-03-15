const merge = require('webpack-merge');
const webpack = require('webpack');
// css拆分为单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* 资源打包分析 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
common.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        })
    ]
});