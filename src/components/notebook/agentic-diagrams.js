import React from 'react';

function Plot({ children, caption, viewBox = '0 0 320 140' }) {
  return (
    <figure className="nb-agentic-fig">
      <svg className="nb-plot" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        {children}
      </svg>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function PlotTwoApproaches() {
  return (
    <Plot caption="Two ways to build a smart system" viewBox="0 0 340 130">
      <rect x="12" y="18" width="140" height="94" rx="10" />
      <text x="82" y="42" textAnchor="middle" fill="currentColor" stroke="none" fontSize="13" fontWeight="700">
        Pattern recognition
      </text>
      <text x="82" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        learns from examples
      </text>
      <text x="82" y="88" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        (Machine Learning)
      </text>
      <rect x="188" y="18" width="140" height="94" rx="10" />
      <text x="258" y="42" textAnchor="middle" fill="currentColor" stroke="none" fontSize="13" fontWeight="700">
        Rule-based AI
      </text>
      <text x="258" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        = Symbolic AI
      </text>
      <text x="258" y="88" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        humans write the rules
      </text>
    </Plot>
  );
}

export function PlotRulebook() {
  return (
    <Plot caption="Symbolic AI is a hand-written rulebook" viewBox="0 0 340 130">
      <rect x="20" y="16" width="100" height="98" rx="8" />
      <text x="70" y="40" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        Rulebook
      </text>
      <text x="70" y="62" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        If / Else
      </text>
      <text x="70" y="84" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        no learning
      </text>
      <text x="144" y="72" textAnchor="middle" fill="currentColor" stroke="none" fontSize="16">
        →
      </text>
      <rect x="168" y="28" width="152" height="74" rx="8" />
      <text x="244" y="55" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        if verified → blue check
      </text>
      <text x="244" y="78" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        else → no check
      </text>
    </Plot>
  );
}

export function PlotNest() {
  return (
    <Plot caption="AI contains ML · ML contains DL" viewBox="0 0 320 150">
      <ellipse cx="160" cy="78" rx="145" ry="62" />
      <text x="160" y="32" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        AI · Artificial Intelligence
      </text>
      <ellipse cx="160" cy="88" rx="100" ry="42" />
      <text x="160" y="62" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        ML · Machine Learning
      </text>
      <ellipse cx="160" cy="98" rx="52" ry="24" />
      <text x="160" y="94" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        DL
      </text>
      <text x="160" y="108" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10">
        many layers
      </text>
    </Plot>
  );
}

export function PlotDataNotRules() {
  return (
    <Plot caption="ML removes the rulebook" viewBox="0 0 360 120">
      <rect x="16" y="28" width="88" height="64" rx="8" />
      <text x="60" y="56" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        BEFORE
      </text>
      <text x="60" y="74" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Rulebook
      </text>
      <text x="120" y="66" fill="currentColor" stroke="none" fontSize="16">
        →
      </text>
      <rect x="148" y="28" width="88" height="64" rx="8" />
      <text x="192" y="56" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        NOW
      </text>
      <text x="192" y="74" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Data
      </text>
      <text x="250" y="66" fill="currentColor" stroke="none" fontSize="16">
        →
      </text>
      <rect x="280" y="28" width="60" height="64" rx="8" />
      <text x="310" y="56" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Model
      </text>
      <text x="310" y="74" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10">
        learned
      </text>
    </Plot>
  );
}

export function PlotLayers() {
  return (
    <Plot caption="Deep Learning = many layers (CNN for images)" viewBox="0 0 360 110">
      {['Input', 'L1', 'L2', 'L3', 'Output'].map((label, i) => {
        const x = 20 + i * 66;
        return (
          <g key={label}>
            <rect x={x} y="28" width="52" height="48" rx="8" />
            <text x={x + 26} y="58" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
              {label}
            </text>
            {i < 4 ? (
              <text x={x + 56} y="58" fill="currentColor" stroke="none" fontSize="14">
                →
              </text>
            ) : null}
          </g>
        );
      })}
    </Plot>
  );
}

export function PlotIntoLlm() {
  return (
    <Plot caption="What goes into an LLM" viewBox="0 0 380 120">
      <rect x="12" y="30" width="78" height="56" rx="8" />
      <text x="51" y="56" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Deep
      </text>
      <text x="51" y="72" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Learning
      </text>
      <text x="98" y="62" fill="currentColor" stroke="none" fontSize="16">
        +
      </text>
      <rect x="118" y="30" width="58" height="56" rx="8" />
      <text x="147" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        NLP
      </text>
      <text x="184" y="62" fill="currentColor" stroke="none" fontSize="16">
        +
      </text>
      <rect x="204" y="30" width="78" height="56" rx="8" />
      <text x="243" y="56" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Internet-scale
      </text>
      <text x="243" y="72" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        data
      </text>
      <text x="292" y="62" fill="currentColor" stroke="none" fontSize="16">
        →
      </text>
      <rect x="316" y="36" width="48" height="44" rx="8" />
      <text x="340" y="64" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12">
        LLM
      </text>
    </Plot>
  );
}

export function PlotLlmAnswer() {
  return (
    <Plot caption="How an LLM answers you" viewBox="0 0 400 110">
      {[
        ['Prompt', 12],
        ['Encoder', 90],
        ['Vector', 168],
        ['LLM', 246],
        ['Decoder', 324],
      ].map(([label, x], i) => (
        <g key={label}>
          <rect x={x} y="30" width="64" height="48" rx="8" />
          <text x={x + 32} y="60" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
            {label}
          </text>
          {i < 4 ? (
            <text x={x + 68} y="60" fill="currentColor" stroke="none" fontSize="14">
              →
            </text>
          ) : null}
        </g>
      ))}
    </Plot>
  );
}

export function PlotTwoPaths() {
  return (
    <Plot caption="LLM splits into two paths" viewBox="0 0 360 140">
      <rect x="140" y="8" width="80" height="36" rx="8" />
      <text x="180" y="32" textAnchor="middle" fill="currentColor" stroke="none" fontSize="13" fontWeight="700">
        LLM
      </text>
      <path d="M160 44 L80 70" />
      <path d="M200 44 L280 70" />
      <rect x="20" y="72" width="120" height="56" rx="8" />
      <text x="80" y="96" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        Gen AI
      </text>
      <text x="80" y="114" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10">
        content from a prompt
      </text>
      <rect x="220" y="72" width="120" height="56" rx="8" />
      <text x="280" y="96" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        Agentic AI
      </text>
      <text x="280" y="114" textAnchor="middle" fill="currentColor" stroke="none" fontSize="10">
        tools · skills · sub-agents
      </text>
    </Plot>
  );
}

export function PlotFourParts() {
  return (
    <Plot caption="Agentic AI has four parts → one harness" viewBox="0 0 360 150">
      {[
        ['Skills', 'reusable know-how', 16],
        ['Sub-agent', 'helper agents', 100],
        ['Tool call', 'runs real actions', 184],
        ['Content', 'context for model', 268],
      ].map(([t, s, x]) => (
        <g key={t}>
          <rect x={x} y="12" width="72" height="58" rx="8" />
          <text x={x + 36} y="36" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11" fontWeight="700">
            {t}
          </text>
          <text x={x + 36} y="54" textAnchor="middle" fill="currentColor" stroke="none" fontSize="9">
            {s}
          </text>
        </g>
      ))}
      <text x="180" y="90" textAnchor="middle" fill="currentColor" stroke="none" fontSize="14">
        ↓
      </text>
      <rect x="100" y="100" width="160" height="36" rx="8" />
      <text x="180" y="124" textAnchor="middle" fill="currentColor" stroke="none" fontSize="13" fontWeight="700">
        Harness (the wrapper)
      </text>
    </Plot>
  );
}

export function PlotHarness() {
  return (
    <Plot caption="The harness wraps product features" viewBox="0 0 360 130">
      <rect x="20" y="16" width="148" height="98" rx="10" />
      <text x="94" y="40" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        Examples
      </text>
      <text x="94" y="62" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Claude Code · Codex
      </text>
      <text x="94" y="82" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        opencode · Pi
      </text>
      <rect x="192" y="16" width="148" height="98" rx="10" />
      <text x="266" y="40" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        Features
      </text>
      <text x="266" y="62" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Slash commands
      </text>
      <text x="266" y="80" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Content · Sub-agent · Skills
      </text>
    </Plot>
  );
}

export function PlotAgenticLoop() {
  return (
    <Plot caption="The agentic loop: think → act → observe" viewBox="0 0 380 140">
      <rect x="16" y="52" width="56" height="36" rx="8" />
      <text x="44" y="76" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Input
      </text>
      <text x="78" y="76" fill="currentColor" stroke="none" fontSize="14">
        →
      </text>
      <rect x="100" y="20" width="180" height="100" rx="12" />
      <text x="190" y="42" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">
        AGENTIC LOOP
      </text>
      <text x="190" y="66" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        1 think
      </text>
      <text x="190" y="86" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        2 act (tool call)
      </text>
      <text x="190" y="106" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        3 observe · repeat
      </text>
      <text x="288" y="76" fill="currentColor" stroke="none" fontSize="14">
        →
      </text>
      <rect x="310" y="52" width="56" height="36" rx="8" />
      <text x="338" y="76" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11">
        Output
      </text>
    </Plot>
  );
}

export function PlotRecap() {
  return (
    <Plot caption="The full picture" viewBox="0 0 400 120">
      {[
        ['AI', 12],
        ['ML', 74],
        ['DL', 136],
        ['LLM', 198],
        ['Agentic', 260],
        ['Harness', 330],
      ].map(([t, x], i) => (
        <g key={t}>
          <rect x={x} y="36" width="52" height="44" rx="8" />
          <text x={x + 26} y="64" textAnchor="middle" fill="currentColor" stroke="none" fontSize="11" fontWeight="700">
            {t}
          </text>
          {i < 5 ? (
            <text x={x + 54} y="64" fill="currentColor" stroke="none" fontSize="12">
              →
            </text>
          ) : null}
        </g>
      ))}
    </Plot>
  );
}
