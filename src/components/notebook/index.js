import React from 'react';
import { Doodle } from '@site/src/components/visual/doodles';

export {
  CardGrid,
  KeepCard,
  MlopsToolPictures,
  PictureCard,
  QAItem,
} from '@site/src/components/visual';
export { JargonBoard } from '@site/src/components/visual/jargon';

export function Highlight({ children }) {
  return <mark className="nb-hl">{children}</mark>;
}

export {
  NestOvals,
  PlotBoost,
  PlotForest,
  PlotKnn,
  PlotLinear,
  PlotLogistic,
  PlotNaive,
  PlotSvm,
  PlotTree,
  TeachSteps,
} from './plots';

export {
  MlopsAshaFlow,
  MlopsIceberg,
  MlopsLearningPath,
  MlopsLoopDiagram,
  MlopsStaircase,
} from './mlops-diagrams';

export {
  PlotAgenticLoop,
  PlotDataNotRules,
  PlotFourParts,
  PlotHarness,
  PlotIntoLlm,
  PlotLayers,
  PlotLlmAnswer,
  PlotNest,
  PlotRecap,
  PlotRulebook,
  PlotTwoApproaches,
  PlotTwoPaths,
} from './agentic-diagrams';

export {
  PlotCapabilityLadder,
  PlotClassicVsGen,
  PlotDoorsVsHouse,
  PlotFitSketch,
  PlotFunctionalityStrip,
  PlotGenFamily,
  PlotReActLoop,
  PlotThreeLearnTypes,
  PlotTokenLoop,
} from './chapter-diagrams';

export {
  LlamaIndexExampleFlow,
  LlamaIndexPipeline,
  LlamaIndexVsLangChain,
  RagAgenticLoop,
  RagBuildStrip,
  RagCosineSketch,
  RagFailures,
  RagForwardDeployer,
  RagGuessVsLookup,
  RagIndexPipeline,
  RagLetters,
  RagQueryPipeline,
  RagSearchKinds,
  RagSimilaritySpace,
  RagTwoPaths,
} from './rag-diagrams';

export function PlainWords({ label = 'In simple words', children }) {
  return (
    <p className="nb-plain">
      <em>{label}:</em> {children}
    </p>
  );
}

export function ChapterHero({ n, icon, title, kicker, children }) {
  return (
    <header className="nb-hero">
      {kicker ? <p className="nb-kicker">{kicker}</p> : null}
      <div className="nb-hero__row">
        {n != null ? <span className="nb-num">{n}</span> : null}
        {icon ? <span className="nb-icon" aria-hidden="true">{icon}</span> : null}
        <h1 className="nb-title">{title}</h1>
      </div>
      {children ? <div className="nb-hero__lead">{children}</div> : null}
    </header>
  );
}

export function PillRow({ children }) {
  return <div className="nb-pills">{children}</div>;
}

export function Pill({ children }) {
  return <span className="nb-pill">{children}</span>;
}

export function LoopStrip({ title, steps }) {
  const list = steps.map((step) => (typeof step === 'string' ? { label: step } : step));
  return (
    <figure className="nb-loop">
      {title ? <figcaption>{title}</figcaption> : null}
      <ol>
        {list.map((step, i) => (
          <li key={`${step.label}-${i}`}>
            <div>
              <strong>{step.label}</strong>
              {step.sub ? <span>{step.sub}</span> : null}
            </div>
            {i < list.length - 1 ? <em aria-hidden="true">→</em> : null}
          </li>
        ))}
      </ol>
      <span className="nb-star" aria-hidden="true">★</span>
    </figure>
  );
}

export function AlgoGrid({ children }) {
  return <div className="nb-algo">{children}</div>;
}

export function AlgoCard({ n, title, span, children }) {
  return (
    <section className={span ? `nb-card nb-card--${span}` : 'nb-card'}>
      <h2>
        {n}. {title}
      </h2>
      <div className="nb-card__body">{children}</div>
    </section>
  );
}

export function TwoCol({ children }) {
  return <div className="nb-two">{children}</div>;
}

export function DashBox({ children }) {
  return <div className="nb-dash">{children}</div>;
}

export function AppGrid({ items }) {
  return (
    <div className="nb-apps">
      {items.map((item) => (
        <div className="nb-app" key={item.label}>
          <span aria-hidden="true">{item.icon}</span>
          <em>{item.label}</em>
        </div>
      ))}
    </div>
  );
}

export function SceneStrip({ items }) {
  return (
    <div className="nb-scenes">
      {items.map((item) => (
        <div className="nb-scene" key={item.label}>
          {item.doodle ? <Doodle name={item.doodle} /> : <span aria-hidden="true">{item.icon}</span>}
          <em>{item.label}</em>
        </div>
      ))}
    </div>
  );
}

export function DomainGrid({ children }) {
  return <div className="nb-domains">{children}</div>;
}

export function DomainCard({ doodle, icon, title, children }) {
  return (
    <article className="nb-domain">
      {doodle ? <Doodle name={doodle} /> : icon ? <span className="nb-domain__icon" aria-hidden="true">{icon}</span> : null}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function BubbleRow({ items }) {
  return (
    <div className="nb-bubbles">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

export function NoteBar({ children }) {
  return <aside className="nb-note">{children}</aside>;
}

export function StageStrip({ stages }) {
  return (
    <ol className="nb-stages">
      {stages.map((s, i) => (
        <li key={s.label}>
          <strong>{s.label}</strong>
          {s.sub ? <span>{s.sub}</span> : null}
          {i < stages.length - 1 ? <em aria-hidden="true">→</em> : null}
        </li>
      ))}
    </ol>
  );
}

export function ToolKitGrid({ children }) {
  return <div className="nb-toolkit">{children}</div>;
}

export function ToolKitBox({ title, doodle, children }) {
  return (
    <section className="nb-toolkit__box">
      {doodle ? <Doodle name={doodle} /> : null}
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
}

export function FormulaGrid({ children }) {
  return <div className="nb-formulas">{children}</div>;
}

export function FormulaBox({ title, children }) {
  return (
    <section className="nb-fbox">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function FoundGrid({ children }) {
  return <div className="nb-found">{children}</div>;
}
