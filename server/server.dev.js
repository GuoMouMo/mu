const Koa = require('koa');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');
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
}

devMiddleware();

app.listen(port, function() {
    console.log('server in ' + port);
});