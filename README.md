# Registro de Clientes — Angular

Práctica Calificada N.° 3 · Herramientas de Desarrollo  
Aplicación Angular con un formulario reactivo de registro de cliente, pruebas automáticas e integración y entrega continua con GitHub Actions.

## Escenario de negocio

**Registro de cliente.** El formulario está disponible en la ruta `/registro`, que es también la pantalla principal de la aplicación.

### Campos y validaciones

| Campo | Reglas |
| --- | --- |
| Nombre completo | Obligatorio, mínimo 3 caracteres |
| DNI | Obligatorio, exactamente 8 dígitos |
| Correo electrónico | Obligatorio, formato de correo válido |
| Teléfono | Obligatorio, 9 dígitos que inicia con 9 |
| Edad | Obligatoria, entre 18 y 120 |
| Términos y condiciones | Debe estar aceptado |

Si algún dato es inválido, el botón de envío permanece deshabilitado y se muestran los mensajes de error.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Puesta en marcha local

```bash
npm install
npm start
```

Abre <http://localhost:4200/registro> en el navegador.

## Comandos útiles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo |
| `npm test` | Ejecuta las pruebas automáticas |
| `npm run build` | Genera la versión compilada en `dist/registro-clientes` |

## Integración y entrega continua

El workflow `.github/workflows/ci.yml` ejecuta la instalación, las pruebas y el build:

- Los Pull Requests hacia `main` ejecutan CI y no despliegan.
- Un push directo o merge a `main` primero completa CI y luego despliega con GitHub Pages.
- El despliegue publica únicamente `dist/registro-clientes/browser`, que contiene la aplicación compilada.
- El archivo `404.html` se genera a partir de `index.html` para permitir la recarga directa de `/registro`.

## Estructura principal

```text
src/app/
├── app.ts / app.html          Componente raíz con el router-outlet
├── app.routes.ts              Definición de rutas (/registro)
└── registro-cliente/          Componente del formulario reactivo
```
