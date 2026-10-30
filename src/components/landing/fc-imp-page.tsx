"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL, contentByLanguage } from "@/lib/content";
import { CentralizeEmbed } from "./first-contact-deposito-page";
import { SuccessCasesSection } from "./success-cases-section";

// El Lead de Meta lo registra el calendario de centralize al confirmar la agenda.
function trackConversion() {
  window.gtag_report_conversion?.();
}

function trackHeroCta() {
  trackConversion();
  window.fbq?.("trackCustom", "cta_evaluar_caso");
}

const pains = [
  {
    q: "Pagás horas que nadie trabajó",
    now: "Llegadas tarde, salidas antes de hora y ausencias sin aviso. Te enterás cuando el cliente llama.",
    fix: "Fichaje con GPS y selfie en cada sitio, alerta de ausencia y liquidación con las horas reales."
  },
  {
    q: "Un cliente se queja y no tenés cómo responder",
    now: "\"No limpiaron bien\", \"llegaron tarde\". Sin pruebas, una queja mal manejada te cuesta el contrato.",
    fix: "Llegada verificada, checklist de tareas y fotos de antes y después en el reporte del cliente."
  },
  {
    q: "¿Ese cliente te deja ganancia?",
    now: "Cotizás a ojo. Sin saber cuántas horas e insumos lleva cada servicio, perdés plata sin saberlo.",
    fix: "Costo real por cliente y por sitio: horas trabajadas más insumos consumidos en cada trabajo."
  },
  {
    q: "Todo pasa por tu WhatsApp",
    now: "Reservas, cambios, reclamos y quién va a dónde dependen de tu teléfono.",
    fix: "Tus clientes reservan en la app, tu equipo ve su turno en la suya y vos controlás todo desde un panel."
  },
  {
    q: "Equipos que no vuelven, insumos que se acaban",
    now: "La hidrolavadora que nadie devolvió y el cloro que se terminó justo el día del servicio grande.",
    fix: "Herramientas con QR y responsable, retiros de insumos por trabajo y alerta de stock mínimo."
  },
  {
    q: "Cobrar cuesta más que trabajar",
    now: "Servicios hechos que nadie facturó y clientes que discuten la factura porque no ven qué se hizo.",
    fix: "Cada servicio terminado queda listo para facturar, con su reporte como respaldo del cobro."
  }
];

const benefits = [
  { title: "Pagás las horas reales", description: "La liquidación semanal, quincenal o mensual sale del fichaje, no de lo que cada uno anota." },
  { title: "Cotizás con números", description: "Conocés el costo de insumos y horas de cada tipo de servicio." },
  { title: "Cuidás tus equipos", description: "Cada herramienta tiene responsable, historial y mantenimiento." },
  { title: "Tus clientes confían más", description: "Ven la llegada del equipo y reciben fotos del trabajo terminado." },
  { title: "Reaccionás a tiempo", description: "Alertas de tardanzas, salidas de sitio, equipos sin devolver y stock bajo." },
  { title: "Todo en un solo lugar", description: "Dejás de cruzar chats, libretas y hojas de Excel." }
];

const workSteps = [
  {
    number: "01",
    title: "Entendemos tu operación",
    description: "Nos mostrás cómo trabaja hoy tu equipo, dónde se pierde información y qué te cuesta plata."
  },
  {
    number: "02",
    title: "Diseñamos tu sistema",
    description: "Definimos pantallas, apps y alertas a la medida de tu negocio, no un sistema genérico."
  },
  {
    number: "03",
    title: "Lo construimos en menos de 30 días",
    description: "Te mostramos avances cada semana. Si no está en el plazo acordado, no pagás."
  },
  {
    number: "04",
    title: "Lo ponemos en marcha",
    description: "Cargamos tus datos, capacitamos a tu equipo y acompañamos los primeros días de uso."
  }
];

const NAV = ["Panel", "Personal", "Herramientas", "Insumos", "Reportes", "Configuración"];

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Laptop({ active, children }: { active: string; children: ReactNode }) {
  return (
    <div className="imp-laptop">
      <div className="imp-screen">
        <div className="m-side">
          <div className="m-logo">TODO IMPECABLE</div>
          {NAV.map((item) => (
            <div className={`m-nav${item === active ? " on" : ""}`} key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="m-main">{children}</div>
      </div>
    </div>
  );
}

function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="imp-phone">
      <div className="imp-screen">{children}</div>
    </div>
  );
}

function Kpis({ items }: { items: [string, string, string?][] }) {
  return (
    <div className="m-kpis">
      {items.map(([label, value, tone]) => (
        <div className="m-kpi" key={label}>
          <small>{label}</small>
          <b className={tone}>{value}</b>
        </div>
      ))}
    </div>
  );
}

function PhoneMap() {
  return (
    <div className="p-map">
      <svg viewBox="0 0 160 78" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="160" height="78" fill="#E4ECEF" />
        <path d="M0 28 L160 20" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M55 0 L62 78" stroke="#FFFFFF" strokeWidth="6" />
        <circle cx="95" cy="44" r="26" fill="#53D565" fillOpacity="0.2" stroke="#1B7F35" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="88" cy="50" r="5" fill="#1B7F35" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    </div>
  );
}

function Feature({
  tag,
  title,
  description,
  ticks,
  visualLabel,
  flip,
  children
}: {
  tag: string;
  title: string;
  description: string;
  ticks: string[];
  visualLabel: string;
  flip?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`imp-feature${flip ? " flip" : ""}`}>
      <div className="imp-feature-copy">
        <span className="imp-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="imp-ticks">
          {ticks.map((tick) => (
            <li key={tick}>
              <Tick />
              {tick}
            </li>
          ))}
        </ul>
      </div>
      <div className="imp-feature-visual" role="img" aria-label={visualLabel}>
        {children}
      </div>
    </div>
  );
}

export function FcImpPage() {
  const [showFabs, setShowFabs] = useState(false);
  const softwareSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = softwareSectionRef.current;
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
          Agendar una reunión
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
            Paneles de gestión, apps para tu equipo y apps para tus clientes, como{" "}
            <strong>Todo Impecable Gestión</strong>: el sistema que construimos para controlar personal, equipos,
            insumos y reservas de una empresa de limpieza.
          </p>
          <div className="hero-btns fc-hero-btns">
            <a href="#agenda" className="cta1" onClick={trackHeroCta}>
              Agendar una reunión <span aria-hidden="true">↗</span>
            </a>
            <a href="#software" className="cta2">
              Ver el software <span aria-hidden="true">↘</span>
            </a>
            <a href="#casos" className="cta2">
              Ver Casos de Éxito
            </a>
          </div>
        </section>

        <section className="fc-calendar fc-calendar-deposito" id="agenda">
          <div className="small-label">AGENDA / 02</div>
          <p className="fc-section-subhead">Elegí el día y horario que te resulte más cómodo.</p>
          <CentralizeEmbed />
        </section>

        <section className="imp-showcase" id="software" ref={softwareSectionRef}>
          <div className="small-label">EL SOFTWARE / 03</div>
          <h2 className="fc-section-title">Así se ve un sistema que construimos: Todo Impecable Gestión.</h2>
          <p className="lede fc-lede">
            Un panel web para la administración, una app para los operarios y otra para los clientes. Todo lo que
            pasa en la calle, visible desde la oficina. Las pantallas muestran datos de ejemplo.
          </p>

          <div className="imp-hero-visual" role="img" aria-label="Panel de gestión en una laptop y la app del operario en un celular">
            <Laptop active="Panel">
              <div>
                <div className="m-sub">Jueves · datos de ejemplo</div>
                <div className="m-title">Buenos días, Laura</div>
              </div>
              <Kpis
                items={[
                  ["Personal en turno", "12/14"],
                  ["Llegadas tarde", "2", "warn-t"],
                  ["Servicios hoy", "7"],
                  ["Insumos bajo mínimo", "3", "bad-t"]
                ]}
              />
              <div className="m-row2">
                <div className="m-card">
                  <h4>Servicios de hoy</h4>
                  <div className="m-line"><span>8:00 Torre Norte</span><span className="m-pill ok">En sitio</span></div>
                  <div className="m-line"><span>8:30 Fam. Rodríguez</span><span className="m-pill warn">Tarde 14 min</span></div>
                  <div className="m-line"><span>9:00 Local Av. Libertador</span><span className="m-pill ok">En sitio</span></div>
                  <div className="m-line"><span>14:00 Colegio San José</span><span className="m-pill info">Programado</span></div>
                </div>
                <div className="m-card">
                  <h4>Alertas</h4>
                  <div className="m-alert bad">Pedro S. salió de la geocerca 11:20</div>
                  <div className="m-alert bad">Hidrolavadora HL-02 sin devolver</div>
                  <div className="m-alert warn">3 insumos bajo mínimo</div>
                </div>
              </div>
            </Laptop>
            <Phone>
              <div className="p-head"><small>Hola, Yanina</small><b>Tu turno</b></div>
              <div className="p-body">
                <PhoneMap />
                <div className="p-okbar">Dentro del sitio · 35 m</div>
                <div className="p-btn">Marcar entrada</div>
              </div>
            </Phone>
          </div>

          <h3 className="imp-subtitle">Seis problemas que le cuestan plata a una empresa de servicios todos los meses</h3>
          <div className="imp-pains">
            {pains.map((pain) => (
              <article className="imp-pain" key={pain.q}>
                <div className="imp-pain-q">{pain.q}</div>
                <p className="imp-pain-now">{pain.now}</p>
                <p className="imp-pain-fix"><Tick />{pain.fix}</p>
              </article>
            ))}
          </div>

          <h3 className="imp-subtitle">Las pantallas</h3>

          <Feature
            tag="Personal"
            title="Asistencia por GPS y horario"
            description="Ves en el mapa quién está en cada sitio y te enterás al momento si alguien llega tarde o se va antes de terminar."
            ticks={[
              "Geocerca de 100 m por sitio, ajustable",
              "Horario semanal con horas programadas y horas reales",
              "Las horas reales salen listas para liquidar sueldos"
            ]}
            visualLabel="Pantalla de personal con mapa en vivo y lista de operarios en turno"
          >
            <Laptop active="Personal">
              <div className="m-title">Personal · en vivo</div>
              <div className="m-row2 grow">
                <div className="m-map">
                  <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="300" height="200" fill="#E4ECEF" />
                    <path d="M0 55 L300 40" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M0 125 L300 110" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M85 0 L100 200" stroke="#FFFFFF" strokeWidth="8" />
                    <path d="M200 0 L208 200" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M0 175 C80 185 200 165 300 182 L300 200 L0 200 Z" fill="#BFE2F2" />
                    <circle cx="120" cy="85" r="30" fill="#53D565" fillOpacity="0.18" stroke="#1B7F35" strokeWidth="1.5" strokeDasharray="5 4" />
                    <circle cx="112" cy="80" r="5" fill="#1B7F35" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="128" cy="92" r="5" fill="#1B7F35" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="235" cy="75" r="28" fill="#53D565" fillOpacity="0.18" stroke="#1B7F35" strokeWidth="1.5" strokeDasharray="5 4" />
                    <circle cx="230" cy="78" r="5" fill="#1B7F35" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="278" cy="115" r="6" fill="#B42318" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="170" cy="150" r="24" fill="#53D565" fillOpacity="0.18" stroke="#1B7F35" strokeWidth="1.5" strokeDasharray="5 4" />
                    <circle cx="172" cy="150" r="5.5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>
                <div className="m-card">
                  <h4>En turno ahora</h4>
                  <div className="m-line"><span>Pedro Sosa</span><span className="m-pill bad">Fuera 11:20</span></div>
                  <div className="m-line"><span>Carmen Vázquez</span><span className="m-pill warn">Tarde 14 min</span></div>
                  <div className="m-line"><span>Yanina Ríos</span><span className="m-pill ok">En sitio</span></div>
                  <div className="m-line"><span>Ramón Pérez</span><span className="m-pill ok">En sitio</span></div>
                  <div className="m-line"><span>Ana Martínez</span><span className="m-pill info">14:00</span></div>
                </div>
              </div>
            </Laptop>
          </Feature>

          <Feature
            flip
            tag="Herramientas"
            title="Cada equipo con dueño y ubicación"
            description="El operario escanea el QR al recibir y al devolver. Si una herramienta no vuelve al cerrar el turno, recibís una alerta."
            ticks={[
              "Estado: disponible, asignada, sin devolver o en mantenimiento",
              "Foto obligatoria en cada entrega y devolución",
              "Recordatorio de mantenimiento preventivo"
            ]}
            visualLabel="Pantalla de inventario de herramientas con estados y responsables"
          >
            <Laptop active="Herramientas">
              <div className="m-title">Herramientas</div>
              <Kpis items={[["Total", "46"], ["Disponibles", "24", "ok-t"], ["Asignadas", "18"], ["Mantenimiento", "3", "warn-t"]]} />
              <div className="m-card">
                <table className="m-table">
                  <thead>
                    <tr><th>Código</th><th>Herramienta</th><th>Estado</th><th>Asignada a</th><th>Sitio</th></tr>
                  </thead>
                  <tbody>
                    <tr className="flag"><td><b>HL-02</b></td><td>Hidrolavadora</td><td><span className="m-pill bad">Sin devolver</span></td><td>Ramón P.</td><td>Av. Libertador</td></tr>
                    <tr><td><b>AS-05</b></td><td>Aspiradora industrial</td><td><span className="m-pill info">Asignada</span></td><td>Yanina R.</td><td>Torre Norte</td></tr>
                    <tr><td><b>LU-01</b></td><td>Lustradora de pisos</td><td><span className="m-pill info">Asignada</span></td><td>Equipo B</td><td>Av. Libertador</td></tr>
                    <tr><td><b>IN-03</b></td><td>Inyectora-extractora</td><td><span className="m-pill ok">Disponible</span></td><td>—</td><td>Depósito</td></tr>
                    <tr><td><b>VA-02</b></td><td>Vaporizadora</td><td><span className="m-pill warn">Mantenimiento</span></td><td>—</td><td>Taller</td></tr>
                  </tbody>
                </table>
              </div>
            </Laptop>
          </Feature>

          <Feature
            tag="Insumos"
            title="Sabés cuánto cuesta atender a cada cliente"
            description="Cada retiro de cloro, desengrasante o bolsas queda ligado a un trabajo, con quién lo retiró y cuánto se llevó. Lo que sobra vuelve como devolución."
            ticks={[
              "Stock con alerta de mínimo para reponer a tiempo",
              "Consumo por cliente, por sitio y por servicio",
              "Alta de insumos con etiqueta QR y hoja de seguridad"
            ]}
            visualLabel="Pantalla de insumos con stock bajo mínimo y retiros por trabajo"
          >
            <Laptop active="Insumos">
              <div className="m-title">Insumos</div>
              <Kpis items={[["Activos", "32"], ["Bajo mínimo", "3", "bad-t"], ["Retiros hoy", "9"], ["Devoluciones", "2", "ok-t"]]} />
              <div className="m-card">
                <h4>Consumo por trabajo</h4>
                <table className="m-table">
                  <thead>
                    <tr><th>Hora</th><th>Trabajo</th><th>Insumo</th><th>Cantidad</th><th>Retiró</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>7:40</td><td>Torre Norte</td><td>Desengrasante</td><td><b>−4 L</b></td><td>Yanina R.</td></tr>
                    <tr><td>8:20</td><td>Fam. Rodríguez</td><td>Desinfectante</td><td><b>−2 L</b></td><td>Carmen V.</td></tr>
                    <tr><td>8:45</td><td>Av. Libertador</td><td>Bolsas 120 L</td><td><b>−2 paq.</b></td><td>Ramón P.</td></tr>
                    <tr><td>Ayer</td><td>Av. Libertador</td><td>Desengrasante</td><td><b className="ok-t">+2 L</b></td><td>Devolución</td></tr>
                  </tbody>
                </table>
              </div>
            </Laptop>
          </Feature>

          <Feature
            flip
            tag="Reportes"
            title="La liquidación sale sola: semana, quincena o mes"
            description="Elegís el período y ves por operario los días trabajados, las horas reales contra las programadas, las llegadas tarde, las ausencias y las horas extra."
            ticks={[
              "Períodos semanal, quincenal, mensual o por rango de fechas",
              "Descuentos por tardanza y recargos por horas extra según tus reglas",
              "Exportá a Excel o a PDF para que cada operario firme"
            ]}
            visualLabel="Reporte de liquidación quincenal con asistencia, tardanzas, ausencias y horas extra por operario"
          >
            <Laptop active="Reportes">
              <div className="m-head">
                <div>
                  <div className="m-sub">Liquidación · 1 al 15 de octubre</div>
                  <div className="m-title">Reportes</div>
                </div>
                <div className="m-seg"><span>Semana</span><span className="on">Quincena</span><span>Mes</span><span>Rango</span></div>
              </div>
              <Kpis items={[["Asistencia", "96%", "ok-t"], ["Llegadas tarde", "11", "warn-t"], ["Ausencias", "3", "bad-t"], ["Horas extra", "14,5 h"]]} />
              <div className="m-card">
                <table className="m-table">
                  <thead>
                    <tr><th>Operario</th><th>Días</th><th>Horas prog.</th><th>Horas reales</th><th>Tardanzas</th><th>Ausencias</th><th>Extra</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><b>Yanina Ríos</b></td><td>11</td><td>48</td><td>47,6</td><td>0</td><td>0</td><td>2,0 h</td></tr>
                    <tr><td><b>Carmen Vázquez</b></td><td>10</td><td>48</td><td>44,1</td><td><span className="m-pill warn">4 · 52 min</span></td><td>0</td><td>0</td></tr>
                    <tr className="flag"><td><b>Pedro Sosa</b></td><td>8</td><td>40</td><td>30,5</td><td><span className="m-pill warn">3 · 35 min</span></td><td><span className="m-pill bad">2</span></td><td>0</td></tr>
                    <tr><td><b>Ramón Pérez</b></td><td>11</td><td>64</td><td>70,0</td><td>1 · 6 min</td><td>0</td><td>6,0 h</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="m-actions">
                <span className="m-btn ghost">Exportar Excel</span>
                <span className="m-btn">PDF para firma</span>
              </div>
            </Laptop>
          </Feature>

          <Feature
            tag="Apps móviles"
            title="Una app para tu equipo, otra para tus clientes"
            description="El operario ve su turno, marca entrada y confirma las herramientas que recibió. Tu cliente reserva y sigue el servicio hasta recibir el reporte con fotos."
            ticks={[
              "Fichaje sin señal: se sincroniza al volver la conexión",
              "Reserva con precio estimado y pago en línea",
              "Fotos de antes y después y calificación del servicio"
            ]}
            visualLabel="App del operario para marcar entrada y app del cliente con el seguimiento del servicio"
          >
            <Phone>
              <div className="p-head"><small>Hola, Yanina · jueves</small><b>Tu turno de hoy</b></div>
              <div className="p-body">
                <div className="p-card"><strong>Torre Norte · piso 4</strong><span className="p-muted">8:00 – 12:00</span></div>
                <PhoneMap />
                <div className="p-okbar">Estás dentro del sitio · a 35 m</div>
                <div className="p-btn">Marcar entrada</div>
                <div className="p-card">
                  <strong>Herramientas asignadas</strong>
                  <span className="p-muted">AS-05 Aspiradora · escanear QR</span>
                  <span className="p-muted">KQ-11 Kit de químicos · recibido</span>
                </div>
              </div>
            </Phone>
            <Phone>
              <div className="p-head">
                <small>Sábado · Palermo</small>
                <b>Estamos limpiando tu hogar</b>
                <div className="p-bar"><span /></div>
              </div>
              <div className="p-body">
                <div className="p-card">
                  <div className="p-step"><span className="p-dot" /><span>Reserva confirmada</span></div>
                  <div className="p-step"><span className="p-dot" /><span>El equipo llegó 7:56 · verificado por GPS</span></div>
                  <div className="p-step"><span className="p-dot now" /><span><b>Limpieza en curso</b> · 6 de 10 tareas</span></div>
                  <div className="p-step"><span className="p-dot next" /><span className="p-muted">Reporte con fotos</span></div>
                </div>
                <div className="p-grid">
                  <div className="p-tile"><i />Limpieza profunda</div>
                  <div className="p-tile"><i />Post-obra</div>
                </div>
                <div className="p-btn blue">Ver reporte</div>
              </div>
            </Phone>
          </Feature>

          <h3 className="imp-subtitle">Menos llamadas, menos pérdidas, mejores precios</h3>
          <div className="fc-improve-grid imp-benefits">
            {benefits.map((item) => (
              <div className="fc-improve-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <SuccessCasesSection content={contentByLanguage.es} sectionId="casos" label="CASOS DE EXITO / 04" />

        <section className="fc-work" id="como-trabajamos">
          <div className="small-label">CÓMO TRABAJAMOS / 05</div>
          <h2 className="fc-section-title">Tu sistema, funcionando en menos de 30 días.</h2>
          <p className="lede fc-lede">
            No vendemos un sistema genérico. Construimos el tuyo, a partir de cómo trabaja tu equipo hoy.
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

        <section className="final-cta fc-final-cta" id="contacto">
          <div className="small-label final-label">CONTACTO / 06</div>
          <h2 className="fc-final-title">¿Querés ver tu empresa funcionando así?</h2>
          <p className="fc-final-lede">
            No necesitás tener definida la solución.
            <br />
            Contanos tu operación. Nosotros diseñamos el sistema.
          </p>
          <a href="#agenda" className="big-button" onClick={trackConversion}>
            Agendar una reunión
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
        aria-label="Agendar una reunión"
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
