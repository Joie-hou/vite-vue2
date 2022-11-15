# Vue 2 + Vite
- 本实例使用**yarn**创建
```shell
yarn create vite
```
- 安装支持vue2的vite插件
```shell
​yarn add vite-plugin-vue2 -D​
```
- 创建配置文件`​​vite.config.js​​`
```js
const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
    plugins: [createVuePlugin( /*options*/ )],
}
```
- 安装vue2.x
`yarn add vue@2.x`
