# Rediseño landing + páginas legales — RecetIA

**Fecha:** 2026-07-16
**Repo:** `recetia-legal` (público, servido en `https://recetiapp.com` vía GitHub Pages + Jekyll)
**Estado:** diseño aprobado (verbal), pendiente de review escrito del spec.

## Objetivo

Reemplazar el tema Jekyll genérico (`jekyll-theme-cayman`, azul de GitHub) por una experiencia de marca "Digital Epicurean" de RecetIA:

1. **Landing de producto completa** en `/` (hero + características + galería de capturas + waitlist "avísame cuando salga" + footer).
2. **Páginas legales restiladas** (`privacy-policy`, `terms-of-service`, `account-deletion`) con la misma marca, contenido intacto.

## Enfoque técnico

**Mantener Jekyll** (GitHub Pages lo compila nativo, sin Actions) y reemplazar el tema por **layouts + CSS propios**:

- Quitar `theme: jekyll-theme-cayman` de `_config.yml`.
- `_layouts/default.html` → páginas legales (las `.md` ya declaran `layout: default`, no se tocan sus front-matter).
- `_layouts/landing.html` → landing (index).
- `assets/css/main.css` → design system + estilos de ambos layouts.
- `index.md` pasa a `layout: landing` y su cuerpo se reduce (el contenido rico vive en el layout; el `.md` solo lleva front-matter + textos configurables mínimos).

**Descartado:** HTML plano con `.nojekyll`. Rompería el flujo espejo `docs/legal/*.md` → `recetia-legal` (habría que mantener el texto legal a mano en HTML) y la ventaja de kramdown para los documentos largos.

## Design system (Digital Epicurean)

| Token | Valor |
|---|---|
| Verde primario | `#006e1c` |
| Verde oscuro (hero) | `#0a2614` → `#0d3318` → `#006e1c` (gradiente) |
| Naranja secundario | `#8b5000` |
| Fondo crema | `#fafaf5` |
| Texto | `#1a1c19` |
| Texto muted | `#747772` |
| Superficies | lowest `#ffffff`, low `#f1f1ec`, container `#d5e5cf`, high `#becab9` |
| Borde | suave `#becab9`, fuerte `#6f7a6b` |
| Tipografía títulos | Noto Serif (Google Fonts) |
| Tipografía cuerpo/UI | Manrope (Google Fonts) |
| Esquinas | 12-16px contenedores, pill en botones/tags |
| Sombras | whisper-soft cards, floating modales |

Coherente con el design system del AGENTS.md del proyecto y de la app (verde `#006e1c`, NotoSerif+Manrope). Soporte de dark mode **fuera de alcance** para v1 (la web es clara).

## Estructura de archivos (repo `recetia-legal`)

```
recetia-legal/
├── _config.yml            # editar: quitar theme, añadir exclude _design/
├── _layouts/
│   ├── landing.html       # NUEVO — landing completa
│   └── default.html       # NUEVO — layout legal (header/footer + columna lectura)
├── _includes/
│   ├── head.html          # NUEVO — meta, fuentes, favicon, OG tags
│   ├── header.html        # NUEVO — nav sticky (compartido)
│   └── footer.html        # NUEVO — footer (compartido)
├── assets/
│   ├── css/main.css       # NUEVO
│   ├── img/
│   │   ├── logo.png        # copiado de frontend/recetia_front/assets/logo.png
│   │   ├── favicon.png     # derivado del logo
│   │   └── screens/        # capturas reales (las aporta el usuario): home, ai, recipe, planner
│   └── ...
├── index.md               # layout: landing
├── privacy-policy.md       # intacto (solo se re-renderiza con nuevo layout)
├── terms-of-service.md     # intacto
├── account-deletion.md     # intacto
├── CNAME                   # intacto (recetiapp.com)
├── README.md
└── _design/                # specs (Jekyll lo ignora, no se publica)
```

## Landing — secciones

1. **Nav sticky** (`_includes/header.html`): logo + wordmark "RecetIA" · links (Características, Legal) · botón pill "Descargar" (ancla a CTA). Colapsa en móvil.
2. **Hero**: fondo gradiente verde. Columna izq: badge "Cocina inteligente, sabor auténtico", H1 Noto Serif grande, subtítulo, dos badges **"Próximamente"** (App Store / Google Play, estado deshabilitado, sin badges oficiales de marca pre-lanzamiento). Columna der: marco de móvil con captura de Home (slot).
3. **Características** (grid 2×2 o 4 cols): Generador IA · Planificador semanal · Lista de compra automática · Chat asistente IA. Cada card: icono (SVG inline), título Manrope-bold, descripción.
4. **Galería de capturas**: fila de 3-4 marcos de móvil con capturas reales (slots) sobre fondo crema, con leyendas.
5. **Waitlist "Avísame cuando salga"**: banda verde. Form de email → **Formspree** (endpoint placeholder `https://formspree.io/f/XXXXXXXX` a rellenar por el usuario). Fallback si no se configura: enlace `mailto:recetia.app@gmail.com?subject=Avísame cuando salga RecetIA`. Mensaje de éxito/errores accesible.
6. **Footer** (`_includes/footer.html`): logo, tagline, columna de links legales (Privacidad · Términos · Eliminar cuenta), contacto (emails), © 2026 RecetIA · Airam Linares Ossorio.

## Páginas legales — layout

- Reutilizan `header.html` + `footer.html`.
- **Columna de lectura** centrada (~720px máx), fondo crema, tarjeta blanca opcional.
- Tipografía: H1/H2 Noto Serif, cuerpo Manrope, interlineado ~1.7, tamaños legibles.
- Estilos para elementos markdown: h1-h4, listas, tablas, blockquote, `code`, enlaces (verde), `hr`.
- Barra superior fina con título del documento + "última actualización".
- (Opcional) índice de anclas para `privacy-policy` (14k) si cabe sin complicar; si no, se omite (YAGNI).
- **Contenido y URLs intactos.**

## Assets

- **Logo**: copiar `E:/Importante/RecetIA/frontend/recetia_front/assets/logo.png` → `assets/img/logo.png`. Favicon derivado.
- **Fuentes**: Google Fonts `Noto+Serif` (600,700) + `Manrope` (400,500,600,700) vía `<link>` en `head.html` con `preconnect`.
- **Capturas**: el usuario aporta 4 PNG (Home, Generador IA, Detalle receta, Planner), ratio ~9:19.5, ancho ≥1080px. Van en `assets/img/screens/`. Hasta entonces: placeholders (marco de móvil con pantalla de marca).
- **Badges tiendas**: componente CSS propio "Próximamente en App Store / Google Play" (gris, no clicable, con icono). Se sustituirán por badges oficiales al publicar.
- **Iconos características**: SVG inline (línea, estilo coherente).

## Preservación (crítico — no romper)

- URLs exactas: `/`, `/privacy-policy.html`, `/terms-of-service.html`, `/account-deletion.html`.
- Texto legal sin cambios (revisado legalmente).
- `CNAME` intacto (`recetiapp.com`).
- Flujo espejo `docs/legal/*.md` (repo RecetIA) → `recetia-legal` sigue válido (legales siguen siendo `.md`).

## Fuera de alcance (v1)

- Dark mode de la web.
- i18n / versión en inglés.
- Backend real de waitlist (se usa Formspree/mailto).
- Badges oficiales de tienda (hasta que la app esté publicada).
- Analytics / cookies banner (no hay tracking → no requerido).

## Despliegue

Trabajo en el clone local `E:/Importante/recetia-legal-tmp`. Al terminar: commit + push a `recetia-legal/main` → GitHub Pages reconstruye en ~60-90s. Verificar en `https://recetiapp.com/` y las 3 URLs legales (200 + estilo aplicado). No requiere cambios en el repo RecetIA (salvo, opcional, actualizar `docs/legal/README.md` si cambia el flujo — no cambia).

## Criterios de aceptación

1. `recetiapp.com/` muestra la landing de producto con marca Digital Epicurean (no cayman).
2. Las 3 páginas legales renderizan con el nuevo layout, contenido idéntico, URLs idénticas, 200 OK.
3. Responsive correcto en móvil (390px) y desktop.
4. Waitlist funcional (Formspree configurado o mailto fallback visible).
5. Sin errores de build Jekyll en GitHub Pages.
6. Placeholders de captura reemplazables por las imágenes reales del usuario sin tocar layout.
