# Práctica 06: Sketches de una aplicación móvil con dos roles

**Aplicación seleccionada:** Netflix.  
**Entrega:** Galería interactiva con 24 diseños de pantallas móviles.

## Enlaces del proyecto

- 🎬 **[PANTALLAS DE NETFLIX](https://brisgregorio.github.io/Practicas_Integradora_230362/Practica06/)**
- [Abrir la galería local](index.html)
- [Ver los estilos CSS](styles.css)
- [Consultar el código JavaScript](app.js)

> **Nota:** El enlace público requiere que GitHub Pages esté habilitado y que la carpeta `Practica06` se publique correctamente. Si todavía no está configurado, puedes abrir `index.html` con Live Server.

## Objetivo

Diseñar y presentar sketches individuales de las pantallas de una aplicación móvil inspirada visualmente en Netflix. La galería permite revisar los 24 diseños uno por uno dentro de marcos de teléfono y abrir cada pantalla en una vista ampliada.

Es un prototipo académico, no una aplicación oficial de Netflix. No implementa autenticación real, base de datos ni reproducción de video. Los títulos y las acciones administrativas son contenido de demostración.

## Roles

- **Usuario / suscriptor:** acceso, registro, recuperación de contraseña, selección de perfil, catálogo, categorías, búsqueda, resultados, detalle, reproductor simulado, Mi lista, cuenta y cierre de sesión.
- **Administrador de contenido:** rol creado exclusivamente para este ejercicio. Recorre el acceso administrativo, dashboard, catálogo, alta y edición de títulos, confirmación de publicación y confirmación de cambios. No representa una función pública de la aplicación móvil de Netflix.

La selección de acceso presenta las alternativas de usuario y administrador para explorar ambos recorridos académicos.

## Las 24 pantallas

| N.º | ID | Sketch | Rol |
|---:|:---:|---|---|
| 01 | S01 | Splash Screen | Usuario |
| 02 | S02 | Bienvenida cinematográfica | Usuario |
| 03 | S03 | Selección de acceso | Ambos |
| 04 | S04 | Inicio de sesión | Usuario |
| 05 | S05 | Registro | Usuario |
| 06 | S06 | Recuperar contraseña | Usuario |
| 07 | S07 | Confirmación de recuperación | Usuario |
| 08 | S08 | Selección de perfil | Usuario |
| 09 | S09 | Inicio / catálogo con hero y carruseles | Usuario |
| 10 | S10 | Categorías con filtros y carteles | Usuario |
| 11 | S11 | Búsqueda y sugerencias | Usuario |
| 12 | S12 | Resultados de búsqueda | Usuario |
| 13 | S13 | Detalles de una serie | Usuario |
| 14 | S14 | Reproductor simulado | Usuario |
| 15 | S15 | Mi lista | Usuario |
| 16 | S16 | Cuenta y configuración | Usuario |
| 17 | S17 | Confirmación de cierre de sesión | Usuario |
| 18 | S18 | Inicio de sesión administrativo | Administrador académico |
| 19 | S19 | Dashboard administrativo | Administrador académico |
| 20 | S20 | Catálogo administrativo | Administrador académico |
| 21 | S21 | Formulario para agregar contenido | Administrador académico |
| 22 | S22 | Formulario para editar contenido | Administrador académico |
| 23 | S23 | Confirmación de publicación | Administrador académico |
| 24 | S24 | Confirmación de cambios guardados | Administrador académico |

## Galería e interacción

La galería es el contenido principal de [index.html](index.html). Presenta cada sketch dentro de su propio teléfono, con número, título, rol y descripción.

Los filtros permiten mostrar todas las pantallas, las del usuario o las administrativas. La opción **Ampliar sketch** abre la vista completa. Los botones anterior, siguiente y cerrar, además de las teclas Escape y las flechas del teclado, permiten recorrer las pantallas.

Los botones de los sketches abren pantallas relacionadas. También se simulan acciones como mostrar contraseña, elegir categoría, guardar o quitar un título de Mi lista, alternar pausa y filtrar el catálogo administrativo.

## Tecnologías y recursos

- **HTML, CSS y JavaScript nativos:** no requiere framework, compilación ni instalación de dependencias.
- [app.js](app.js): contiene los datos de las 24 pantallas, plantillas visuales, tarjetas, filtros y navegación simulada.
- [styles.css](styles.css): define los marcos móviles, la galería, los componentes y la vista ampliada adaptable.
- **Imágenes:** los carteles utilizan imágenes públicas del CDN de TMDB y necesitan conexión a Internet. Si un cartel no carga, el sketch mantiene un respaldo de color con el título.

No se agregaron capturas de evidencia porque no se generaron archivos de captura. Las rutas a los recursos del proyecto son relativas para que funcionen al abrirlo o publicarlo en GitHub Pages.

## Ejecutar con Live Server

1. Abre la carpeta `Practica06/` en Visual Studio Code.
2. Abre `index.html` y selecciona **Open with Live Server**.
3. Desplázate por la galería, filtra por rol y selecciona **Ampliar sketch** para inspeccionar una pantalla.

También puedes abrir `index.html` directamente en un navegador moderno. Como alternativa, desde esta carpeta ejecuta:

```bash
python -m http.server 8000
```

Después visita [http://localhost:8000](http://localhost:8000).

## Publicación en GitHub Pages

Para compartir las pantallas mediante un enlace público:

1. Entra al repositorio de GitHub.
2. Abre **Settings → Pages**.
3. Selecciona la rama `main` y la carpeta raíz `/` como fuente de publicación.
4. Guarda los cambios y espera a que termine la publicación.
5. Abre el enlace público del proyecto y comprueba que carguen las 24 pantallas.

**Importante:** GitHub Pages publica archivos estáticos desde la carpeta configurada. Si publicas desde la raíz del repositorio, el enlace a `Practica06/` funcionará siempre que `Practica06/index.html` esté incluido en la rama `main`.

---

**Repositorio:** [Practicas_Integradora_230362](https://github.com/Brisgregorio/Practicas_Integradora_230362)

**Estudiante:** Brisa Nallely García Gregorio  
**Matrícula:** 230362  
**Grupo:** 10.º A — Ingeniería en Desarrollo y Gestión de Software
