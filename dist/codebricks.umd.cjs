(function(e,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(e=typeof globalThis<"u"?globalThis:e||self,i(e.CodeBricks={}))})(this,(function(e){"use strict";function i(n,t="blue"){return`<span class="mi-badge mi-badge--${t}">${n}</span>`}function a({name:n,role:t,badge:d}){const r=d?i(d):"";return`
    <div class="mi-card">
      <h2 class="mi-card__name">${n}</h2>
      <p class="mi-card__role">${t}</p>
      ${r}
    </div>
  `}e.createBadge=i,e.createProfileCard=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
