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
