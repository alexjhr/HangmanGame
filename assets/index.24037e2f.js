import{j as x,r as d,R as N,a as j}from"./vendor.b9ab8e09.js";const O=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};O();const L="_container_1tv5p_1",M="_stickman_1tv5p_13";const o=x.exports.jsx,m=x.exports.jsxs;function C({mistakes:n}=props){const s=`./game${n}.png`;return o("div",{className:L,children:o("img",{src:s,className:M,alt:"Game stickman base"})})}const S="_keyboard_1su7a_1",K="_button_1su7a_13";const R="abcdefghijklmnopqrstuvwxyz".split("");function T({text:n,onPressKey:s,oneUse:r=!1}=props){const a=R.map(e=>{const t=r?n.indexOf(e)!==-1:!1;return o("button",{className:K,disabled:t,onClick:()=>s(e),children:e},e)});return o("div",{className:S,children:a})}const $="_gameContainer_1adrb_29",D="_gameTitle_1adrb_39";var g={gameContainer:$,gameTitle:D};const G="_container_uw2xp_1",P="_letter_uw2xp_13";var h={container:G,letter:P};function E({keyword:n,input:s}=props){const r=n.split("").map(a=>{const e=s.indexOf(a)!==-1,t=e?a:"";return o("div",{className:h.letter,"data-decodified":t,"data-actived":e,children:"_"})});return o("section",{class:h.container,children:r})}const W="_container_1wrol_1",q="_dialog_1wrol_23",z="_dialog_title_1wrol_35",A="_dialog_description_1wrol_51",I="_dialog_buttons_1wrol_63",U="_dialog_button_1wrol_63";var c={container:W,dialog:q,dialog_title:z,dialog_description:A,dialog_buttons:I,dialog_button:U};function b({title:n,children:s,buttons:r}=props){return o("div",{className:c.container,children:m("div",{className:c.dialog,children:[o("h1",{className:c.dialog_title,children:n}),o("p",{className:c.dialog_description,children:s}),o("div",{className:c.dialog_buttons,children:r.map(a=>o("button",{className:c.dialog_button,onClick:a[1],children:a[0]}))})]})})}const _=["perro","gato","murcielago","futbol","venezuela"];function B(){const[n,s]=d.exports.useState(_[Math.floor(Math.random()*_.length)]),[r,a]=d.exports.useState(0),[e,t]=d.exports.useState(""),[l,p]=d.exports.useState(!1),y=u=>{n.indexOf(u)==-1&&a(i=>i+1),t(i=>i+u)},f=()=>{t(""),a(0),p(!1),s(_[Math.floor(Math.random()*_.length)])};d.exports.useEffect(()=>{if(e=="")return;const u=n.split("").map(i=>e.indexOf(i)!==-1?i:"_").join("");n==u&&p(!0)},[e]);const v=r>=6,w=[["Reiniciar",f]],k=[["Nuevo juego",f]];return m("div",{className:g.gameContainer,children:[o("h1",{className:g.gameTitle,children:"The Hanged Game"}),o(C,{mistakes:r}),o(E,{keyword:n,input:e}),o(T,{oneUse:!0,text:e,onPressKey:y}),v&&m(b,{title:"Perdiste!",buttons:w,children:['La palabra era "',n,'"']}),l&&o(b,{title:"Ganaste!",buttons:k,children:"\xA1Descubriste la palabra, felicidades! "})]})}N.render(o(j.StrictMode,{children:o(B,{})}),document.getElementById("root"));
