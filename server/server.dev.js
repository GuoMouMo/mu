const Koa = require('koa');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const user = require('koa-route');
const path = require('path');
const { getHtmlConfig } = require('../webpack/configuration');
const config = require('../webpack/webpack.dev.js');
const port = process.env.PORT || Number(process.env.PORT) || 8080;
const app = new Koa();
const compiler = webpack(config);
const devMiddleware = async () => {
    const middleware = await koaWebpack({
        config,
        compiler,
        devMiddleware: {
            publicPath: config.output.publicPath,
        },
    });
    app.use(middleware);
    app.use(user.get('*', (ctx) => {
        const Htmlpath = ctx.path.split('/')[1];
        if (Htmlpath && getHtmlConfig[Htmlpath]) {
            const filename = path.resolve(config.output.path, getHtmlConfig[Htmlpath].filename);
            ctx.response.type = 'html'
            ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
        } else {
            ctx.response.body = '404';
        }
    }));
}

devMiddleware();

app.listen(port, function() {
    console.log('server in ' + port);
});