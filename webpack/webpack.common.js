const path = require('path');
const { entry, setHtmlPlugin, browserslist } = require('./configuration');

module.exports = {
    entry,
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '..', 'assets'),
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '..', 'src'),
            'node_modules',
            path.resolve(__dirname, '..', 'node_modules'),
        ],
        extensions: ['.js', '.jsx', '.scss']
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
                                        browsers: browserslist
                                    },
                                    // 使用usage时可以不使用@babel/runtime
                                    useBuiltIns: 'usage',
                                    corejs: {
                                        version: 3,
                                        proposals: true,
                                    },
                                    modules: false
                                }
                            ],
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            '@loadable/babel-plugin',
                            'lodash'
                        ]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
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
