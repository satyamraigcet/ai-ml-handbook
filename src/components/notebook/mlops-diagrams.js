import React from 'react';

function PenSvg({ children, viewBox = '0 0 640 220', label }) {
  return (
    <figure className="nb-mlops-diagram">
      <svg
        className="nb-plot nb-mlops-svg"
        viewBox={viewBox}
        role="img"
        aria-label={label}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round">
        {children}
      </svg>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}

function Box({ x, y, w, h, label, sub }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="Patrick Hand, Caveat, cursive"
        fontSize="15"
        fontWeight="700">
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontFamily="Patrick Hand, Caveat, cursive"
          fontSize="11">
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const ax = x2 - ux * 8;
  const ay = y2 - uy * 8;
  return (
    <g>
      <line x1={x1} y1={y1} x2={ax} y2={ay} />
      <path d={`M${x2} ${y2} L${x2 - ux * 10 - uy * 5} ${y2 - uy * 10 + ux * 5} L${x2 - ux * 10 + uy * 5} ${y2 - uy * 10 - ux * 5} Z`} fill="currentColor" stroke="none" />
    </g>
  );
}

/** Tip of the iceberg — model vs the hidden MLOps system (from screenshots). */
export function MlopsIceberg() {
  return (
    <PenSvg viewBox="0 0 520 280" label="The model is only the tip — MLOps is everything under the water">
      <ellipse cx="260" cy="70" rx="70" ry="28" />
      <text x="260" y="66" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="14" fontWeight="700">
        I trained a model!
      </text>
      <text x="260" y="82" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="11">
        (the tip people see)
      </text>
      <line x1="40" y1="110" x2="480" y2="110" strokeDasharray="6 5" opacity="0.7" />
      <text x="70" y="106" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        waterline
      </text>
      <path d="M120 110 L160 250 L360 250 L400 110 Z" opacity="0.95" />
      <text x="260" y="150" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="15" fontWeight="700">
        MLOps — the system behind it
      </text>
      <text x="260" y="175" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        data · features · tests · packaging · CI/CD
      </text>
      <text x="260" y="195" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        serving · scaling · security · monitoring
      </text>
      <text x="260" y="215" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        alerts · retraining
      </text>
    </PenSvg>
  );
}

/** Eight-step MLOps loop that repeats forever. */
export function MlopsLoopDiagram() {
  const steps = [
    { label: 'Plan', x: 70, y: 40 },
    { label: 'Collect', x: 200, y: 40 },
    { label: 'Prepare', x: 330, y: 40 },
    { label: 'Train', x: 460, y: 40 },
    { label: 'Validate', x: 460, y: 130 },
    { label: 'Deploy', x: 330, y: 130 },
    { label: 'Monitor', x: 200, y: 130 },
    { label: 'Improve', x: 70, y: 130 },
  ];
  return (
    <PenSvg viewBox="0 0 600 220" label="Eight steps that repeat forever — the world changes; keep the model honest">
      {steps.map((s) => (
        <Box key={s.label} x={s.x} y={s.y} w={100} h={44} label={s.label} />
      ))}
      <Arrow x1={170} y1={62} x2={200} y2={62} />
      <Arrow x1={300} y1={62} x2={330} y2={62} />
      <Arrow x1={430} y1={62} x2={460} y2={62} />
      <Arrow x1={510} y1={84} x2={510} y2={130} />
      <Arrow x1={460} y1={152} x2={430} y2={152} />
      <Arrow x1={330} y1={152} x2={300} y2={152} />
      <Arrow x1={200} y1={152} x2={170} y2={152} />
      <Arrow x1={120} y1={130} x2={120} y2={84} />
      <text x="300" y="205" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="13">
        → back through Plan · Collect · Prepare
      </text>
    </PenSvg>
  );
}

/** Asha ships a house-price model — flow from the screenshot. */
export function MlopsAshaFlow() {
  const steps = ['Plan', 'Git + DVC', 'MLflow', 'Docker', 'GitHub Actions', 'Canary', 'Grafana'];
  const w = 78;
  const gap = 12;
  const start = 16;
  return (
    <PenSvg viewBox="0 0 680 130" label="Asha ships a house-price model — Plan → … → Grafana → retrain">
      {steps.map((label, i) => {
        const x = start + i * (w + gap);
        return (
          <g key={label}>
            <Box x={x} y={28} w={w} h={40} label={label} />
            {i < steps.length - 1 ? <Arrow x1={x + w} y1={48} x2={x + w + gap} y2={48} /> : null}
          </g>
        );
      })}
      <path d="M620 68 C620 110, 40 110, 40 68" strokeDasharray="5 4" />
      <text x="330" y="118" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        *) retrain next month with new sales
      </text>
    </PenSvg>
  );
}

/** The MLOps staircase — Level 0 → 1 → 2 from the screenshot. */
export function MlopsStaircase() {
  return (
    <PenSvg viewBox="0 0 560 240" label="The MLOps staircase — climb one step when hand-work hurts more than automation">
      {/* steps */}
      <path d="M40 190 H180 V140 H320 V90 H460 V50 H520" />
      <line x1="40" y1="190" x2="40" y2="210" />
      <line x1="180" y1="140" x2="180" y2="210" />
      <line x1="320" y1="90" x2="320" y2="210" />
      <line x1="460" y1="50" x2="460" y2="210" />
      <line x1="40" y1="210" x2="520" y2="210" />
      {/* stick figure on level 0 */}
      <circle cx="90" cy="155" r="8" />
      <line x1="90" y1="163" x2="90" y2="182" />
      <line x1="90" y1="168" x2="78" y2="176" />
      <line x1="90" y1="168" x2="102" y2="176" />
      <line x1="90" y1="182" x2="80" y2="195" />
      <line x1="90" y1="182" x2="100" y2="195" />
      <text x="110" y="158" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="13" fontWeight="700">
        Level 0 — manual
      </text>
      <text x="110" y="176" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        notebooks, copy files by hand
      </text>
      <text x="200" y="118" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="13" fontWeight="700">
        Level 1 — automated training
      </text>
      <text x="200" y="136" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        a pipeline retrains with fresh data
      </text>
      <text x="340" y="68" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="13" fontWeight="700">
        Level 2 — automated CI/CD
      </text>
      <text x="340" y="86" fill="currentColor" stroke="none" fontFamily="Patrick Hand, Caveat, cursive" fontSize="12">
        tests, deploys, monitors, retrains
      </text>
      {/* flag on top */}
      <line x1="500" y1="50" x2="500" y2="28" />
      <path d="M500 28 L520 34 L500 40 Z" fill="currentColor" stroke="none" />
    </PenSvg>
  );
}

/** Your learning path — skill ladder from the screenshot. */
export function MlopsLearningPath() {
  const top = ['Python + SQL', 'Bash', 'Git', 'Docker'];
  const bottom = ['CI/CD', 'Cloud', 'Pipelines', 'Monitoring'];
  return (
    <PenSvg viewBox="0 0 640 170" label="Your learning path — skills in the order that pays off">
      {top.map((label, i) => {
        const x = 30 + i * 150;
        return (
          <g key={label}>
            <Box x={x} y={24} w={120} h={40} label={label} />
            {i < top.length - 1 ? <Arrow x1={x + 120} y1={44} x2={x + 150} y2={44} /> : null}
          </g>
        );
      })}
      <Arrow x1={555} y1={64} x2={555} y2={100} />
      {bottom.map((label, i) => {
        const x = 480 - i * 150;
        return (
          <g key={label}>
            <Box x={x} y={100} w={120} h={40} label={label} />
            {i < bottom.length - 1 ? <Arrow x1={x} y1={120} x2={x - 30} y2={120} /> : null}
          </g>
        );
      })}
    </PenSvg>
  );
}
