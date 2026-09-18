export const WHATSAPP_URL = "https://wa.me/541165322243";
export const INSTAGRAM_URL = "https://www.instagram.com/agentic4biz/";
export const DEMOS_URL = "https://hozdemo.agentic4biz.com";

export type Language = "es" | "en";

export const languages: Array<{ code: Language; label: string }> = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" }
];

const sharedMarqueeItems = [
  "BANCO POLARIS",
  "GRUPO ALMA",
  "MERCATO+",
  "SALUS",
  "CASA TRES",
  "NORDICA",
  "ATLAS",
  "KIRA RETAIL"
];

export const contentByLanguage = {
  es: {
    navAria: "Principal",
    menuLabel: "Menu",
    languageLabel: "Idioma",
    navItems: [
      { label: "01 Servicios", href: "#servicios" },
      { label: "02 Proceso", href: "#proceso" },
      { label: "03 Clientes", href: "#clientes" },
      { label: "04 Comparativa", href: "#comparativa" }
    ],
    navCta: "Hablemos",
    hero: {
      numberLabel: "87 por ciento",
      tag: "INDICE DE AUTOMATIZACION · MEDIANA DE 32 CLIENTES, 2025",
      title: ["De los procesos repetitivos", "de tus equipos", "ya pueden hacerlos agentes."],
      lede:
        "Construimos fuerzas de trabajo autónomas para empresas medianas y corporativos. Cero plantillas. Solo lo que tu operación necesita.",
      primaryCta: "Hablemos",
      secondaryCta: "Ver clientes",
      demoCta: "Casos de Ejemplo"
    },
    marqueeAria: "Clientes",
    marqueeItems: sharedMarqueeItems,
    slab: {
      label: "QUE HACEMOS / 01",
      beforeAgent: "Diseñamos ",
      agent: "agentes",
      middle: " que piensan, deciden y actúan dentro de tu stack: ",
      without: "sin",
      after: " remplazar a tu equipo, sino dándole superpoderes operativos."
    },
    services: {
      label: "SERVICIOS / 02",
      title: ["Cuatro frentes,", "un solo equipo."],
      lede:
        "Trabajamos como un estudio: pocos clientes, equipo dedicado, sin plantillas reusadas. Cada agente se diseña sobre tu operación real, no sobre un caso genérico.",
      items: [
        {
          number: "01",
          title: "Consultoría de adopción",
          description:
            "Diagnóstico de tus procesos, mapeo de casos candidatos y diseño de la hoja de ruta. Identificamos dónde un agente paga el primer mes.",
          metaLabel: "Entregable",
          meta: "Roadmap · 2 semanas"
        },
        {
          number: "02",
          title: "Diseño de agentes a medida",
          description:
            "Arquitectura del agente, definición de políticas, herramientas y límites. Construido sobre tu stack, con traza completa de cada decisión.",
          metaLabel: "Entregable",
          meta: "Agente listo · 4-6 semanas"
        },
        {
          number: "03",
          title: "Implementación e integración",
          description:
            "Despliegue en tus sistemas: ERP, CRM, helpdesk, telefonía, base de datos. Migración controlada, piloto en sombra y transferencia gradual de autoridad.",
          metaLabel: "Cobertura",
          meta: "62 conectores nativos"
        },
        {
          number: "04",
          title: "Operación y mejora continua",
          description:
            "Monitoreo 24/7, ajuste de políticas, reentrenamiento y reportes mensuales. Tu equipo solo aprueba las excepciones que requieren criterio humano.",
          metaLabel: "Modelo",
          meta: "Mensual · SLA 99.9%"
        }
      ]
    },
    process: {
      label: "PROCESO / 03",
      title: ["De ambición a producción", "en 6 semanas."],
      steps: [
        {
          number: "01",
          week: "Semana 1",
          title: "Diagnóstico",
          description: "Mapeamos 3 procesos candidatos y medimos baseline real con tu equipo."
        },
        {
          number: "02",
          week: "Semana 2-3",
          title: "Diseño",
          description: "Definimos políticas, herramientas y trazabilidad. Nada se entrena sin tu firma."
        },
        {
          number: "03",
          week: "Semana 4-5",
          title: "Piloto",
          description: "El agente corre en sombra junto a tu equipo. Comparamos decisiones."
        },
        {
          number: "04",
          week: "Semana 6",
          title: "Producción",
          description: "Transferimos autoridad gradual. Monitoreo 24/7 y revisión trimestral."
        }
      ]
    },
    caseStudy: {
      label: "CASO / 04 · BANCA",
      value: "4.2",
      unit: "x",
      valueLabel: ["aprobaciones por hora", "vs. equipo anterior"],
      quote:
        '"Pasamos de un backlog de 8 días a aprobaciones el mismo día. El agente revisa, decide y solo escala las excepciones reales."',
      author: "Mariana Rosales",
      role: "VP Operaciones · Banco Polaris",
      stats: [
        { value: "72%", label: "reducción de FTEs en revisión manual" },
        { value: "0", label: "excepciones regulatorias en 9 meses" },
        { value: "$1.8M", label: "ahorro anualizado en USD" }
      ]
    },
    success: {
      label: "CASOS DE EXITO / 05",
      title: ["Siete proyectos,", "un mismo enfoque."],
      lede:
        "En cada caso seguimos el mismo método: entender la operación, ordenar el proceso y recién después automatizar. Así, la tecnología acelera la eficiencia y no el desorden.",
      fieldLabels: { challenge: "Desafío", solution: "Solución", result: "Resultado" },
      cases: [
        {
          org: "VACLOG",
          title: "Trazabilidad de despachos",
          tags: "Comercio exterior · Trazabilidad",
          image: "/images/casos-exito/vaclog-trazabilidad-despachos.png",
          challenge:
            "Las operaciones de comercio exterior se tramitan en distintos organismos, agentes logísticos y aduanas, cada uno con sus propios sistemas.",
          solution:
            "Plataforma web que centraliza cada despacho, su documentación y sus estados, con historial completo y alertas automáticas.",
          result:
            "Visibilidad en tiempo real de todos los despachos, menos consultas manuales y detección temprana de demoras.",
          detail: "Aplicación web · Integraciones"
        },
        {
          org: "VACLOG",
          title: "Workspace de clientes",
          tags: "Gestión operativa · Portal de clientes",
          image: "/images/casos-exito/vaclog-workspace-clientes.png",
          challenge:
            "Ventas, compras, remitos y recepciones se gestionaban en herramientas separadas, con datos duplicados y difíciles de consultar.",
          solution:
            "Un espacio de trabajo único para administrar ventas, compras, remitos y recepciones de cada cliente desde un mismo lugar.",
          result:
            "Información unificada, menos carga duplicada y acceso directo al estado de cada operación.",
          detail: "Aplicación web · Portal de clientes"
        },
        {
          org: "Uranga Trading",
          title: "Gestión de exportaciones",
          tags: "Agroexportación · Seguimiento de embarques",
          image: "/images/casos-exito/uranga-trading-exportaciones.png",
          challenge:
            "Cada exportación agropecuaria implicaba contratos, documentación y embarques dispersos entre mails, planillas y documentos compartidos.",
          solution:
            "Portal que centraliza la gestión comercial, la documentación de exportación y el seguimiento de cada embarque, para uso interno y de compradores.",
          result:
            "Trazabilidad completa de cada operación, respuestas más ágiles a clientes y menos riesgo de errores documentales.",
          detail: "Portal web · Agroexportación"
        },
        {
          org: "Las Margaritas",
          title: "Gestión de logística",
          tags: "Logística · Tablero de gestión",
          image: "/images/casos-exito/las-margaritas-logistica.png",
          challenge:
            "La planificación de entregas y el seguimiento de la distribución dependían de coordinación manual y comunicación informal.",
          solution:
            "Sistema para planificar, asignar y seguir pedidos y entregas, con estados actualizados para todo el equipo.",
          result:
            "Mayor control de la operación, menos demoras por falta de información y visibilidad del estado de cada entrega.",
          detail: "Aplicación web · Tablero de gestión"
        },
        {
          org: "Dasdach",
          title: "Automatización de facturación",
          tags: "Automatización · Integración de sistemas",
          image: "/images/casos-exito/dasdach-facturacion.png",
          challenge:
            "La emisión de facturas requería carga manual y repetitiva de datos, con riesgo de errores en importes e impuestos.",
          solution:
            "El circuito se automatizó de punta a punta: los datos se toman del sistema de origen, se validan y un robot emite y envía los comprobantes sin carga manual.",
          result: "Horas administrativas liberadas, menos errores y facturación en tiempo y forma.",
          detail: "Automatización · RPA"
        },
        {
          org: "Coop. Tabacalera Jujuy",
          title: "Trazabilidad del Tabaco",
          tags: "Trazabilidad · Blockchain",
          image: "/images/casos-exito/tabacalera-jujuy-trazabilidad.png",
          challenge:
            "Los fardos de tabaco de calidad eran falsificados en distintas etapas del proceso logístico.",
          solution:
            "Identificación de cada fardo con una etiqueta RFID e incorporación de esa trazabilidad a una red Blockchain.",
          result:
            "Trazabilidad verificable de cada fardo y menor riesgo de falsificación en toda la cadena.",
          detail: "RFID · Blockchain"
        },
        {
          org: "VACLOG",
          title: "Seguimiento de Gestores",
          tags: "Trazabilidad · Mobile",
          image: "/images/casos-exito/vaclog-seguimiento-gestores.png",
          challenge:
            "Dificultad para controlar las actividades de los gestores y sus comprobantes de viáticos y viajes.",
          solution:
            "Aplicación mobile instalada en los teléfonos de los gestores, que muestra la trazabilidad de sus trámites.",
          result: "Menos tickets falsos y mayor control de los viáticos.",
          detail: "Aplicación mobile · Trazabilidad"
        }
      ]
    },
    comparison: {
      label: "COMPARATIVA / 06",
      aria: "Comparar proceso",
      manualButton: "Proceso manual",
      agenticButton: "Con agentes",
      rows: [
        { label: "Tiempo medio por caso", manual: "22 min", agentic: "4.2 s", delta: "-99%" },
        { label: "Costo por ejecución", manual: "$3.40 USD", agentic: "$0.04 USD", delta: "-98%" },
        { label: "Cobertura horaria", manual: "L-V · 9 a 18", agentic: "24 / 7", delta: "continua" },
        { label: "Errores documentados", manual: "3.1%", agentic: "0.2%", delta: "-93%" },
        { label: "Tiempo a producción", manual: "No aplica", agentic: "6 semanas", delta: "medible" }
      ]
    },
    finalCta: {
      label: "CONTACTO / 07",
      title: ["¿Listo", "para delegar", "lo repetitivo?"],
      button: "Reservar una llamada"
    },
    footer: {
      description: "Agentes de IA para empresas que prefieren operar, no esperar.",
      contact: "Contacto",
      legal: "Legal",
      privacy: "Política de Privacidad",
      version: "Versión 04.2"
    }
  },
  en: {
    navAria: "Main",
    menuLabel: "Menu",
    languageLabel: "Language",
    navItems: [
      { label: "01 Services", href: "#servicios" },
      { label: "02 Process", href: "#proceso" },
      { label: "03 Clients", href: "#clientes" },
      { label: "04 Comparison", href: "#comparativa" }
    ],
    navCta: "Let's talk",
    hero: {
      numberLabel: "87 percent",
      tag: "AUTOMATION INDEX · MEDIAN OF 32 CLIENTS, 2025",
      title: ["Of your teams'", "repetitive processes", "agents can already do them."],
      lede:
        "We build autonomous workforces for mid-market companies and enterprises. No templates. Only what your operation needs.",
      primaryCta: "Let's talk",
      secondaryCta: "View clients",
      demoCta: "Example Cases"
    },
    marqueeAria: "Clients",
    marqueeItems: sharedMarqueeItems,
    slab: {
      label: "WHAT WE DO / 01",
      beforeAgent: "We design ",
      agent: "agents",
      middle: " that think, decide, and act inside your stack: ",
      without: "without",
      after: " replacing your team, instead giving them operational superpowers."
    },
    services: {
      label: "SERVICES / 02",
      title: ["Four workstreams,", "one dedicated team."],
      lede:
        "We work like a studio: few clients, dedicated team, no reused templates. Every agent is designed around your actual operation, not a generic use case.",
      items: [
        {
          number: "01",
          title: "Adoption consulting",
          description:
            "Process diagnosis, candidate use-case mapping, and roadmap design. We identify where an agent pays back in the first month.",
          metaLabel: "Deliverable",
          meta: "Roadmap · 2 weeks"
        },
        {
          number: "02",
          title: "Custom agent design",
          description:
            "Agent architecture, policy definition, tools, and guardrails. Built on your stack, with a complete trace of every decision.",
          metaLabel: "Deliverable",
          meta: "Ready agent · 4-6 weeks"
        },
        {
          number: "03",
          title: "Implementation and integration",
          description:
            "Deployment into your systems: ERP, CRM, helpdesk, telephony, database. Controlled migration, shadow pilot, and gradual authority transfer.",
          metaLabel: "Coverage",
          meta: "62 native connectors"
        },
        {
          number: "04",
          title: "Operations and continuous improvement",
          description:
            "24/7 monitoring, policy tuning, retraining, and monthly reporting. Your team only approves exceptions that require human judgment.",
          metaLabel: "Model",
          meta: "Monthly · SLA 99.9%"
        }
      ]
    },
    process: {
      label: "PROCESS / 03",
      title: ["From ambition to production", "in 6 weeks."],
      steps: [
        {
          number: "01",
          week: "Week 1",
          title: "Diagnosis",
          description: "We map 3 candidate processes and measure a real baseline with your team."
        },
        {
          number: "02",
          week: "Weeks 2-3",
          title: "Design",
          description: "We define policies, tools, and traceability. Nothing is trained without your sign-off."
        },
        {
          number: "03",
          week: "Weeks 4-5",
          title: "Pilot",
          description: "The agent runs in shadow mode alongside your team. We compare decisions."
        },
        {
          number: "04",
          week: "Week 6",
          title: "Production",
          description: "We transfer authority gradually. 24/7 monitoring and quarterly review."
        }
      ]
    },
    caseStudy: {
      label: "CASE / 04 · BANKING",
      value: "4.2",
      unit: "x",
      valueLabel: ["approvals per hour", "vs. previous team"],
      quote:
        '"We went from an 8-day backlog to same-day approvals. The agent reviews, decides, and only escalates real exceptions."',
      author: "Mariana Rosales",
      role: "VP Operations · Banco Polaris",
      stats: [
        { value: "72%", label: "reduction in manual review FTEs" },
        { value: "0", label: "regulatory exceptions in 9 months" },
        { value: "$1.8M", label: "annualized savings in USD" }
      ]
    },
    success: {
      label: "SUCCESS CASES / 05",
      title: ["Seven projects,", "one same approach."],
      lede:
        "In every case we follow the same method: understand the operation, put the process in order, and only then automate. That way technology speeds up efficiency instead of the mess.",
      fieldLabels: { challenge: "Challenge", solution: "Solution", result: "Result" },
      cases: [
        {
          org: "VACLOG",
          title: "Import/export dispatch tracking",
          tags: "Foreign trade · Traceability",
          image: "/images/casos-exito/vaclog-trazabilidad-despachos.png",
          challenge:
            "Foreign trade operations run through different government agencies, logistics agents, and customs offices, each with its own systems.",
          solution:
            "A web platform that centralizes every dispatch, its documentation, and its status, with full history and automatic alerts.",
          result:
            "Real-time visibility into every dispatch, fewer manual inquiries, and early detection of delays.",
          detail: "Web app · Integrations"
        },
        {
          org: "VACLOG",
          title: "Client workspace",
          tags: "Operations management · Client portal",
          image: "/images/casos-exito/vaclog-workspace-clientes.png",
          challenge:
            "Sales, purchases, delivery notes, and receipts were managed in separate tools, with duplicated and hard-to-check data.",
          solution:
            "A single workspace to manage sales, purchases, delivery notes, and receipts for each client in one place.",
          result:
            "Unified information, less duplicated workload, and direct access to the status of every operation.",
          detail: "Web app · Client portal"
        },
        {
          org: "Uranga Trading",
          title: "Export management",
          tags: "Agro-export · Shipment tracking",
          image: "/images/casos-exito/uranga-trading-exportaciones.png",
          challenge:
            "Every agricultural export involved contracts, documentation, and shipments scattered across emails, spreadsheets, and shared documents.",
          solution:
            "A portal that centralizes commercial management, export documentation, and shipment tracking, for internal use and for buyers.",
          result:
            "Full traceability of every operation, faster responses to clients, and less risk of documentation errors.",
          detail: "Web portal · Agro-export"
        },
        {
          org: "Las Margaritas",
          title: "Logistics management",
          tags: "Logistics · Management dashboard",
          image: "/images/casos-exito/las-margaritas-logistica.png",
          challenge:
            "Delivery planning and distribution tracking depended on manual coordination and informal communication.",
          solution:
            "A system to plan, assign, and track orders and deliveries, with statuses updated for the whole team.",
          result:
            "Greater control of the operation, fewer delays from lack of information, and visibility into the status of every delivery.",
          detail: "Web app · Management dashboard"
        },
        {
          org: "Dasdach",
          title: "Billing automation",
          tags: "Automation · Systems integration",
          image: "/images/casos-exito/dasdach-facturacion.png",
          challenge:
            "Issuing invoices required manual, repetitive data entry, with risk of errors in amounts and taxes.",
          solution:
            "The whole circuit was automated end to end: data is pulled from the source system, validated, and a bot issues and sends the invoices with no manual entry.",
          result: "Administrative hours freed up, fewer errors, and on-time invoicing.",
          detail: "Automation · RPA"
        },
        {
          org: "Coop. Tabacalera Jujuy",
          title: "Tobacco traceability",
          tags: "Traceability · Blockchain",
          image: "/images/casos-exito/tabacalera-jujuy-trazabilidad.png",
          challenge:
            "High-quality tobacco bales were being counterfeited at different stages of the logistics process.",
          solution:
            "Each bale is identified with an RFID tag, and that traceability is added to a blockchain network.",
          result:
            "Verifiable traceability for every bale and lower risk of counterfeiting across the whole chain.",
          detail: "RFID · Blockchain"
        },
        {
          org: "VACLOG",
          title: "Field agent tracking",
          tags: "Traceability · Mobile",
          image: "/images/casos-exito/vaclog-seguimiento-gestores.png",
          challenge:
            "Difficulty controlling field agents' activities and their travel expense receipts.",
          solution:
            "A mobile app installed on agents' phones that shows the traceability of their assignments.",
          result: "Fewer false expense claims and greater control over travel expenses.",
          detail: "Mobile app · Traceability"
        }
      ]
    },
    comparison: {
      label: "COMPARISON / 06",
      aria: "Compare process",
      manualButton: "Manual process",
      agenticButton: "With agents",
      rows: [
        { label: "Average time per case", manual: "22 min", agentic: "4.2 s", delta: "-99%" },
        { label: "Cost per execution", manual: "$3.40 USD", agentic: "$0.04 USD", delta: "-98%" },
        { label: "Operating coverage", manual: "Mon-Fri · 9 to 6", agentic: "24 / 7", delta: "continuous" },
        { label: "Documented errors", manual: "3.1%", agentic: "0.2%", delta: "-93%" },
        { label: "Time to production", manual: "Not applicable", agentic: "6 weeks", delta: "measurable" }
      ]
    },
    finalCta: {
      label: "CONTACT / 07",
      title: ["Ready", "to delegate", "the repetitive?"],
      button: "Book a call"
    },
    footer: {
      description: "AI agents for companies that prefer operating over waiting.",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      version: "Version 04.2"
    }
  }
} as const;

export type LandingContent = (typeof contentByLanguage)[Language];
