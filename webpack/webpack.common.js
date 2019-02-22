const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
    home: './src/page/home/home.js',
    other: './src/page/other/other.js',
};
const setHtmlPlugin = function(obj) {
    const list = [];
    Object.keys(obj).forEach(key => {
        list.push(
            new HtmlWebpackPlugin({
                inject: 'head',
                filename: `view/${key}.html`,
                chunks: [key],
                template: './src/view/template.html',
                title: key
            })
        );
    });
    return list;
}

module.exports = {
    entry,
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '..', 'assets'),
        publicPath: './',
    },
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
                            // {
                            //     "targets": {
                            //         "chrome": "58",
                            //         "ie": "11"
                            //     }
                            // }
                        ],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        ...setHtmlPlugin(entry),
        // 添加全局变量
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
    ]
}
