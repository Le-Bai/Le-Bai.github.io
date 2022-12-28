import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([


  {
    text: "🚀 牙体牙髓病学",
    icon: "",
    prefix: "/pulp/",
    link: "",
    collapsible: true,
    children: [
      "README.md",
     // {
     //   text: "牙体牙髓病学",
      //  icon: "emmet",
     //   collapsible: true,
      //  children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
     // },   
    ],
  },
  {
    text: "🧰 口腔颌面外科学",
    icon: "",
    prefix: "/surg/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🌐 页面开发",
    icon: "",
    prefix: "/web/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏗️ 网站部署",
    icon: "",
    prefix: "/deploy/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 Linux 服务",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🪟 系统问题",
    icon: "",
    prefix: "/windows/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🛖 生活",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  },
]);
