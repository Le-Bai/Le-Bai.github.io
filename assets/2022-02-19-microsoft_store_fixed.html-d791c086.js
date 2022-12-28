import{ad as o,G as a,H as n,E as e,S as t,N as r,ae as c,W as s}from"./framework-5174c324.js";const g={},l=c('<p>Microsoft store 页面无法打开，提示需要联网或刷新。多数教程将原因归咎于系统更新或 DNS 设置，但实际上是你的 <strong>IE 设置被更改了</strong>。</p><figure><img src="http://tc.seoipo.com/2022-05-05-16-48-55.png?imageMogr2/thumbnail/!40p" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>特别是国内的网银用户，<strong>每次登录建行，U 盾都会修改 Internet 选项</strong>，从而导致 TLS 版本过低无法连接应用商店。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ol><li><p>选择「开始菜单」&gt;「搜索栏」，搜索「Internet 选项」。</p><figure><img src="http://tc.seoipo.com/2022-05-05-17-01-23.png?imageMogr2/thumbnail/!50p" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Internet 属性中点击「高级」。</p><figure><img src="http://tc.seoipo.com/2022-05-05-17-01-48.png?imageMogr2/thumbnail/!50p" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>勾选「使用 TLS 1.2」和「使用 TLS 1.3」。</p><figure><img src="http://tc.seoipo.com/2022-05-05-17-02-01.png?imageMogr2/thumbnail/!50p" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>网银用户会重复出现该问题，重新执行上方步骤勾选 TLS 即可。</p>',6),p={href:"https://answers.microsoft.com/zh-hans/windows/forum/all/microsoft/43acd62e-a11e-449c-9fa4-50931ad38565",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"解决流程-gif",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决流程-gif","aria-hidden":"true"},"#"),t(" 解决流程 GIF")],-1),d=e("figure",null,[e("img",{src:"http://tc.seoipo.com/IE_SSL_Setting_win11.webp",alt:"win11-ie 高级设置.gif",tabindex:"0",loading:"lazy"}),e("figcaption",null,"win11-ie 高级设置.gif")],-1);function h(m,_){const i=s("ExternalLinkIcon");return a(),n("div",null,[l,e("p",null,[t("如果你依然无法访问，则尝试重置网络连接、DNS、缓存、应用商店设置，操作参考 "),e("a",p,[t("Microsoft Store 打不开，代码：0x80131500"),r(i)]),t("。")]),f,d])}const x=o(g,[["render",h],["__file","2022-02-19-microsoft_store_fixed.html.vue"]]);export{x as default};