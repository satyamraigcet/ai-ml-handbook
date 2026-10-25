import React from 'react';

/**
 * Shows how each page of the notebook is meant to be read.
 */
export default function MethodVisual() {
  const steps = [
    {
      title: 'See the picture',
      body: 'A doodle, nest, or plot before the jargon.',
      icon: (
        <svg viewBox="0 0 72 56" aria-hidden="true">
          <rect x="6" y="6" width="40" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M10 32l10-8 8 6 10-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M52 18h14M52 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Read the plain line',
      body: 'One sentence that says what it really means.',
      icon: (
        <svg viewBox="0 0 72 56" aria-hidden="true">
          <path d="M10 16h48M10 28h40M10 40h34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10 16h20" stroke="var(--nb-hl)" strokeWidth="8" opacity="0.7" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Keep the formula',
      body: 'Only after the idea lands — the sheet, not the scare.',
      icon: (
        <svg viewBox="0 0 72 56" aria-hidden="true">
          <rect x="4" y="10" width="64" height="36" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <text
            x="36"
            y="34"
            textAnchor="middle"
            fill="currentColor"
            fontSize="12"
            fontFamily="Patrick Hand, cursive">
            y = wx+b
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="mv" aria-labelledby="mv-title">
      <div className="mv__head">
        <p className="mv__eyebrow">How this notebook works</p>
        <h2 id="mv-title">Three beats on every page</h2>
      </div>
      <ol className="mv__steps">
        {steps.map((s, i) => (
          <li key={s.title} className="mv__step" style={{ '--i': i }}>
            <span className="mv__icon">{s.icon}</span>
            <span className="mv__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
