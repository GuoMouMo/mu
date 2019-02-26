const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
    home: './src/page/home/index.js',
    other: './src/page/other/other.js',
};
const setHtmlPlugin = function(obj) {
    const list = [];
    Object.keys(obj).forEach(key => {
        list.push(
            new HtmlWebpackPlugin({
                inject: 'body',
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
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.css']
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
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: [
                                            'last 2 versions',
                                            'Firefox ESR',
                                            '> 1%',
                                            'ie >= 9',
                                            'iOS >= 8',
                                            'Android >= 4'
                                        ]
                                    },
                                    useBuiltIns: 'usage',
                                    modules: false
                                }
                            ],
                            [
                                '@babel/preset-react',
                                // {
                                //     development: process.env.BABEL_ENV === 'development',
                                // }
                            ]
                        ],
                        plugins: [
                            // [
                            //     '@babel/plugin-transform-runtime',
                            //     {
                            //         'corejs': 2,
                            //         'helpers': true,
                            //         'regenerator': true,
                            //         'useESModules': false
                            //     }
                            // ],
                            ['lodash']
                        ]
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
        // runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,   // 匹配就打进vendors
            //         priority: -10
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true
            //     }
            // }
        }
    },
    plugins: [
        ...setHtmlPlugin(entry),
        // // 添加全局变量
        // new webpack.ProvidePlugin({
        //     _: 'lodash',
        // }),
    ]
}
