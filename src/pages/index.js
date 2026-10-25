import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroVisual from '@site/src/components/home/HeroVisual';
import JourneyVisual from '@site/src/components/home/JourneyVisual';
import MethodVisual from '@site/src/components/home/MethodVisual';

const paths = [
  {
    kicker: 'New here',
    title: 'Start at the first page',
    body: 'What AI is, what kind it is, and how a machine learns from examples.',
    to: '/docs/parts/part-1/01-ai-vs-ml-vs-dl',
    cta: 'Open chapter 01',
  },
  {
    kicker: 'Revising',
    title: 'Jump to the last page',
    body: 'Quick revision, twenty-one practice questions, and every check-yourself quiz.',
    to: '/docs/parts/back-matter/b-lock-it-in',
    cta: 'Lock it in',
  },
  {
    kicker: 'Building',
    title: 'Skip ahead to systems',
    body: 'Generative AI, then retrieval, then agents, then shipping the product.',
    to: '/docs/parts/part-4/11-generative-ai-and-llms',
    cta: 'Open GenAI',
  },
];

const parts = [
  {
    head: 'Part I · The field',
    tone: 'field',
    items: [
      { n: '01', title: 'AI vs ML vs DL', line: 'Three names people use like they mean the same thing.', to: '/docs/parts/part-1/01-ai-vs-ml-vs-dl' },
      { n: '02', title: 'ANI, AGI, ASI', line: 'Narrow, general, and super, plus how an AI can act.', to: '/docs/parts/part-1/02-ani-to-asi-types-of-artificial-intelligence' },
      { n: '03', title: 'Supervised, unsupervised, RL', line: 'Answers, patterns, or a score.', to: '/docs/parts/part-1/03-how-machines-learn-supervised-unsupervised-rl' },
    ],
  },
  {
    head: 'Part II · Classical machine learning',
    tone: 'classical',
    items: [
      { n: '04', title: 'The ML pipeline', line: 'One project, from the question to a model someone is still watching.', to: '/docs/parts/part-2/04-the-ml-pipeline' },
      { n: '05', title: 'The model lineup', line: 'Eight sheets. Same ten boxes. Simplest model first.', to: '/docs/parts/part-2/05-the-model-lineup' },
      { n: '06', title: 'Beyond the model', line: 'Honest data, honest scores, and the models the sheets skip.', to: '/docs/parts/part-2/06-beyond-the-model' },
      { n: '07', title: 'Maths, one line each', line: 'The name, the formula, and what it means when you use it.', to: '/docs/parts/part-2/07-maths-one-line-each' },
      { n: '08', title: 'The formula sheet', line: 'The equations, same order as the models, then neural nets and GenAI.', to: '/docs/parts/part-2/08-the-formula-sheet' },
    ],
  },
  {
    head: 'Part III · In the world',
    tone: 'world',
    items: [
      { n: '09', title: 'AI in the wild', line: 'Health, money, and the apps already on your phone.', to: '/docs/parts/part-3/09-ai-in-the-wild-real-world-applications' },
      { n: '10', title: 'The toolkit', line: 'Languages, libraries, platforms, and the jobs that use them.', to: '/docs/parts/part-3/10-the-ai-ml-toolkit' },
    ],
  },
  {
    head: 'Part IV · Modern AI',
    tone: 'modern',
    items: [
      { n: '11', title: 'GenAI and LLMs', line: 'A model that makes something new, and how you hand it the facts.', to: '/docs/parts/part-4/11-generative-ai-and-llms' },
      { n: '12', title: 'RAG', line: 'The model writes. The facts get pulled at question time.', to: '/docs/parts/part-4/12-rag-retrieval-augmented-generation', chips: ['RAG', 'LlamaIndex'] },
      { n: '13', title: 'LangChain to MCP', line: 'The parts, the route, and the door into real systems.', to: '/docs/parts/part-4/13-langchain-langgraph-and-mcp', chips: ['LangChain', 'LangGraph', 'MCP'] },
      { n: '14', title: 'AI agents', line: 'The loop: a next step, tools, memory, and how you check the run.', to: '/docs/parts/part-4/14-ai-agents-a-model-that-can-take-a-next-step' },
      { n: '15', title: 'AI engineering', line: 'Prompts, context, evals, safety. A model is not a product yet.', to: '/docs/parts/part-4/15-ai-engineering-from-a-useful-model-to-a-dependable-product' },
    ],
  },
  {
    head: 'Part V · After the notebook',
    tone: 'after',
    items: [
      { n: '16', title: 'MLOps', line: 'Ship it, watch it, and stop it quietly getting worse.', to: '/docs/parts/part-5/16-mlops-from-one-notebook-to-a-real-product' },
      { n: '17', title: 'The upside and the risk', line: 'What it does well, where it fails, and how not to be reckless with it.', to: '/docs/parts/part-5/17-benefits-challenges-and-the-future-use-it-responsibly' },
    ],
  },
  {
    head: 'Back matter · The end of the book',
    tone: 'end',
    items: [
      { n: 'A', title: 'The jargon', line: 'Short form, full form, and a line you will actually remember.', to: '/docs/parts/back-matter/a-jargon-cards' },
      { n: 'B', title: 'Lock it in', line: 'Six lines to keep, the questions, and every check-yourself quiz.', to: '/docs/parts/back-matter/b-lock-it-in' },
    ],
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Index" description={siteConfig.tagline}>
      <main className="idx">
        {/* Hero — one composition: brand, headline, lead, CTA, dominant visual */}
        <section className="idx-hero">
          <div className="idx-hero__wash" aria-hidden="true" />
          <div className="idx-hero__inner">
            <div className="idx-hero__copy">
              <p className="idx-brand">
                <span className="idx-brand__mark" aria-hidden="true" />
                Visual revision notebook
              </p>
              <h1 className="idx-hero__title">
                Pictures First: AI &amp; ML
              </h1>
              <p className="idx-hero__lead">
                See the picture, then the idea — for everyone learning AI and machine learning.
              </p>
              <div className="idx-cta">
                <Link className="idx-btn idx-btn--solid" to="/docs/parts/part-1/01-ai-vs-ml-vs-dl">
                  Begin with chapter 01
                </Link>
                <Link className="idx-btn" to="/docs/parts/part-2/08-the-formula-sheet">
                  Formula sheet
                </Link>
              </div>
              <p className="idx-hero__author">
                <strong>Satyam Rai</strong>
              </p>
              <p className="idx-hardcopy-note">
                © 2026 Satyam Rai · please do not print without permission. Need a hard copy?{' '}
                <a
                  href="https://chat.whatsapp.com/HxKt15etLlFChreVUNinjD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the WhatsApp group
                </a>
                .
              </p>
            </div>
            <div className="idx-hero__visual">
              <HeroVisual />
            </div>
          </div>
        </section>

        <MethodVisual />

        <section className="idx-paths" aria-labelledby="paths-title">
          <div className="idx-paths__head">
            <p className="idx-eyebrow">Pick a door</p>
            <h2 id="paths-title">Where do you want to land?</h2>
          </div>
          <div className="idx-paths__grid">
            {paths.map((p) => (
              <Link key={p.title} className="idx-path" to={p.to}>
                <p className="idx-path__k">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p className="idx-path__body">{p.body}</p>
                <span className="idx-path__cta">{p.cta} →</span>
              </Link>
            ))}
          </div>
        </section>

        <JourneyVisual />

        <section className="idx-sheet" aria-labelledby="contents-title">
          <div className="idx-sheet__head">
            <p className="idx-eyebrow">Full contents</p>
            <h2 id="contents-title" className="idx-sheet__h">
              Every chapter, in order
            </h2>
            <p className="idx-sheet__lead">
              Same sequence as the printed notebook — skim the titles, open the page you need.
            </p>
          </div>

          <div className="idx-parts">
            {parts.map((part) => (
              <div className={`idx-part idx-part--${part.tone}`} key={part.head}>
                <h3>{part.head}</h3>
                <ul>
                  {part.items.map((item) => (
                    <li key={item.n}>
                      <Link to={item.to}>
                        <span className="idx-n">{item.n}</span>
                        <span className="idx-t">{item.title}</span>
                        <span className="idx-l">{item.line}</span>
                      </Link>
                      {item.chips ? (
                        <div className="idx-chips">
                          {item.chips.map((c, i) => (
                            <React.Fragment key={c}>
                              <span>{c}</span>
                              {i < item.chips.length - 1 ? <em>→</em> : null}
                            </React.Fragment>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="idx-glance" aria-label="Book at a glance">
            <div>
              <strong>8</strong>
              <span>algorithm sheets</span>
            </div>
            <div>
              <strong>59</strong>
              <span>formulas</span>
            </div>
            <div>
              <strong>21</strong>
              <span>practice questions</span>
            </div>
            <div>
              <strong>A–B</strong>
              <span>jargon + lock-in</span>
            </div>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
