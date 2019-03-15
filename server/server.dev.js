const Koa = require('koa');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
const Router = require('koa-router');
const path = require('path');
const { getHtmlConfig } = require('../webpack/configuration');
const config = require('../webpack/webpack.dev.js');
const port = Number(process.env.PORT) || 8080;
const app = new Koa();
const router = new Router();
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
    router.get('*', (ctx) => {
        const Htmlpath = ctx.path.split('/')[1];
        if (Htmlpath && getHtmlConfig[Htmlpath]) {
            const filename = path.resolve(config.output.path, getHtmlConfig[Htmlpath].filename);
            ctx.response.type = 'html'
            ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
        } else {
            ctx.response.body = '404';
        }
    });
    app.use(router.routes());
}

devMiddleware();

app.listen(port, function() {
    console.log('server in ' + port);
});