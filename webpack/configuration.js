const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
    program: ['./src/page/index.js'],
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

exports.entry = entry;
exports.getHtmlConfig = getHtmlConfig();
exports.setHtmlPlugin = setHtmlPlugin();
