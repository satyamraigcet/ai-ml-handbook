import React from 'react';

function Frame({ children, label, w = 420, h = 220 }) {
  return (
    <svg
      className="nb-plot"
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={label}>
      <rect x="8" y="8" width={w - 16} height={h - 16} rx="10" opacity="0.35" />
      {children}
    </svg>
  );
}

function Tx({ x, y, children, size = 12, anchor = 'start', weight = 600 }) {
  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      stroke="none"
      fontSize={size}
      textAnchor={anchor}
      fontFamily="Patrick Hand, Caveat, cursive"
      fontWeight={weight}>
      {children}
    </text>
  );
}

export function PlotKnn() {
  return (
    <Frame label="KNN neighbourhood: K=3 inner circle and K=7 outer circle">
      <path d="M40 180 H380 M50 40 V180" opacity="0.55" />
      <Tx x="368" y="196" size="11">
        x₁
      </Tx>
      <Tx x="34" y="36" size="11">
        x₂
      </Tx>
      {/* class A circles */}
      <circle cx="150" cy="70" r="7" />
      <circle cx="175" cy="95" r="7" />
      <circle cx="130" cy="110" r="7" />
      <circle cx="200" cy="60" r="7" />
      {/* class B crosses */}
      <path d="M260 120 l14 14 M274 120 l-14 14" />
      <path d="M290 95 l14 14 M304 95 l-14 14" />
      <path d="M245 145 l14 14 M259 145 l-14 14" />
      <path d="M310 140 l14 14 M324 140 l-14 14" />
      <path d="M275 160 l14 14 M289 160 l-14 14" />
      {/* query */}
      <circle cx="220" cy="120" r="5" fill="currentColor" stroke="none" />
      <Tx x="228" y="116" size="13" weight="700">
        ?
      </Tx>
      <circle cx="220" cy="120" r="38" strokeDasharray="5 4" />
      <circle cx="220" cy="120" r="72" strokeDasharray="2 5" opacity="0.7" />
      <Tx x="268" y="92" size="11">
        K=3
      </Tx>
      <Tx x="300" y="58" size="11">
        K=7
      </Tx>
    </Frame>
  );
}

export function PlotTree() {
  return (
    <Frame label="Decision tree: rectangular regions and yes/no splits" w={440} h={240}>
      {/* scatter regions — left half */}
      <path d="M28 168 H200 M40 36 V168" opacity="0.5" />
      <path d="M110 36 V168" strokeDasharray="4 3" />
      <path d="M40 98 H200" strokeDasharray="4 3" />
      <circle cx="68" cy="66" r="5" />
      <circle cx="85" cy="78" r="5" />
      <path d="M140 52 l10 10 M150 52 l-10 10" />
      <path d="M160 70 l10 10 M170 70 l-10 10" />
      <rect x="60" y="116" width="10" height="10" />
      <rect x="78" y="134" width="10" height="10" />
      <path d="M145 120 l0 12 M139 126 h12" />
      <path d="M165 140 l0 12 M159 146 h12" />
      <Tx x="52" y="188" size="11">
        feature regions
      </Tx>
      {/* flowchart tree — kept inside frame (≤ x 424) */}
      <rect x="250" y="32" width="96" height="26" rx="6" />
      <Tx x="298" y="50" size="11" anchor="middle">
        Age &gt; 30?
      </Tx>
      <path d="M298 58 V78 M248 78 H348" />
      <path d="M248 78 V92 M348 78 V92" />
      <Tx x="238" y="90" size="10">
        No
      </Tx>
      <Tx x="354" y="90" size="10">
        Yes
      </Tx>
      <rect x="208" y="96" width="80" height="24" rx="6" />
      <Tx x="248" y="113" size="11" anchor="middle">
        Not Buy
      </Tx>
      <rect x="308" y="96" width="96" height="24" rx="6" />
      <Tx x="356" y="113" size="11" anchor="middle">
        Salary &gt; 50k?
      </Tx>
      <path d="M356 120 V140 M316 140 H396" />
      <path d="M316 140 V152 M396 140 V152" />
      <rect x="286" y="156" width="60" height="24" rx="6" />
      <rect x="366" y="156" width="60" height="24" rx="6" />
      <Tx x="316" y="173" size="11" anchor="middle">
        Buy
      </Tx>
      <Tx x="396" y="173" size="11" anchor="middle">
        Not Buy
      </Tx>
    </Frame>
  );
}

export function PlotForest() {
  return (
    <Frame label="Random Forest: tree 1, tree 2 dashed boundaries and solid final boundary">
      <path d="M40 180 H380 M50 40 V180" opacity="0.55" />
      <Tx x="368" y="196" size="11">
        x₁
      </Tx>
      <Tx x="34" y="36" size="11">
        x₂
      </Tx>
      {/* class 0 circles (left) */}
      <circle cx="105" cy="75" r="6" />
      <circle cx="130" cy="95" r="6" />
      <circle cx="115" cy="120" r="6" />
      <circle cx="150" cy="70" r="6" />
      {/* class 1 crosses (right) */}
      <path d="M255 85 l14 14 M269 85 l-14 14" />
      <path d="M280 115 l14 14 M294 115 l-14 14" />
      <path d="M260 140 l14 14 M274 140 l-14 14" />
      <path d="M300 95 l14 14 M314 95 l-14 14" />
      {/* tree 1 / tree 2 dashed, final solid */}
      <path d="M95 155 L245 45" strokeDasharray="5 4" opacity="0.75" />
      <path d="M80 130 L270 55" strokeDasharray="5 4" opacity="0.75" />
      <path d="M90 145 L255 50" />
      <Tx x="248" y="48" size="11">
        tree 1
      </Tx>
      <Tx x="278" y="68" size="11">
        tree 2
      </Tx>
      <Tx x="200" y="118" size="11" weight="700">
        final boundary
      </Tx>
      <Tx x="210" y="204" size="10" anchor="middle">
        Each tree learns differently; the ensemble combines them.
      </Tx>
    </Frame>
  );
}

export function PlotSvm() {
  return (
    <Frame label="Linear SVM margin and kernel SVM curved boundary" w={440} h={210}>
      <Tx x="120" y="28" size="12" anchor="middle" weight="700">
        Linear SVM
      </Tx>
      <Tx x="320" y="28" size="12" anchor="middle" weight="700">
        Kernel SVM
      </Tx>
      <path d="M40 170 H200 M50 40 V170" opacity="0.45" />
      <path d="M240 170 H400 M250 40 V170" opacity="0.45" />
      <path d="M55 150 L190 55" />
      <path d="M60 165 L195 70" strokeDasharray="4 3" />
      <path d="M50 135 L185 40" strokeDasharray="4 3" />
      <circle cx="80" cy="70" r="5" />
      <circle cx="95" cy="95" r="5" />
      <circle cx="70" cy="100" r="5" />
      <path d="M150 120 l10 10 M160 120 l-10 10" />
      <path d="M165 140 l10 10 M175 140 l-10 10" />
      <path d="M175 105 l10 10 M185 105 l-10 10" />
      <path d="M260 140 C290 40 350 40 390 130" />
      <circle cx="275" cy="90" r="5" />
      <circle cx="290" cy="115" r="5" />
      <circle cx="265" cy="120" r="5" />
      <path d="M350 70 l10 10 M360 70 l-10 10" />
      <path d="M365 95 l10 10 M375 95 l-10 10" />
      <path d="M340 55 l10 10 M350 55 l-10 10" />
    </Frame>
  );
}

export function PlotNaive() {
  return (
    <Frame label="Naive Bayes: class-conditional clouds and a decision curve">
      <path d="M40 180 H380 M50 40 V180" opacity="0.5" />
      <ellipse cx="140" cy="100" rx="70" ry="48" opacity="0.35" />
      <ellipse cx="280" cy="115" rx="75" ry="42" opacity="0.35" />
      <circle cx="120" cy="90" r="4" />
      <circle cx="145" cy="105" r="4" />
      <circle cx="155" cy="80" r="4" />
      <circle cx="110" cy="115" r="4" />
      <path d="M260 100 l10 10 M270 100 l-10 10" />
      <path d="M290 120 l10 10 M300 120 l-10 10" />
      <path d="M275 135 l10 10 M285 135 l-10 10" />
      <path d="M310 95 l10 10 M320 95 l-10 10" />
      <path d="M210 50 C200 100 220 140 210 175" strokeDasharray="5 4" />
      <Tx x="120" y="50" size="12">
        P(x | spam)
      </Tx>
      <Tx x="275" y="55" size="12">
        P(x | ham)
      </Tx>
    </Frame>
  );
}

export function PlotBoost() {
  return (
    <Frame label="Gradient boosting: loss falling as weak learners are added">
      <path d="M50 170 H370 M60 40 V170" opacity="0.5" />
      <path d="M70 150 C120 140 150 90 200 75 C250 60 300 55 350 50" />
      <circle cx="90" cy="145" r="4" fill="currentColor" stroke="none" />
      <circle cx="150" cy="95" r="4" fill="currentColor" stroke="none" />
      <circle cx="220" cy="68" r="4" fill="currentColor" stroke="none" />
      <circle cx="300" cy="54" r="4" fill="currentColor" stroke="none" />
      <Tx x="210" y="36" size="12" anchor="middle">
        training loss ↓ as trees are added
      </Tx>
      <Tx x="348" y="196" size="11">
        trees
      </Tx>
      <Tx x="34" y="36" size="11">
        loss
      </Tx>
    </Frame>
  );
}

export function PlotLinear() {
  return (
    <Frame label="Linear regression best-fit line and residual errors">
      <path d="M40 180 H380 M50 40 V180" opacity="0.5" />
      <path d="M70 150 L350 55" />
      <circle cx="110" cy="120" r="5" fill="currentColor" stroke="none" />
      <circle cx="170" cy="115" r="5" fill="currentColor" stroke="none" />
      <circle cx="230" cy="85" r="5" fill="currentColor" stroke="none" />
      <circle cx="290" cy="90" r="5" fill="currentColor" stroke="none" />
      <circle cx="330" cy="55" r="5" fill="currentColor" stroke="none" />
      <path d="M170 115 V98" strokeDasharray="3 3" />
      <path d="M290 90 V72" strokeDasharray="3 3" />
      <Tx x="176" y="108" size="10">
        error
      </Tx>
      <Tx x="210" y="36" size="12" anchor="middle">
        y = mx + b
      </Tx>
    </Frame>
  );
}

export function PlotLogistic() {
  return (
    <Frame label="Logistic regression sigmoid curve and 0.5 threshold">
      <path d="M40 180 H380 M50 40 V180" opacity="0.5" />
      <path d="M60 160 C140 160 160 40 240 40 C320 40 340 40 370 40" />
      <path d="M50 100 H370" strokeDasharray="4 3" opacity="0.7" />
      <Tx x="352" y="94" size="11">
        0.5
      </Tx>
      <Tx x="360" y="36" size="11">
        1
      </Tx>
      <Tx x="60" y="176" size="11">
        0
      </Tx>
      <Tx x="210" y="28" size="12" anchor="middle">
        σ(z) = 1 / (1 + e⁻ᶻ)
      </Tx>
    </Frame>
  );
}

export function NestOvals() {
  return (
    <svg
      className="nb-plot nb-plot--nest"
      viewBox="0 0 360 230"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      role="img"
      aria-label="Deep Learning inside Machine Learning inside Artificial Intelligence">
      <ellipse cx="180" cy="118" rx="168" ry="100" fill="currentColor" fillOpacity="0.04" />
      <ellipse cx="180" cy="130" rx="118" ry="68" fill="currentColor" fillOpacity="0.06" />
      <ellipse cx="180" cy="140" rx="66" ry="38" fill="currentColor" fillOpacity="0.1" />
      <text
        x="180"
        y="36"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="16"
        fontFamily="Caveat, Patrick Hand, cursive"
        fontWeight="700">
        Artificial Intelligence
      </text>
      <text
        x="180"
        y="82"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="15"
        fontFamily="Caveat, Patrick Hand, cursive"
        fontWeight="700">
        Machine Learning
      </text>
      <text
        x="180"
        y="136"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="14"
        fontFamily="Caveat, Patrick Hand, cursive"
        fontWeight="700">
        Deep
      </text>
      <text
        x="180"
        y="154"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="14"
        fontFamily="Caveat, Patrick Hand, cursive"
        fontWeight="700">
        Learning
      </text>
      <text
        x="180"
        y="214"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontSize="12"
        fontFamily="Patrick Hand, cursive"
        opacity="0.7">
        each ring sits inside the one above it
      </text>
    </svg>
  );
}

export function TeachSteps() {
  return (
    <div className="nb-teach">
      <figure>
        <svg className="nb-plot" viewBox="0 0 180 110" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="40" cy="28" r="10" />
          <line x1="40" y1="38" x2="40" y2="72" />
          <line x1="40" y1="48" x2="22" y2="62" />
          <line x1="40" y1="48" x2="58" y2="62" />
          <line x1="40" y1="72" x2="28" y2="96" />
          <line x1="40" y1="72" x2="52" y2="96" />
          <rect x="78" y="18" width="28" height="22" rx="3" />
          <circle cx="92" cy="29" r="5" />
          <rect x="112" y="18" width="28" height="22" rx="3" />
          <text x="120" y="33" fill="currentColor" stroke="none" fontSize="11">
            Aa
          </text>
          <rect x="96" y="46" width="28" height="22" rx="3" />
          <rect x="104" y="52" width="12" height="10" />
        </svg>
        <figcaption>1 · Show examples</figcaption>
      </figure>
      <figure>
        <svg className="nb-plot" viewBox="0 0 180 110" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="54" y="22" width="72" height="58" rx="14" />
          <circle cx="78" cy="46" r="5" />
          <circle cx="102" cy="46" r="5" />
          <path d="M72 66h36" />
          <rect x="118" y="8" width="28" height="22" rx="4" />
          <text x="132" y="24" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
            4
          </text>
        </svg>
        <figcaption>2 · It practices</figcaption>
      </figure>
      <figure>
        <svg className="nb-plot" viewBox="0 0 180 110" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="28" y="28" width="52" height="44" rx="8" />
          <circle cx="44" cy="48" r="4" />
          <circle cx="64" cy="48" r="4" />
          <path d="M42 62c8 8 16 8 24 0" />
          <circle cx="128" cy="50" r="28" />
          <circle cx="118" cy="44" r="3" />
          <circle cx="138" cy="44" r="3" />
          <path d="M116 58c8 10 16 10 24 0" />
          <text x="128" y="22" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
            eat!
          </text>
        </svg>
        <figcaption>3 · It knows a new one</figcaption>
      </figure>
    </div>
  );
}
