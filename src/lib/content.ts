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
      title: ["Tres procesos", "que ya operan solos."],
      cases: [
        {
          vertical: "Salud · Clínicas",
          value: "-83",
          unit: "%",
          what: "Reserva, confirmación y reagenda de turnos.",
          quote:
            '"Pasamos de 28% de inasistencias a 5%. El agente confirma, reagenda y manda recordatorios sin que el equipo toque un teléfono."',
          org: "Red Vital",
          detail: "14 sucursales · 8 especialidades"
        },
        {
          vertical: "Soporte · Voz",
          value: "3.4",
          unit: "x",
          what: "Atención telefónica y derivación inteligente.",
          quote:
            '"El agente atiende la llamada, identifica el motivo y deriva al humano correcto con todo el contexto. Los tiempos muertos se acabaron."',
          org: "Salus Seguros",
          detail: "CDMX · 740 llamadas/día"
        },
        {
          vertical: "Tickets · E-commerce",
          value: "91",
          unit: "%",
          what: "Resolución de tickets sin escalar a humanos.",
          quote:
            '"9 de cada 10 tickets se resuelven antes del primer contacto humano. Mi equipo se enfoca en los casos que sí necesitan criterio."',
          org: "Mercato+",
          detail: "E-commerce LATAM · 4.8k tickets/día"
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
      title: ["Three processes", "already running on their own."],
      cases: [
        {
          vertical: "Healthcare · Clinics",
          value: "-83",
          unit: "%",
          what: "Appointment booking, confirmation, and rescheduling.",
          quote:
            '"We went from 28% no-shows to 5%. The agent confirms, reschedules, and sends reminders without the team touching a phone."',
          org: "Red Vital",
          detail: "14 branches · 8 specialties"
        },
        {
          vertical: "Support · Voice",
          value: "3.4",
          unit: "x",
          what: "Phone support and intelligent routing.",
          quote:
            '"The agent takes the call, identifies the reason, and routes it to the right human with full context. Dead time is gone."',
          org: "Salus Seguros",
          detail: "Mexico City · 740 calls/day"
        },
        {
          vertical: "Tickets · E-commerce",
          value: "91",
          unit: "%",
          what: "Ticket resolution without human escalation.",
          quote:
            '"9 out of 10 tickets are solved before the first human touch. My team focuses on the cases that truly require judgment."',
          org: "Mercato+",
          detail: "LATAM e-commerce · 4.8k tickets/day"
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
