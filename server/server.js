const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const Router = require('koa-router');
const render = require('koa-ejs');

const app = new Koa();
const router = new Router();
const port = Number(process.env.PORT) || 8080;
const assets = path.resolve(__dirname, '..', 'assets');

app.use(static(assets));

render(app, {
  root: path.join(assets, 'view'),
  layout: false,
  viewExt: 'html',
  cache: true,
});

router.get(['/program', '/program/*'], async (ctx, next) => {
  await ctx.render('program');
});
app.use(router.routes());

app.listen(port, () => {
  console.log('listren in port ', port);
});