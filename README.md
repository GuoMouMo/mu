基于node v8.11 以上

## 运行项目

本地调试：
```bash
npm i
npm run dev
```

生产发布：
```bash
npm run build、
npm run start
```

ssr：
```bash
npm run build、
npm run build:ssr、
npm run start:server
```

## 模板说明

> 模板基于webpack4，用于移动端单页面应用开发。
> 模板设置了polyfill，core，postcss－loader用来保证ES6和CSS3在低端机型上的兼容性。
> 模板使用redux作为状态管理工具，如果你喜欢响应式可以尝试引入MobX来替代redux。
> 模板只使用了最基础的koa中间件扩展来保证程序可以正常运行，可以根据项目需要来自行配置。

##模版特点

- 使用mini-css-extract-plugin拆分css文件
- 使用BundleAnalyzerPlugin插件压缩js代码
- 使用LoadablePlugin插件拆分js代码
- 分本地和线上环境，根据环境的特点配置了各自的服务文件。本地环境设置了热更新等必要插件。线上环境注重代码的简介，服务的稳定。
- 设置了ssr，当需要SEO时使用。

##入口配置
配置webpack/configuration.js
```js
const entry = {
    main: ['./src/page/index.js'],
};
```

##最后

mu是一个非常轻量的脚手架，只引入了最需要的几个包。
麻雀虽小，但五脏俱全。代码压缩，代码拆分，按需加载，css分包，redux，react-router这些脚手架应该有的功能都是有的。
最主要mu的配置非常简单，而且用到的插件都是当下最新的配置，因为webpack4的特点，很多必要配置都成了默认了，所以显得脚手架非常小。
