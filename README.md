# NEURO IA S.A.S. — Presentación Web Interactiva

Landing interactiva de presentación de soluciones digitales e inteligencia artificial, desarrollada en HTML5, CSS3 y JavaScript puro (Vanilla JS).

## Características Principales

- **Versión Escritorio (PC):**
  - **Carrusel Infinito:** Desplazamiento horizontal continuo con física de inercia y arrastre mediante ratón o trackpad.
  - **Zero-Scroll (100vh):** El diseño encaja perfectamente en una sola vista sin necesidad de desplazamiento vertical en cualquier resolución de escritorio.
  - **Controles de Navegación:** Botones de flechas en el encabezado con contador dinámico en tiempo real (`01 / 09`, `02 / 09`, etc.), teclas de dirección y rueda del mouse.
  - **Guía Interactiva con Mano en Canvas:** Animación procedimental en `<canvas>` que enseña el gesto de deslizamiento horizontal y se oculta automáticamente al interactuar.

- **Versión Móvil:**
  - **Barras Desplegables (Acordeón):** Vista vertical optimizada en formato de barras compactas que muestran el título y precio.
  - **Expansión al Dar Tap:** Al tocar una barra, se despliega fluidamente mostrando la imagen en gran formato, descripción detallada y botones de acción.
  - **Guía de Tap:** Animación en Canvas adaptada al gesto de toque (*tap*) con efecto de pulso concéntrico.

- **Detalles y Conversión:**
  - **Modal Interactivo:** Ventana modal accesible con lista de características, alcance de servicio y notas técnicas.
  - **Integración con WhatsApp:** Botones con enlaces preconfigurados que inician la conversación con el mensaje correspondiente a cada servicio.
  - **Acceso a NeuroAPI:** Integración directa con la suite de APIs para desarrolladores.
  - **Logotipo Oficial:** Emblema circular con circuitos neuronales y efecto neón azul.

## Cómo Visualizar

1. Abre `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
2. No requiere Node.js, dependencias externas ni compilación previa.

## Estructura del Proyecto

```text
├── assets/
│   ├── favicon.png
│   ├── logo-neuroia.png
│   ├── logo-full.png
│   └── services/
│       ├── api.webp
│       ├── appointments.webp
│       ├── chatbots.webp
│       ├── crm.webp
│       ├── delivery.webp
│       ├── games.webp
│       ├── partnerships.webp
│       ├── restaurant.webp
│       └── software.webp
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## Configuración

- **Número de WhatsApp:** Configurable en la constante `WHATSAPP_NUMBER` dentro de `script.js`.
- **Enlace de NeuroAPI:** Configurable en `NEUROAPI_URL` dentro de `script.js`.
- **Catálogo de Servicios:** Administrable desde el arreglo `services` en `script.js`.

---
© NEURO IA S.A.S. — Software que impulsa negocios.
