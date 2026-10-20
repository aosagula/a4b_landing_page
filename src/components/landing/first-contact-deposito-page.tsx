"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL, contentByLanguage } from "@/lib/content";
import { SuccessCasesSection } from "./success-cases-section";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// El Lead de Meta lo registra el calendario de centralize al confirmar la agenda.
function trackConversion() {
  window.gtag_report_conversion?.();
}

function trackHeroCta() {
  trackConversion();
  window.fbq?.("trackCustom", "cta_evaluar_caso");
}

// Embed del calendario de centralize.es. form_embed.js escucha mensajes del iframe
// para ajustar su alto dinámicamente, por eso no se fuerza un height fijo acá.
const CENTRALIZE_EMBED_HTML = `<iframe src="https://link.centralize.es/widget/booking/ltur98fTS4F7fxTh1ZpD" allow="payment" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="ltur98fTS4F7fxTh1ZpD_1787952014678"></iframe><br><script src="https://link.centralize.es/js/form_embed.js" type="text/javascript"></script>`;

const agendaChecklist = [
  "Qué proceso querés optimizar (pedidos, stock, despachos)",
  "Qué tareas consumen más tiempo hoy",
  "Qué errores o demoras se generan con la carga manual",
  "Qué sistemas usás (ERP, planillas, WhatsApp con clientes)",
  "Qué posibilidades existen de integración"
];

const workSteps = [
  {
    number: "01",
    title: "Entendemos tu operación",
    description: "Nos mostrás cómo circula hoy la información entre tu depósito, tus clientes y tus proveedores."
  },
  {
    number: "02",
    title: "Detectamos oportunidades",
    description: "Analizamos qué partes del proceso pueden automatizarse o integrarse sin romper lo que ya funciona."
  },
  {
    number: "03",
    title: "Diseñamos la solución",
    description: "Definimos una integración adaptada a tu operación y a los sistemas que ya usás, sin imponerte un ERP nuevo."
  },
  {
    number: "04",
    title: "La implementamos",
    description: "Integramos y desarrollamos la solución para que forme parte del trabajo diario de tu equipo de depósito."
  }
];

const improveItems = [
  {
    title: "Automatizar carga de pedidos",
    description: "De WhatsApp, mail o planillas al sistema, sin tipeo manual ni copiar y pegar."
  },
  {
    title: "Reducir errores de stock",
    description: "Menos discrepancias entre lo que dice el sistema y lo que hay en el depósito."
  },
  {
    title: "Integrar con tus clientes",
    description: "Que puedan consultar stock, pedidos y estados de entrega sin tener que llamarte."
  },
  {
    title: "Automatizar reportes",
    description: "De inventario, despachos y pendientes, sin armar planillas a mano."
  },
  {
    title: "Optimizar tiempos de entrega",
    description: "Menos demoras causadas por información que no llega a tiempo entre áreas."
  }
];

export function FirstContactDepositoPage() {
  const [showFabs, setShowFabs] = useState(false);
  const casosSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = casosSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFabs(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="nav fc-nav">
        <Link className="logo" href="/" aria-label="agentic4biz inicio">
          <Image src="/logotipo_transparente.png" alt="Agentic4Biz" width={2172} height={724} priority />
        </Link>
        <span />
        <a href="#agenda" className="cta" onClick={trackConversion}>
          Agendá una llamada gratis
        </a>
      </header>

      <main className="fc-page">
        <section className="fc-hero fc-hero-deposito">
          <div className="fc-hero-pill">Software a medida con garantía</div>
          <h1 className="fc-hero-title">
            <span className="title-line">Desarrollamos tu Software o App</span>
            <span className="title-line fc-title-accent">En Menos De 30 Días</span>
            <span className="title-line">O No Pagás.</span>
          </h1>
          <p className="fc-hero-claim">
            Construimos aplicaciones web, dashboards, CRMs y sistemas a medida para{" "}
            <strong>empresas que necesitan digitalizar procesos críticos</strong> en tiempo récord y con garantía real.
          </p>
          <div className="hero-btns fc-hero-btns">
            <a href="#agenda" className="cta1" onClick={trackHeroCta}>
              Agendá una llamada gratis <span aria-hidden="true">↗</span>
            </a>
            <a href="#casos" className="cta2">
              Ver algunos Casos de Éxito <span aria-hidden="true">↘</span>
            </a>
            <a href="#como-trabajamos" className="cta2">
              Ver servicios
            </a>
          </div>
          
        </section>

        <section className="fc-calendar fc-calendar-deposito" id="agenda">
          <div className="small-label">AGENDA / 02</div>
          <p className="fc-section-subhead">Elegí el día y horario que te resulte más cómodo.</p>
          <CentralizeEmbed />
          <h2 className="fc-calendar-title">Hablemos de tu operación</h2>
          <p className="lede fc-lede">
            Agendá una conversación para contarnos qué proceso de tu depósito o distribuidora te
            gustaría mejorar.
          </p>
          <p className="fc-section-subhead">En una primera charla buscamos entender:</p>
          <ul className="fc-list">
            {agendaChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="fc-calendar-note">
            Sin compromiso. Sin presentaciones comerciales interminables.
            <br />
            Hablemos directamente de tu operación.
          </p>
        </section>

        <div ref={casosSectionRef}>
          <SuccessCasesSection content={contentByLanguage.es} sectionId="casos" label="CASOS DE EXITO / 03" />
        </div>

        <section className="fc-work" id="como-trabajamos">
          <div className="small-label">CÓMO TRABAJAMOS / 04</div>
          <h2 className="fc-section-title">No empezamos por la tecnología. Empezamos por tu operación.</h2>
          <p className="lede fc-lede">Cada depósito y cada distribuidora trabaja de una manera diferente.</p>
          <p className="lede fc-lede">Por eso no llegamos recomendando un ERP nuevo bajo el brazo.</p>
          <p className="lede fc-lede">
            Primero entendemos cómo circula hoy la información entre tu depósito, tus clientes y tus
            proveedores, y dónde se generan los errores o las demoras.
          </p>
          <div className="steps fc-steps">
            {workSteps.map((step) => (
              <article className="step" key={step.number}>
                <div className="step-n">{step.number}</div>
                <h3 className="step-t">{step.title}</h3>
                <p className="step-d">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fc-improve">
          <div className="small-label">QUÉ PODEMOS MEJORAR / 05</div>
          <h2 className="fc-section-title">Hay muchos procesos de depósito que pueden trabajar mejor.</h2>
          <div className="fc-improve-grid">
            {improveItems.map((item) => (
              <div className="fc-improve-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta fc-final-cta" id="contacto">
          <div className="small-label final-label">CONTACTO / 06</div>
          <h2 className="fc-final-title">
            ¿Hay algún proceso en tu depósito o distribuidora que te esté haciendo perder tiempo?
          </h2>
          <p className="fc-final-lede">
            No necesitás tener definida la solución.
            <br />
            Contanos el problema. Nosotros analizamos cómo mejorarlo.
          </p>
          <a href="#agenda" className="big-button" onClick={trackConversion}>
            Agendá una llamada gratis
            <span className="big-button-arrow" aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="foot">
        <div className="footer-cols">
          <div>
            <div className="footer-h">A4B</div>
            <div>Agentes de IA para empresas que prefieren operar, no esperar.</div>
          </div>
          <div>
            <div className="footer-h">Contacto</div>
            <div className="footer-links">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram · @agentic4biz
              </a>
            </div>
          </div>
          <div>
            <div className="footer-h">Legal</div>
            <div className="footer-links">
              <a href="/politica-de-privacidad">Política de Privacidad</a>
            </div>
          </div>
          <div>
            <div className="footer-h">2026</div>
            <div>Versión 04.2</div>
          </div>
        </div>
      </footer>

      <a
        href="#agenda"
        className={`fc-agenda-fab${showFabs ? " is-visible" : ""}`}
        aria-label="Agendar una llamada"
        aria-hidden={!showFabs}
        tabIndex={showFabs ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10H4zm3 3h4v4H7v-4z" />
        </svg>
      </a>
    </>
  );
}

function CentralizeEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !CENTRALIZE_EMBED_HTML.trim()) return;

    const template = document.createElement("template");
    template.innerHTML = CENTRALIZE_EMBED_HTML;

    template.content.querySelectorAll("script").forEach((oldScript) => {
      const script = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => script.setAttribute(attr.name, attr.value));
      script.text = oldScript.textContent ?? "";
      oldScript.replaceWith(script);
    });

    container.innerHTML = "";
    container.appendChild(template.content);
  }, []);

  if (!CENTRALIZE_EMBED_HTML.trim()) {
    return (
      <div className="fc-calendar-placeholder">
        <p>Acá se va a mostrar el calendario de centralize.es.</p>
        <p>
          Pegá el código de embed en <code>CENTRALIZE_EMBED_HTML</code> (
          <code>src/components/landing/first-contact-deposito-page.tsx</code>) para activarlo.
        </p>
      </div>
    );
  }

  return <div className="fc-calendar-embed" ref={containerRef} />;
}
