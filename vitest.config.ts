import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest-setup.ts",
  },
});

// 所有的 test 都运行在 node 环境里面
// document.getElementById
// JavaScript
// Vanilla JS -> DOM API
