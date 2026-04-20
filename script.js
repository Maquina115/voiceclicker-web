const translations = {
  es: {
    hero_title: "Controla tu PC con la voz",
    hero_sub: "Automatiza acciones, clics y teclado sin conexión.",
    cta_main: "Descargar ahora",
    hero_note: "Privado, rápido y sin nube",

    nav_features: "Funciones",
    nav_how: "Cómo funciona",
    nav_pricing: "Precio",

    how_title: "Cómo funciona",
    step1_title: "Define comandos",
    step1_desc: "Configura acciones personalizadas.",
    step2_title: "Habla",
    step2_desc: "Reconocimiento offline instantáneo.",
    step3_title: "Ejecuta",
    step3_desc: "Automatización inmediata.",

    features_title: "Características",
    feat1_title: "Offline",
    feat1_desc: "Sin internet, máxima privacidad.",
    feat2_title: "Automatización",
    feat2_desc: "Clics, teclado y flujos.",
    feat3_title: "Multi-idioma",
    feat3_desc: "Soporte global.",

    screens_title: "Capturas",
    screen1: "Pantalla principal",
    screen2: "Configuración",

    video_title: "Demo",

    faq_title: "FAQ",
    faq1_q: "¿Necesita internet?",
    faq1_a: "No, funciona offline.",
    faq2_q: "¿Es personalizable?",
    faq2_a: "Totalmente.",

    pricing_title: "Precio",
    pricing_desc: "Compra única, sin suscripciones.",
    cta_buy: "Comprar ahora"
  },

  en: {
    hero_title: "Control your PC with your voice",
    hero_sub: "Automate clicks, keyboard and workflows offline.",
    cta_main: "Download now",
    hero_note: "Private, fast and offline"
  }
  // añade resto idiomas igual
};

const langSwitcher = document.getElementById("lang-switcher");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

const savedLang = localStorage.getItem("lang") || "es";
langSwitcher.value = savedLang;
setLanguage(savedLang);

// scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
