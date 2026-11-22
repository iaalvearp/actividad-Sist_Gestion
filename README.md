# Guayas IA Consultores

Sitio estático de una consultora de inteligencia artificial para pymes de Guayaquil. Es una migración fiel de la versión original generada con v0: se conservan el HTML, las clases CSS y los textos, sin rediseño.

## Stack

- **Astro 7** (`output: 'static'`) — Todo el sitio se prerenderiza; no hay JS de framework en cliente.
- **TypeScript** con `astro/tsconfigs/strict` y el alias `@/*` → `./src/*`.
- **CSS propio** con variables `color-mix()`: hojas de estilo planas, sin dependencias de UI.
- **@lucide/astro**: iconos SVG generados en build, sin peso en el navegador.
- **Astro Content Layer**: los artículos del blog son archivos Markdown con esquema Zod.
- **pnpm** como gestor de paquetes.

Los tres componentes interactivos (cabecera/menú, rejilla de fondo y formulario de contacto) usan `<script>` vanilla dentro de `.astro`. El formulario es demostrativo: valida en el navegador y muestra una confirmación, sin enviar nada a un servidor.

## Comandos

```sh
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo
pnpm build     # generar el sitio en dist/
pnpm preview   # previsualizar el build
```

## Cambiar la paleta

Edita **solo las tres variables base** en `src/styles/tokens.css`: `--brand-primary` (azul marino), `--brand-secondary` (marfil) y `--brand-accent` (dorado). Sus valores actuales están en la cabecera de ese archivo.

Todos los tokens semánticos (`--color-bg`, `--color-text`, `--color-accent-strong`, etc.) se derivan de esas tres líneas con `color-mix()`; no hace falta tocar `src/styles/global.css`. También se documentó una variante con marrón oscuro, marfil cálido y dorado brillante; ambas paletas cumplen los cinco pares de contraste verificados (≥ 4.5:1).

## Agregar un artículo

Crea un archivo `.md` en `src/content/blog/` (el nombre del archivo es el slug, p. ej. `mi-articulo.md`) con este frontmatter:

```yaml
---
title: "Título del artículo"
description: "Bajada o resumen que aparece en el listado y en el meta description"
category: "Procesos"
date: "12 de noviembre de 2026"
author: "Equipo Guayas IA"
readTime: "4 min de lectura"
---
```

Escribe los párrafos como Markdown debajo del frontmatter. Astro genera automáticamente la ruta `/blog/mi-articulo`, el listado y los metadatos de la página.
