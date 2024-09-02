import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "导读", icon: "discover", link: "/intro/" },
  { text: "仓库", icon: "discover", link: "/docs/" },
  { text: "笔记", icon: "discover", link: "/notes/" },
  { text: "面试资料", icon: "discover", link: "/materials/" },
  // {
  //   text: "指南",
  //   icon: "creative",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "creative",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "more", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "config",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "more", link: "" }],
  //     },
  //   ],
  // },
  {
    text: "问题反馈",
    icon: "note",
    link: "https://github.com/zeanzai/java-tips/issues",
  },
]);
