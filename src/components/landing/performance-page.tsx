"use client";

import { useMemo, useState } from "react";
import type { InputHTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/content";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

function formatCurrency(value: number) {
  return Math.round(value).toLocaleString("es-AR");
}

function buildWhatsAppUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function PerformancePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hours, setHours] = useState(120);
  const [rate, setRate] = useState(15000);
  const [percentage, setPercentage] = useState(60);

  const currentCost = hours * rate;
  const savings = currentCost * (percentage / 100);
  const whatsAppUrl = useMemo(() => {
    const message = `Hola! Calcule que mi proceso me cuesta $${formatCurrency(currentCost)}/mes (${hours} hs/mes a $${formatCurrency(rate)}/hora). Con un ${percentage}% de automatizacion ahorraria $${formatCurrency(savings)}/mes. Quiero saber si mi proceso puede automatizarse.`;
    return buildWhatsAppUrl(message);
  }, [currentCost, hours, percentage, rate, savings]);

  const closeMenu = () => setMenuOpen(false);
  const trackConversion = () => window.gtag_report_conversion?.();

  return (
    <>
      <header className="nav performance-nav">
        <Link className="logo" href="/" aria-label="agentic4biz inicio">
          <Image src="/logotipo.png" alt="Agentic4Biz" width={172} height={46} priority />
        </Link>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="performance-nav-links" aria-label="Performance">
          <Link href="/" onClick={closeMenu}>Inicio</Link>
          <a href="#calculadora" onClick={closeMenu}>Calculadora</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        <div className="nav-meta">
          <span>ES / EN</span>
          <a href="#calculadora" className="cta">Calcular ahorro</a>
        </div>
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Menu"
          aria-controls="performance-nav-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main className="performance-page">
        <section className="performance-hero">
          <div className="performance-kicker">
            <span className="bar" />
            Performance / Agentic4Biz
          </div>
          <h1 className="performance-title">
            Cuanto te cuestan hoy
            <br />
            tus tareas <span>repetitivas</span>?
          </h1>
          <p className="performance-lede">
            Ingresá el tiempo que tu equipo dedica a un proceso manual y estimá, en números,
            cuánto podrías ahorrar si automatizamos parte de esa operación.
          </p>
        </section>

        <section className="performance-calc" id="calculadora">
          <div className="small-label">Calculadora / costo de tu proceso actual</div>
          <div className="performance-calc-grid">
            <div className="performance-inputs">
              <CalculatorField
                label="Horas mensuales dedicadas al proceso"
                hint="Suma de todas las personas involucradas en el proceso, por mes."
                value={`${hours}`}
                unit="hs / mes"
                minLabel="10 hs"
                maxLabel="400 hs"
                rangeProps={{
                  min: 10,
                  max: 400,
                  step: 5,
                  value: hours,
                  onChange: (event) => setHours(Number(event.target.value))
                }}
              />
              <CalculatorField
                label="Costo hora estimado"
                hint="Sueldo, cargas sociales y costo operativo prorrateado por hora."
                value={`$${formatCurrency(rate)}`}
                minLabel="$2.000"
                maxLabel="$50.000"
                rangeProps={{
                  min: 2000,
                  max: 50000,
                  step: 500,
                  value: rate,
                  onChange: (event) => setRate(Number(event.target.value))
                }}
              />
            </div>
            <div className="performance-outputs">
              <div className="performance-out-row">
                <div className="performance-out-label">Costo actual del proceso</div>
                <div className="performance-out-num">${formatCurrency(currentCost)}</div>
                <div className="performance-out-sub">/ mes</div>
              </div>
              <div className="performance-out-row performance-out-row-last">
                <div className="performance-out-label">Ahorro potencial si automatizamos</div>
                <div className="performance-out-num save">${formatCurrency(savings)}</div>
                <div className="performance-out-sub">/ mes</div>
                <div className="performance-pct">
                  <label>
                    % del proceso automatizable
                    <span>{percentage}%</span>
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={90}
                    step={5}
                    value={percentage}
                    onChange={(event) => setPercentage(Number(event.target.value))}
                  />
                </div>
              </div>
              <a
                className="performance-calc-cta"
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                onClick={trackConversion}
              >
                Quiero saber si mi proceso puede automatizarse
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="performance-assumptions">
          <p>
            Estimación orientativa a partir de los datos ingresados. El porcentaje real de
            automatización depende del proceso puntual: lo definimos juntos en un diagnóstico de
            2 semanas, sin compromiso.
          </p>
        </section>

        <section className="performance-final" id="contacto">
          <div className="small-label final-label">Contacto / siguiente paso</div>
          <h2 className="huge-cta">
            Medir primero.
            <br />
            Automatizar después.
          </h2>
          <p className="performance-final-lede">
            Revisamos el proceso, validamos el potencial de ahorro y definimos una automatización
            que trabaje dentro de tu operación real.
          </p>
          <a className="big-button" href={whatsAppUrl} target="_blank" rel="noreferrer" onClick={trackConversion}>
            Reservar diagnóstico
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
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp · +54 11 6532 2243</a>
            </div>
          </div>
          <div>
            <div className="footer-h">Legal</div>
            <div className="footer-links">
              <a href="/politica-de-privacidad">Politica de Privacidad</a>
            </div>
          </div>
          <div>
            <div className="footer-h">2026</div>
            <div>Version 04.2</div>
          </div>
        </div>
      </footer>
    </>
  );
}

function CalculatorField({
  label,
  hint,
  value,
  unit,
  minLabel,
  maxLabel,
  rangeProps
}: {
  label: string;
  hint: string;
  value: string;
  unit?: string;
  minLabel: string;
  maxLabel: string;
  rangeProps: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="performance-field">
      <label>{label}</label>
      <div className="performance-field-hint">{hint}</div>
      <div className="performance-field-value">
        {value}
        {unit ? <span>{unit}</span> : null}
      </div>
      <input type="range" {...rangeProps} />
      <div className="performance-range-ends">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
