import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidad · agentic4biz",
  description:
    "Conocé cómo Agentic4Biz recopila, utiliza y protege la información personal de sus usuarios.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true }
};

const sections = [
  {
    number: "01",
    title: "Introducción",
    content: (
      <p>
        En Agentic4Biz respetamos y protegemos la privacidad de las personas y empresas que
        interactúan con nuestros servicios, sitio web, formularios, campañas publicitarias y
        canales digitales.
        <br />
        <br />
        Esta Política de Privacidad describe qué información recopilamos, cómo la utilizamos y
        cuáles son los derechos de los usuarios respecto de sus datos personales.
      </p>
    )
  },
  {
    number: "02",
    title: "Quiénes somos",
    content: (
      <>
        <p style={{ fontWeight: 700 }}>Agentic4Biz</p>
        <p style={{ color: "var(--ink-soft)" }}>
          Transformación inteligente de procesos empresariales mediante automatización e
          inteligencia artificial.
        </p>
        <p>
          <a href="https://www.agentic4biz.com" style={{ color: "var(--accent)" }}>
            www.agentic4biz.com
          </a>
          <br />
          <a href="mailto:contacto@agentic4biz.com" style={{ color: "var(--accent)" }}>
            contacto@agentic4biz.com
          </a>
        </p>
      </>
    )
  },
  {
    number: "03",
    title: "Información que recopilamos",
    content: (
      <>
        <p>Podemos recopilar información cuando un usuario:</p>
        <ul className="policy-list">
          <li>completa formularios de contacto</li>
          <li>solicita información comercial</li>
          <li>interactúa con anuncios en Facebook o Instagram</li>
          <li>se comunica por WhatsApp, email o redes sociales</li>
          <li>navega por nuestro sitio web</li>
        </ul>
        <p>Los datos recopilados pueden incluir:</p>
        <ul className="policy-list">
          <li>nombre y apellido</li>
          <li>email</li>
          <li>teléfono o WhatsApp</li>
          <li>empresa</li>
          <li>cargo o función</li>
          <li>mensajes enviados voluntariamente</li>
          <li>dirección IP</li>
          <li>navegador y dispositivo</li>
          <li>información de navegación y uso del sitio</li>
        </ul>
      </>
    )
  },
  {
    number: "04",
    title: "Finalidad del uso de los datos",
    content: (
      <>
        <p>Utilizamos la información para:</p>
        <ul className="policy-list">
          <li>responder consultas</li>
          <li>coordinar reuniones o demos</li>
          <li>enviar propuestas comerciales</li>
          <li>brindar información sobre automatización e inteligencia artificial</li>
          <li>mejorar nuestros servicios</li>
          <li>optimizar campañas publicitarias</li>
          <li>analizar métricas de uso y conversión</li>
          <li>mejorar la experiencia del usuario</li>
        </ul>
      </>
    )
  },
  {
    number: "05",
    title: "Publicidad y tecnologías de seguimiento",
    content: (
      <>
        <p>Nuestro sitio puede utilizar:</p>
        <ul className="policy-list">
          <li>cookies</li>
          <li>Meta Pixel</li>
          <li>herramientas de analítica</li>
          <li>tecnologías de remarketing</li>
          <li>herramientas de automatización comercial</li>
        </ul>
        <p>Estas tecnologías permiten:</p>
        <ul className="policy-list">
          <li>medir conversiones</li>
          <li>optimizar campañas</li>
          <li>personalizar anuncios</li>
          <li>analizar comportamiento de navegación</li>
        </ul>
        <p>El usuario puede configurar o bloquear cookies desde su navegador.</p>
      </>
    )
  },
  {
    number: "06",
    title: "Compartición de información",
    content: (
      <>
        <p>Agentic4Biz no vende información personal.</p>
        <p>
          Podemos compartir datos con proveedores tecnológicos únicamente cuando sea necesario para
          operar nuestros servicios, por ejemplo:
        </p>
        <ul className="policy-list">
          <li>Meta (Facebook / Instagram)</li>
          <li>Google Analytics</li>
          <li>plataformas CRM</li>
          <li>herramientas de email marketing</li>
          <li>proveedores cloud y hosting</li>
          <li>plataformas de automatización e IA</li>
        </ul>
        <p>Cada proveedor procesa los datos conforme a sus propias políticas de privacidad.</p>
      </>
    )
  },
  {
    number: "07",
    title: "Seguridad de la información",
    content: (
      <>
        <p>
          Implementamos medidas técnicas y organizativas razonables para proteger la información
          contra:
        </p>
        <ul className="policy-list">
          <li>accesos no autorizados</li>
          <li>pérdida de datos</li>
          <li>alteraciones</li>
          <li>divulgación indebida</li>
          <li>uso malicioso</li>
        </ul>
        <p>
          Sin embargo, ningún sistema es completamente seguro y no podemos garantizar seguridad
          absoluta.
        </p>
      </>
    )
  },
  {
    number: "08",
    title: "Conservación de datos",
    content: (
      <>
        <p>Los datos serán conservados únicamente durante el tiempo necesario para:</p>
        <ul className="policy-list">
          <li>cumplir las finalidades descritas</li>
          <li>responder consultas</li>
          <li>mantener relaciones comerciales</li>
          <li>cumplir obligaciones legales</li>
        </ul>
      </>
    )
  },
  {
    number: "09",
    title: "Derechos del usuario",
    content: (
      <>
        <p>El usuario puede solicitar:</p>
        <ul className="policy-list">
          <li>acceso a sus datos</li>
          <li>rectificación</li>
          <li>actualización</li>
          <li>eliminación</li>
          <li>limitación del tratamiento</li>
          <li>oposición al uso comercial</li>
        </ul>
        <p>
          Para ejercer estos derechos puede contactarse a:{" "}
          <a href="mailto:contacto@agentic4biz.com" style={{ color: "var(--accent)" }}>
            contacto@agentic4biz.com
          </a>
        </p>
      </>
    )
  },
  {
    number: "10",
    title: "Enlaces a terceros",
    content: (
      <p>
        Nuestro sitio puede contener enlaces a plataformas o sitios externos. Agentic4Biz no es
        responsable por las políticas de privacidad ni por el contenido de dichos sitios.
      </p>
    )
  },
  {
    number: "11",
    title: "Cambios en esta política",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad periódicamente. La versión vigente estará
        siempre disponible en esta página.
      </p>
    )
  },
  {
    number: "12",
    title: "Contacto",
    content: (
      <>
        <p style={{ fontWeight: 700 }}>Agentic4Biz</p>
        <p>
          <a href="https://www.agentic4biz.com" style={{ color: "var(--accent)" }}>
            www.agentic4biz.com
          </a>
          <br />
          <a href="mailto:contacto@agentic4biz.com" style={{ color: "var(--accent)" }}>
            contacto@agentic4biz.com
          </a>
        </p>
      </>
    )
  },
  {
    number: "13",
    title: "Consentimiento",
    content: (
      <p>
        Al utilizar este sitio web, interactuar con nuestros formularios o comunicarse con
        Agentic4Biz, el usuario acepta esta Política de Privacidad.
      </p>
    )
  }
];

export default function PoliticaDePrivacidad() {
  return (
    <>
      <style>{`
        .policy-list {
          margin: 12px 0 20px;
          padding-left: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }
        .policy-list li {
          padding-left: 20px;
          position: relative;
          font-size: 15px;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .policy-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 600;
        }
        .policy-section {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 40px;
          padding: 48px 56px;
          border-bottom: 2px solid var(--ink);
          align-items: start;
        }
        .policy-section-number {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--accent);
          text-transform: uppercase;
          padding-top: 6px;
        }
        .policy-section-body h2 {
          margin: 0 0 20px;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          max-width: none;
        }
        .policy-section-body p {
          margin: 0 0 16px;
          font-size: 15px;
          color: var(--ink-soft);
          line-height: 1.6;
          max-width: 640px;
        }
        .policy-section-body p:last-child {
          margin-bottom: 0;
        }
        .policy-header {
          padding: 56px 56px 48px;
          border-bottom: 2px solid var(--ink);
        }
        .policy-header-label {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-soft);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .policy-header-label .bar {
          width: 32px;
          height: 2px;
          background: var(--accent);
          display: inline-block;
        }
        .policy-h1 {
          font-size: clamp(44px, 4vw, 72px);
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0 0 24px;
        }
        .policy-date {
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: var(--ink-mute);
          letter-spacing: 0.05em;
        }
        @media (max-width: 720px) {
          .policy-header {
            padding: 32px 20px 36px;
          }
          .policy-section {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 36px 20px;
          }
          .policy-section-body h2 {
            font-size: 22px;
            margin-bottom: 14px;
          }
        }
        @media (max-width: 1024px) and (min-width: 721px) {
          .policy-header,
          .policy-section {
            padding-left: 32px;
            padding-right: 32px;
          }
        }
      `}</style>

      <header className="nav">
        <Link className="logo" href="/" aria-label="agentic4biz inicio">
          <Image src="/logotipo.png" alt="Agentic4Biz" width={150} height={40} />
        </Link>
        <nav className="nav-links" aria-label="Principal">
          <Link href="/#servicios">01 Servicios</Link>
          <Link href="/#proceso">02 Proceso</Link>
          <Link href="/#clientes">03 Clientes</Link>
          <Link href="/#comparativa">04 Comparativa</Link>
        </nav>
        <div className="nav-meta">
          <a href={WHATSAPP_URL} className="cta" target="_blank" rel="noreferrer">
            Hablemos
          </a>
        </div>
      </header>

      <main>
        <div className="policy-header">
          <div className="policy-header-label">
            <span className="bar" />
            LEGAL · PRIVACIDAD
          </div>
          <h1 className="policy-h1">
            Política de
            <br />
            Privacidad
          </h1>
          <p className="policy-date">Última actualización: 27 de mayo de 2026</p>
        </div>

        {sections.map((section) => (
          <div key={section.number} className="policy-section">
            <div className="policy-section-number">{section.number}</div>
            <div className="policy-section-body">
              <h2>{section.title}</h2>
              {section.content}
            </div>
          </div>
        ))}
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
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
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
              <Link href="/politica-de-privacidad">Política de Privacidad</Link>
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
