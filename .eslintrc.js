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
