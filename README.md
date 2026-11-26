# 🧱 CodeBricks

> Librería ligera de componentes UI en Vanilla JS, sin dependencias.

[![npm version](https://img.shields.io/npm/v/@1oscar089/codebricks.svg)](https://www.npmjs.com/package/@1oscar089/codebricks)
[![npm downloads](https://img.shields.io/npm/dm/@1oscar089/codebricks.svg)](https://www.npmjs.com/package/@1oscar089/codebricks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## ✨ Características

- ⚡ **Ultraligera**: menos de 1 KB minificada.
- 🧩 **Vanilla JS**: sin dependencias ni frameworks.
- 🎨 **CSS incluido**: estilos listos para usar.
- 📦 **Múltiples formatos**: ESM, UMD, script directo y CDN.
- 🔒 **Sin configuración**: instala y usa.

## 📦 Instalación

### npm

```bash
npm install @1oscar089/codebricks
```

### CDN (jsDelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@1oscar089/codebricks@1.0.0/dist/style.css">
<script src="https://cdn.jsdelivr.net/npm/@1oscar089/codebricks@1.0.0"></script>
```

### CDN (unpkg)

```html
<link rel="stylesheet" href="https://unpkg.com/@1oscar089/codebricks@1.0.0/dist/style.css">
<script src="https://unpkg.com/@1oscar089/codebricks@1.0.0"></script>
```

## 🚀 Uso

### Con bundler (Vite, Webpack, etc.)

```javascript
import { createProfileCard, createBadge } from '@1oscar089/codebricks';
import '@1oscar089/codebricks/style.css';

document.getElementById('app').innerHTML = createProfileCard({
  name: 'Ana García',
  role: 'Frontend Developer',
  badge: 'Pro',
});
```

### Con `<script>` (navegador)

```html
<script src="https://cdn.jsdelivr.net/npm/@1oscar089/codebricks@1.0.0"></script>
<script>
  document.body.innerHTML = CodeBricks.createProfileCard({
    name: 'Ana García',
    role: 'Frontend Developer',
    badge: 'Pro',
  });
</script>
```

## 📚 API

### `createBadge(text, color?)`

Crea una insignia (badge) con texto y color.

| Parámetro | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `text` | `string` | — | Texto de la insignia. |
| `color` | `'blue' \| 'green' \| 'red'` | `'blue'` | Color de fondo. |

**Devuelve**: `string` con el HTML de la insignia.

```javascript
CodeBricks.createBadge('Nuevo', 'green');
// → <span class="mi-badge mi-badge--green">Nuevo</span>
```

### `createProfileCard({ name, role, badge? })`

Crea el HTML de una tarjeta de perfil.

| Parámetro | Tipo | Descripción |
|---|---|---|
| `name` | `string` | Nombre de la persona. |
| `role` | `string` | Rol o puesto. |
| `badge` | `string` (opcional) | Texto de la insignia. |

**Devuelve**: `string` con el HTML de la tarjeta.

## 🧪 Desarrollo local

```bash
git clone https://github.com/1Oscar089/CodeBricks.git
cd CodeBricks
npm install
npm run dev      # abre la demo en http://localhost:5173
npm run build    # genera dist/
```

## 📄 Licencia

[MIT](./LICENSE) © 2026 1Oscar089