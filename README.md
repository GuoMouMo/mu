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
