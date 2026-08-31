"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/content";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function trackConversion() {
  window.gtag_report_conversion?.();
  window.fbq?.("track", "Lead");
}

// Embed del calendario de centralize.es. form_embed.js escucha mensajes del iframe
// para ajustar su alto dinámicamente, por eso no se fuerza un height fijo acá.
const CENTRALIZE_EMBED_HTML = `<iframe src="https://link.centralize.es/widget/booking/ltur98fTS4F7fxTh1ZpD" allow="payment" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="ltur98fTS4F7fxTh1ZpD_1787952014678"></iframe><br><script src="https://link.centralize.es/js/form_embed.js" type="text/javascript"></script>`;

const agendaChecklist = [
  "Qué proceso querés optimizar",
  "Qué tareas consumen más tiempo",
  "Qué errores o demoras se generan hoy",
  "Qué sistemas y herramientas utilizás",
  "Qué posibilidades existen de automatización"
];

const workSteps = [
  {
    number: "01",
    title: "Entendemos el proceso",
    description: "Nos mostrás cómo trabajan hoy, dónde aparecen las demoras, errores o tareas repetitivas."
  },
  {
    number: "02",
    title: "Detectamos oportunidades",
    description:
      "Analizamos qué partes pueden automatizarse, integrarse o mejorarse utilizando tecnología e Inteligencia Artificial."
  },
  {
    number: "03",
    title: "Diseñamos la solución",
    description: "Definimos una solución adaptada a tu operación y a los sistemas que ya utiliza tu empresa."
  },
  {
    number: "04",
    title: "La implementamos",
    description: "Integramos y desarrollamos la solución para que forme parte del trabajo cotidiano de tu equipo."
  }
];

const improveItems = [
  {
    title: "Automatizar tareas repetitivas",
    description: "Carga de información, documentos, reportes, controles, seguimientos y tareas administrativas."
  },
  {
    title: "Reducir errores",
    description: "Menos carga manual, duplicación de información y procesos inconsistentes."
  },
  {
    title: "Integrar sistemas",
    description: "ERP, CRM, bases de datos, correo, WhatsApp y aplicaciones internas."
  },
  {
    title: "Aplicar Inteligencia Artificial",
    description: "Analizar documentos, clasificar información, responder consultas y asistir en decisiones."
  },
  {
    title: "Optimizar costos",
    description: "Procesos más rápidos y con menor necesidad de intervención manual."
  }
];

const improveExamples = [
  {
    image: "/images/casos/carga-facturas-proveedores.png",
    text: "Recepción y clasificación de facturas de proveedores, con carga automática en tu sistema contable o ERP."
  },
  {
    image: "/images/casos/autocompletado-presupuestos.png",
    text: "Autocompletado de presupuestos para reducir tareas manuales y acelerar la respuesta comercial."
  },
  {
    image: "/images/casos/envio-facturas.png",
    text: "Generación y envío automático de facturas a tus clientes."
  },
  {
    image: "/images/casos/seguimiento-presupuestos.png",
    text: "Seguimiento automático de presupuestos enviados y oportunidades comerciales sin respuesta."
  },
  {
    image: "/images/casos/clasificacion-consultas.png",
    text: "Registro y clasificación de consultas recibidas por WhatsApp, correo, formularios web o redes sociales."
  },
  {
    image: "/images/casos/extraccion-datos.png",
    text: "Extracción automática de datos desde PDFs, facturas, remitos, órdenes de compra y otros documentos."
  },
  {
    image: "/images/casos/reportes.png",
    text: "Generación automática de reportes administrativos y de gestión a partir de información dispersa en distintos sistemas o archivos."
  },
  {
    image: "/images/casos/integracion.png",
    text: "Integración entre Excel, ERP, CRM, correo, WhatsApp y otras herramientas para evitar copiar y pegar información manualmente."
  }
];

export function FirstContactPage() {
  return (
    <>
      <header className="nav fc-nav">
        <Link className="logo" href="/" aria-label="agentic4biz inicio">
          <Image src="/logotipo_transparente.png" alt="Agentic4Biz" width={2172} height={724} priority />
        </Link>
        <span />
        <a href="#agenda" className="cta" onClick={trackConversion}>
          Agendar
        </a>
      </header>

      <main className="fc-page">
        <section className="fc-hero">
          <div className="fc-hero-text">
            <h1 className="fc-hero-title">
              <span className="title-line">Automatizá procesos.</span>
              <span className="title-line">Ganá tiempo.</span>
              <span className="title-line">Reducí errores.</span>
            </h1>
            <p className="lede fc-lede">
              En Agentic4Biz analizamos cómo trabaja hoy tu empresa e implementamos soluciones de
              automatización e Inteligencia Artificial para simplificar tareas, reducir costos
              operativos y mejorar la eficiencia.
            </p>
            <div className="hero-btns fc-hero-btns">
              <a href="#agenda" className="cta1" onClick={trackConversion}>
                Agendar una conversación
              </a>
              <a href="#como-trabajamos" className="cta2">
                Ver cómo trabajamos
                <span aria-hidden="true"> ↘</span>
              </a>
            </div>
            <p className="fc-hero-tags">
              Automatización • Inteligencia Artificial • Integraciones • Software a medida
            </p>
          </div>
          <div className="fc-hero-media">
            <Image
              src="/images/hero-first-contact.png"
              alt="Agentic4Biz: automatización de procesos con Inteligencia Artificial"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 720px) 100vw, 480px"
            />
          </div>
        </section>

        <section className="fc-calendar" id="agenda">
          <div className="small-label">AGENDA / 02</div>
          <p className="fc-section-subhead">Elegí el día y horario que te resulte más cómodo.</p>
          <CentralizeEmbed />
          <h2 className="fc-calendar-title">Hablemos de tu proceso</h2>
          <p className="lede fc-lede">
            Agendá una conversación para contarnos qué tarea, proceso o problema operativo te
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
            Hablemos directamente de tu problema.
          </p>
        </section>

        <section className="fc-work" id="como-trabajamos">
          <div className="small-label">CÓMO TRABAJAMOS / 03</div>
          <h2 className="fc-section-title">No empezamos por la tecnología. Empezamos por tu problema.</h2>
          <p className="lede fc-lede">Cada empresa trabaja de una manera diferente.</p>
          <p className="lede fc-lede">Por eso no llegamos recomendando una herramienta o una plataforma.</p>
          <p className="lede fc-lede">
            Primero entendemos cómo funciona actualmente tu proceso, dónde se pierde tiempo y qué
            tareas pueden simplificarse.
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
          <div className="small-label">QUÉ PODEMOS MEJORAR / 04</div>
          <h2 className="fc-section-title">Hay muchos procesos que pueden trabajar mejor.</h2>
          <div className="fc-improve-grid">
            {improveItems.map((item) => (
              <div className="fc-improve-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="fc-section-subhead">Así se ve en la práctica, por ejemplo:</p>
          <div className="fc-cases-grid">
            {improveExamples.map((example) => (
              <article className="fc-case" key={example.text}>
                <div className="fc-case-media">
                  <Image
                    src={example.image}
                    alt={example.text}
                    width={1086}
                    height={1448}
                    sizes="(max-width: 720px) 90vw, (max-width: 1080px) 45vw, 22vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta fc-final-cta" id="contacto">
          <div className="small-label final-label">CONTACTO / 05</div>
          <h2 className="fc-final-title">¿Hay algún proceso en tu empresa que te esté haciendo perder tiempo?</h2>
          <p className="fc-final-lede">
            No necesitás tener definida la solución.
            <br />
            Contanos el problema. Nosotros analizamos cómo mejorarlo.
          </p>
          <a href="#agenda" className="big-button" onClick={trackConversion}>
            Agendar una conversación
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
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackConversion}>
                WhatsApp · +54 11 6532 2243
              </a>
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
          <code>src/components/landing/first-contact-page.tsx</code>) para activarlo.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackConversion} className="fc-fallback-link">
          Mientras tanto, escribinos por WhatsApp →
        </a>
      </div>
    );
  }

  return <div className="fc-calendar-embed" ref={containerRef} />;
}
