import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([


  {
    text: "🚀 牙体牙髓病学",
    icon: "",
    prefix: "/pulp/",
    link: "",
    collapsible: true,
    children: ["structure"
     // {
     //   text: "子分支",
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
    text: "🌐 牙周病学",
    icon: "",
    prefix: "/Peri/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏗️ 修复学",
    icon: "",
    prefix: "/Pros/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🐋 正畸学",
    icon: "",
    prefix: "/orth/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🪟 儿童口腔医学",
    icon: "",
    prefix: "/child/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🛖 口腔预防医学",
    icon: "",
    prefix: "/prev/",
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
