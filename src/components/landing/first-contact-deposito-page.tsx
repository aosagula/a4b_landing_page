"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { WHATSAPP_URL, INSTAGRAM_URL, contentByLanguage } from "@/lib/content";
import { SuccessCasesSection } from "./success-cases-section";

// Mismo pixel dedicado que first_contact. Si más adelante querés reportes
// separados para esta landing, creá un Pixel nuevo en Meta Business Manager
// y reemplazá este ID.
const DEPOSITO_META_PIXEL_ID = "1655722448999268";

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
  return (
    <>
      <Script id="meta-pixel-first-contact-deposito" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${DEPOSITO_META_PIXEL_ID}');
          fbq('trackSingle', '${DEPOSITO_META_PIXEL_ID}', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${DEPOSITO_META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

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

        <section className="fc-work" id="como-trabajamos">
          <div className="small-label">CÓMO TRABAJAMOS / 03</div>
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
          <div className="small-label">QUÉ PODEMOS MEJORAR / 04</div>
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

        <SuccessCasesSection content={contentByLanguage.es} sectionId="casos" />

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

      <a href="#agenda" className="fc-agenda-fab" aria-label="Agendar una llamada">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10H4zm3 3h4v4H7v-4z" />
        </svg>
      </a>

      <a
        href={WHATSAPP_URL}
        className="fc-whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        onClick={trackConversion}
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.888a.5.5 0 0 0 .612.612l6.043-1.471A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.188-1.479l-.372-.22-3.85.937.955-3.775-.242-.389A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
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
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackConversion} className="fc-fallback-link">
          Mientras tanto, escribinos por WhatsApp →
        </a>
      </div>
    );
  }

  return <div className="fc-calendar-embed" ref={containerRef} />;
}
