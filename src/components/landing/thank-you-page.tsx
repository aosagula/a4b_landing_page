import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/content";

export function ThankYouPage() {
  return (
    <>
      <header className="nav fc-nav">
        <Link className="logo" href="/" aria-label="agentic4biz inicio">
          <Image src="/logotipo_transparente.png" alt="Agentic4Biz" width={2172} height={724} priority />
        </Link>
        <span />
        <Link href="/" className="cta">
          Volver al inicio
        </Link>
      </header>

      <main>
        <section className="final-cta ty-hero">
          <div className="ty-check" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
              <path
                d="M4 12.5L9.5 18L20 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="small-label final-label">CONTACTO AGENDADO</div>
          <h1 className="ty-title">Tu reunión quedó agendada correctamente.</h1>
          <p className="ty-lede">
            En breve, alguien de nuestro equipo de Agentic4Biz se va a comunicar con vos por
            WhatsApp para confirmar tu asistencia a la primera reunión de consultoría gratuita.
          </p>
          <p className="ty-lede">
            Por favor, estate atento al WhatsApp. Sin confirmación, vamos a cancelar la primera
            reunión.
          </p>
          <p className="ty-thanks">¡Muchas gracias!</p>
          <Link href="/" className="big-button">
            Volver al inicio
            <span className="big-button-arrow" aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="ty-audience">
          <div className="small-label">PARA QUIÉN ES</div>
          <h2 className="fc-section-title">¿Para quién es esta consultoría?</h2>
          <ul className="fc-list">
            <li>
              Empresas que estén buscando optimizar procesos manuales, reducir costos de
              contratación y minimizar los errores operativos.
            </li>
            <li>
              Empresas que necesiten integrar sus sistemas internamente o con sistemas de otras
              empresas.
            </li>
            <li>Pymes que buscan comenzar a digitalizar sus operaciones.</li>
          </ul>
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
