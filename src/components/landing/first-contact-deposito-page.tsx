"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/content";

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

const improveExamples = [
  {
    image: "/images/casos/carga-facturas-proveedores.png",
    text: "Recepción y clasificación de facturas de proveedores, con carga automática en tu sistema."
  },
  {
    image: "/images/casos/extraccion-datos.png",
    text: "Extracción automática de datos desde remitos, órdenes de compra y otros documentos del depósito."
  },
  {
    image: "/images/casos/integracion.png",
    text: "Integración entre Excel, ERP, WhatsApp y otras herramientas para evitar copiar y pegar información manualmente."
  },
  {
    image: "/images/casos/reportes.png",
    text: "Generación automática de reportes de inventario y despachos a partir de información dispersa en distintos sistemas."
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
          Agendar consultoría gratis
        </a>
      </header>

      <main className="fc-page">
        <section className="fc-hero">
          <div className="small-label">EMPRESA LOGÍSTICA</div>
          <h1 className="fc-hero-title">
            <span className="title-line">Creamos una app a medida</span>
            <span className="title-line">para tu operación logística.</span>
          </h1>
          <p className="lede fc-lede">
            Digitalizá y centralizá documentos, personal, despachos, inventario, reportes e
            integraciones con tus clientes.
          </p>
          <p className="fc-hero-claim">Hecha a medida y funcionando en menos de 30 días.</p>
          <div className="hero-btns fc-hero-btns">
            <a href="#agenda" className="cta1" onClick={trackHeroCta}>
              Quiero evaluar mi caso
            </a>
          </div>
          <p className="fc-hero-note">
            En 20 minutos analizamos tu caso y te decimos si podemos resolverlo.
          </p>
        </section>

        <section className="fc-calendar" id="agenda">
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
          <h2 className="fc-final-title">
            ¿Hay algún proceso en tu depósito o distribuidora que te esté haciendo perder tiempo?
          </h2>
          <p className="fc-final-lede">
            No necesitás tener definida la solución.
            <br />
            Contanos el problema. Nosotros analizamos cómo mejorarlo.
          </p>
          <a href="#agenda" className="big-button" onClick={trackConversion}>
            Agendar consultoría gratis
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
