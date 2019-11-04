const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const entry = {
    main: ['./src/page/index.js'],
};

const getHtmlConfig = function() {
    const keys = Object.keys(entry);
    const page = {};
    for (let a = 0; a < keys.length; a++) {
        page[keys[a]] = {
            inject: 'body',
            filename: `view/${keys[a]}.html`,
            chunks: [keys[a]],
            template: './src/view/template.html',
            title: keys[a]
        }
    }
    return page;
}

const setHtmlPlugin = function() {
    const list = [];
    const pages = getHtmlConfig(entry);
    Object.values(pages).forEach(value => {
        list.push(new HtmlWebpackPlugin(value));
    });
    return list;
}

const browserslist = [
    'last 2 versions',
    'Firefox ESR',
    '> 1%',
    'ie >= 9',
    'iOS >= 8',
    'Android >= 4'
];

const commonConfig = {
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
                            '@babel/plugin-proposal-class-properties',
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
    }
}

exports.commonConfig = commonConfig;
exports.entry = entry;
exports.getHtmlConfig = getHtmlConfig();
exports.setHtmlPlugin = setHtmlPlugin();
