// src/index.js
function e(e, t = "blue") {
	return `<span class="mi-badge mi-badge--${t}">${e}</span>`;
}
function t({ name: t, role: n, badge: r }) {
	return `
    <div class="mi-card">
      <h2 class="mi-card__name">${t}</h2>
      <p class="mi-card__role">${n}</p>
      ${r ? e(r) : ""}
    </div>
  `;
}
export { e as createBadge, t as createProfileCard };
