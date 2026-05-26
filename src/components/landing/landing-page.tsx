"use client";

import { useState, useRef, useEffect } from "react";
import {
  INSTAGRAM_URL,
  WHATSAPP_URL,
  contentByLanguage,
  languages,
  type LandingContent,
  type Language
} from "@/lib/content";

type ComparisonSide = "manual" | "agentic";

function LanguageSwitch({
  content,
  language,
  setLanguage
}: {
  content: LandingContent;
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="language-switch" aria-label={content.languageLabel}>
      {languages.map((item) => (
        <button
          className={item.code === language ? "active" : ""}
          type="button"
          key={item.code}
          aria-pressed={item.code === language}
          onClick={() => setLanguage(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparisonSide, setComparisonSide] = useState<ComparisonSide>("agentic");
  const [language, setLanguage] = useState<Language>("es");
  const content = contentByLanguage[language];

  const closeMenu = () => setMenuOpen(false);
  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="nav">
        <a className="logo" href="#inicio" aria-label="agentic4biz inicio">
          <img src="/logotipo.png" alt="Agentic4Biz" />
        </a>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-links" aria-label={content.navAria}>
          <div className="nav-mobile-tools">
            <LanguageSwitch content={content} language={language} setLanguage={changeLanguage} />
            <a href={WHATSAPP_URL} className="cta" target="_blank" rel="noreferrer" onClick={closeMenu}>
              {content.navCta}
            </a>
          </div>
          {content.navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-meta">
          <LanguageSwitch content={content} language={language} setLanguage={setLanguage} />
          <a href={WHATSAPP_URL} className="cta" target="_blank" rel="noreferrer">
            {content.navCta}
          </a>
        </div>
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={content.menuLabel}
          aria-controls="nav-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-number" aria-label={content.hero.numberLabel}>
              87<span className="pct">%</span>
            </div>
            <div className="hero-text">
              <div className="hero-tag">
                <span className="bar" />
                {content.hero.tag}
              </div>
              <h1 id="hero-title">
                {content.hero.title.map((line) => (
                  <span className="title-line" key={line}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="lede">{content.hero.lede}</p>
              <div className="hero-btns">
                <a href={WHATSAPP_URL} className="cta1" target="_blank" rel="noreferrer">
                  {content.hero.primaryCta}
                </a>
                <a href="#clientes" className="cta2">
                  {content.hero.secondaryCta}
                  <span aria-hidden="true"> ↘</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-foot" aria-label={content.marqueeAria}>
            <div className="marquee">
              <div className="marquee-track">
                {[...content.marqueeItems, ...content.marqueeItems].map((item, index) => (
                  <span className="marquee-item" key={`${item}-${index}`}>
                    {item}
                    <span className="marquee-sep">○</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="slab" id="producto">
          <div className="slab-label">{content.slab.label}</div>
          <div className="slab-text">
            {content.slab.beforeAgent}
            <span className="accent">{content.slab.agent}</span>
            {content.slab.middle}
            <span className="accent">{content.slab.without}</span>
            {content.slab.after}
          </div>
        </section>

        <ServicesSection content={content} />
        <ProcessSection content={content} />
        <CaseSection content={content} />
        <SuccessCasesSection content={content} />
        <ComparisonSection content={content} side={comparisonSide} setSide={setComparisonSide} />
        <FinalCta content={content} />
      </main>

      <footer className="foot">
        <div className="footer-cols">
          <div>
            <div className="footer-h">A4B</div>
            <div>{content.footer.description}</div>
          </div>
          <div>
            <div className="footer-h">{content.footer.contact}</div>
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
            <div className="footer-h">{content.footer.legal}</div>
            <div>{content.footer.legalText}</div>
          </div>
          <div>
            <div className="footer-h">2026</div>
            <div>{content.footer.version}</div>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.888a.5.5 0 0 0 .612.612l6.043-1.471A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.188-1.479l-.372-.22-3.85.937.955-3.775-.242-.389A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </a>

      <ChatbotWidget language={language} />
    </>
  );
}

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

function ChatbotWidget({ language }: { language: Language }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const [sessionId] = useState(() =>
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `a4b-${Date.now()}-${Math.random().toString(36).slice(2)}`
  );

  const uiText =
    language === "es"
      ? {
          title: "Asistente A4B",
          subtitle: "Consultas rápidas sobre automatización",
          placeholder: "Escribe tu mensaje...",
          send: "Enviar",
          empty: "Inicia la conversación y te respondemos al instante.",
          error: "No pude conectar con el asistente. Intenta de nuevo."
        }
      : {
          title: "A4B Assistant",
          subtitle: "Quick automation questions",
          placeholder: "Type your message...",
          send: "Send",
          empty: "Start the conversation and get an instant reply.",
          error: "Could not reach the assistant. Please try again."
        };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) {
      return;
    }

    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, language, sessionId })
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      const reply = response.ok ? data.reply : data.error;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: reply || uiText.error }
      ]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: uiText.error }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chatbot-widget ${open ? "open" : ""}`}>
      <button
        className="chatbot-toggle"
        type="button"
        aria-label={open ? "Cerrar asistente A4B" : "Abrir asistente A4B"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <svg className="chatbot-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6 L18 18" />
            <path d="M18 6 L6 18" />
          </svg>
        ) : (
          <svg className="chatbot-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2 V5" />
            <rect x="4" y="5" width="16" height="14" />
            <rect className="chatbot-icon-fill" x="8" y="10" width="2" height="2" />
            <rect className="chatbot-icon-fill" x="14" y="10" width="2" height="2" />
            <path d="M9 15 H15" />
          </svg>
        )}
      </button>
      {open && (
        <section className="chatbot-panel" aria-label={uiText.title}>
          <header>
            <h3>{uiText.title}</h3>
            <p>{uiText.subtitle}</p>
          </header>
          <div className="chatbot-messages">
            {messages.length === 0 ? <p className="chatbot-empty">{uiText.empty}</p> : null}
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`chatbot-bubble ${message.role}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input-row">
            <input
              type="text"
              value={input}
              placeholder={uiText.placeholder}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  void sendMessage();
                }
              }}
            />
            <button type="button" onClick={() => void sendMessage()} disabled={loading}>
              {loading ? "..." : uiText.send}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function ServicesSection({ content }: { content: LandingContent }) {
  return (
    <section className="services" id="servicios">
      <div className="services-head">
        <div>
          <div className="small-label">{content.services.label}</div>
          <h2>
            {content.services.title.map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="services-lede">{content.services.lede}</p>
      </div>
      <div className="services-grid">
        {content.services.items.map((service) => (
          <article className="service" key={service.number}>
            <div className="service-n">{service.number}</div>
            <div className="service-body">
              <h3 className="service-t">{service.title}</h3>
              <p className="service-d">{service.description}</p>
              <div className="service-meta">
                <span>{service.metaLabel}</span>
                {service.meta}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection({ content }: { content: LandingContent }) {
  return (
    <section className="process" id="proceso">
      <div className="process-head">
        <div>
          <div className="small-label">{content.process.label}</div>
          <h2>
            {content.process.title.map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>
      <div className="steps">
        {content.process.steps.map((step) => (
          <article className="step" key={step.number}>
            <div className="step-n">{step.number}</div>
            <div className="step-w">{step.week}</div>
            <h3 className="step-t">{step.title}</h3>
            <p className="step-d">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseSection({ content }: { content: LandingContent }) {
  return (
    <section className="case">
      <div className="small-label">{content.caseStudy.label}</div>
      <div className="case-grid">
        <div>
          <div className="case-big-num">
            {content.caseStudy.value}
            <span className="unit">{content.caseStudy.unit}</span>
          </div>
          <div className="case-big-label">
            {content.caseStudy.valueLabel.map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))}
          </div>
        </div>
        <div>
          <blockquote className="case-quote">{content.caseStudy.quote}</blockquote>
          <div className="case-author">
            <div className="case-author-name">{content.caseStudy.author}</div>
            <div className="case-author-role">{content.caseStudy.role}</div>
          </div>
          <div className="case-stats">
            {content.caseStudy.stats.map((stat) => (
              <div key={stat.label}>
                <div className="cs-num">{stat.value}</div>
                <div className="cs-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessCasesSection({ content }: { content: LandingContent }) {
  return (
    <section className="cases" id="clientes">
      <div className="cases-head">
        <div className="small-label">{content.success.label}</div>
        <h2>
          {content.success.title.map((line) => (
            <span className="title-line" key={line}>
              {line}
            </span>
          ))}
        </h2>
      </div>
      <div className="cases-grid">
        {content.success.cases.map((item) => (
          <article className="case-tile" key={item.org}>
            <div className="case-tile-vertical">{item.vertical}</div>
            <div className="case-tile-num">
              {item.value}
              <span className="case-tile-unit">{item.unit}</span>
            </div>
            <h3 className="case-tile-what">{item.what}</h3>
            <p className="case-tile-quote">{item.quote}</p>
            <div className="case-tile-org">
              {item.org}
              <br />
              <span>{item.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection({
  content,
  side,
  setSide
}: {
  content: LandingContent;
  side: ComparisonSide;
  setSide: (side: ComparisonSide) => void;
}) {
  return (
    <section className="comp" id="comparativa">
      <div className="comp-head">
        <div className="small-label">{content.comparison.label}</div>
        <div className="comp-toggle" aria-label={content.comparison.aria}>
          <button
            className={`comp-btn ${side === "manual" ? "active" : ""}`}
            type="button"
            onClick={() => setSide("manual")}
          >
            {content.comparison.manualButton}
          </button>
          <button
            className={`comp-btn ${side === "agentic" ? "active" : ""}`}
            type="button"
            onClick={() => setSide("agentic")}
          >
            {content.comparison.agenticButton}
          </button>
        </div>
      </div>
      <div>
        {content.comparison.rows.map((row) => {
          const isAgentic = side === "agentic";
          return (
            <div className="comp-row" key={row.label}>
              <div className="comp-label">{row.label}</div>
              <div className="comp-value-wrap">
                <div className={`comp-value ${isAgentic ? "good" : ""}`}>
                  {isAgentic ? row.agentic : row.manual}
                </div>
                {isAgentic ? <div className="comp-delta">{row.delta}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta({ content }: { content: LandingContent }) {
  return (
    <section className="final-cta" id="contacto">
      <div className="small-label final-label">{content.finalCta.label}</div>
      <h2 className="huge-cta">
        {content.finalCta.title.map((line) => (
          <span className="title-line" key={line}>
            {line}
          </span>
        ))}
      </h2>
      <a href={WHATSAPP_URL} className="big-button" target="_blank" rel="noreferrer">
        {content.finalCta.button}
        <span className="big-button-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </section>
  );
}
