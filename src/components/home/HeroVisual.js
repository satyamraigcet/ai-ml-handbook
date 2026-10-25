import React from 'react';

/**
 * Hero visual: AI ⊃ ML ⊃ DL nest + “pictures first” cue.
 * Colors come from theme CSS variables so light/dark both work.
 */
export default function HeroVisual() {
  return (
    <figure className="hv" aria-label="Artificial Intelligence contains Machine Learning, which contains Deep Learning">
      <svg
        className="hv__svg"
        viewBox="0 0 560 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img">
        <defs>
          <linearGradient id="hvWash" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="var(--nb-sky)" />
            <stop offset="100%" stopColor="var(--nb-sheet)" />
          </linearGradient>
        </defs>

        <rect
          x="8"
          y="8"
          width="544"
          height="404"
          rx="28"
          fill="url(#hvWash)"
          stroke="var(--nb-rule)"
          strokeWidth="1.5"
        />

        <g stroke="var(--nb-rule)" strokeWidth="1" opacity="0.7">
          <path d="M40 86h480M40 126h480M40 166h480M40 206h480M40 246h480M40 286h480M40 326h480" />
        </g>

        <g className="hv__nest" stroke="var(--nb-ink)" strokeWidth="2.4" strokeLinecap="round">
          <ellipse className="hv__ring hv__ring--ai" cx="300" cy="210" rx="196" ry="148" fill="var(--nb-sheet)" />
          <ellipse className="hv__ring hv__ring--ml" cx="300" cy="226" rx="132" ry="96" fill="var(--nb-sky)" />
          <ellipse className="hv__ring hv__ring--dl" cx="300" cy="238" rx="68" ry="48" fill="var(--nb-nest-mid)" />
        </g>

        <g fill="var(--nb-ink)" fontFamily="Caveat, Patrick Hand, cursive" textAnchor="middle">
          <text className="hv__label hv__label--ai" x="300" y="88" fontSize="30" fontWeight="700">
            Artificial Intelligence
          </text>
          <text className="hv__label hv__label--ml" x="300" y="160" fontSize="25" fontWeight="700">
            Machine Learning
          </text>
          <text className="hv__label hv__label--dl" x="300" y="234" fontSize="21" fontWeight="700">
            Deep
          </text>
          <text className="hv__label hv__label--dl2" x="300" y="256" fontSize="21" fontWeight="700">
            Learning
          </text>
        </g>

        <g className="hv__aside" fontFamily="Patrick Hand, cursive" fill="var(--nb-pen)">
          <path
            d="M52 100c22-26 48-32 66-6"
            stroke="var(--nb-pen)"
            strokeWidth="1.8"
            strokeDasharray="4 5"
            fill="none"
          />
          <text x="48" y="134" fontSize="16">
            The big idea
          </text>
          <text x="48" y="154" fontSize="16">
            of chapter 01
          </text>

          <rect
            x="42"
            y="298"
            width="128"
            height="60"
            rx="12"
            fill="var(--nb-soft)"
            stroke="var(--nb-ink)"
            strokeWidth="1.8"
          />
          <rect x="42" y="298" width="128" height="10" rx="0" fill="var(--nb-hl)" opacity="0.85" />
          <text x="54" y="334" fontSize="15" fill="var(--nb-ink)">
            Pictures first
          </text>
          <text x="54" y="354" fontSize="15" fill="var(--nb-ink)">
            then the idea
          </text>
        </g>

        <g
          className="hv__sketch"
          transform="translate(424 292)"
          stroke="var(--nb-ink)"
          strokeWidth="1.8"
          strokeLinecap="round">
          <rect x="0" y="0" width="86" height="66" rx="10" fill="var(--nb-sheet)" />
          <circle cx="24" cy="24" r="8" fill="none" />
          <path d="M12 48h28M54 18v34M64 28h14M64 40h14" />
          <circle cx="72" cy="54" r="7" fill="var(--nb-hl)" stroke="none" />
        </g>
      </svg>
      <figcaption className="hv__cap">
        AI is the whole field. Machine learning sits inside it. Deep learning sits inside that.
      </figcaption>
    </figure>
  );
}
