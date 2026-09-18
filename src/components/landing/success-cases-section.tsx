"use client";

import Image from "next/image";
import type { LandingContent } from "@/lib/content";

const SUCCESS_CASES_COLUMNS = 2;

function CaseTile({ content, item }: { content: LandingContent; item: LandingContent["success"]["cases"][number] }) {
  return (
    <article className="case-tile">
      <div className="case-tile-vertical">
        {item.org} · {item.tags}
      </div>
      <div className="case-tile-media">
        <Image
          src={item.image}
          alt={`${item.org} · ${item.title}`}
          width={1200}
          height={600}
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </div>
      <h3 className="case-tile-what">{item.title}</h3>
      <div className="case-tile-field">
        <div className="case-tile-field-label">{content.success.fieldLabels.challenge}</div>
        <p className="case-tile-field-text">{item.challenge}</p>
      </div>
      <div className="case-tile-field">
        <div className="case-tile-field-label">{content.success.fieldLabels.solution}</div>
        <p className="case-tile-field-text">{item.solution}</p>
      </div>
      <div className="case-tile-field">
        <div className="case-tile-field-label">{content.success.fieldLabels.result}</div>
        <p className="case-tile-field-text">{item.result}</p>
      </div>
      <div className="case-tile-org">
        {item.org}
        <br />
        <span>{item.detail}</span>
      </div>
    </article>
  );
}

export function SuccessCasesSection({
  content,
  sectionId = "clientes",
  label
}: {
  content: LandingContent;
  sectionId?: string;
  label?: string;
}) {
  const remainder = content.success.cases.length % SUCCESS_CASES_COLUMNS;
  const gridCases = remainder === 0 ? content.success.cases : content.success.cases.slice(0, -remainder);
  const soloCases = remainder === 0 ? [] : content.success.cases.slice(-remainder);

  return (
    <section className="cases" id={sectionId}>
      <div className="cases-head">
        <div>
          <div className="small-label">{label ?? content.success.label}</div>
          <h2>
            {content.success.title.map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))}
          </h2>
        </div>
        <p className="cases-lede">{content.success.lede}</p>
      </div>
      <div className="cases-grid">
        {gridCases.map((item) => (
          <CaseTile content={content} item={item} key={`${item.org}-${item.title}`} />
        ))}
      </div>
      {soloCases.length > 0 && (
        <div className="cases-grid-solo">
          {soloCases.map((item) => (
            <CaseTile content={content} item={item} key={`${item.org}-${item.title}`} />
          ))}
        </div>
      )}
    </section>
  );
}
