(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports):typeof define==`function`&&define.amd?define([`exports`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.CodeBricks={}))})(this,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});function t(e,t=`blue`){return`<span class="mi-badge mi-badge--${t}">${e}</span>`}e.createBadge=t,e.createProfileCard=function({name:e,role:n,badge:r}){return`
    <div class="mi-card">
      <h2 class="mi-card__name">${e}</h2>
      <p class="mi-card__role">${n}</p>
      ${r?t(r):``}
    </div>
  `}});