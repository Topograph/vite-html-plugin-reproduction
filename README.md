# Vite Plugin HTML Reproduction issue #37

Reproduction for  [this issue](https://github.com/vbenjs/vite-plugin-html/issues/37) to learn more.

## Steps to reproduce

1. run npm install
2. run npm run dev
3. you can see in the browser that you can switch between the pages index.html and secondary-page.html
4. uncomment lines 12-19 in vite.config.ts to enable vite-plugin-html (the injection isnt really used here)
5. you should now see in the browser, that you can not visit localhost:3000/secondary-page.html as the server now always serves the index.html