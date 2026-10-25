import React from 'react';

function Fig({ children, caption, viewBox = '0 0 520 160', className = 'nb-agentic-fig' }) {
  return (
    <figure className={className}>
      <svg
        className="nb-plot"
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-hidden="true">
        {children}
      </svg>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function T({ x, y, children, size = 12, anchor = 'middle', weight = 600 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill="currentColor"
      stroke="none"
      fontSize={size}
      fontFamily="Patrick Hand, Caveat, cursive"
      fontWeight={weight}>
      {children}
    </text>
  );
}

/** Ch 02 · capability ladder: Narrow → AGI → Superintelligence */
export function PlotCapabilityLadder() {
  return (
    <Fig caption="Capability ladder · today’s systems sit on the first step" viewBox="0 0 540 170">
      {[
        { t: 'Narrow AI', s: 'one job · today', x: 24, fill: true },
        { t: 'AGI', s: 'transfer · research goal', x: 196, fill: false },
        { t: 'Superintelligence', s: 'beyond human · hypothetical', x: 368, fill: false },
      ].map((b, i) => (
        <g key={b.t}>
          <rect
            x={b.x}
            y="36"
            width="148"
            height="88"
            rx="12"
            fill={b.fill ? 'currentColor' : 'none'}
            fillOpacity={b.fill ? 0.08 : 0}
          />
          <T x={b.x + 74} y="72" size="14" weight="700">
            {b.t}
          </T>
          <T x={b.x + 74} y="98" size="11">
            {b.s}
          </T>
          {i < 2 ? (
            <T x={b.x + 158} y="86" size="18">
              →
            </T>
          ) : null}
        </g>
      ))}
      <T x="270" y="24" size="12" weight="700">
        based on capability
      </T>
    </Fig>
  );
}

/** Ch 02 · functionality types strip */
export function PlotFunctionalityStrip() {
  return (
    <Fig caption="Functionality labels · teaching framework, not a proven path" viewBox="0 0 560 130">
      {[
        ['Reactive', 'no memory'],
        ['Limited memory', 'uses recent past'],
        ['Theory of mind', 'hypothetical'],
        ['Self-aware', 'hypothetical'],
      ].map(([t, s], i) => {
        const x = 16 + i * 136;
        return (
          <g key={t}>
            <rect x={x} y="28" width="118" height="72" rx="10" />
            <T x={x + 59} y="58" size="12" weight="700">
              {t}
            </T>
            <T x={x + 59} y="80" size="11">
              {s}
            </T>
            {i < 3 ? (
              <T x={x + 124} y="70" size="16">
                →
              </T>
            ) : null}
          </g>
        );
      })}
    </Fig>
  );
}

/** Ch 03 · three learning types */
export function PlotThreeLearnTypes() {
  return (
    <Fig caption="Three common ways a machine learns" viewBox="0 0 540 180">
      {[
        { t: 'Supervised', s: 'answer key', d: 'labeled → predict', x: 18 },
        { t: 'Unsupervised', s: 'find groups', d: 'raw → structure', x: 196 },
        { t: 'Reinforcement', s: 'stars & tries', d: 'act → reward', x: 374 },
      ].map((b) => (
        <g key={b.t}>
          <rect x={b.x} y="28" width="148" height="118" rx="12" />
          <T x={b.x + 74} y="58" size="14" weight="700">
            {b.t}
          </T>
          <T x={b.x + 74} y="84" size="12">
            {b.s}
          </T>
          <T x={b.x + 74} y="112" size="11">
            {b.d}
          </T>
        </g>
      ))}
    </Fig>
  );
}

/** Ch 03 · underfit / good fit / overfit */
export function PlotFitSketch() {
  return (
    <Fig caption="Too simple · just right · memorized the homework" viewBox="0 0 540 170">
      {[
        { t: 'Underfit', x: 20 },
        { t: 'Good fit', x: 196 },
        { t: 'Overfit', x: 372 },
      ].map((p, i) => (
        <g key={p.t}>
          <rect x={p.x} y="20" width="148" height="128" rx="10" opacity="0.35" />
          <T x={p.x + 74} y="42" size="13" weight="700">
            {p.t}
          </T>
          {/* axes */}
          <path d={`M${p.x + 22} 128 H${p.x + 128} M${p.x + 28} 52 V128`} opacity="0.45" />
          {/* dots */}
          <circle cx={p.x + 48} cy="108" r="3.5" fill="currentColor" stroke="none" />
          <circle cx={p.x + 68} cy="92" r="3.5" fill="currentColor" stroke="none" />
          <circle cx={p.x + 88} cy="100" r="3.5" fill="currentColor" stroke="none" />
          <circle cx={p.x + 108} cy="72" r="3.5" fill="currentColor" stroke="none" />
          {i === 0 ? <path d={`M${p.x + 34} 118 L${p.x + 122} 78`} /> : null}
          {i === 1 ? (
            <path d={`M${p.x + 34} 118 C${p.x + 60} 70 ${p.x + 90} 110 ${p.x + 122} 68`} />
          ) : null}
          {i === 2 ? (
            <path
              d={`M${p.x + 34} 112 C${p.x + 48} 60 ${p.x + 58} 130 ${p.x + 72} 88 C${p.x + 86} 50 ${p.x + 98} 120 ${p.x + 122} 66`}
            />
          ) : null}
        </g>
      ))}
    </Fig>
  );
}

/** Ch 11 · classic vs generative */
export function PlotClassicVsGen() {
  return (
    <Fig caption="Pick a label · or make something new" viewBox="0 0 520 150">
      <rect x="20" y="28" width="200" height="96" rx="12" />
      <T x="120" y="58" size="14" weight="700">
        Classic model
      </T>
      <T x="120" y="82" size="12">
        what is this? · how much?
      </T>
      <T x="120" y="104" size="11">
        spam / not · ₹42 lakh
      </T>
      <T x="250" y="84" size="20">
        vs
      </T>
      <rect x="300" y="28" width="200" height="96" rx="12" />
      <T x="400" y="58" size="14" weight="700">
        Generative AI
      </T>
      <T x="400" y="82" size="12">
        write · draw · compose
      </T>
      <T x="400" y="104" size="11">
        a new story or picture
      </T>
    </Fig>
  );
}

/** Ch 11 · next-token loop */
export function PlotTokenLoop() {
  return (
    <Fig caption="An LLM guesses the next token, appends it, and repeats" viewBox="0 0 560 140">
      {[
        ['Prompt', 16],
        ['Tokens', 126],
        ['Next token', 236],
        ['Append', 356],
        ['Repeat', 466],
      ].map(([t, x], i) => (
        <g key={t}>
          <rect x={x} y="40" width="92" height="52" rx="10" />
          <T x={x + 46} y="72" size="12" weight="700">
            {t}
          </T>
          {i < 4 ? (
            <T x={x + 98} y="72" size="16">
              →
            </T>
          ) : null}
        </g>
      ))}
      <path d="M512 92 C520 118 48 118 56 92" opacity="0.55" strokeDasharray="4 4" />
      <T x="280" y="128" size="11">
        loop until stop
      </T>
    </Fig>
  );
}

/** Ch 11 · family nest strip */
export function PlotGenFamily() {
  return (
    <Fig caption="AI → ML → LLM → GenAI" viewBox="0 0 520 110">
      {[
        ['AI', 24],
        ['ML', 144],
        ['LLM', 264],
        ['GenAI', 384],
      ].map(([t, x], i) => (
        <g key={t}>
          <rect x={x} y="28" width="96" height="48" rx="10" />
          <T x={x + 48} y="58" size="14" weight="700">
            {t}
          </T>
          {i < 3 ? (
            <T x={x + 104} y="58" size="16">
              →
            </T>
          ) : null}
        </g>
      ))}
    </Fig>
  );
}

/** Ch 13 / MCP · doors vs house */
export function PlotDoorsVsHouse() {
  return (
    <Fig caption="MCP opens the doors · LangChain helps build the house" viewBox="0 0 540 200">
      {/* MCP — the doors */}
      <rect x="24" y="18" width="228" height="164" rx="12" />
      <T x="138" y="48" size="14" weight="700">
        MCP · the doors
      </T>
      <path d="M68 72 H108 V118 H68 Z" />
      <path d="M118 72 H158 V118 H118 Z" />
      <path d="M168 72 H208 V118 H168 Z" />
      <T x="138" y="152" size="12">
        weather · drive · DB
      </T>

      {/* LangChain — the house */}
      <rect x="288" y="18" width="228" height="164" rx="12" />
      <T x="402" y="48" size="14" weight="700">
        LangChain · the house
      </T>
      <path d="M342 118 H462 V84 L402 58 Z" />
      <rect x="368" y="84" width="68" height="34" />
      <T x="402" y="152" size="12">
        models · tools · workflows
      </T>
    </Fig>
  );
}

/** Ch 14 · ReAct-style agent loop */
export function PlotReActLoop() {
  return (
    <Fig caption="Agent loop · perceive → reason → act → observe → stop" viewBox="0 0 560 160">
      {[
        { t: '1 Perceive', s: 'input + state', x: 16 },
        { t: '2 Reason', s: 'plan next step', x: 126 },
        { t: '3 Act', s: 'tool / reply', x: 236 },
        { t: '4 Observe', s: 'read result', x: 346 },
        { t: 'Stop', s: 'done / budget', x: 456 },
      ].map((b, i) => (
        <g key={b.t}>
          <rect x={b.x} y="36" width="92" height="72" rx="10" />
          <T x={b.x + 46} y="66" size="12" weight="700">
            {b.t}
          </T>
          <T x={b.x + 46} y="88" size="11">
            {b.s}
          </T>
          {i < 4 ? (
            <T x={b.x + 98} y="78" size="16">
              →
            </T>
          ) : null}
        </g>
      ))}
      <path d="M392 118 C360 148 200 148 172 118" opacity="0.55" strokeDasharray="4 4" />
      <T x="280" y="150" size="11">
        or loop again
      </T>
    </Fig>
  );
}
