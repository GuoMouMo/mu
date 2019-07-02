const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const Router = require('koa-router');
const render = require('koa-ejs');
const createServer = require('../assets/build/main');

const app = new Koa();
const router = new Router();
const port = Number(process.env.PORT) || 8080;
const assets = path.resolve(__dirname, '..', 'assets');

app.use(static(assets));

router.get(['/main', '/main/*'], async (ctx, next) => {
  await createServer(ctx);
});
app.use(router.routes());

app.listen(port, () => {
  console.log('listren in port ', port);
});