if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/howler-40db763e.js",revision:null},{url:"assets/index-9f9bb641.css",revision:null},{url:"assets/index-d5f1069c.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"index.html",revision:"9a83dc3a690f2da8ae9c5911388ce4d4"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"8ae0a7a9fbfccf536c112ec5392f6342"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
