import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: '@/pages/index/index',layout: false },
    { path: "/docs", component: "@/pages/docs" ,layout: false},
    { path: "/product", component: "@/pages/product" ,layout: false},
    // { path: "/*", component: "@/pages/404/404" ,layout: false},
  ],
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {},  
  alias: {
    '@': '/src',
    'mock': '/mock',
  },
});
