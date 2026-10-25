import React from 'react';
import Link from '@docusaurus/Link';

const STEPS = [
  {
    id: 'field',
    n: '01–03',
    title: 'The field',
    line: 'Names, types, and how a machine learns.',
    to: '/docs/parts/part-1/01-ai-vs-ml-vs-dl',
    glyph: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <ellipse cx="32" cy="24" rx="28" ry="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="32" cy="26" rx="16" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="32" cy="28" rx="7" ry="4.5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'classical',
    n: '04–08',
    title: 'Classical ML',
    line: 'Pipeline, eight models, maths, formulas.',
    to: '/docs/parts/part-2/04-the-ml-pipeline',
    glyph: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path d="M8 36 L24 20 L36 28 L52 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="20" r="3.2" fill="currentColor" />
        <circle cx="36" cy="28" r="3.2" fill="currentColor" />
        <circle cx="52" cy="10" r="3.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'world',
    n: '09–10',
    title: 'In the world',
    line: 'Real apps and the toolkit behind them.',
    to: '/docs/parts/part-3/09-ai-in-the-wild-real-world-applications',
    glyph: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <rect x="10" y="10" width="18" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="34" y="16" width="20" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18h10M14 24h8M38 22h12M38 28h10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'modern',
    n: '11–15',
    title: 'Modern AI',
    line: 'GenAI, RAG, agents, and engineering.',
    to: '/docs/parts/part-4/11-generative-ai-and-llms',
    glyph: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path d="M12 34c8-16 16-22 24-22s16 6 24 22" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 34h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'after',
    n: '16–17',
    title: 'After the notebook',
    line: 'Ship it, watch it, use it responsibly.',
    to: '/docs/parts/part-5/16-mlops-from-one-notebook-to-a-real-product',
    glyph: (
      <svg viewBox="0 0 64 48" aria-hidden="true">
        <path d="M10 34h44M18 34V16h10v18M36 34V22h10v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 14l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function JourneyVisual() {
  return (
    <section className="jv" aria-labelledby="jv-title">
      <div className="jv__head">
        <p className="jv__eyebrow">The route through the book</p>
        <h2 id="jv-title">Five parts, one clear path</h2>
        <p className="jv__lead">
          Read left to right the first time. Jump in later wherever you are stuck.
        </p>
      </div>

      <ol className="jv__track">
        {STEPS.map((step, i) => (
          <li key={step.id} className="jv__step" style={{ '--i': i }}>
            <Link className="jv__card" to={step.to}>
              <span className="jv__glyph" aria-hidden="true">
                {step.glyph}
              </span>
              <span className="jv__n">{step.n}</span>
              <strong className="jv__title">{step.title}</strong>
              <span className="jv__line">{step.line}</span>
            </Link>
            {i < STEPS.length - 1 ? (
              <span className="jv__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 16" width="24" height="16">
                  <path d="M2 8h16M12 2l8 6-8 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="jv__end">
        Finish with{' '}
        <Link to="/docs/parts/back-matter/a-jargon-cards">jargon cards</Link>
        {' · '}
        <Link to="/docs/parts/back-matter/b-lock-it-in">lock it in</Link>
      </p>
    </section>
  );
}
