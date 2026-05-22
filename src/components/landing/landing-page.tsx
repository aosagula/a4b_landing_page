"use client";

import { useState } from "react";
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
        body: JSON.stringify({ message: trimmed, language })
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
      <button className="chatbot-toggle" type="button" onClick={() => setOpen((prev) => !prev)}>
        {open ? "×" : "💬"}
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
