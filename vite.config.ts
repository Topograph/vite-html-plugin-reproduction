import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from 'vite-plugin-html';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // using the plugin avoids secondary-page.html to be served
    // createHtmlPlugin({
    //   minify: false,
    //   inject: {
    //     data: {
    //       INJECT_TEST: 'Injected Text Lorem Ipsum',
    //     },
    //   },
    // }),
  ],
});
