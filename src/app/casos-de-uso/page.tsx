import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Uso · Agentic4Biz",
  description:
    "Portfolio de proyectos de automatización e inteligencia artificial aplicados a negocios reales: VACLOG y Uranga Trading.",
  alternates: { canonical: "/casos-de-uso" },
  robots: { index: true, follow: true }
};

export default function CasosDeUso() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .casos-uso-doc, .casos-uso-doc *, .casos-uso-doc *::before, .casos-uso-doc *::after {
          box-sizing: border-box;
        }

        .casos-uso-doc {
          --navy:   #103D6A;
          --blue:   #0F56C4;
          --cyan:   #21A8E8;
          --teal:   #36D0CC;
          --navy-d: #0A1E5E;
          --white:  #FFFFFF;
          --ink:    #29364F;
          --muted:  #6E7E96;
          --card-bd:#D9E6F8;
          --card-bg:#F5F9FF;
          --font-h: 'Montserrat', sans-serif;
          --font-b: 'Inter', sans-serif;

          font-family: var(--font-b);
          background: #EEF2F8;
          color: var(--ink);
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          padding: 12mm 0;
        }

        /* === A4 page shells === */
        .casos-uso-doc .page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto 12mm;
          background: white;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(10,30,94,.14);
        }

        @media print {
          .casos-uso-doc { background: white; padding: 0; }
          .casos-uso-doc .page { margin: 0; box-shadow: none; page-break-after: always; }
          .casos-uso-doc .page:last-child { page-break-after: auto; }
        }

        /* ======================================
           PAGE 1 — PORTADA
        ====================================== */
        .casos-uso-doc .cover {
          background: linear-gradient(135deg, #36D0CC 0%, #219DFA 45%, #0F56C4 75%, #0A1E5E 100%);
          display: flex;
          flex-direction: column;
          height: 297mm;
        }

        .casos-uso-doc .cover-header {
          padding: 14mm 16mm 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .casos-uso-doc .cover-logo img { height: 38px; display: block; }

        .casos-uso-doc .cover-badge {
          background: rgba(255,255,255,.15);
          border: 1px solid rgba(255,255,255,.3);
          color: white;
          font-family: var(--font-h);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 5px 14px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .casos-uso-doc .cover-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 16mm 0 16mm;
        }

        .casos-uso-doc .cover-eyebrow {
          font-family: var(--font-h);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .casos-uso-doc .cover-title {
          font-family: var(--font-h);
          font-size: 38px;
          font-weight: 800;
          color: white;
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .casos-uso-doc .cover-title span { color: var(--teal); }

        .casos-uso-doc .cover-subtitle {
          font-family: var(--font-b);
          font-size: 14px;
          color: rgba(220,235,255,.88);
          line-height: 1.7;
          max-width: 130mm;
          margin-bottom: 36px;
          font-style: italic;
        }

        .casos-uso-doc .cover-divider {
          width: 48px;
          height: 3px;
          background: var(--teal);
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .casos-uso-doc .cover-projects-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 48px;
        }

        .casos-uso-doc .cover-project-item {
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(54,208,204,.35);
          border-radius: 10px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .casos-uso-doc .cover-project-num {
          font-family: var(--font-h);
          font-size: 22px;
          font-weight: 800;
          color: var(--teal);
          min-width: 32px;
        }

        .casos-uso-doc .cover-project-info { flex: 1; }

        .casos-uso-doc .cover-project-company {
          font-family: var(--font-h);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .casos-uso-doc .cover-project-name {
          font-family: var(--font-h);
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .casos-uso-doc .cover-project-desc {
          font-family: var(--font-b);
          font-size: 11px;
          color: rgba(220,235,255,.75);
          margin-top: 2px;
        }

        .casos-uso-doc .cover-footer {
          padding: 0 16mm 14mm;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,.12);
          padding-top: 12px;
        }

        .casos-uso-doc .cover-footer-url {
          font-family: var(--font-h);
          font-size: 11px;
          font-weight: 600;
          color: rgba(220,235,255,.7);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .casos-uso-doc .cover-footer-url::before {
          content: '';
          display: inline-block;
          width: 10px; height: 10px;
          background: var(--teal);
          border-radius: 50%;
        }

        /* ======================================
           PROJECT PAGES (page 2 & 3)
        ====================================== */
        .casos-uso-doc .project-page {
          display: flex;
          flex-direction: column;
          min-height: 297mm;
        }

        /* ---- top bar ---- */
        .casos-uso-doc .project-topbar {
          background: linear-gradient(90deg, var(--navy) 0%, var(--blue) 100%);
          padding: 10mm 16mm 8mm;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .casos-uso-doc .project-topbar-logo img { height: 28px; }

        .casos-uso-doc .project-topbar-badge {
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(54,208,204,.4);
          color: var(--teal);
          font-family: var(--font-h);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 4px 12px;
          border-radius: 16px;
          text-transform: uppercase;
        }

        /* ---- project header card ---- */
        .casos-uso-doc .project-header {
          background: var(--navy-d);
          padding: 8mm 16mm 9mm;
          position: relative;
        }

        .casos-uso-doc .project-header::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--teal), var(--cyan), var(--blue));
        }

        .casos-uso-doc .project-company-label {
          font-family: var(--font-h);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .casos-uso-doc .project-title {
          font-family: var(--font-h);
          font-size: 26px;
          font-weight: 800;
          color: white;
          margin-bottom: 4px;
        }
        .casos-uso-doc .project-title span { color: var(--teal); }

        .casos-uso-doc .project-company-full {
          font-family: var(--font-h);
          font-size: 12px;
          font-weight: 600;
          color: rgba(180,210,255,.7);
          margin-bottom: 10px;
        }

        .casos-uso-doc .project-desc-text {
          font-family: var(--font-b);
          font-size: 13px;
          color: rgba(220,235,255,.85);
          line-height: 1.65;
          max-width: 145mm;
        }

        /* ---- project body ---- */
        .casos-uso-doc .project-body {
          flex: 1;
          padding: 8mm 16mm 10mm;
          display: flex;
          flex-direction: column;
          gap: 7mm;
        }

        /* ---- section label ---- */
        .casos-uso-doc .section-label {
          font-family: var(--font-h);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: var(--cyan);
          text-transform: uppercase;
          margin-bottom: 4mm;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .casos-uso-doc .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--card-bd);
        }

        /* ---- image placeholder ---- */
        .casos-uso-doc .img-placeholder {
          background: var(--card-bg);
          border: 2px dashed var(--card-bd);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--muted);
          transition: border-color .2s;
        }

        .casos-uso-doc .img-placeholder.main {
          height: 68mm;
        }

        .casos-uso-doc .img-placeholder.secondary {
          height: 38mm;
        }

        .casos-uso-doc .img-placeholder-icon {
          width: 44px; height: 44px;
          background: rgba(33,168,232,.10);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .casos-uso-doc .img-placeholder-icon svg {
          width: 22px; height: 22px;
          stroke: var(--cyan);
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .casos-uso-doc .img-placeholder-label {
          font-family: var(--font-h);
          font-size: 11px;
          font-weight: 600;
          color: var(--muted);
        }

        .casos-uso-doc .img-placeholder-hint {
          font-family: var(--font-b);
          font-size: 10px;
          color: #B0BECD;
          text-align: center;
        }

        /* ---- two-col grid for secondary images ---- */
        .casos-uso-doc .img-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5mm;
        }

        /* ---- metadata strip ---- */
        .casos-uso-doc .meta-strip {
          display: flex;
          gap: 4mm;
        }

        .casos-uso-doc .meta-chip {
          background: var(--card-bg);
          border: 1px solid var(--card-bd);
          border-radius: 8px;
          padding: 6px 14px;
          font-family: var(--font-h);
          font-size: 10px;
          font-weight: 700;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .casos-uso-doc .meta-chip .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--cyan);
          flex-shrink: 0;
        }

        /* ---- notes area ---- */
        .casos-uso-doc .notes-area {
          background: var(--card-bg);
          border: 1px solid var(--card-bd);
          border-left: 3px solid var(--teal);
          border-radius: 0 8px 8px 0;
          padding: 10px 14px;
          min-height: 18mm;
        }

        .casos-uso-doc .notes-label {
          font-family: var(--font-h);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--teal);
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .casos-uso-doc .notes-lines {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .casos-uso-doc .note-line {
          height: 1px;
          background: #D5E4F5;
          border-radius: 1px;
        }

        /* ---- page footer ---- */
        .casos-uso-doc .project-footer {
          background: var(--navy-d);
          padding: 5mm 16mm;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .casos-uso-doc .project-footer-url {
          font-family: var(--font-h);
          font-size: 10px;
          font-weight: 600;
          color: rgba(180,210,255,.65);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .casos-uso-doc .project-footer-url::before {
          content: '';
          width: 8px; height: 8px;
          background: var(--teal);
          border-radius: 50%;
          display: inline-block;
        }

        .casos-uso-doc .project-footer-pgnum {
          font-family: var(--font-h);
          font-size: 10px;
          font-weight: 700;
          color: rgba(180,210,255,.45);
          letter-spacing: 1px;
        }
      `}</style>

      <div className="casos-uso-doc">
        {/* ============================================================
             PAGE 1 — PORTADA
        ============================================================ */}
        <div className="page cover">
          <div className="cover-header">
            <div className="cover-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/casos-de-uso/logo-white.png" alt="Agentic4Biz" />
            </div>
            <div className="cover-badge">Casos de Uso</div>
          </div>

          <div className="cover-body">
            <div className="cover-eyebrow">Portfolio de proyectos</div>
            <h1 className="cover-title">
              Automatización <span>aplicada</span>
              <br />a negocios reales.
            </h1>
            <p className="cover-subtitle">
              Soluciones de inteligencia artificial y automatización diseñadas para procesos
              operativos concretos, con resultados medibles desde la implementación.
            </p>

            <div className="cover-divider" />

            <div className="cover-projects-list">
              <div className="cover-project-item">
                <div className="cover-project-num">01</div>
                <div className="cover-project-info">
                  <div className="cover-project-company">VACLOG</div>
                  <div className="cover-project-name">Trazabilidad de Vehículos</div>
                  <div className="cover-project-desc">Seguimiento de vehículos y trámites</div>
                </div>
              </div>
              <div className="cover-project-item">
                <div className="cover-project-num">02</div>
                <div className="cover-project-info">
                  <div className="cover-project-company">URANGA TRADING</div>
                  <div className="cover-project-name">Portal de Exportaciones Agropecuarias</div>
                  <div className="cover-project-desc">
                    Portal de ventas y seguimiento de embarques agropecuarios
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cover-footer">
            <div className="cover-footer-url">www.agentic4biz.com</div>
            <div
              style={{
                fontFamily: "var(--font-h)",
                fontSize: "10px",
                color: "rgba(180,210,255,.5)",
                letterSpacing: "1px"
              }}
            >
              2025 · CASOS DE USO
            </div>
          </div>
        </div>

        {/* ============================================================
             PAGE 2 — VACLOG
        ============================================================ */}
        <div className="page">
          <div className="project-page">
            <div className="project-topbar">
              <div className="project-topbar-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/casos-de-uso/logo-white.png" alt="Agentic4Biz" />
              </div>
              <div className="project-topbar-badge">Caso de Uso 01 / 02</div>
            </div>

            <div className="project-header">
              <div className="project-company-label">VACLOG</div>
              <h2 className="project-title">
                Trazabilidad de <span>Vehículos</span>
              </h2>
              <div className="project-company-full">Empresa: VACLOG</div>
              <p className="project-desc-text">
                Sistema de seguimiento integral de vehículos y trámites, desarrollado para
                centralizar y automatizar el control de estados, documentación y gestión
                operativa en tiempo real.
              </p>
            </div>

            <div className="project-body">
              <div className="meta-strip">
                <div className="meta-chip">
                  <span className="dot" />
                  Trazabilidad
                </div>
                <div className="meta-chip">
                  <span className="dot" />
                  Vehículos
                </div>
                <div className="meta-chip">
                  <span className="dot" />
                  Automatización operativa
                </div>
              </div>

              <div>
                <div className="section-label">Pantalla principal</div>
                <div className="img-placeholder main">
                  <div className="img-placeholder-icon">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div className="img-placeholder-label">Insertar captura de pantalla principal</div>
                  <div className="img-placeholder-hint">
                    Vista general del sistema · dashboard · listado de vehículos
                  </div>
                </div>
              </div>

              <div>
                <div className="section-label">Vistas secundarias</div>
                <div className="img-grid-2">
                  <div className="img-placeholder secondary">
                    <div className="img-placeholder-icon">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="img-placeholder-label">Detalle de vehículo</div>
                    <div className="img-placeholder-hint">Ficha / estado / trámites</div>
                  </div>
                  <div className="img-placeholder secondary">
                    <div className="img-placeholder-icon">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="img-placeholder-label">Seguimiento de trámites</div>
                    <div className="img-placeholder-hint">Estados / historial / alertas</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="section-label">Notas del proyecto</div>
                <div className="notes-area">
                  <div className="notes-label">Observaciones</div>
                  <div className="notes-lines">
                    <div className="note-line" />
                    <div className="note-line" />
                    <div className="note-line" />
                    <div className="note-line" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-footer-url">www.agentic4biz.com</div>
              <div className="project-footer-pgnum">02 / 03</div>
            </div>
          </div>
        </div>

        {/* ============================================================
             PAGE 3 — URANGA TRADING
        ============================================================ */}
        <div className="page">
          <div className="project-page">
            <div className="project-topbar">
              <div className="project-topbar-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/casos-de-uso/logo-white.png" alt="Agentic4Biz" />
              </div>
              <div className="project-topbar-badge">Caso de Uso 02 / 02</div>
            </div>

            <div className="project-header">
              <div className="project-company-label">URANGA TRADING</div>
              <h2 className="project-title">
                Portal de <span>Exportaciones Agropecuarias</span>
              </h2>
              <div className="project-company-full">Empresa: Uranga Trading</div>
              <p className="project-desc-text">
                Portal integral de ventas y seguimiento de embarques agropecuarios, diseñado para
                centralizar la gestión comercial, documentación de exportación y trazabilidad de
                operaciones internacionales.
              </p>
            </div>

            <div className="project-body">
              <div className="meta-strip">
                <div className="meta-chip">
                  <span className="dot" />
                  Exportaciones
                </div>
                <div className="meta-chip">
                  <span className="dot" />
                  Agropecuario
                </div>
                <div className="meta-chip">
                  <span className="dot" />
                  Portal de ventas
                </div>
                <div className="meta-chip">
                  <span className="dot" />
                  Embarques
                </div>
              </div>

              <div>
                <div className="section-label">Pantalla principal</div>
                <div className="img-placeholder main">
                  <div className="img-placeholder-icon">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div className="img-placeholder-label">Insertar captura de pantalla principal</div>
                  <div className="img-placeholder-hint">
                    Dashboard del portal · listado de embarques · panel de ventas
                  </div>
                </div>
              </div>

              <div>
                <div className="section-label">Vistas secundarias</div>
                <div className="img-grid-2">
                  <div className="img-placeholder secondary">
                    <div className="img-placeholder-icon">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="img-placeholder-label">Seguimiento de embarques</div>
                    <div className="img-placeholder-hint">Estado / documentos / fechas</div>
                  </div>
                  <div className="img-placeholder secondary">
                    <div className="img-placeholder-icon">
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="img-placeholder-label">Módulo de ventas</div>
                    <div className="img-placeholder-hint">Pedidos / clientes / cotizaciones</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="section-label">Notas del proyecto</div>
                <div className="notes-area">
                  <div className="notes-label">Observaciones</div>
                  <div className="notes-lines">
                    <div className="note-line" />
                    <div className="note-line" />
                    <div className="note-line" />
                    <div className="note-line" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-footer-url">www.agentic4biz.com</div>
              <div className="project-footer-pgnum">03 / 03</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
