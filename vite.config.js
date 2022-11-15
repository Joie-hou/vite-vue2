import { resolve } from "path";
const { createVuePlugin } = require('vite-plugin-vue2')

// https://vitejs.dev/config/
module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [createVuePlugin( /*options*/ )],
}
