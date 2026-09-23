# Práctica 02: Boceto de Arquitectura con Archify

## Descripción

En esta práctica se realizó la instalación y configuración de Archify para trabajar con Codex CLI. Mediante un prompt en lenguaje natural se generó un diagrama arquitectónico interactivo en formato HTML.

El modelo representa la arquitectura inicial de una aplicación móvil y permite consultar sus componentes, responsabilidades, tecnologías y enlaces al código fuente disponible en el repositorio.

## Componentes representados

* Aplicación móvil desarrollada con Flutter.
* Autenticación mediante Keycloak.
* API REST desarrollada con FastAPI.
* Base de datos relacional PostgreSQL.
* Base de datos documental MongoDB.
* Servicio de mapas mediante `flutter_map` y OpenStreetMap.
* Contenedores administrados con Docker.
* Orquestación mediante Docker Compose.
* Control de versiones con Git y GitHub.
* Flujos principales de solicitudes y datos.
* Límites de confianza entre las capas del sistema.

## Modelo arquitectónico interactivo

[Consultar el diagrama arquitectónico interactivo](https://brisgregorio.github.io/Practicas_Integradora_230362/Practica02/architecture/initial-architecture.html)

## Evidencias
[📄 Evidencias](https://github.com/Brisgregorio/Practicas_Integradora_230362/blob/main/Practica02/EVIDENCIAS_Archify.pdf)

Al seleccionar un componente dentro del diagrama se muestra su tecnología, responsabilidad, ubicación y un enlace para consultar el archivo de código correspondiente.

## Prototipo de código

El repositorio incluye un prototipo educativo mínimo utilizado para relacionar los componentes del diagrama con archivos reales.

[Consultar el código del prototipo](./prototype/)

El prototipo contiene:

* Aplicación móvil Flutter.
* Servicios de autenticación y consumo de API.
* Pantalla de mapas.
* API REST con FastAPI.
* Configuración de Keycloak.
* Conexiones de ejemplo para PostgreSQL y MongoDB.
* Dockerfile.
* Archivo Docker Compose.
* Variables de entorno de ejemplo.

> Este código corresponde a un prototipo arquitectónico educativo y no representa una aplicación terminada ni una configuración lista para producción.

## Archivos generados por Archify

* [`initial-architecture.html`](./architecture/initial-architecture.html): diagrama arquitectónico interactivo.
* [`initial-architecture.json`](./architecture/initial-architecture.json): definición editable del modelo.
* [`initial-architecture.visual-check.html`](./architecture/initial-architecture.visual-check.html): comprobación visual interactiva.
* [`initial-architecture.visual-check.json`](./architecture/initial-architecture.visual-check.json): información de la comprobación visual.
* `initial-architecture.visual-check.1440x900.dark.png`: comprobación en resolución 1440 × 900 con tema oscuro.
* `initial-architecture.visual-check.1440x900.light.png`: comprobación en resolución 1440 × 900 con tema claro.
* `initial-architecture.visual-check.2048x1320.dark.png`: comprobación en resolución 2048 × 1320 con tema oscuro.
* `initial-architecture.visual-check.2048x1320.light.png`: comprobación en resolución 2048 × 1320 con tema claro.
* [`delivery-receipt.txt`](./architecture/delivery-receipt.txt): comprobante de generación y entrega producido por Archify.

## Flujo principal

1. El usuario interactúa con la aplicación móvil desarrollada en Flutter.
2. La aplicación solicita autenticación mediante Keycloak.
3. Keycloak valida la identidad y proporciona un token.
4. La aplicación envía solicitudes autenticadas a la API REST de FastAPI.
5. FastAPI procesa las solicitudes y se conecta con PostgreSQL o MongoDB.
6. La aplicación utiliza el servicio de mapas para representar ubicaciones.
7. Docker y Docker Compose proporcionan la infraestructura local del prototipo.
8. Git y GitHub administran y publican los archivos del proyecto.

## Navegación al código fuente

Los componentes del diagrama incluyen enlaces a los archivos correspondientes, entre ellos:

* [`mobile/lib/main.dart`](./prototype/mobile/lib/main.dart)
* [`mobile/lib/services/auth_service.dart`](./prototype/mobile/lib/services/auth_service.dart)
* [`mobile/lib/services/api_service.dart`](./prototype/mobile/lib/services/api_service.dart)
* [`mobile/lib/screens/map_screen.dart`](./prototype/mobile/lib/screens/map_screen.dart)
* [`backend/app/main.py`](./prototype/backend/app/main.py)
* [`backend/app/auth/keycloak.py`](./prototype/backend/app/auth/keycloak.py)
* [`backend/app/database/postgresql.py`](./prototype/backend/app/database/postgresql.py)
* [`backend/app/database/mongodb.py`](./prototype/backend/app/database/mongodb.py)
* [`backend/Dockerfile`](./prototype/backend/Dockerfile)
* [`docker-compose.yml`](./prototype/docker-compose.yml)
* [`keycloak/realm-export.json`](./prototype/keycloak/realm-export.json)

## Evidencias

[Consultar el documento de evidencias de la Práctica 02](./EVIDENCIAS%20Archify.pdf)

El documento contiene las evidencias de instalación, configuración, generación del modelo, validaciones, publicación en GitHub y habilitación de GitHub Pages.

## Tecnologías utilizadas

| Tecnología                  | Propósito                                                 |
| --------------------------- | --------------------------------------------------------- |
| Codex CLI                   | Interacción con inteligencia artificial desde la terminal |
| Archify                     | Generación del modelo arquitectónico interactivo          |
| Flutter                     | Aplicación móvil multiplataforma                          |
| Keycloak                    | Autenticación y gestión de identidad                      |
| FastAPI                     | Desarrollo de la API REST                                 |
| PostgreSQL                  | Almacenamiento de datos relacionales                      |
| MongoDB                     | Almacenamiento de documentos                              |
| flutter_map / OpenStreetMap | Visualización de mapas                                    |
| Docker                      | Creación de contenedores                                  |
| Docker Compose              | Orquestación del entorno local                            |
| Git                         | Control de versiones                                      |
| GitHub                      | Repositorio remoto                                        |
| GitHub Pages                | Publicación del diagrama interactivo                      |

## Estado

✅ Práctica concluida.
