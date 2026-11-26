function s(a, e = "blue") {
  return `<span class="mi-badge mi-badge--${e}">${a}</span>`;
}
function i({ name: a, role: e, badge: r }) {
  const c = r ? s(r) : "";
  return `
    <div class="mi-card">
      <h2 class="mi-card__name">${a}</h2>
      <p class="mi-card__role">${e}</p>
      ${c}
    </div>
  `;
}
export {
  s as createBadge,
  i as createProfileCard
};
