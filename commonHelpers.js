import{f as y,i as h}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector("#datetime-picker");let u,l;function a(r){return String(r).padStart(2,"0")}const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){let o=new Date;u=r[0],u<=o?(h.show({message:"Please select date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}};y(d,p);function S(r){const t=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),m=Math.floor(r%864e5%36e5/6e4),f=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:m,seconds:f}}function i(){const o=u-new Date;if(o<=0){clearInterval(l),d.disabled=!1,document.querySelector("[data-start]").disabled=!0,document.querySelector("[data-days]").textContent="00",document.querySelector("[data-hours]").textContent="00",document.querySelector("[data-minutes]").textContent="00",document.querySelector("[data-seconds]").textContent="00";return}const n=S(o);document.querySelector("[data-days]").textContent=n.days,document.querySelector("[data-hours]").textContent=a(n.hours),document.querySelector("[data-minutes]").textContent=a(n.minutes),document.querySelector("[data-seconds]").textContent=a(n.seconds)}document.querySelector("[data-start]").addEventListener("click",function(){d.disabled=!0,document.querySelector("[data-start]").disabled=!0,i(),l=setInterval(i,1e3)});
//# sourceMappingURL=commonHelpers.js.map