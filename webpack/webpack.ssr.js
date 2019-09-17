const path = require('path');
const nodeExternals = require('webpack-node-externals');
// css拆分为单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entry, setHtmlPlugin, browserslist } = require('./configuration');
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
    resolve: {
        modules: [
            path.resolve(__dirname, '..', 'src'),
            'node_modules',
            path.resolve(__dirname, '..', 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.scss']
    },
    externals: ['@loadable/component', nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@loadable/babel-plugin',
                            'lodash'
                        ]
                    },
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')(),
                            ],
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        }),
    ]
}
