import './styles.css';

/**
 * Crea el HTML de una insignia.
 * @param {string} text - Texto de la insignia.
 * @param {string} [color='blue'] - Color de fondo (blue, green, red).
 * @returns {string} HTML de la insignia.
 */
export function createBadge(text, color = 'blue') {
  return `<span class="mi-badge mi-badge--${color}">${text}</span>`;
}

/**
 * Crea el HTML de una tarjeta de perfil.
 * @param {object} options
 * @param {string} options.name - Nombre de la persona.
 * @param {string} options.role - Rol o puesto.
 * @param {string} [options.badge] - Texto opcional para una insignia.
 * @returns {string} HTML de la tarjeta.
 */
export function createProfileCard({ name, role, badge }) {
  const badgeHtml = badge ? createBadge(badge, "red") : '';
  return `
    <div class="mi-card">
      <h2 class="mi-card__name">${name}</h2>
      <p class="mi-card__role">${role}</p>
      ${badgeHtml}
    </div>
  `;
}