const path = require('path');
const nodeExternals = require('webpack-node-externals');
// css拆分为单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { commonConfig } = require('./configuration');
commonConfig.module.rules[0].use.options.presets[0] = '@babel/preset-env';
commonConfig.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
module.exports = {
    entry: {
        main: path.resolve(__dirname, '..', 'server/render.js')
    },
    target: 'node',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'assets/build'),
        filename: '[name].js',
        libraryExport: 'default',
        libraryTarget: 'commonjs2',
    },
    externals: ['@loadable/component', nodeExternals()],
    ...commonConfig,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        }),
    ]
}
