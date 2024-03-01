import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// vite.config.js
export default {
  // config options
  base: '/pure-paginator/',
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'pure-paginator.js',
      name: 'pure-paginator',
    }
  }
}
