// ==========================================================================
// NEURO IA S.A.S. — Presentación Interactiva (Desktop Carrusel + Móvil Barras)
// ==========================================================================

const WHATSAPP_NUMBER = "593987865420";
const NEUROAPI_URL = "https://neurochat.com.ec/neuroapi#cloud";

// Catálogo de las 9 Soluciones
const services = [
  {
    id: "chatbots", number: "01", category: "Inteligencia artificial", title: "Chatbots para tu negocio",
    short: "WhatsApp, Instagram, Messenger y Telegram con IA.", price: "$10 / mes", image: "assets/services/chatbots.webp",
    description: "Un asistente de inteligencia artificial que atiende, responde, vende y agenda por tu negocio 24/7, incluso fuera del horario comercial. Se configura a la medida de los procesos de tu empresa.",
    features: [
      "Atención automática 24/7 en varios canales",
      "Entrenamiento con documentos, catálogos y listas de precios",
      "Consultas, cotizaciones, ventas y captura de clientes",
      "Pedidos y reservas directamente desde la conversación",
      "Escalamiento automático a un asesor humano cuando sea necesario"
    ],
    note: "La configuración se adapta al giro, tono y procesos de cada negocio. El plan indicado es de $10 mensuales."
  },
  {
    id: "delivery", number: "02", category: "Aplicación móvil", title: "App de delivery multinegocios",
    short: "Una sola app para varios comercios y repartidores.", price: "$100 + $30 / mes", image: "assets/services/delivery.webp",
    description: "Una plataforma completa de delivery que reúne varios comercios en una misma aplicación. Los clientes exploran locales, hacen pedidos y siguen su entrega en vivo, mientras comercios y repartidores gestionan su operación.",
    features: [
      "Disponible en Google Play Store para clientes y repartidores",
      "Registro de clientes, comercios y flota de repartidores",
      "Catálogo, carrito interactivo y confirmación de pedidos",
      "Seguimiento GPS del pedido y chat en tiempo real",
      "Paneles web independientes para comercios y administración",
      "Control de inventario, ventas, comisiones y estadísticas"
    ],
    note: "Inversión indicada: $100 de pago único por implementación y $30 mensuales por operación de la plataforma."
  },
  {
    id: "restaurant", number: "03", category: "Restaurantes", title: "App para tu restaurante",
    short: "Tu marca, tus sucursales y delivery integrado.", price: "A medida", image: "assets/services/restaurant.webp",
    description: "Una aplicación móvil personalizada para que tu restaurante opere bajo su propia marca sin pagar comisiones por venta a terceros. Administra sucursales, productos y pedidos desde un entorno propio.",
    features: [
      "Aplicación personalizada con logotipo, colores y marca propia",
      "Administración centralizada de una o varias sucursales",
      "Menú digital con categorías, modificadores, fotos y precios",
      "Carrito, confirmación de pedidos y entregas a domicilio",
      "Panel de cocina y despacho para gestionar comandas",
      "Diseño escalable preparado para crecer con tu negocio"
    ],
    note: "No es un marketplace compartido: la experiencia es exclusiva de tu restaurante. La cotización se define según tus sucursales y necesidades."
  },
  {
    id: "appointments", number: "04", category: "Reservas y agenda", title: "Sistema de citas y reservas",
    short: "Para barberías, clínicas, spas y centros estéticos.", price: "$10", image: "assets/services/appointments.webp",
    description: "Organiza agendas, horarios y reservas de servicios sin depender de chats dispersos. Tus clientes eligen el profesional, día y hora disponible en un flujo intuitivo que evita cancelaciones y cruces.",
    features: [
      "Agenda por servicio, profesional asignado o sucursal",
      "Calendario con disponibilidad en tiempo real por día y hora",
      "Registro, confirmación y control de citas",
      "Reprogramación y cancelación automática",
      "Prevención de cruces y reservas duplicadas",
      "Ideal para barberías, estética, salud, consultorios y academias"
    ],
    note: "Precio base indicado: $10. La modalidad y alcance final se confirman según el flujo de tu negocio."
  },
  {
    id: "crm", number: "05", category: "WhatsApp para empresas", title: "CRM y mensajes masivos",
    short: "Campañas oficiales, multi-número y auditoría.", price: "$10 / mes · 5 líneas", image: "assets/services/crm.webp",
    description: "Centraliza tus conversaciones de WhatsApp y ejecuta campañas de difusión desde un solo panel administrativo. Importa contactos de Excel, usa plantillas oficiales de Meta y audita entregas en vivo.",
    features: [
      "Bandeja unificada para atender varias líneas de WhatsApp a la vez",
      "Campañas masivas desde archivos Excel o CSV",
      "Plantillas oficiales de Meta aprobadas con variables dinámicas",
      "Envío de imágenes, catálogos en PDF y videos",
      "Auditoría en tiempo real: enviados, entregados, leídos y fallidos",
      "Reportes de rendimiento exportables y reintento con un clic"
    ],
    note: "Precio publicado: $10 al mes por cada 5 números conectados. Las tarifas de conversación oficial las factura Meta directamente."
  },
  {
    id: "api", number: "06", category: "Para desarrolladores", title: "NeuroAPI para desarrolladores",
    short: "WhatsApp, OTP, Instagram y llamadas por API.", price: "$5 / mes", image: "assets/services/api.webp",
    description: "Una suite robusta de APIs para integrar capacidades de mensajería, autenticación OTP y llamadas en tus propios sistemas, aplicaciones web, CRM o backend corporativo sin complicaciones.",
    features: [
      "WhatsApp Cloud API oficial con webhooks en tiempo real",
      "Autenticación OTP por WhatsApp y SMS en segundos",
      "Instagram Messaging API para interacciones directas",
      "Llamadas de WhatsApp automatizadas y Voice API",
      "SDKs y ejemplos de integración listos para copiar y usar",
      "Documentación técnica pública accesible para desarrolladores"
    ],
    note: "Plan indicado: $5 mensuales. Incluye acceso a la suite API y OTP sin límite de cuota interna sujeta a políticas del proveedor.",
    direct: true
  },
  {
    id: "custom", number: "07", category: "Desarrollo a medida", title: "Software personalizado",
    short: "Creamos el sistema que tu operación exacta necesita.", price: "Cotización a medida", image: "assets/services/software.webp",
    description: "Analizamos tu flujo operativo, comprendemos los cuellos de botella de tu empresa y construimos una solución tecnológica exacta para ti. Tu negocio no tiene que forzarse a encajar en un software genérico.",
    features: [
      "Sistemas web y plataformas administrativas escalables",
      "Aplicaciones web progresivas y paneles internos",
      "Integraciones con pasarelas de pago, facturación electrónica y ERP",
      "Análisis profundo de requerimientos y arquitectura previa",
      "Diseño UX/UI, desarrollo ágil y acompañamiento continuo",
      "Revisión y optimización de propuestas o cotizaciones previas"
    ],
    note: "Nos adaptamos al presupuesto y alcance de tu proyecto. Si ya tienes una cotización de terceros, la revisamos para ofrecerte una opción superior."
  },
  {
    id: "games", number: "08", category: "Desarrollo creativo", title: "Desarrollo de videojuegos",
    short: "Convertimos ideas interactivas en productos digitales.", price: "Cotización a medida", image: "assets/services/games.webp",
    description: "Diseñamos y desarrollamos videojuegos y experiencias interactivas para plataformas móviles, web y PC. Acompañamos desde la conceptualización de mecánicas hasta la publicación y monetización.",
    features: [
      "Prototipos jugables y pruebas de concepto inmediatas",
      "Diseño de mecánicas de juego, progresión y UX lúdica",
      "Desarrollo de lógica, niveles, físicas y sistemas interactivos",
      "Arte 2D/3D, animaciones, efectos visuales y sonido envolvente",
      "Optimización para móviles Android/iOS y navegadores web"
    ],
    note: "El motor, plataformas y presupuesto se definen tras analizar la visión y alcance específico del proyecto."
  },
  {
    id: "partners", number: "09", category: "Alianzas comerciales", title: "Construyamos juntos un producto",
    short: "Nosotros aportamos la tecnología; tú la fuerza comercial.", price: "Alianzas", image: "assets/services/partnerships.webp",
    description: "Buscamos socios y líderes de negocios con visión de mercado o un producto digital detenido. En Neuro IA asumimos la arquitectura y desarrollo completo de software mientras tú lideras la estrategia comercial.",
    features: [
      "Neuro IA asume la arquitectura y desarrollo tecnológico completo",
      "El aliado comercial lidera ventas, clientes y penetración de mercado",
      "Rescate y aceleración de proyectos detenidos por falta de equipo técnico",
      "Definición transparente de responsabilidades y participación",
      "Despliegues ágiles orientados a generar ingresos rápidamente",
      "Acuerdos legales formales y colaboración a largo plazo"
    ],
    note: "No es una oferta financiera automática. Cada alianza se analiza minuciosamente según el potencial de mercado del producto."
  }
];

// Helper para URLs de WhatsApp
function whatsappUrl(serviceTitle = "las soluciones de Neuro IA") {
  const message = `Hola, Neuro IA. Estoy interesado en ${serviceTitle}. Me gustaría recibir más información y conocer una demostración.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Elementos del DOM
const carouselTrack = document.getElementById("carouselTrack");
const carouselViewport = document.getElementById("carouselViewport");
const mobileBarsList = document.getElementById("mobileBarsList");
const modal = document.getElementById("infoModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const prevBtn = document.getElementById("carouselPrevBtn");
const nextBtn = document.getElementById("carouselNextBtn");
const counterEl = document.getElementById("carouselCounter");
const headerWhatsApp = document.getElementById("headerWhatsApp");
const canvasGuide = document.getElementById("canvasHandGuide");
const handCanvas = document.getElementById("handCanvas");
const guideText = document.getElementById("guideText");
const guideClose = document.getElementById("guideClose");
const guideDismissPill = document.getElementById("guideDismissPill");
const showGuideBtn = document.getElementById("showGuideBtn");

let lastFocused = null;

// ==========================================================================
// 1. RENDERIZADO: Carrusel PC y Acordeón Móvil
// ==========================================================================

function buildCardHTML(service, index) {
  const isAccent = service.id === 'partners';
  const mainAction = service.direct
    ? `<a class="btn btn-primary" href="${NEUROAPI_URL}" target="_blank" rel="noopener">Abrir NeuroAPI ↗</a>`
    : `<button class="btn btn-ghost" type="button" data-info="${service.id}">Más información</button>`;

  return `
    <article class="carousel-card${isAccent ? ' is-accent' : ''}" data-id="${service.id}" data-index="${index}" aria-labelledby="card-title-${service.id}-${index}">
      <div class="card-thumb">
        <img src="${service.image}" alt="Solución: ${service.title}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="card-kicker">${service.number} · ${service.category}</span>
          <span class="card-price">${service.price}</span>
        </div>
        <h2 class="card-title" id="card-title-${service.id}-${index}">${service.title}</h2>
        <p class="card-description">${service.short}</p>
        <div class="card-actions">
          ${mainAction}
          <a class="btn btn-primary" href="${whatsappUrl(service.title)}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp sobre ${service.title}">WhatsApp ↗</a>
        </div>
      </div>
    </article>
  `;
}

function buildMobileBarHTML(service, index) {
  const isAccent = service.id === 'partners';
  const mainAction = service.direct
    ? `<a class="btn btn-primary" href="${NEUROAPI_URL}" target="_blank" rel="noopener">Abrir NeuroAPI ↗</a>`
    : `<button class="btn btn-ghost" type="button" data-info="${service.id}">Más información</button>`;

  return `
    <div class="service-bar${isAccent ? ' is-accent' : ''}" data-id="${service.id}" id="bar-${service.id}">
      <button type="button" class="bar-header" aria-expanded="false" aria-controls="bar-body-${service.id}">
        <div class="bar-header-left">
          <span class="bar-number">${service.number}</span>
          <h2 class="bar-title">${service.title}</h2>
        </div>
        <div class="bar-header-right">
          <span class="bar-price-pill">${service.price}</span>
          <div class="bar-chevron" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </div>
        </div>
      </button>
      <div class="bar-body" id="bar-body-${service.id}">
        <div class="bar-content">
          <div class="bar-inner">
            <div class="bar-image-box">
              <img src="${service.image}" alt="Vista de ${service.title}" loading="lazy">
            </div>
            <div class="bar-kicker-tag">${service.number} · ${service.category}</div>
            <p class="bar-full-desc">${service.description}</p>
            <div class="bar-actions">
              ${mainAction}
              <a class="btn btn-primary" href="${whatsappUrl(service.title)}" target="_blank" rel="noopener">Consultar por WhatsApp ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContent() {
  // Renderizar 3 sets para el carrusel infinito de Desktop (Set A, Set B [activo], Set C)
  const tripleServices = [...services, ...services, ...services];
  carouselTrack.innerHTML = tripleServices.map((item, idx) => buildCardHTML(item, idx % services.length)).join("");

  // Renderizar barras verticales para Móvil
  mobileBarsList.innerHTML = services.map((item, idx) => buildMobileBarHTML(item, idx)).join("");
}

// ==========================================================================
// 2. MODAL (Detalle completo con lista de características)
// ==========================================================================

function openModal(id) {
  const service = services.find(item => item.id === id);
  if (!service) return;
  lastFocused = document.activeElement;

  const featureList = service.features.map(item => `<li>${item}</li>`).join("");
  const directButton = service.direct
    ? `<a class="btn btn-ghost" href="${NEUROAPI_URL}" target="_blank" rel="noopener">Ver documentación de NeuroAPI ↗</a>`
    : "";

  modalContent.innerHTML = `
    <p class="modal-eyebrow">${service.number} · ${service.category}</p>
    <h2 id="modalTitle">${service.title}</h2>
    <p class="modal-description" id="modalDescription">${service.description}</p>
    <div class="modal-price">${service.price}</div>
    <ul class="modal-list">${featureList}</ul>
    <div class="modal-note">${service.note}</div>
    <div class="modal-actions">
      <a class="btn btn-primary" href="${whatsappUrl(service.title)}" target="_blank" rel="noopener">Solicitar información por WhatsApp ↗</a>
      ${directButton}
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// Event delegation para abrir modal tanto desde carrusel como desde barras
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-info]");
  if (trigger) {
    e.preventDefault();
    openModal(trigger.dataset.info);
    dismissGuide();
  }
});

// ==========================================================================
// 3. MOTOR DEL CARRUSEL INFINITO (Para PC / Desktop)
// ==========================================================================

let cardStride = 400; // card width + gap
let singleSetWidth = cardStride * services.length;
let currentX = 0;
let targetX = 0;
let isDragging = false;
let startPointerX = 0;
let startCurrentX = 0;
let dragDistance = 0;
let velocity = 0;
let lastPointerX = 0;
let lastPointerTime = 0;
let animationFrameId = null;

function recalculateDimensions() {
  const firstCard = carouselTrack.querySelector(".carousel-card");
  if (!firstCard) return;
  const cardRect = firstCard.getBoundingClientRect();
  const gap = parseFloat(getComputedStyle(carouselTrack).gap) || 22;
  cardStride = cardRect.width + gap;
  singleSetWidth = cardStride * services.length;

  // Centrar en el conjunto central (Set B)
  if (currentX === 0) {
    currentX = -singleSetWidth;
    targetX = currentX;
    applyTransform(currentX);
  }
}

function applyTransform(x) {
  carouselTrack.style.transform = `translate3d(${x}px, 0, 0)`;
  updateCounter();
}

function updateCounter() {
  if (!counterEl || singleSetWidth <= 0) return;
  // Calcular índice del item actualmente visible al frente
  const normalizedX = ((-currentX % singleSetWidth) + singleSetWidth) % singleSetWidth;
  const activeIndex = Math.round(normalizedX / cardStride) % services.length;
  const numStr = String(activeIndex + 1).padStart(2, "0");
  counterEl.textContent = `${numStr} / 09`;
}

// Bucle de animación continuo para inercia y movimiento suave
function animateCarousel() {
  if (!isDragging) {
    // Fricción suave hacia targetX
    const diff = targetX - currentX;
    if (Math.abs(diff) > 0.4) {
      currentX += diff * 0.12;
    } else {
      currentX = targetX;
    }

    // Wrap infinito transparente: mantenerse en la franja del segundo set
    if (currentX <= -2 * singleSetWidth) {
      currentX += singleSetWidth;
      targetX += singleSetWidth;
    } else if (currentX >= -singleSetWidth / 2) {
      currentX -= singleSetWidth;
      targetX -= singleSetWidth;
    }

    applyTransform(currentX);
  }

  animationFrameId = requestAnimationFrame(animateCarousel);
}

// Eventos de Pointer para arrastre infinito (Mouse y Touch)
function onPointerDown(e) {
  if (e.target.closest("button, a")) return; // Permitir clics en botones
  isDragging = true;
  carouselViewport.classList.add("is-dragging");
  startPointerX = e.clientX;
  startCurrentX = currentX;
  targetX = currentX;
  dragDistance = 0;
  velocity = 0;
  lastPointerX = e.clientX;
  lastPointerTime = performance.now();
  dismissGuide();
}

function onPointerMove(e) {
  if (!isDragging) return;
  const now = performance.now();
  const deltaX = e.clientX - startPointerX;
  dragDistance = Math.abs(deltaX);

  const dt = Math.max(1, now - lastPointerTime);
  velocity = (e.clientX - lastPointerX) / dt;
  lastPointerX = e.clientX;
  lastPointerTime = now;

  currentX = startCurrentX + deltaX;

  // Wrap continuo durante el arrastre para que nunca se agote
  if (currentX <= -2 * singleSetWidth) {
    currentX += singleSetWidth;
    startCurrentX += singleSetWidth;
  } else if (currentX >= -singleSetWidth / 2) {
    currentX -= singleSetWidth;
    startCurrentX -= singleSetWidth;
  }

  targetX = currentX;
  applyTransform(currentX);
}

function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  carouselViewport.classList.remove("is-dragging");

  // Inercia suave según la velocidad
  const inertia = velocity * 180;
  targetX = currentX + inertia;

  // Ajustar al múltiplo de cardStride más cercano (snap elegante)
  const remainder = targetX % cardStride;
  targetX = targetX - remainder;
}

carouselViewport.addEventListener("pointerdown", onPointerDown);
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", onPointerUp);
window.addEventListener("pointercancel", onPointerUp);

// Evitar que el clic en botones se dispare si se estaba arrastrando
carouselTrack.addEventListener("click", (e) => {
  if (dragDistance > 6) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);

// Soporte para rueda horizontal / trackpad en PC
carouselViewport.addEventListener("wheel", (e) => {
  const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (Math.abs(delta) > 4) {
    targetX -= delta * 1.2;
    dismissGuide();
  }
}, { passive: true });

// Flechas Prev / Next
function slidePrev() {
  targetX += cardStride;
  dismissGuide();
}

function slideNext() {
  targetX -= cardStride;
  dismissGuide();
}

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

// Soporte de teclas izquierda y derecha
window.addEventListener("keydown", (e) => {
  if (document.activeElement.tagName === "INPUT" || modal.classList.contains("is-open")) return;
  if (e.key === "ArrowLeft") slidePrev();
  if (e.key === "ArrowRight") slideNext();
});

// ==========================================================================
// 4. ACORDEÓN DE BARRAS VERTICALES PARA MÓVIL
// ==========================================================================

mobileBarsList.addEventListener("click", (e) => {
  const headerBtn = e.target.closest(".bar-header");
  if (!headerBtn) return;

  const bar = headerBtn.closest(".service-bar");
  const isOpen = bar.classList.contains("is-open");

  // Cerrar otras barras para mantener la pantalla ordenada (modo acordeón)
  mobileBarsList.querySelectorAll(".service-bar.is-open").forEach((item) => {
    if (item !== bar) {
      item.classList.remove("is-open");
      const btn = item.querySelector(".bar-header");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  });

  // Alternar la barra actual
  if (isOpen) {
    bar.classList.remove("is-open");
    headerBtn.setAttribute("aria-expanded", "false");
  } else {
    bar.classList.add("is-open");
    headerBtn.setAttribute("aria-expanded", "true");
    // Scroll suave para asegurar visibilidad
    setTimeout(() => {
      bar.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 150);
  }

  dismissGuide();
});

// ==========================================================================
// 5. GUÍA INTERACTIVA: MANO EN CANVAS (HTML5 Canvas 2D)
// ==========================================================================

let guideAnimId = null;
let guideStartTime = performance.now();
let isGuideActive = true;

function isMobileView() {
  return window.innerWidth <= 768;
}

function updateGuideText() {
  if (isMobileView()) {
    guideText.textContent = "Toca cualquier barra para desplegar su contenido";
  } else {
    guideText.textContent = "Arrastra hacia los lados para explorar todo";
  }
}

// Función de dibujo procedural de la mano y el gesto
function drawHandGesture(ctx, width, height, time) {
  ctx.clearRect(0, 0, width, height);

  const mobile = isMobileView();
  const loopDuration = mobile ? 2200 : 2600; // ms por ciclo
  const progress = (time % loopDuration) / loopDuration;

  ctx.save();

  if (!mobile) {
    // --- MODO ESCRITORIO: GESTO DE DESLIZAMIENTO HORIZONTAL (SWIPE ←) ---
    // Trayectoria: comienza en la derecha, baja dedo, arrastra hacia la izquierda, levanta dedo, resetea
    const startX = 145;
    const endX = 45;
    const y = 68;

    let handX = startX;
    let handY = y;
    let touchAlpha = 0;
    let trailProgress = 0;

    if (progress < 0.15) {
      // Acercamiento inicial
      const p = progress / 0.15;
      handX = startX;
      handY = y + 10 * (1 - p);
    } else if (progress < 0.65) {
      // Deslizamiento hacia la izquierda con contacto
      const p = (progress - 0.15) / 0.5;
      const ease = 0.5 - Math.cos(p * Math.PI) / 2; // Ease in-out
      handX = startX - (startX - endX) * ease;
      touchAlpha = Math.sin(p * Math.PI);
      trailProgress = ease;
    } else if (progress < 0.85) {
      // Levantamiento al final del recorrido
      const p = (progress - 0.65) / 0.2;
      handX = endX;
      handY = y - 10 * p;
    } else {
      // Retorno aéreo al inicio
      const p = (progress - 0.85) / 0.15;
      handX = endX + (startX - endX) * p;
      handY = y - 10 * (1 - p);
    }

    // Dibujar estela de movimiento y flecha guía detrás de la mano
    if (trailProgress > 0.05) {
      ctx.beginPath();
      ctx.moveTo(startX - 20, y - 25);
      ctx.lineTo(startX - 20 - (startX - endX) * trailProgress, y - 25);
      ctx.strokeStyle = "rgba(23, 25, 28, 0.4)";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 5]);
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.setLineDash([]);

      // Cabeza de flecha señalando a la izquierda
      const arrowX = startX - 20 - (startX - endX) * trailProgress;
      ctx.beginPath();
      ctx.moveTo(arrowX + 8, y - 31);
      ctx.lineTo(arrowX, y - 25);
      ctx.lineTo(arrowX + 8, y - 19);
      ctx.strokeStyle = "rgba(23, 25, 28, 0.7)";
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    // Onda de pulso en el punto de contacto
    if (touchAlpha > 0.05) {
      ctx.beginPath();
      ctx.arc(handX - 22, handY - 25, 12 * touchAlpha, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(23, 25, 28, ${0.4 * touchAlpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Dibujar la mano anatómica estilizada
    renderHandPath(ctx, handX, handY, 0.95);

  } else {
    // --- MODO MÓVIL: GESTO DE TAP VERTICAL (PULSAR PARA DESPLEGAR) ---
    const centerX = 110;
    const baseY = 80;

    let handY = baseY;
    let rippleRadius = 0;
    let rippleAlpha = 0;
    let isPressing = false;

    if (progress < 0.25) {
      // Dedo bajando hacia la barra
      const p = progress / 0.25;
      handY = baseY - 15 * (1 - p);
    } else if (progress < 0.5) {
      // Tap (presiona sobre la barra)
      isPressing = true;
      handY = baseY + 2;
      const p = (progress - 0.25) / 0.25;
      rippleRadius = p * 24;
      rippleAlpha = 1 - p;
    } else if (progress < 0.75) {
      // Dedo subiendo tras el tap
      const p = (progress - 0.5) / 0.25;
      handY = baseY - 15 * p;
    } else {
      // Pausa arriba antes de repetir
      handY = baseY - 15;
    }

    // Círculo de onda expansiva al hacer tap
    if (rippleAlpha > 0.02) {
      ctx.beginPath();
      ctx.arc(centerX - 20, baseY - 24, rippleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(23, 25, 28, ${rippleAlpha * 0.6})`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Mini flecha indicando que se desplegará hacia abajo
      ctx.beginPath();
      ctx.moveTo(centerX - 20, baseY - 8);
      ctx.lineTo(centerX - 20, baseY + 6);
      ctx.lineTo(centerX - 24, baseY + 2);
      ctx.moveTo(centerX - 20, baseY + 6);
      ctx.lineTo(centerX - 16, baseY + 2);
      ctx.strokeStyle = `rgba(23, 25, 28, ${rippleAlpha * 0.8})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Dibujar la mano estilizada
    renderHandPath(ctx, centerX, handY, isPressing ? 0.92 : 0.96);
  }

  ctx.restore();
}

// Trazo procedural detallado de la mano con dedo índice extendido
function renderHandPath(ctx, x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Silueta de la mano (vista desde arriba/espalda con dedo índice apuntando)
  ctx.beginPath();
  // Muñeca derecha
  ctx.moveTo(32, 42);
  // Borde lateral del meñique
  ctx.bezierCurveTo(42, 28, 44, 12, 42, 0);
  // Pliegue del meñique
  ctx.bezierCurveTo(42, -7, 36, -11, 28, -7);
  // Pliegue del anular
  ctx.bezierCurveTo(32, -13, 28, -18, 18, -15);
  // Pliegue del dedo medio
  ctx.bezierCurveTo(22, -21, 16, -26, 7, -22);

  // Dedo índice extendido (apunta hacia arriba/izquierda)
  ctx.bezierCurveTo(5, -34, -1, -48, -8, -60);
  // Punta redondeada del dedo índice
  ctx.arc(-14, -63, 7, 0.2, Math.PI + 0.2, true);
  // Borde interior del índice hacia el pulgar
  ctx.bezierCurveTo(-22, -48, -18, -28, -12, -14);

  // Pulgar
  ctx.bezierCurveTo(-23, -16, -32, -8, -36, 4);
  // Punta del pulgar
  ctx.arc(-32, 11, 6, -Math.PI * 0.7, Math.PI * 0.4, false);
  // Base del pulgar hacia la muñeca
  ctx.bezierCurveTo(-24, 18, -14, 20, -7, 26);
  // Muñeca izquierda
  ctx.bezierCurveTo(-4, 34, 0, 40, 5, 42);
  ctx.closePath();

  // Relleno sólido claro con sombra sutil
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(23, 25, 28, 0.16)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  ctx.fill();

  // Borde nítido color tinta
  ctx.shadowColor = "transparent";
  ctx.strokeStyle = "#17191c";
  ctx.lineWidth = 2.8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();

  // Detalles anatómicos interiores: pliegues de nudillos y pulgar
  // Pliegue nudillo del índice
  ctx.beginPath();
  ctx.moveTo(-11, -36);
  ctx.lineTo(-17, -33);
  ctx.stroke();

  // Pliegue central de los dedos plegados
  ctx.beginPath();
  ctx.moveTo(7, -8);
  ctx.bezierCurveTo(15, -3, 24, -2, 30, -3);
  ctx.stroke();

  // Pliegue del pulgar
  ctx.beginPath();
  ctx.moveTo(-15, 6);
  ctx.bezierCurveTo(-19, 11, -21, 16, -19, 21);
  ctx.stroke();

  // Punto de toque en la yema del índice
  ctx.beginPath();
  ctx.arc(-14, -63, 3, 0, Math.PI * 2);
  ctx.fillStyle = "#17191c";
  ctx.fill();

  ctx.restore();
}

function runGuideAnimation(timestamp) {
  if (!isGuideActive) return;
  const ctx = handCanvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = handCanvas.width / dpr;
  const height = handCanvas.height / dpr;

  drawHandGesture(ctx, width, height, timestamp - guideStartTime);
  guideAnimId = requestAnimationFrame(runGuideAnimation);
}

function initGuideCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const isMobile = isMobileView();
  const cssWidth = isMobile ? 220 : 190;
  const cssHeight = isMobile ? 130 : 105;
  handCanvas.width = cssWidth * dpr;
  handCanvas.height = cssHeight * dpr;
  const ctx = handCanvas.getContext("2d");
  ctx.scale(dpr, dpr);
  updateGuideText();

  if (!guideAnimId) {
    guideStartTime = performance.now();
    isGuideActive = true;
    guideAnimId = requestAnimationFrame(runGuideAnimation);
  }
}

function dismissGuide() {
  if (!isGuideActive) return;
  isGuideActive = false;
  if (canvasGuide) {
    canvasGuide.classList.add("is-hidden");
  }
  if (guideAnimId) {
    cancelAnimationFrame(guideAnimId);
    guideAnimId = null;
  }
}

function showGuide() {
  if (canvasGuide) {
    canvasGuide.classList.remove("is-hidden");
  }
  isGuideActive = true;
  guideStartTime = performance.now();
  updateGuideText();
  if (!guideAnimId) {
    guideAnimId = requestAnimationFrame(runGuideAnimation);
  }
}

guideClose.addEventListener("click", dismissGuide);
guideDismissPill.addEventListener("click", dismissGuide);
showGuideBtn.addEventListener("click", () => {
  showGuide();
});

// Despedir guía al hacer scroll en móvil
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) dismissGuide();
}, { passive: true });

// ==========================================================================
// 6. INICIALIZACIÓN GENERAL Y LISTENERS DE VENTANA
// ==========================================================================

function init() {
  headerWhatsApp.href = whatsappUrl("conocer las soluciones de Neuro IA");
  renderContent();
  recalculateDimensions();
  animateCarousel();
  initGuideCanvas();
}

// Recalcular dimensiones al cambiar el tamaño de ventana
window.addEventListener("resize", () => {
  recalculateDimensions();
  initGuideCanvas();
});

// Arrancar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
