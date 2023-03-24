import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Apple",
    //   icon: "note",
    //   prefix: "Apple/",
    //   children: "structure",
    // },
    {
      text: "开发",
      icon: "note",
      prefix: "开发/",
      children: "structure",
    },
    {
      text: "随记",
      icon: "note",
      prefix: "随记/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
