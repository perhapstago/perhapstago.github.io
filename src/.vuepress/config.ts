import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Summer.Snail",
    //   description: "Some records. One step at a time, pay tribute to the resolute you in every moment.",
    // },
    "/": {
      lang: "zh-CN",
      title: "夏日的瓜牛",
      description: "一些记录。一步一个脚印，致敬每个当下的坚定的你。",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ], 
});
