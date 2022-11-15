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

- 还需要安装`vue-template-compiler`否则项目无法运行
`yarn add vue-template-compiler`

[注意] vue 和 vue-template-compiler 版本需要对应，否则运行报错

# Eslint和Prettier 实现代码规范

**eslint**、**eslint-plugin-vue**：这两个依赖项目基本都有。

**prettier**、**eslint-plugin-prettier**、**eslint-config-prettier**、**vue-eslint-parser**

.eslintrc.js
```js
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    // parser: "babel-eslint",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:prettier/recommended"],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {},
};
```
.prettierrc.js
```js
module.exports = {
  // 1.一行代码的最大字符数，默认是80(printWidth: <int>)
  printWidth: 120,
  // 2.tab宽度为4空格(tabWidth: <int>)
  tabWidth: 2,
  // 3.是否使用tab来缩进，我们使用空格(useTabs: <bool>)
  useTabs: false,
  // 6.object对象中key值是否加引号（quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: "consistent",
  // 9.object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
  bracketSpacing: true,
  // 11.箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
  arrowParens: "always",
  // 18. vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
  vueIndentScriptAndStyle: false,
  // 19.    endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
  endOfLine: "lf",
};
```
项目中 .vscode目录下增加 settings.json文件
```js
{
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jspescrpt]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescrpt]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "files.eol": "\n",
    "stylelint.validate": [
        "vue",
        "scss",
        "css",
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "postfix.languages": [
        "javascript",
        "typescript",
        "javascriptreact",
        "typescriptreact",
        "vue"
    ],
    "typescript.tsdk": "node_modules/typescript/lib",
}
```
以及extensions.json文件
```js
{
  "recommendations": ["Vue.volar"]
}
```

# stylelint scss代码规范

package.json文件
```js
"devDependencies": {
    ...
    "stylelint": "^14.9.1",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recess-order": "^3.0.0",
    "stylelint-config-standard-scss": "^4.0.0",
    "stylelint-config-standard-vue": "^1.0.0",
    "stylelint-no-unsupported-browser-features": "^5.0.3",
    "postcss": "^8.4.16",
    "postcss-html": "^1.5.0",
    "postcss-pxtorem": "^6.0.0",
    "postcss-scss": "^4.0.4",
  }
```
项目根目录新增
.stylelintrc.json文件
```js
{
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-config-standard-vue/scss",
    "stylelint-config-prettier"
  ],
  "plugins": ["stylelint-no-unsupported-browser-features"],
  "rules": {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "ignorePartialSupport": true
      }
    ],
    "selector-class-pattern": "^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)|(van-[a-z0-9]*(_[a-z0-9]*)?)$"
  }
}
```
.stylelintignore文件
```js
# 忽略文件
node_modules
.idea
# 旧的不需打包的样式库
*.min.css
​
# 其他类型文件
*.js
*.jpg
*.woff
​
# 测试和打包目录
/test/
/dist/
```