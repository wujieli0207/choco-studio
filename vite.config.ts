import { UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import";
import PurgeIcons from "vite-plugin-purge-icons";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "/#": pathResolve("types"),
};

export default (): UserConfigExport => {
  return {
    plugins: [
      vue(),
      createStyleImportPlugin({
        resolves: [VantResolve()],
      }),
      PurgeIcons(),
    ],
    // 别名设置
    resolve: {
      alias,
    },
    // 服务设置
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 3000,
      open: true, // 自动打开浏览器
      cors: true, // 允许跨域
      strictPort: true, // 端口被占用直接退出
      // 接口代理
      proxy: {
        "/api": {
          target: "temp",
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace("/api/", "/"),
        },
      },
    },
  };
};
