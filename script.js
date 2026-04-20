/**
 * Voice Clicker Pro — Landing Page Script
 * Architecture: vanilla JS, modular, no external dependencies
 * Features: i18n (8 languages), scroll reveal, FAQ accordion,
 *           language persistence, header scroll state, mobile nav
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   1. TRANSLATIONS
   ═══════════════════════════════════════════════════════════════ */
const translations = {
  es: {
    meta_title:          'Voice Clicker Pro — Control por Voz para Windows | Automatización con Comandos de Voz',
    meta_description:    'Voice Clicker Pro automatiza clics de ratón, teclas y texto con tu voz en Windows. Control remoto por Wi-Fi, 8 idiomas, sin cloud. Disponible en Microsoft Store.',
    meta_og_title:       'Voice Clicker Pro — Automatización por Voz para Windows',
    meta_og_description: 'Controla tu PC con la voz. Automatiza clics, atajos de teclado y texto con comandos personalizados. Control remoto desde el móvil incluido.',
    meta_twitter_title:  'Voice Clicker Pro — Control por Voz para Windows',
    meta_twitter_description: 'Automatiza tu PC con comandos de voz. Sin cloud, sin suscripción. Descárgalo en Microsoft Store.',
    nav_how:             'Cómo funciona',
    nav_features:        'Características',
    nav_screenshots:     'Video Explicativo',
    nav_pricing:         'Precio',
    nav_faq:             'FAQ',
    hero_badge:          '✦ Para Windows 10 & 11',
    hero_title_1:        'Controla tu PC',
    hero_title_2:        'con tu voz.',
    hero_subtitle:       'Voice Clicker Pro automatiza clics, atajos de teclado y texto con comandos de voz personalizados. Sin cloud, sin suscripción. 100% offline.',
    hero_cta_buy:        'Comprar en Microsoft Store',
    hero_cta_learn:      'Ver cómo funciona',
    hero_trust:          '🔒 Sin conexión a internet · 🌍 8 idiomas · 🖥️ Windows 10/11',
    how_kicker:          'Flujo de uso',
    how_title:           'Tres pasos. Empieza en minutos.',
    how_desc:            'Sin configuración compleja, sin drivers extra. Instala, define tus acciones y habla.',
    how_step1_title:     'Instala la app',
    how_step1_desc:      'Descarga Voice Clicker Pro desde Microsoft Store. Se instala en segundos, sin dependencias externas ni permisos de administrador.',
    how_step2_title:     'Define tus acciones',
    how_step2_desc:      'Crea acciones con triggers de voz personalizados. Cada acción puede encadenar clics, teclas, atajos y texto en el orden que quieras.',
    how_step3_title:     'Habla y automatiza',
    how_step3_desc:      'Activa el micrófono y di el trigger. Voice Clicker Pro ejecuta la acción al instante, sin necesidad de internet ni de mantener el foco en la app.',
    feat_kicker:         'Funcionalidades',
    feat_title:          'Todo lo que necesitas para automatizar',
    feat1_title:         'Clics de ratón por voz',
    feat1_desc:          'Define coordenadas exactas capturando clics en pantalla. Botón izquierdo, derecho o central. Configura el número de clics por paso.',
    feat2_title:         'Atajos de teclado',
    feat2_desc:          'Ejecuta cualquier combinación de teclas: Ctrl+C, Alt+Tab, Ctrl+Shift+S… Captura la combinación en tiempo real con un clic.',
    feat3_title:         'Escritura automática de texto',
    feat3_desc:          'Escribe bloques de texto completos con un solo comando. Ideal para respuestas frecuentes, firmas de correo o formularios repetitivos.',
    feat4_title:         'Control remoto por Wi-Fi',
    feat4_desc:          'Activa el servidor integrado y controla tus acciones desde el navegador de tu móvil. Sin apps extra. PIN de acceso configurable.',
    feat5_title:         'Pasos múltiples encadenados',
    feat5_desc:          'Combina clics, teclas, texto y hotkeys en una sola acción. Añade delays entre pasos para sincronizar con animaciones o tiempos de carga.',
    feat6_title:         '8 idiomas de interfaz',
    feat6_desc:          'Disponible en español, inglés, alemán, turco, chino, portugués, coreano y japonés. El idioma de reconocimiento de voz es independiente.',
    feat7_title:         '100% offline, sin cloud',
    feat7_desc:          'El reconocimiento de voz funciona localmente con el motor Vosk. Ningún audio sale de tu equipo. Privacidad total garantizada.',
    feat8_title:         'Cooldown y repetición',
    feat8_desc:          'Evita disparos accidentales con cooldown configurable en milisegundos. Repite una acción N veces con un solo comando de voz.',
    ben_kicker:          'Por qué elegirlo',
    ben_title:           'Productividad real, sin compromiso de privacidad',
    ben1_title:          'Sin suscripción, sin sorpresas',
    ben1_desc:           'Pago único. Sin cuota mensual, sin caducidad de licencia, sin funciones bloqueadas.',
    ben2_title:          'Funciona con cualquier app de Windows',
    ben2_desc:           'No es un plugin ni una extensión. Opera a nivel de sistema: funciona con cualquier software instalado.',
    ben3_title:          'Accesibilidad y ergonomía',
    ben3_desc:           'Ideal para reducir el uso del ratón y teclado. Útil en movilidad reducida, lesiones de muñeca o trabajo con manos ocupadas.',
    ben4_title:          'Control remoto sin instalar nada en el móvil',
    ben4_desc:           'El panel remoto corre en tu navegador del teléfono. Sin apps extra. Conexión local por Wi-Fi, segura y rápida.',
    ben_stat_lang:       'Idiomas',
    ben_stat_actions:    'Acciones personalizadas',
    ben_stat_cloud:      'Datos enviados a la nube',
    ben_stat_steps:      'Tipos de pasos',
    screens_kicker:      'En imágenes',
    screens_title:       'Diseñado para claridad y velocidad',
    screen1_cap:         'Panel principal — lista de acciones de voz',
    screen2_cap:         'Editor de pasos — configura clics, teclas y texto',
    screen3_cap:         'Control remoto — panel web accesible desde el móvil',
    screen4_cap:         'Ajustes — idioma, tema, puerto y PIN del servidor remoto',
    video_kicker:        'Demo',
    video_title:         'Míralo en acción',
    video_desc:          'Un minuto es suficiente para entender todo el potencial de Voice Clicker Pro.',
    video_placeholder:   'Vídeo demostrativo',
    test_kicker:         'Testimonios',
    test_title:          'Lo que dicen los usuarios',
    test1_quote:         '"Uso Voice Clicker Pro para presentaciones. Con \'siguiente\' avanzo la diapositiva sin tocar el ratón. Increíble en reuniones con el portátil lejos."',
    test1_role:          'Consultor de negocio',
    test2_quote:         '"Tengo una lesión de túnel carpiano y este programa me ha devuelto la productividad. Defino mis atajos una vez y los ejecuto con la voz. Lo recomiendo a cualquiera que trabaje mucho con el teclado."',
    test2_role:          'Desarrolladora de software',
    test3_quote:         '"El control remoto desde el móvil es genial. Tengo el PC conectado a la tele y puedo lanzar acciones desde el sofá. Sin conexión a internet, todo local."',
    test3_role:          'Streamer y creador de contenido',
    faq_kicker:          'Preguntas frecuentes',
    faq_title:           'Todo lo que necesitas saber',
    faq1_q:              '¿Necesita conexión a internet?',
    faq1_a:              'No. Voice Clicker Pro funciona completamente offline. El reconocimiento de voz usa el motor Vosk, que se ejecuta localmente en tu PC. Ningún audio ni dato personal se envía a ningún servidor.',
    faq2_q:              '¿Qué versiones de Windows son compatibles?',
    faq2_a:              'Voice Clicker Pro es compatible con Windows 10 y Windows 11 en arquitectura 64 bits. No es compatible con macOS ni Linux en esta versión.',
    faq3_q:              '¿En qué idioma reconoce la voz?',
    faq3_a:              'La versión actual incluye el modelo de reconocimiento de voz en español. Los idiomas de la interfaz (ES, EN, DE, TR, ZH, PT, KO, JA) son independientes del motor de voz.',
    faq4_q:              '¿Es un pago único o tiene suscripción?',
    faq4_a:              'Pago único en Microsoft Store. No hay cuota mensual, no hay funciones premium bloqueadas, no hay anuncios. Lo compras una vez y es tuyo para siempre, incluyendo actualizaciones de mantenimiento.',
    faq5_q:              '¿Cómo funciona el control remoto por Wi-Fi?',
    faq5_a:              'Desde la app, activa el servidor remoto (puerto configurable, por defecto 8765). La app mostrará la URL local de tu red Wi-Fi. Ábrela en el navegador de tu móvil, introduce el PIN y tendrás acceso a todas tus acciones.',
    faq6_q:              '¿Puedo usar Voice Clicker Pro para accesibilidad?',
    faq6_a:              'Sí, es uno de sus usos principales. Si tienes movilidad reducida en manos o brazos, o sufres lesiones como el síndrome del túnel carpiano, Voice Clicker Pro puede reducir drásticamente el uso físico del ratón y teclado.',
    price_kicker:        'Precio',
    price_title:         'Simple. Sin sorpresas.',
    price_badge:         'Pago único',
    price_desc:          'Todo incluido. Sin suscripciones. Sin límites de uso.',
    price_f1:            '✓ Acciones de voz ilimitadas',
    price_f2:            '✓ Control remoto Wi-Fi incluido',
    price_f3:            '✓ 8 idiomas de interfaz',
    price_f4:            '✓ Actualizaciones de mantenimiento',
    price_f5:            '✓ Reconocimiento de voz offline',
    price_f6:            '✓ Soporte por email',
    price_cta:           'Comprar en Microsoft Store',
    price_trust:         '🔐 Transacción segura a través de Microsoft · Soporte garantizado',
    footer_tagline:      'Automatización por voz para Windows.',
    footer_privacy:      'Política de privacidad',
    footer_terms:        'Términos y condiciones',
    footer_support:      'Soporte',
    footer_copy:         '© 2025 Voice Clicker Pro. Todos los derechos reservados.',
  },

  en: {
    meta_title:          'Voice Clicker Pro — Voice Control for Windows | Automate with Voice Commands',
    meta_description:    'Voice Clicker Pro automates mouse clicks, keystrokes and text input with your voice on Windows. Wi-Fi remote control, 8 languages, no cloud. Available on Microsoft Store.',
    meta_og_title:       'Voice Clicker Pro — Voice Automation for Windows',
    meta_og_description: 'Control your PC with your voice. Automate clicks, keyboard shortcuts and text with custom voice commands. Mobile remote control included.',
    meta_twitter_title:  'Voice Clicker Pro — Voice Control for Windows',
    meta_twitter_description: 'Automate your PC with voice commands. No cloud, no subscription. Download on Microsoft Store.',
    nav_how:             'How it works',
    nav_features:        'Features',
    nav_screenshots:     'Explainer Video',
    nav_pricing:         'Pricing',
    nav_faq:             'FAQ',
    hero_badge:          '✦ For Windows 10 & 11',
    hero_title_1:        'Control your PC',
    hero_title_2:        'with your voice.',
    hero_subtitle:       'Voice Clicker Pro automates mouse clicks, keyboard shortcuts and text with custom voice commands. No cloud, no subscription. 100% offline.',
    hero_cta_buy:        'Buy on Microsoft Store',
    hero_cta_learn:      'See how it works',
    hero_trust:          '🔒 No internet required · 🌍 8 languages · 🖥️ Windows 10/11',
    how_kicker:          'Usage flow',
    how_title:           'Three steps. Start in minutes.',
    how_desc:            'No complex configuration, no extra drivers. Install, define your actions and speak.',
    how_step1_title:     'Install the app',
    how_step1_desc:      'Download Voice Clicker Pro from Microsoft Store. Installs in seconds, no external dependencies or admin permissions needed.',
    how_step2_title:     'Define your actions',
    how_step2_desc:      'Create actions with custom voice triggers. Each action can chain clicks, keys, shortcuts and text in any order you want.',
    how_step3_title:     'Speak and automate',
    how_step3_desc:      'Activate the microphone and say the trigger. Voice Clicker Pro executes the action instantly, with no internet or app focus required.',
    feat_kicker:         'Features',
    feat_title:          'Everything you need to automate',
    feat1_title:         'Voice-triggered mouse clicks',
    feat1_desc:          'Define exact coordinates by capturing on-screen clicks. Left, right or middle button. Configure number of clicks per step.',
    feat2_title:         'Keyboard shortcuts',
    feat2_desc:          'Execute any key combination: Ctrl+C, Alt+Tab, Ctrl+Shift+S… Capture the combination in real time with a single click.',
    feat3_title:         'Automated text typing',
    feat3_desc:          'Type full text blocks with a single command. Perfect for frequent replies, email signatures or repetitive forms.',
    feat4_title:         'Wi-Fi remote control',
    feat4_desc:          'Enable the built-in server and control your actions from your phone browser. No extra apps. Configurable PIN access.',
    feat5_title:         'Chained multi-step actions',
    feat5_desc:          'Combine clicks, keys, text and hotkeys in a single action. Add delays between steps to sync with animations or load times.',
    feat6_title:         '8 interface languages',
    feat6_desc:          'Available in Spanish, English, German, Turkish, Chinese, Portuguese, Korean and Japanese. Voice recognition language is independent.',
    feat7_title:         '100% offline, no cloud',
    feat7_desc:          'Voice recognition runs locally using the Vosk engine. No audio leaves your device. Total privacy guaranteed.',
    feat8_title:         'Cooldown & repeat',
    feat8_desc:          'Prevent accidental triggers with configurable cooldown in milliseconds. Repeat an action N times with a single voice command.',
    ben_kicker:          'Why choose it',
    ben_title:           'Real productivity, without privacy compromise',
    ben1_title:          'No subscription, no surprises',
    ben1_desc:           'One-time payment. No monthly fee, no license expiry, no locked features.',
    ben2_title:          'Works with any Windows app',
    ben2_desc:           'Not a plugin or extension. Operates at system level: works with any installed software.',
    ben3_title:          'Accessibility and ergonomics',
    ben3_desc:           'Ideal for reducing mouse and keyboard use. Helpful for limited mobility, wrist injuries or working with occupied hands.',
    ben4_title:          'Remote control without installing anything on your phone',
    ben4_desc:           'The remote panel runs in your phone browser. No extra apps. Local Wi-Fi connection, secure and fast.',
    ben_stat_lang:       'Languages',
    ben_stat_actions:    'Custom actions',
    ben_stat_cloud:      'Data sent to the cloud',
    ben_stat_steps:      'Step types',
    screens_kicker:      'In images',
    screens_title:       'Designed for clarity and speed',
    screen1_cap:         'Main panel — voice actions list',
    screen2_cap:         'Step editor — configure clicks, keys and text',
    screen3_cap:         'Remote control — web panel accessible from mobile',
    screen4_cap:         'Settings — language, theme, port and remote server PIN',
    video_kicker:        'Demo',
    video_title:         'See it in action',
    video_desc:          'One minute is enough to understand the full potential of Voice Clicker Pro.',
    video_placeholder:   'Demo video',
    test_kicker:         'Testimonials',
    test_title:          'What users say',
    test1_quote:         '"I use Voice Clicker Pro for presentations. With \'next\' I advance the slide without touching the mouse. Amazing in meetings with the laptop far away."',
    test1_role:          'Business consultant',
    test2_quote:         '"I have a carpal tunnel injury and this program has given me back my productivity. I define my shortcuts once and execute them with my voice. I recommend it to anyone who works a lot with a keyboard."',
    test2_role:          'Software developer',
    test3_quote:         '"The remote control from the phone is great. I have the PC connected to the TV and I can launch actions from the couch. No internet connection, all local."',
    test3_role:          'Streamer and content creator',
    faq_kicker:          'Frequently asked questions',
    faq_title:           'Everything you need to know',
    faq1_q:              'Does it require an internet connection?',
    faq1_a:              'No. Voice Clicker Pro works completely offline. Voice recognition uses the Vosk engine, which runs locally on your PC. No audio or personal data is sent to any server.',
    faq2_q:              'Which Windows versions are supported?',
    faq2_a:              'Voice Clicker Pro supports Windows 10 and Windows 11 on 64-bit architecture. macOS and Linux are not supported in this version.',
    faq3_q:              'What language does it recognize voice in?',
    faq3_a:              'The current version includes the Spanish voice recognition model. Interface languages (ES, EN, DE, TR, ZH, PT, KO, JA) are independent of the voice engine.',
    faq4_q:              'Is it a one-time payment or subscription?',
    faq4_a:              'One-time payment on Microsoft Store. No monthly fee, no locked premium features, no ads. You buy it once and it\'s yours forever, including maintenance updates.',
    faq5_q:              'How does the Wi-Fi remote control work?',
    faq5_a:              'From the app, enable the remote server (configurable port, default 8765). The app will show the local URL of your Wi-Fi network. Open it in your phone browser, enter the PIN and you\'ll have access to all your actions.',
    faq6_q:              'Can I use Voice Clicker Pro for accessibility?',
    faq6_a:              'Yes, it\'s one of its main use cases. If you have limited mobility in hands or arms, or suffer from injuries like carpal tunnel syndrome, Voice Clicker Pro can drastically reduce physical mouse and keyboard use.',
    price_kicker:        'Pricing',
    price_title:         'Simple. No surprises.',
    price_badge:         'One-time payment',
    price_desc:          'Everything included. No subscriptions. No usage limits.',
    price_f1:            '✓ Unlimited voice actions',
    price_f2:            '✓ Wi-Fi remote control included',
    price_f3:            '✓ 8 interface languages',
    price_f4:            '✓ Maintenance updates',
    price_f5:            '✓ Offline voice recognition',
    price_f6:            '✓ Email support',
    price_cta:           'Buy on Microsoft Store',
    price_trust:         '🔐 Secure transaction through Microsoft · Guaranteed support',
    footer_tagline:      'Voice automation for Windows.',
    footer_privacy:      'Privacy policy',
    footer_terms:        'Terms & conditions',
    footer_support:      'Support',
    footer_copy:         '© 2025 Voice Clicker Pro. All rights reserved.',
  },

  de: {
    nav_how: 'Funktionsweise', nav_features: 'Funktionen', nav_screenshots: 'Erklärungsvideo',
    nav_pricing: 'Preis', nav_faq: 'FAQ',
    hero_badge: '✦ Für Windows 10 & 11',
    hero_title_1: 'Steuere deinen PC', hero_title_2: 'mit deiner Stimme.',
    hero_subtitle: 'Voice Clicker Pro automatisiert Mausklicks, Tastenkürzel und Texteingabe mit benutzerdefinierten Sprachbefehlen. Kein Cloud, kein Abo. 100% offline.',
    hero_cta_buy: 'Im Microsoft Store kaufen', hero_cta_learn: 'So funktioniert es',
    hero_trust: '🔒 Kein Internet erforderlich · 🌍 8 Sprachen · 🖥️ Windows 10/11',
    how_kicker: 'Nutzungsablauf', how_title: 'Drei Schritte. Start in Minuten.',
    how_desc: 'Keine komplexe Konfiguration. Installieren, Aktionen definieren, sprechen.',
    how_step1_title: 'App installieren', how_step1_desc: 'Voice Clicker Pro aus dem Microsoft Store herunterladen. Installiert in Sekunden, keine externen Abhängigkeiten.',
    how_step2_title: 'Aktionen definieren', how_step2_desc: 'Erstelle Aktionen mit benutzerdefinierten Sprachtriggern. Klicks, Tasten, Kürzel und Text beliebig kombinieren.',
    how_step3_title: 'Sprechen und automatisieren', how_step3_desc: 'Mikrofon aktivieren und Trigger sagen. Voice Clicker Pro führt die Aktion sofort aus, ohne Internet.',
    feat_kicker: 'Funktionen', feat_title: 'Alles, was du zur Automatisierung brauchst',
    feat1_title: 'Mausklicks per Stimme', feat1_desc: 'Exakte Koordinaten durch Klickaufnahme definieren. Links-, Rechts- oder Mittelklick. Klickanzahl pro Schritt konfigurierbar.',
    feat2_title: 'Tastenkürzel', feat2_desc: 'Beliebige Tastenkombinationen ausführen: Ctrl+C, Alt+Tab, Ctrl+Shift+S… Kombination in Echtzeit erfassen.',
    feat3_title: 'Automatische Texteingabe', feat3_desc: 'Vollständige Textblöcke mit einem einzigen Befehl tippen. Ideal für häufige Antworten, E-Mail-Signaturen oder repetitive Formulare.',
    feat4_title: 'WLAN-Fernsteuerung', feat4_desc: 'Integrierten Server aktivieren und Aktionen vom Handybrowser steuern. Keine Extra-Apps. Konfigurierbarer PIN-Zugang.',
    feat5_title: 'Verkettete Mehrschrittaktionen', feat5_desc: 'Klicks, Tasten, Text und Hotkeys in einer Aktion kombinieren. Verzögerungen zwischen Schritten hinzufügen.',
    feat6_title: '8 Oberflächensprachen', feat6_desc: 'Verfügbar auf Spanisch, Englisch, Deutsch, Türkisch, Chinesisch, Portugiesisch, Koreanisch und Japanisch.',
    feat7_title: '100% offline, kein Cloud', feat7_desc: 'Spracherkennung läuft lokal über die Vosk-Engine. Kein Audio verlässt dein Gerät. Vollständige Privatsphäre garantiert.',
    feat8_title: 'Cooldown & Wiederholung', feat8_desc: 'Versehentliche Auslöser mit konfigurierbarem Cooldown verhindern. Aktion N-mal mit einem Sprachbefehl wiederholen.',
    ben_kicker: 'Warum wählen', ben_title: 'Echte Produktivität ohne Kompromisse beim Datenschutz',
    ben1_title: 'Kein Abo, keine Überraschungen', ben1_desc: 'Einmalzahlung. Keine Monatsgebühr, kein Ablaufdatum, keine gesperrten Funktionen.',
    ben2_title: 'Funktioniert mit jeder Windows-App', ben2_desc: 'Kein Plugin, keine Erweiterung. Betrieb auf Systemebene: funktioniert mit jeder installierten Software.',
    ben3_title: 'Barrierefreiheit und Ergonomie', ben3_desc: 'Ideal zur Reduzierung von Maus- und Tastaturnutzung. Hilfreich bei eingeschränkter Mobilität oder Handgelenkverletzungen.',
    ben4_title: 'Fernsteuerung ohne Handy-App', ben4_desc: 'Das Fernbedienungs-Panel läuft im Handybrowser. Keine Extra-Apps. Lokale WLAN-Verbindung, sicher und schnell.',
    ben_stat_lang: 'Sprachen', ben_stat_actions: 'Benutzerdefinierte Aktionen',
    ben_stat_cloud: 'Daten in die Cloud gesendet', ben_stat_steps: 'Schritttypen',
    screens_kicker: 'In Bildern', screens_title: 'Für Klarheit und Geschwindigkeit gestaltet',
    screen1_cap: 'Hauptfenster — Liste der Sprachaktionen',
    screen2_cap: 'Schritteditor — Klicks, Tasten und Text konfigurieren',
    screen3_cap: 'Fernsteuerung — Webpanel vom Handy zugänglich',
    screen4_cap: 'Einstellungen — Sprache, Design, Port und PIN des Remote-Servers',
    video_kicker: 'Demo', video_title: 'In Aktion sehen',
    video_desc: 'Eine Minute reicht, um das volle Potenzial von Voice Clicker Pro zu verstehen.',
    video_placeholder: 'Demo-Video',
    test_kicker: 'Testimonials', test_title: 'Was Nutzer sagen',
    test1_quote: '"Ich nutze Voice Clicker Pro für Präsentationen. Mit \'weiter\' schiebe ich die Folie vor, ohne die Maus zu berühren."',
    test1_role: 'Unternehmensberater',
    test2_quote: '"Ich habe eine Karpaltunnel-Verletzung und dieses Programm hat mir meine Produktivität zurückgegeben. Ich empfehle es jedem."',
    test2_role: 'Softwareentwicklerin',
    test3_quote: '"Die Fernsteuerung vom Handy ist großartig. PC am TV angeschlossen und Aktionen vom Sofa starten. Alles lokal."',
    test3_role: 'Streamer und Content Creator',
    faq_kicker: 'Häufige Fragen', faq_title: 'Alles, was du wissen musst',
    faq1_q: 'Ist eine Internetverbindung erforderlich?', faq1_a: 'Nein. Voice Clicker Pro funktioniert vollständig offline. Die Spracherkennung verwendet die Vosk-Engine, die lokal auf deinem PC läuft.',
    faq2_q: 'Welche Windows-Versionen werden unterstützt?', faq2_a: 'Voice Clicker Pro unterstützt Windows 10 und Windows 11 auf 64-Bit-Architektur.',
    faq3_q: 'In welcher Sprache erkennt es die Stimme?', faq3_a: 'Die aktuelle Version enthält das spanische Spracherkennungsmodell. Oberflächensprachen sind unabhängig davon.',
    faq4_q: 'Einmalzahlung oder Abonnement?', faq4_a: 'Einmalzahlung im Microsoft Store. Keine Monatsgebühr, keine gesperrten Funktionen, keine Werbung.',
    faq5_q: 'Wie funktioniert die WLAN-Fernsteuerung?', faq5_a: 'Remote-Server in der App aktivieren, URL im Handybrowser öffnen, PIN eingeben und alle Aktionen steuern.',
    faq6_q: 'Kann ich Voice Clicker Pro für Barrierefreiheit nutzen?', faq6_a: 'Ja, das ist einer der Hauptanwendungsfälle. Bei eingeschränkter Mobilität oder Verletzungen kann es die physische Nutzung drastisch reduzieren.',
    price_kicker: 'Preis', price_title: 'Einfach. Keine Überraschungen.',
    price_badge: 'Einmalzahlung', price_desc: 'Alles inklusive. Keine Abonnements. Keine Nutzungslimits.',
    price_f1: '✓ Unbegrenzte Sprachaktionen', price_f2: '✓ WLAN-Fernsteuerung inklusive',
    price_f3: '✓ 8 Oberflächensprachen', price_f4: '✓ Wartungsupdates',
    price_f5: '✓ Offline-Spracherkennung', price_f6: '✓ E-Mail-Support',
    price_cta: 'Im Microsoft Store kaufen',
    price_trust: '🔐 Sichere Transaktion über Microsoft · Garantierter Support',
    footer_tagline: 'Sprachautomatisierung für Windows.',
    footer_privacy: 'Datenschutzrichtlinie', footer_terms: 'Allgemeine Geschäftsbedingungen',
    footer_support: 'Support', footer_copy: '© 2025 Voice Clicker Pro. Alle Rechte vorbehalten.',
  },

  tr: {
    nav_how: 'Nasıl Çalışır', nav_features: 'Özellikler', nav_screenshots: 'Açıklayıcı Video',
    nav_pricing: 'Fiyat', nav_faq: 'SSS',
    hero_badge: '✦ Windows 10 & 11 için',
    hero_title_1: 'PC\'ni kontrol et', hero_title_2: 'sesinle.',
    hero_subtitle: 'Voice Clicker Pro, özel ses komutlarıyla fare tıklamalarını, klavye kısayollarını ve metin girişini otomatikleştirir. Bulut yok, abonelik yok. %100 çevrimdışı.',
    hero_cta_buy: 'Microsoft Store\'dan Satın Al', hero_cta_learn: 'Nasıl çalıştığını gör',
    hero_trust: '🔒 İnternet gerekmez · 🌍 8 dil · 🖥️ Windows 10/11',
    how_kicker: 'Kullanım akışı', how_title: 'Üç adım. Dakikalar içinde başla.',
    how_desc: 'Karmaşık yapılandırma yok. Yükle, eylemlerini tanımla ve konuş.',
    how_step1_title: 'Uygulamayı yükle', how_step1_desc: 'Voice Clicker Pro\'yu Microsoft Store\'dan indirin. Saniyeler içinde kurulur.',
    how_step2_title: 'Eylemlerini tanımla', how_step2_desc: 'Özel ses tetikleyicileriyle eylemler oluşturun. Tıklamalar, tuşlar ve metin birleştirilebilir.',
    how_step3_title: 'Konuş ve otomatikleştir', how_step3_desc: 'Mikrofonu etkinleştirin ve tetikleyiciyi söyleyin. Eylem anında gerçekleşir.',
    feat_kicker: 'Özellikler', feat_title: 'Otomatikleştirmek için ihtiyacınız olan her şey',
    feat1_title: 'Sesle fare tıklaması', feat1_desc: 'Ekrandaki tıklamaları yakalayarak tam koordinatlar tanımlayın.',
    feat2_title: 'Klavye kısayolları', feat2_desc: 'Ctrl+C, Alt+Tab gibi herhangi bir tuş kombinasyonunu çalıştırın.',
    feat3_title: 'Otomatik metin yazma', feat3_desc: 'Tek bir komutla tam metin blokları yazın.',
    feat4_title: 'Wi-Fi uzaktan kumanda', feat4_desc: 'Entegre sunucuyu etkinleştirin ve telefon tarayıcısından kontrol edin.',
    feat5_title: 'Zincirleme çok adımlı eylemler', feat5_desc: 'Tıklamalar, tuşlar, metin ve kısayolları bir eylemde birleştirin.',
    feat6_title: '8 arayüz dili', feat6_desc: 'İspanyolca, İngilizce, Almanca, Türkçe, Çince, Portekizce, Korece ve Japonca.',
    feat7_title: '%100 çevrimdışı, bulut yok', feat7_desc: 'Ses tanıma Vosk motoru ile yerel olarak çalışır. Hiçbir ses cihazınızdan ayrılmaz.',
    feat8_title: 'Bekleme süresi ve tekrar', feat8_desc: 'Yapılandırılabilir bekleme süresiyle kazara tetiklemeleri önleyin.',
    ben_kicker: 'Neden seçmeli', ben_title: 'Gerçek verimlilik, gizlilik ödünü olmadan',
    ben1_title: 'Abonelik yok, sürpriz yok', ben1_desc: 'Tek seferlik ödeme. Aylık ücret yok, lisans süresi yok.',
    ben2_title: 'Her Windows uygulamasıyla çalışır', ben2_desc: 'Plugin değil. Sistem düzeyinde çalışır.',
    ben3_title: 'Erişilebilirlik ve ergonomi', ben3_desc: 'Fare ve klavye kullanımını azaltmak için ideal.',
    ben4_title: 'Telefona hiçbir şey yüklemeden uzaktan kumanda', ben4_desc: 'Uzak panel telefon tarayıcısında çalışır.',
    ben_stat_lang: 'Dil', ben_stat_actions: 'Özel eylemler',
    ben_stat_cloud: 'Buluta gönderilen veri', ben_stat_steps: 'Adım türü',
    screens_kicker: 'Görüntülerde', screens_title: 'Netlik ve hız için tasarlandı',
    screen1_cap: 'Ana panel — ses eylemleri listesi', screen2_cap: 'Adım düzenleyici',
    screen3_cap: 'Uzaktan kumanda — mobil web paneli', screen4_cap: 'Ayarlar',
    video_kicker: 'Demo', video_title: 'Çalışırken görün', video_desc: 'Bir dakika yeterli.',
    video_placeholder: 'Demo video',
    test_kicker: 'Referanslar', test_title: 'Kullanıcılar ne diyor',
    test1_quote: '"Sunumlar için kullanıyorum. \'Sonraki\' diyerek fareye dokunmadan slayt geçiyorum."',
    test1_role: 'İş danışmanı',
    test2_quote: '"Karpal tünel sendromu var ve bu program üretkenliğimi geri kazandırdı."',
    test2_role: 'Yazılım geliştirici',
    test3_quote: '"Telefondan uzaktan kumanda harika. PC TV\'ye bağlı ve kanepeden eylem başlatıyorum."',
    test3_role: 'Yayıncı ve içerik üreticisi',
    faq_kicker: 'Sık sorulan sorular', faq_title: 'Bilmeniz gereken her şey',
    faq1_q: 'İnternet bağlantısı gerekiyor mu?', faq1_a: 'Hayır. Tamamen çevrimdışı çalışır. Vosk motoru yerel olarak çalışır.',
    faq2_q: 'Hangi Windows sürümleri destekleniyor?', faq2_a: 'Windows 10 ve 11 (64 bit).',
    faq3_q: 'Hangi dilde ses tanıma yapıyor?', faq3_a: 'Mevcut sürüm İspanyolca ses tanıma modeli içerir.',
    faq4_q: 'Tek seferlik ödeme mi abonelik mi?', faq4_a: 'Microsoft Store\'da tek seferlik ödeme.',
    faq5_q: 'Wi-Fi uzaktan kumanda nasıl çalışır?', faq5_a: 'Uzak sunucuyu etkinleştirin, URL\'yi telefon tarayıcısında açın, PIN girin.',
    faq6_q: 'Erişilebilirlik için kullanabilir miyim?', faq6_a: 'Evet, başlıca kullanım alanlarından biridir.',
    price_kicker: 'Fiyat', price_title: 'Basit. Sürpriz yok.',
    price_badge: 'Tek seferlik ödeme', price_desc: 'Her şey dahil. Abonelik yok.',
    price_f1: '✓ Sınırsız ses eylemi', price_f2: '✓ Wi-Fi uzaktan kumanda dahil',
    price_f3: '✓ 8 arayüz dili', price_f4: '✓ Bakım güncellemeleri',
    price_f5: '✓ Çevrimdışı ses tanıma', price_f6: '✓ E-posta desteği',
    price_cta: 'Microsoft Store\'dan Satın Al',
    price_trust: '🔐 Microsoft üzerinden güvenli işlem',
    footer_tagline: 'Windows için ses otomasyonu.',
    footer_privacy: 'Gizlilik politikası', footer_terms: 'Hüküm ve koşullar',
    footer_support: 'Destek', footer_copy: '© 2025 Voice Clicker Pro. Tüm hakları saklıdır.',
  },

  zh: {
    nav_how: '使用方式', nav_features: '功能', nav_screenshots: '讲解视频',
    nav_pricing: '价格', nav_faq: '常见问题',
    hero_badge: '✦ 适用于 Windows 10 & 11',
    hero_title_1: '用您的声音', hero_title_2: '控制您的PC。',
    hero_subtitle: 'Voice Clicker Pro 使用自定义语音命令自动化鼠标点击、键盘快捷键和文字输入。无需云端，无需订阅，100%离线使用。',
    hero_cta_buy: '在 Microsoft Store 购买', hero_cta_learn: '了解工作原理',
    hero_trust: '🔒 无需网络 · 🌍 8种语言 · 🖥️ Windows 10/11',
    how_kicker: '使用流程', how_title: '三步开始，数分钟内启动。',
    how_desc: '无需复杂配置。安装、定义动作、开口说话。',
    how_step1_title: '安装应用', how_step1_desc: '从 Microsoft Store 下载，数秒内完成安装。',
    how_step2_title: '定义您的动作', how_step2_desc: '创建带有自定义语音触发词的动作，自由组合点击、按键和文字。',
    how_step3_title: '说话并自动化', how_step3_desc: '激活麦克风并说出触发词，动作立即执行，无需网络。',
    feat_kicker: '功能特性', feat_title: '一切所需，实现自动化',
    feat1_title: '语音鼠标点击', feat1_desc: '通过捕捉屏幕点击定义精确坐标，支持左键、右键或中键。',
    feat2_title: '键盘快捷键', feat2_desc: '执行任意组合键：Ctrl+C、Alt+Tab、Ctrl+Shift+S……',
    feat3_title: '自动文字输入', feat3_desc: '一个命令输入完整文本块，适用于常用回复、邮件签名等。',
    feat4_title: 'Wi-Fi远程控制', feat4_desc: '启用内置服务器，从手机浏览器控制您的动作，无需额外应用。',
    feat5_title: '多步骤链式动作', feat5_desc: '在单个动作中组合点击、按键、文字和热键，可添加步骤间延迟。',
    feat6_title: '8种界面语言', feat6_desc: '支持西班牙语、英语、德语、土耳其语、中文、葡萄牙语、韩语和日语。',
    feat7_title: '100%离线，无云端', feat7_desc: '语音识别使用Vosk引擎在本地运行，任何音频都不会离开您的设备。',
    feat8_title: '冷却时间与重复', feat8_desc: '可配置毫秒级冷却时间防止误触发，支持单命令重复执行N次。',
    ben_kicker: '为什么选择', ben_title: '真正的生产力，不妥协隐私',
    ben1_title: '无订阅，无惊喜', ben1_desc: '一次付费，无月费，无到期日，无功能限制。',
    ben2_title: '适用于任何Windows应用', ben2_desc: '非插件，系统级操作，适用于任何已安装软件。',
    ben3_title: '无障碍与人体工程学', ben3_desc: '适合减少鼠标键盘使用，对行动不便或手腕受伤用户尤为有益。',
    ben4_title: '无需在手机上安装任何东西', ben4_desc: '远程面板在手机浏览器中运行，本地Wi-Fi连接，安全快速。',
    ben_stat_lang: '语言', ben_stat_actions: '自定义动作',
    ben_stat_cloud: '发送到云端的数据', ben_stat_steps: '步骤类型',
    screens_kicker: '应用截图', screens_title: '为清晰和速度而设计',
    screen1_cap: '主面板 — 语音动作列表', screen2_cap: '步骤编辑器 — 配置点击、按键和文字',
    screen3_cap: '远程控制 — 手机可访问的网页面板', screen4_cap: '设置 — 语言、主题、端口和远程服务器PIN',
    video_kicker: '演示', video_title: '观看实际效果', video_desc: '一分钟即可了解Voice Clicker Pro的全部潜力。',
    video_placeholder: '演示视频',
    test_kicker: '用户评价', test_title: '用户怎么说',
    test1_quote: '"我用它做演示，说\'下一张\'就能翻页，不需要触碰鼠标，在会议中非常方便。"',
    test1_role: '商务顾问',
    test2_quote: '"我有腕管综合征，这个程序让我恢复了生产力。设定好快捷键，用声音执行。强烈推荐。"',
    test2_role: '软件开发者',
    test3_quote: '"手机远程控制太棒了。PC连接电视，可以从沙发上启动动作，完全本地无需联网。"',
    test3_role: '主播和内容创作者',
    faq_kicker: '常见问题', faq_title: '您需要了解的一切',
    faq1_q: '需要网络连接吗？', faq1_a: '不需要。完全离线工作，Vosk引擎在本地PC上运行，不发送任何数据。',
    faq2_q: '支持哪些Windows版本？', faq2_a: '支持64位Windows 10和Windows 11。',
    faq3_q: '识别哪种语言的语音？', faq3_a: '当前版本包含西班牙语语音识别模型，界面语言独立于语音引擎。',
    faq4_q: '一次性付款还是订阅？', faq4_a: 'Microsoft Store一次性付款，无月费，无高级功能限制，无广告。',
    faq5_q: 'Wi-Fi远程控制如何工作？', faq5_a: '在应用中启用远程服务器，在手机浏览器中打开URL，输入PIN即可访问所有动作。',
    faq6_q: '可以用于无障碍辅助吗？', faq6_a: '可以，这是主要用途之一，可大幅减少手部的物理操作需求。',
    price_kicker: '定价', price_title: '简单明了，无惊喜。',
    price_badge: '一次性付款', price_desc: '全功能包含，无订阅，无使用限制。',
    price_f1: '✓ 无限语音动作', price_f2: '✓ 含Wi-Fi远程控制',
    price_f3: '✓ 8种界面语言', price_f4: '✓ 维护更新',
    price_f5: '✓ 离线语音识别', price_f6: '✓ 邮件支持',
    price_cta: '在 Microsoft Store 购买',
    price_trust: '🔐 通过Microsoft安全交易 · 有保障的支持',
    footer_tagline: 'Windows语音自动化工具。',
    footer_privacy: '隐私政策', footer_terms: '条款和条件',
    footer_support: '支持', footer_copy: '© 2025 Voice Clicker Pro. 保留所有权利。',
  },

  pt: {
    nav_how: 'Como funciona', nav_features: 'Recursos', nav_screenshots: 'Vídeo Explicativo',
    nav_pricing: 'Preço', nav_faq: 'FAQ',
    hero_badge: '✦ Para Windows 10 & 11',
    hero_title_1: 'Controle seu PC', hero_title_2: 'com sua voz.',
    hero_subtitle: 'Voice Clicker Pro automatiza cliques do mouse, atalhos de teclado e digitação de texto com comandos de voz personalizados. Sem nuvem, sem assinatura. 100% offline.',
    hero_cta_buy: 'Comprar na Microsoft Store', hero_cta_learn: 'Ver como funciona',
    hero_trust: '🔒 Sem internet necessária · 🌍 8 idiomas · 🖥️ Windows 10/11',
    how_kicker: 'Fluxo de uso', how_title: 'Três passos. Comece em minutos.',
    how_desc: 'Sem configuração complexa. Instale, defina suas ações e fale.',
    how_step1_title: 'Instale o app', how_step1_desc: 'Baixe Voice Clicker Pro na Microsoft Store. Instala em segundos.',
    how_step2_title: 'Defina suas ações', how_step2_desc: 'Crie ações com gatilhos de voz personalizados. Combine cliques, teclas e texto.',
    how_step3_title: 'Fale e automatize', how_step3_desc: 'Ative o microfone e diga o gatilho. A ação é executada instantaneamente.',
    feat_kicker: 'Recursos', feat_title: 'Tudo que você precisa para automatizar',
    feat1_title: 'Cliques do mouse por voz', feat1_desc: 'Defina coordenadas exatas capturando cliques na tela.',
    feat2_title: 'Atalhos de teclado', feat2_desc: 'Execute qualquer combinação: Ctrl+C, Alt+Tab, Ctrl+Shift+S…',
    feat3_title: 'Digitação automática de texto', feat3_desc: 'Digite blocos de texto completos com um único comando.',
    feat4_title: 'Controle remoto por Wi-Fi', feat4_desc: 'Ative o servidor e controle pelo navegador do celular.',
    feat5_title: 'Ações encadeadas de múltiplos passos', feat5_desc: 'Combine cliques, teclas, texto e atalhos em uma única ação.',
    feat6_title: '8 idiomas de interface', feat6_desc: 'Disponível em espanhol, inglês, alemão, turco, chinês, português, coreano e japonês.',
    feat7_title: '100% offline, sem nuvem', feat7_desc: 'Reconhecimento de voz roda localmente com o motor Vosk.',
    feat8_title: 'Cooldown e repetição', feat8_desc: 'Evite disparos acidentais com cooldown configurável em ms.',
    ben_kicker: 'Por que escolher', ben_title: 'Produtividade real, sem comprometer a privacidade',
    ben1_title: 'Sem assinatura, sem surpresas', ben1_desc: 'Pagamento único. Sem mensalidade, sem vencimento de licença.',
    ben2_title: 'Funciona com qualquer app Windows', ben2_desc: 'Não é plugin. Opera em nível de sistema.',
    ben3_title: 'Acessibilidade e ergonomia', ben3_desc: 'Ideal para reduzir uso do mouse e teclado.',
    ben4_title: 'Controle remoto sem instalar nada no celular', ben4_desc: 'O painel remoto roda no navegador do telefone.',
    ben_stat_lang: 'Idiomas', ben_stat_actions: 'Ações personalizadas',
    ben_stat_cloud: 'Dados enviados à nuvem', ben_stat_steps: 'Tipos de passos',
    screens_kicker: 'Em imagens', screens_title: 'Projetado para clareza e velocidade',
    screen1_cap: 'Painel principal — lista de ações de voz', screen2_cap: 'Editor de passos',
    screen3_cap: 'Controle remoto — painel web pelo celular', screen4_cap: 'Configurações',
    video_kicker: 'Demo', video_title: 'Veja em ação', video_desc: 'Um minuto é suficiente para entender o potencial do Voice Clicker Pro.',
    video_placeholder: 'Vídeo demonstrativo',
    test_kicker: 'Depoimentos', test_title: 'O que os usuários dizem',
    test1_quote: '"Uso o Voice Clicker Pro para apresentações. Com \'próximo\' avanço o slide sem tocar no mouse."',
    test1_role: 'Consultor de negócios',
    test2_quote: '"Tenho lesão por túnel do carpo e esse programa me devolveu a produtividade."',
    test2_role: 'Desenvolvedora de software',
    test3_quote: '"O controle remoto pelo celular é incrível. PC conectado à TV e controlo do sofá."',
    test3_role: 'Streamer e criador de conteúdo',
    faq_kicker: 'Perguntas frequentes', faq_title: 'Tudo que você precisa saber',
    faq1_q: 'Precisa de conexão com a internet?', faq1_a: 'Não. Funciona completamente offline. O motor Vosk roda localmente.',
    faq2_q: 'Quais versões do Windows são compatíveis?', faq2_a: 'Windows 10 e 11 (64 bits).',
    faq3_q: 'Em que idioma reconhece a voz?', faq3_a: 'A versão atual inclui o modelo em espanhol. Os idiomas de interface são independentes.',
    faq4_q: 'Pagamento único ou assinatura?', faq4_a: 'Pagamento único na Microsoft Store, sem mensalidade.',
    faq5_q: 'Como funciona o controle remoto Wi-Fi?', faq5_a: 'Ative o servidor, abra a URL no navegador do celular, insira o PIN.',
    faq6_q: 'Posso usar para acessibilidade?', faq6_a: 'Sim, é um dos principais casos de uso.',
    price_kicker: 'Preço', price_title: 'Simples. Sem surpresas.',
    price_badge: 'Pagamento único', price_desc: 'Tudo incluído. Sem assinaturas.',
    price_f1: '✓ Ações de voz ilimitadas', price_f2: '✓ Controle remoto Wi-Fi incluído',
    price_f3: '✓ 8 idiomas de interface', price_f4: '✓ Atualizações de manutenção',
    price_f5: '✓ Reconhecimento de voz offline', price_f6: '✓ Suporte por e-mail',
    price_cta: 'Comprar na Microsoft Store',
    price_trust: '🔐 Transação segura pela Microsoft · Suporte garantido',
    footer_tagline: 'Automação por voz para Windows.',
    footer_privacy: 'Política de privacidade', footer_terms: 'Termos e condições',
    footer_support: 'Suporte', footer_copy: '© 2025 Voice Clicker Pro. Todos os direitos reservados.',
  },

  ko: {
    nav_how: '작동 방식', nav_features: '기능', nav_screenshots: '설명 영상',
    nav_pricing: '가격', nav_faq: 'FAQ',
    hero_badge: '✦ Windows 10 & 11용',
    hero_title_1: 'PC를 제어하세요', hero_title_2: '음성으로.',
    hero_subtitle: 'Voice Clicker Pro는 사용자 정의 음성 명령으로 마우스 클릭, 키보드 단축키, 텍스트 입력을 자동화합니다. 클라우드 없음, 구독 없음, 100% 오프라인.',
    hero_cta_buy: 'Microsoft Store에서 구매', hero_cta_learn: '작동 방식 보기',
    hero_trust: '🔒 인터넷 불필요 · 🌍 8개 언어 · 🖥️ Windows 10/11',
    how_kicker: '사용 흐름', how_title: '세 단계, 몇 분 안에 시작.',
    how_desc: '복잡한 설정 없음. 설치하고, 액션을 정의하고, 말하세요.',
    how_step1_title: '앱 설치', how_step1_desc: 'Microsoft Store에서 Voice Clicker Pro를 다운로드하세요.',
    how_step2_title: '액션 정의', how_step2_desc: '사용자 정의 음성 트리거로 액션을 만드세요. 클릭, 키, 텍스트 조합 가능.',
    how_step3_title: '말하고 자동화', how_step3_desc: '마이크를 활성화하고 트리거를 말하세요. 즉시 실행됩니다.',
    feat_kicker: '기능', feat_title: '자동화에 필요한 모든 것',
    feat1_title: '음성 마우스 클릭', feat1_desc: '화면 클릭을 캡처해 정확한 좌표를 정의하세요.',
    feat2_title: '키보드 단축키', feat2_desc: 'Ctrl+C, Alt+Tab 등 모든 키 조합 실행 가능.',
    feat3_title: '자동 텍스트 입력', feat3_desc: '단일 명령으로 전체 텍스트 블록 입력.',
    feat4_title: 'Wi-Fi 원격 제어', feat4_desc: '내장 서버를 활성화하고 휴대폰 브라우저에서 제어.',
    feat5_title: '다단계 체인 액션', feat5_desc: '클릭, 키, 텍스트, 단축키를 하나의 액션에 결합.',
    feat6_title: '8개 인터페이스 언어', feat6_desc: '스페인어, 영어, 독일어, 터키어, 중국어, 포르투갈어, 한국어, 일본어 지원.',
    feat7_title: '100% 오프라인, 클라우드 없음', feat7_desc: 'Vosk 엔진을 사용해 음성 인식이 로컬에서 실행됩니다.',
    feat8_title: '쿨다운 및 반복', feat8_desc: '밀리초 단위 쿨다운으로 실수 방지. 단일 명령으로 N회 반복 가능.',
    ben_kicker: '선택 이유', ben_title: '진정한 생산성, 개인정보 타협 없음',
    ben1_title: '구독 없음, 놀라움 없음', ben1_desc: '일회 결제. 월정액 없음, 라이선스 만료 없음.',
    ben2_title: '모든 Windows 앱과 호환', ben2_desc: '플러그인 아님. 시스템 수준에서 동작.',
    ben3_title: '접근성 및 인체공학', ben3_desc: '마우스와 키보드 사용 감소에 이상적.',
    ben4_title: '휴대폰에 아무것도 설치 없이 원격 제어', ben4_desc: '원격 패널은 휴대폰 브라우저에서 실행됩니다.',
    ben_stat_lang: '언어', ben_stat_actions: '사용자 정의 액션',
    ben_stat_cloud: '클라우드에 전송된 데이터', ben_stat_steps: '단계 유형',
    screens_kicker: '이미지로 보기', screens_title: '명확성과 속도를 위해 설계됨',
    screen1_cap: '메인 패널 — 음성 액션 목록', screen2_cap: '단계 편집기 — 클릭, 키, 텍스트 설정',
    screen3_cap: '원격 제어 — 모바일 접근 가능한 웹 패널', screen4_cap: '설정 — 언어, 테마, 포트 및 PIN',
    video_kicker: '데모', video_title: '실제 작동 보기', video_desc: '1분이면 Voice Clicker Pro의 모든 잠재력을 이해하기에 충분합니다.',
    video_placeholder: '데모 비디오',
    test_kicker: '사용자 후기', test_title: '사용자들의 말',
    test1_quote: '"프레젠테이션에 사용합니다. \'다음\'이라고 하면 마우스 없이 슬라이드가 넘어갑니다."',
    test1_role: '비즈니스 컨설턴트',
    test2_quote: '"손목 터널 증후군이 있는데 이 프로그램이 생산성을 되찾아줬습니다."',
    test2_role: '소프트웨어 개발자',
    test3_quote: '"휴대폰 원격 제어가 훌륭합니다. PC가 TV에 연결되어 있어 소파에서 액션을 실행합니다."',
    test3_role: '스트리머 및 콘텐츠 크리에이터',
    faq_kicker: '자주 묻는 질문', faq_title: '알아야 할 모든 것',
    faq1_q: '인터넷 연결이 필요한가요?', faq1_a: '아니요. 완전히 오프라인으로 작동합니다. Vosk 엔진이 로컬에서 실행됩니다.',
    faq2_q: '어떤 Windows 버전이 지원되나요?', faq2_a: 'Windows 10 및 11 (64비트).',
    faq3_q: '어떤 언어로 음성을 인식하나요?', faq3_a: '현재 버전은 스페인어 음성 인식 모델을 포함합니다.',
    faq4_q: '일회 결제인가요, 구독인가요?', faq4_a: 'Microsoft Store에서 일회 결제. 월정액 없음.',
    faq5_q: 'Wi-Fi 원격 제어는 어떻게 작동하나요?', faq5_a: '원격 서버를 활성화하고 URL을 휴대폰 브라우저에서 열어 PIN을 입력하세요.',
    faq6_q: '접근성을 위해 사용할 수 있나요?', faq6_a: '네, 주요 사용 사례 중 하나입니다.',
    price_kicker: '가격', price_title: '간단함. 놀라움 없음.',
    price_badge: '일회 결제', price_desc: '모든 것 포함. 구독 없음. 사용 제한 없음.',
    price_f1: '✓ 무제한 음성 액션', price_f2: '✓ Wi-Fi 원격 제어 포함',
    price_f3: '✓ 8개 인터페이스 언어', price_f4: '✓ 유지보수 업데이트',
    price_f5: '✓ 오프라인 음성 인식', price_f6: '✓ 이메일 지원',
    price_cta: 'Microsoft Store에서 구매',
    price_trust: '🔐 Microsoft를 통한 안전한 거래 · 지원 보장',
    footer_tagline: 'Windows를 위한 음성 자동화.',
    footer_privacy: '개인정보 처리방침', footer_terms: '이용약관',
    footer_support: '지원', footer_copy: '© 2025 Voice Clicker Pro. 모든 권리 보유.',
  },

  ja: {
    nav_how: '使い方', nav_features: '機能', nav_screenshots: '解説動画',
    nav_pricing: '価格', nav_faq: 'よくある質問',
    hero_badge: '✦ Windows 10 & 11 対応',
    hero_title_1: 'PCを操作しよう', hero_title_2: '声で。',
    hero_subtitle: 'Voice Clicker Proは、カスタム音声コマンドでマウスクリック、キーボードショートカット、テキスト入力を自動化します。クラウド不要、サブスクなし、100%オフライン。',
    hero_cta_buy: 'Microsoft Storeで購入', hero_cta_learn: '仕組みを見る',
    hero_trust: '🔒 インターネット不要 · 🌍 8言語対応 · 🖥️ Windows 10/11',
    how_kicker: '使用の流れ', how_title: '3ステップ、数分で開始。',
    how_desc: '複雑な設定なし。インストールして、アクションを定義して、話すだけ。',
    how_step1_title: 'アプリをインストール', how_step1_desc: 'Microsoft StoreからVoice Clicker Proをダウンロードします。数秒でインストール完了。',
    how_step2_title: 'アクションを定義', how_step2_desc: 'カスタム音声トリガーでアクションを作成。クリック、キー、テキストを組み合わせ可能。',
    how_step3_title: '話して自動化', how_step3_desc: 'マイクを有効にしてトリガーを言うだけ。即座に実行されます。',
    feat_kicker: '機能', feat_title: '自動化に必要なすべて',
    feat1_title: '音声マウスクリック', feat1_desc: '画面クリックをキャプチャして正確な座標を定義。',
    feat2_title: 'キーボードショートカット', feat2_desc: 'Ctrl+C、Alt+Tab等あらゆるキー組み合わせを実行。',
    feat3_title: '自動テキスト入力', feat3_desc: '1コマンドで完全なテキストブロックを入力。',
    feat4_title: 'Wi-Fiリモートコントロール', feat4_desc: '内蔵サーバーを有効にしてスマホブラウザから操作。',
    feat5_title: '複数ステップのチェーンアクション', feat5_desc: 'クリック、キー、テキスト、ホットキーを1アクションに組み合わせ。',
    feat6_title: '8言語インターフェース', feat6_desc: 'スペイン語、英語、ドイツ語、トルコ語、中国語、ポルトガル語、韓国語、日本語対応。',
    feat7_title: '100%オフライン、クラウド不要', feat7_desc: '音声認識はVoskエンジンでローカル実行。音声データは外部に送信されません。',
    feat8_title: 'クールダウンと繰り返し', feat8_desc: '誤作動防止のミリ秒単位クールダウン。1コマンドでN回繰り返し実行可能。',
    ben_kicker: '選ぶ理由', ben_title: 'プライバシーを犠牲にしない、真の生産性',
    ben1_title: 'サブスクなし、サプライズなし', ben1_desc: '一回払い。月額料金なし、ライセンス期限なし、機能制限なし。',
    ben2_title: 'あらゆるWindowsアプリで動作', ben2_desc: 'プラグインではありません。システムレベルで動作。',
    ben3_title: 'アクセシビリティと人間工学', ben3_desc: 'マウスとキーボードの使用削減に最適。',
    ben4_title: 'スマホに何もインストールせずリモート操作', ben4_desc: 'リモートパネルはスマホブラウザで動作。',
    ben_stat_lang: '言語', ben_stat_actions: 'カスタムアクション',
    ben_stat_cloud: 'クラウドへ送信されるデータ', ben_stat_steps: 'ステップタイプ',
    screens_kicker: '画面で見る', screens_title: '明確さとスピードのために設計',
    screen1_cap: 'メインパネル — 音声アクション一覧', screen2_cap: 'ステップエディタ',
    screen3_cap: 'リモートコントロール — スマホからアクセス可能なWebパネル', screen4_cap: '設定',
    video_kicker: 'デモ', video_title: '実際の動作を見る', video_desc: '1分でVoice Clicker Proの全ポテンシャルを理解できます。',
    video_placeholder: 'デモ動画',
    test_kicker: 'レビュー', test_title: 'ユーザーの声',
    test1_quote: '"プレゼンに使っています。\'次へ\'と言えばマウスを触らずにスライドを進められます。"',
    test1_role: 'ビジネスコンサルタント',
    test2_quote: '"手根管症候群があり、このプログラムで生産性を取り戻しました。ショートカットを一度定義して声で実行するだけ。"',
    test2_role: 'ソフトウェアデベロッパー',
    test3_quote: '"スマホからのリモートコントロールが最高です。PCをTVに接続してソファからアクションを実行できます。"',
    test3_role: 'ストリーマー・コンテンツクリエイター',
    faq_kicker: 'よくある質問', faq_title: '知っておくべきすべて',
    faq1_q: 'インターネット接続は必要ですか？', faq1_a: 'いいえ。完全オフラインで動作します。VoskエンジンがローカルPCで実行されます。',
    faq2_q: '対応Windowsバージョンは？', faq2_a: 'Windows 10・11（64ビット）対応。',
    faq3_q: 'どの言語の音声を認識しますか？', faq3_a: '現バージョンはスペイン語の音声認識モデルを含みます。',
    faq4_q: '一回払いですか、サブスクですか？', faq4_a: 'Microsoft Storeで一回払い。月額料金なし。',
    faq5_q: 'Wi-Fiリモートコントロールはどう機能しますか？', faq5_a: 'リモートサーバーを有効にし、スマホブラウザでURLを開き、PINを入力するだけ。',
    faq6_q: 'アクセシビリティ用途で使えますか？', faq6_a: 'はい、主なユースケースの1つです。手や腕の運動機能が制限されている場合に特に有効です。',
    price_kicker: '価格', price_title: 'シンプル。サプライズなし。',
    price_badge: '一回払い', price_desc: 'すべて込み。サブスクなし。使用制限なし。',
    price_f1: '✓ 無制限の音声アクション', price_f2: '✓ Wi-Fiリモートコントロール込み',
    price_f3: '✓ 8言語インターフェース', price_f4: '✓ メンテナンスアップデート',
    price_f5: '✓ オフライン音声認識', price_f6: '✓ メールサポート',
    price_cta: 'Microsoft Storeで購入',
    price_trust: '🔐 Microsoft経由の安全な取引 · サポート保証',
    footer_tagline: 'Windows向け音声自動化ツール。',
    footer_privacy: 'プライバシーポリシー', footer_terms: '利用規約',
    footer_support: 'サポート', footer_copy: '© 2025 Voice Clicker Pro. All rights reserved.',
  },
};

/* Language code to display label mapping */
const langLabels = {
  es: 'ES', en: 'EN', de: 'DE', tr: 'TR',
  zh: '中文', pt: 'PT', ko: '한국어', ja: '日本語',
};

/* Lang code to HTML lang attribute */
const langAttrs = {
  es: 'es', en: 'en', de: 'de', tr: 'tr',
  zh: 'zh-Hans', pt: 'pt', ko: 'ko', ja: 'ja',
};

const OFFER_END = new Date('2026-05-18T23:59:59');
const NOW = new Date();

const isOfferActive = NOW <= OFFER_END;

const priceData = isOfferActive
  ? {
      current: '4,99',
      original: '9,99',
      discount: '-50%',
      showDiscount: true
    }
  : {
      current: '9,99',
      original: null,
      discount: null,
      showDiscount: false
    };


function initPricing() {
  const currentEl  = document.getElementById('price-current');
  const originalEl = document.getElementById('price-original');
  const badgeEl    = document.getElementById('price-badge');
  const untilEl    = document.getElementById('price-until');
  const discountWrap = document.getElementById('price-discount');

  if (!currentEl) return;

  const OFFER_END = new Date('2026-05-18T23:59:59');
  const NOW = new Date();
  const isOfferActive = NOW <= OFFER_END;

  if (isOfferActive) {
    currentEl.innerHTML = '4<span class="pricing__decimal">,99</span>';
    originalEl.textContent = '9,99€';
    badgeEl.textContent = '-50%';
    untilEl.textContent = 'Oferta hasta el 18/05/2026';

    discountWrap.style.display = 'flex';
  } else {
    currentEl.innerHTML = '9<span class="pricing__decimal">,99</span>';
    discountWrap.style.display = 'none';
    untilEl.textContent = '';
  }
}


function updateStructuredData() {
  const offer = document.querySelector('script[type="application/ld+json"]');
  if (!offer) return;

  const data = JSON.parse(offer.textContent);

  const OFFER_END = new Date('2026-05-18T23:59:59');
  const NOW = new Date();
  const isOfferActive = NOW <= OFFER_END;

  data.offers.price = isOfferActive ? "4.99" : "9.99";

  offer.textContent = JSON.stringify(data, null, 2);
}


/* ═══════════════════════════════════════════════════════════════
   2. I18N ENGINE
   ═══════════════════════════════════════════════════════════════ */
const i18n = (() => {
  const STORAGE_KEY = 'vcp_lang';
  const DEFAULT_LANG = 'es';
  let currentLang = DEFAULT_LANG;

  /** Resolve a key — falls back to default lang if key missing in current */
  function t(key) {
    const langData = translations[currentLang] || {};
    const fallback  = translations[DEFAULT_LANG] || {};
    return langData[key] ?? fallback[key] ?? key;
  }

  /** Apply all data-i18n translations to the DOM */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key  = el.getAttribute('data-i18n');
      const text = t(key);

      /* For meta tags, update content attribute */
      if (el.tagName === 'META') {
        el.setAttribute('content', text);
        return;
      }

      /* For title tag */
      if (el.tagName === 'TITLE') {
        document.title = text;
        return;
      }

      /* Preserve inner HTML if it has child elements (e.g. SVG in button) */
      if (el.children.length > 0) {
        /* Only update direct text nodes, not child elements */
        const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
        textNodes.forEach(n => { n.textContent = text; });
        if (textNodes.length === 0) el.textContent = text;
      } else {
        el.textContent = text;
      }
    });

    /* Buttons with SVG children — set text manually preserving icon */
    document.querySelectorAll('.btn[data-i18n]').forEach(btn => {
      const key  = btn.getAttribute('data-i18n');
      const text = t(key);
      const svg  = btn.querySelector('svg');
      btn.textContent = text;
      if (svg) btn.insertBefore(svg, btn.firstChild);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    /* Persist preference */
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}

    /* Update html[lang] */
    document.documentElement.lang = langAttrs[lang] || lang;

    applyTranslations();
    updateLangUI(lang);
  }

  function detectLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (_) {}

    const browser = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const map = { 'zh': 'zh', 'ja': 'ja', 'ko': 'ko', 'de': 'de', 'tr': 'tr', 'pt': 'pt', 'es': 'es', 'en': 'en' };
    for (const [prefix, code] of Object.entries(map)) {
      if (browser.startsWith(prefix)) return code;
    }
    return DEFAULT_LANG;
  }

  function updateLangUI(lang) {
    const btn   = document.getElementById('langBtn');
    const label = document.getElementById('langBtnLabel');
    const items = document.querySelectorAll('#langDropdown [data-lang]');

    if (label) label.textContent = langLabels[lang] || lang.toUpperCase();
    if (btn)   btn.setAttribute('aria-label', `Idioma actual: ${lang.toUpperCase()}`);

    items.forEach(item => {
      const selected = item.dataset.lang === lang;
      item.setAttribute('aria-selected', String(selected));
    });
  }

  function init() {
    const lang = detectLang();
    setLang(lang);
  }

  return { init, setLang, t, getCurrent: () => currentLang };
})();

/* ═══════════════════════════════════════════════════════════════
   3. LANGUAGE SELECTOR UI
   ═══════════════════════════════════════════════════════════════ */
function initLangSelector() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  if (!btn || !dropdown) return;

  function open() {
    dropdown.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function close() {
    dropdown.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }

  function toggle() {
    dropdown.classList.contains('is-open') ? close() : open();
  }

  btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });

  dropdown.addEventListener('click', e => {
    const item = e.target.closest('[data-lang]');
    if (!item) return;
    i18n.setLang(item.dataset.lang);
    close();
    btn.focus();
  });

  dropdown.addEventListener('keydown', e => {
    const items = Array.from(dropdown.querySelectorAll('[data-lang]'));
    const idx   = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(idx + 1) % items.length]?.focus(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); items[(idx - 1 + items.length) % items.length]?.focus(); }
    if (e.key === 'Escape')    { close(); btn.focus(); }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const item = e.target.closest('[data-lang]');
      if (item) { i18n.setLang(item.dataset.lang); close(); btn.focus(); }
    }
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}

/* ═══════════════════════════════════════════════════════════════
   4. MOBILE NAV
   ═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const header = document.querySelector('.header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close on nav link click */
  document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('header--nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   5. HEADER SCROLL STATE
   ═══════════════════════════════════════════════════════════════ */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════════════════
   6. FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════ */
function initFaq() {
  document.querySelectorAll('.faq__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answerId = btn.getAttribute('aria-controls');
      const answer   = document.getElementById(answerId);

      /* Close all others */
      document.querySelectorAll('.faq__toggle').forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherId = other.getAttribute('aria-controls');
          const otherAns = document.getElementById(otherId);
          if (otherAns) otherAns.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   7. SCROLL REVEAL
   ═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.how__step, .feature-card, .benefits__item, .benefits__stat-card, ' +
    '.screenshots__item, .testimonial-card, .faq__item, .section-header'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   8. SMOOTH SCROLL (polyfill for older browsers)
   ═══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('.header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   9. SKIP LINK INJECTION
   ═══════════════════════════════════════════════════════════════ */
function injectSkipLink() {
  const existing = document.querySelector('.skip-link');
  if (existing) return;
  const skip = document.createElement('a');
  skip.href = '#main-content';
  skip.className = 'skip-link';
  skip.textContent = 'Saltar al contenido';
  document.body.insertAdjacentElement('afterbegin', skip);
}

/* ═══════════════════════════════════════════════════════════════
   10. INIT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  injectSkipLink();
  i18n.init();
  initLangSelector();
  initMobileNav();
  initHeaderScroll();
  initFaq();
  initScrollReveal();
  initSmoothScroll();
  initPricing();
  updateStructuredData(); 
});
