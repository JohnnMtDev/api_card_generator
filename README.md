# 🛸 Rick & Morty Characters Gallery

Aplicación web desarrollada en **JavaScript Vanilla** que consume la **Rick and Morty API** para mostrar personajes en formato de tarjetas, con **modo oscuro/claro** y **paginación personalizada**.

Proyecto creado con el objetivo de practicar **consumo de APIs**, **manipulación del DOM**, **gestión de estado** y **UI moderna**, sin usar frameworks ni librerías externas.

---

## ✨ Características

- 🔗 Consumo de API REST (Rick and Morty API)
- 🧩 Renderizado dinámico de tarjetas
- 🌗 Modo Dark / Light con botón toggle
- 🔢 Paginación personalizada con botones tipo *pill*
- 📱 Diseño responsive (desktop, tablet y mobile)
- ♿ Mejoras de accesibilidad (`aria-current`, reduced motion)
- 🎨 UI moderna con blur, sombras y transiciones suaves

---

## 🧠 Qué se practica en este proyecto

- Uso de `fetch()` y manejo de promesas
- Manipulación del DOM con JavaScript puro
- Gestión de estado (datos cargados, página actual)
- Renderizado dinámico y reutilizable
- Paginación sin librerías
- Variables CSS (`:root`)
- Dark mode mediante `classList.toggle()`

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3**
  - CSS Variables
  - Grid Layout
  - Media Queries
- **JavaScript (Vanilla)**
- **Rick and Morty API**

---

## 📦 Estructura del proyecto

├── index.html
├── styles.css
└── script.js


---

## 🚀 Funcionamiento

1. Al cargar la aplicación se realiza una petición a la Rick and Morty API.
2. Los personajes se almacenan en memoria.
3. Se renderizan **6 tarjetas por página**.
4. La paginación se genera dinámicamente según el total de personajes.
5. El usuario puede:
   - Cambiar de página
   - Alternar entre modo oscuro y claro

---


