const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { entry, setHtmlPlugin, browserslist } = require('./configuration');
module.exports = {
    entry: path.resolve(__dirname, '..', 'server/render.js'),
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
                            'lodash'
                        ]
                    },
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
                                require('autoprefixer')({
                                    browsers: browserslist,
                                }),
                            ],
                        },
                    },
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    }
}
