import React from 'react';

function Fig({ children, caption, viewBox = '0 0 520 220', className = '' }) {
  return (
    <figure className={`nb-rag-fig ${className}`.trim()}>
      <svg
        className="nb-plot nb-rag-svg"
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-hidden={caption ? undefined : true}>
        {children}
      </svg>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function T({ x, y, children, size = 13, anchor = 'middle', weight = 500 }) {
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

/** Guess vs look-it-up — the chapter’s first picture */
export function RagGuessVsLookup() {
  return (
    <Fig caption="No book = a guess. Open the book first = RAG." viewBox="0 0 520 200">
      <rect x="18" y="22" width="220" height="150" rx="14" fill="#fff" />
      <circle cx="78" cy="78" r="28" />
      <path d="M66 72h4M86 72h4M68 90c6 8 14 8 20 0" />
      <T x="128" y="58" size="22" weight="700">
        ?
      </T>
      <T x="128" y="100" size="14" weight="700">
        no book
      </T>
      <T x="128" y="128" size="13">
        Question only
      </T>
      <T x="128" y="148" size="12">
        a guess from training
      </T>

      <rect x="282" y="22" width="220" height="150" rx="14" fill="#e8f2fb" />
      <circle cx="342" cy="78" r="28" />
      <path d="M330 72h4M350 72h4M332 90c6 8 14 8 20 0" />
      <rect x="378" y="52" width="72" height="52" rx="6" fill="#fffef5" />
      <path d="M390 64h48M390 76h40M390 88h44" strokeWidth="1.5" />
      <T x="392" y="128" size="14" weight="700" anchor="start">
        open the book
      </T>
      <T x="392" y="148" size="12" anchor="start">
        look it up, then write
      </T>
    </Fig>
  );
}

/** Two answer paths side by side */
export function RagTwoPaths() {
  return (
    <Fig caption="Same question. Without pages it guesses; with pages it cites." viewBox="0 0 540 210">
      <rect x="14" y="16" width="248" height="178" rx="12" fill="#fff" />
      <T x="138" y="42" size="14" weight="700">
        Question only
      </T>
      <rect x="36" y="58" width="88" height="36" rx="8" fill="#fff8d6" />
      <T x="80" y="81" size="11">
        how many leaves?
      </T>
      <T x="140" y="81" size="16">
        →
      </T>
      <rect x="158" y="58" width="78" height="36" rx="8" />
      <T x="197" y="81" size="12" weight="700">
        LLM
      </T>
      <T x="138" y="122" size="16">
        ↓
      </T>
      <rect x="48" y="136" width="180" height="40" rx="8" fill="#f3f0e6" />
      <T x="138" y="161" size="12">
        a guess from training
      </T>

      <rect x="278" y="16" width="248" height="178" rx="12" fill="#e8f2fb" />
      <T x="402" y="42" size="14" weight="700">
        Question + pages
      </T>
      <rect x="296" y="58" width="100" height="36" rx="8" fill="#fff8d6" />
      <T x="346" y="81" size="11">
        question + chunk
      </T>
      <T x="410" y="81" size="16">
        →
      </T>
      <rect x="426" y="58" width="78" height="36" rx="8" />
      <T x="465" y="81" size="12" weight="700">
        LLM
      </T>
      <T x="402" y="122" size="16">
        ↓
      </T>
      <rect x="312" y="136" width="180" height="40" rx="8" fill="#fffef5" />
      <T x="402" y="161" size="12">
        12 days · Policy v4, p.3
      </T>
    </Fig>
  );
}

/** R → A → G */
export function RagLetters() {
  return (
    <Fig caption="The name is the pipeline: Retrieve → Augment → Generate" viewBox="0 0 520 150">
      {[
        { x: 24, letter: 'R', title: 'Retrieve', sub: 'find matching passages' },
        { x: 188, letter: 'A', title: 'Augment', sub: 'put them in the prompt' },
        { x: 352, letter: 'G', title: 'Generate', sub: 'write from that prompt' },
      ].map((b, i) => (
        <g key={b.letter}>
          <rect x={b.x} y="28" width="144" height="96" rx="12" fill={i === 1 ? '#fff8d6' : '#fff'} />
          <circle cx={b.x + 32} cy="62" r="18" fill="#e8f2fb" />
          <T x={b.x + 32} y="68" size="18" weight="700">
            {b.letter}
          </T>
          <T x={b.x + 88} y="58" size="15" weight="700">
            {b.title}
          </T>
          <T x={b.x + 88} y="82" size="11">
            {b.sub}
          </T>
          {i < 2 ? (
            <T x={b.x + 156} y="82" size="18">
              →
            </T>
          ) : null}
        </g>
      ))}
    </Fig>
  );
}

/** Offline indexing pipeline */
export function RagIndexPipeline() {
  return (
    <Fig caption="Step 1 · Prepare the library (done before questions arrive)" viewBox="0 0 580 130">
      {[
        { label: 'Documents', sub: 'PDFs · pages' },
        { label: 'Chunks', sub: 'short passages' },
        { label: 'Embeddings', sub: 'meaning → numbers' },
        { label: 'Vector store', sub: 'saved for search' },
      ].map((s, i) => {
        const x = 16 + i * 140;
        return (
          <g key={s.label}>
            <rect x={x} y="28" width="118" height="72" rx="10" fill="#fff" />
            <T x={x + 59} y="58" size="13" weight="700">
              {s.label}
            </T>
            <T x={x + 59} y="80" size="11">
              {s.sub}
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

/** Online query pipeline */
export function RagQueryPipeline() {
  return (
    <Fig caption="Step 2 · Answer one question, every time" viewBox="0 0 580 130">
      {[
        { label: 'Question', sub: 'embed it' },
        { label: 'Nearest', sub: 'top chunks' },
        { label: 'Prompt', sub: 'Q + notes' },
        { label: 'LLM', sub: 'write + cite' },
      ].map((s, i) => {
        const x = 16 + i * 140;
        return (
          <g key={s.label}>
            <rect x={x} y="28" width="118" height="72" rx="10" fill={i === 3 ? '#e8f2fb' : '#fff'} />
            <T x={x + 59} y="58" size="13" weight="700">
              {s.label}
            </T>
            <T x={x + 59} y="80" size="11">
              {s.sub}
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

/** Vector space similarity picture */
export function RagSimilaritySpace() {
  return (
    <Fig caption="Close numbers = close meaning. The star is the question." viewBox="0 0 420 220">
      <circle cx="210" cy="110" r="92" strokeDasharray="4 5" opacity="0.55" />
      <circle cx="168" cy="96" r="8" fill="#1a4a7a" stroke="none" />
      <T x="168" y="78" size="11">
        leave policy
      </T>
      <circle cx="198" cy="128" r="7" fill="#2a5f9e" stroke="none" />
      <T x="198" y="152" size="11">
        page 3
      </T>
      <circle cx="292" cy="70" r="7" fill="#9bb4cc" stroke="none" />
      <T x="292" y="54" size="11">
        cafeteria menu
      </T>
      {/* question star */}
      <path
        d="M210 100l4.5 9.5 10.5 1.5-7.5 7.3 1.8 10.4L210 123l-9.3 4.9 1.8-10.4-7.5-7.3 10.5-1.5z"
        fill="#ffe566"
        stroke="#1a4a7a"
        strokeWidth="1.4"
      />
      <T x="210" y="178" size="12" weight="700">
        ★ the question
      </T>
      <T x="210" y="198" size="11">
        nearest chunks win
      </T>
    </Fig>
  );
}

/** Cosine teaching sketch */
export function RagCosineSketch() {
  return (
    <Fig caption="Teaching sketch — three numbers, not a real embedding" viewBox="0 0 420 200">
      <T x="24" y="36" size="13" weight="700" anchor="start">
        cosine(A, B) = (A · B) / (‖A‖ ‖B‖)
      </T>
      {/* axes */}
      <path d="M60 160h280M60 160V40" />
      {/* vectors */}
      <path d="M60 160l150-95" stroke="#1a4a7a" strokeWidth="2.4" />
      <path d="M60 160l145-70" stroke="#2a5f9e" strokeWidth="2.2" />
      <path d="M60 160l190-28" stroke="#9bb4cc" strokeWidth="2" />
      <T x="220" y="58" size="12" weight="700">
        query: bills
      </T>
      <T x="230" y="92" size="12">
        note: power
      </T>
      <T x="280" y="140" size="12">
        menu
      </T>
      <rect x="250" y="158" width="150" height="28" rx="8" fill="#fff8d6" />
      <T x="325" y="177" size="12">
        close angle ≈ match
      </T>
    </Fig>
  );
}

/** Keyword vs semantic */
export function RagSearchKinds() {
  return (
    <Fig caption="Keyword matches letters. Semantic matches meaning." viewBox="0 0 520 200">
      <rect x="16" y="20" width="232" height="160" rx="12" fill="#fff" />
      <T x="132" y="48" size="14" weight="700">
        Keyword · letters
      </T>
      <T x="132" y="78" size="12">
        “car” → pages with “car”
      </T>
      <T x="132" y="104" size="12">
        inverted index + BM25
      </T>
      <T x="132" y="136" size="12">
        “automobile” can be missed
      </T>

      <rect x="272" y="20" width="232" height="160" rx="12" fill="#e8f2fb" />
      <T x="388" y="48" size="14" weight="700">
        Semantic · meaning
      </T>
      <T x="388" y="78" size="12">
        “cut electricity bills”
      </T>
      <T x="388" y="104" size="12">
        → “lower power use”
      </T>
      <T x="388" y="136" size="12">
        same idea, different words
      </T>
    </Fig>
  );
}

/** Agentic RAG loop */
export function RagAgenticLoop() {
  return (
    <Fig caption="Agentic RAG — retrieve can be a tool inside the loop" viewBox="0 0 580 130">
      {[
        { label: 'Ask', sub: 'user question' },
        { label: 'Retrieve', sub: 'search index' },
        { label: 'Check', sub: 'enough evidence?' },
        { label: 'Generate', sub: 'or search again' },
      ].map((s, i) => {
        const x = 16 + i * 140;
        return (
          <g key={s.label}>
            <rect x={x} y="28" width="118" height="72" rx="10" fill={i === 2 ? '#fff8d6' : '#fff'} />
            <T x={x + 59} y="58" size="13" weight="700">
              {s.label}
            </T>
            <T x={x + 59} y="80" size="11">
              {s.sub}
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

/** Chunk → Embed → Store → Retrieve → Generate */
export function RagBuildStrip() {
  return (
    <Fig caption="Build once: chunk → embed → store → retrieve → generate + cite" viewBox="0 0 580 110">
      {['Chunk', 'Embed', 'Vector DB', 'Retrieve', 'Generate'].map((label, i) => {
        const x = 14 + i * 112;
        return (
          <g key={label}>
            <rect x={x} y="28" width="96" height="52" rx="10" fill={i === 4 ? '#e8f2fb' : '#fff'} />
            <T x={x + 48} y="60" size="13" weight="700">
              {label}
            </T>
            {i < 4 ? (
              <T x={x + 100} y="60" size="15">
                →
              </T>
            ) : null}
          </g>
        );
      })}
    </Fig>
  );
}

/** Four RAG failure modes — from the notebook picture */
export function RagFailures() {
  return (
    <Fig caption="When RAG gives a wrong answer — four common breaks" viewBox="0 0 560 200">
      {[
        { title: 'Wrong chunk', sub: 'vague Q · bad split · similar page' },
        { title: 'Split fact', sub: 'number here · condition next chunk' },
        { title: 'Stale index', sub: 'PDF updated · store still old' },
        { title: 'Ignored notes', sub: 'right chunk · model guessed anyway' },
      ].map((b, i) => {
        const x = 16 + (i % 2) * 270;
        const y = 18 + Math.floor(i / 2) * 88;
        return (
          <g key={b.title}>
            <rect x={x} y={y} width="250" height="74" rx="12" fill="#fff" />
            <T x={x + 18} y={y + 32} size="14" weight="700" anchor="start">
              ✗ {b.title}
            </T>
            <T x={x + 18} y={y + 54} size="12" anchor="start">
              {b.sub}
            </T>
          </g>
        );
      })}
    </Fig>
  );
}

/** Forward deployer arrow — lab → customer → feedback */
export function RagForwardDeployer() {
  return (
    <Fig caption="Forward deployer — connect the lab demo to real work, then bring failures back" viewBox="0 0 560 150">
      <rect x="16" y="36" width="140" height="56" rx="10" fill="#fff" />
      <T x="86" y="60" size="12" weight="700">
        Model in the lab
      </T>
      <T x="86" y="78" size="11">
        demo on sample data
      </T>
      <T x="170" y="68" size="18">
        →
      </T>
      <rect x="190" y="36" width="160" height="56" rx="10" fill="#e8f2fb" />
      <T x="270" y="60" size="13" weight="700">
        Forward deployer
      </T>
      <T x="270" y="78" size="11">
        sits with the real team
      </T>
      <T x="364" y="68" size="18">
        →
      </T>
      <rect x="384" y="36" width="160" height="56" rx="10" fill="#fff" />
      <T x="464" y="60" size="12" weight="700">
        Their daily work
      </T>
      <T x="464" y="78" size="11">
        data · tools · screens
      </T>
      <path d="M464 92 C464 128, 86 128, 86 92" strokeDasharray="5 4" />
      <T x="275" y="142" size="12">
        brings back what failed → fix the model and the agent
      </T>
    </Fig>
  );
}

/** LlamaIndex — build the index once, then answer questions */
export function LlamaIndexPipeline() {
  return (
    <Fig caption="LlamaIndex = build a searchable library once, then answer from it" viewBox="0 0 580 250">
      <T x="24" y="28" size="13" weight="700" anchor="start">
        Offline · prepare the index
      </T>
      {[
        { label: 'Documents', sub: 'PDF · Notion · SQL' },
        { label: 'Load', sub: 'readers' },
        { label: 'Chunk', sub: 'nodes' },
        { label: 'Embed', sub: 'vectors' },
        { label: 'Index', sub: 'store' },
      ].map((s, i) => {
        const x = 16 + i * 112;
        return (
          <g key={`off-${s.label}`}>
            <rect x={x} y="42" width="100" height="58" rx="10" fill={i === 4 ? '#e8f2fb' : '#fff'} />
            <T x={x + 50} y="66" size="12" weight="700">
              {s.label}
            </T>
            <T x={x + 50} y="86" size="11">
              {s.sub}
            </T>
            {i < 4 ? (
              <T x={x + 102} y="76" size="15">
                →
              </T>
            ) : null}
          </g>
        );
      })}

      <T x="290" y="128" size="16">
        ↓
      </T>
      <T x="290" y="148" size="12">
        question time
      </T>

      <T x="24" y="178" size="13" weight="700" anchor="start">
        Online · answer one question
      </T>
      {[
        { label: 'Question', sub: 'embed query' },
        { label: 'Retrieve', sub: 'top nodes' },
        { label: 'Synthesize', sub: 'prompt + LLM' },
        { label: 'Answer', sub: 'cite sources' },
      ].map((s, i) => {
        const x = 40 + i * 130;
        return (
          <g key={`on-${s.label}`}>
            <rect x={x} y="190" width="112" height="48" rx="10" fill={i === 3 ? '#fff8d6' : '#fff'} />
            <T x={x + 56} y="210" size="12" weight="700">
              {s.label}
            </T>
            <T x={x + 56} y="228" size="11">
              {s.sub}
            </T>
            {i < 3 ? (
              <T x={x + 116} y="218" size="15">
                →
              </T>
            ) : null}
          </g>
        );
      })}
    </Fig>
  );
}

/** Concrete leave-policy walkthrough */
export function LlamaIndexExampleFlow() {
  return (
    <Fig caption="Example · leave policy PDF → index → “How many leave days?”" viewBox="0 0 560 210">
      <rect x="16" y="20" width="120" height="70" rx="10" fill="#fff" />
      <T x="76" y="48" size="12" weight="700">
        leave_policy.pdf
      </T>
      <T x="76" y="70" size="11">
        “12 days / year”
      </T>
      <T x="150" y="58" size="16">
        →
      </T>
      <rect x="168" y="20" width="120" height="70" rx="10" fill="#e8f2fb" />
      <T x="228" y="48" size="12" weight="700">
        VectorStoreIndex
      </T>
      <T x="228" y="70" size="11">
        chunks as nodes
      </T>
      <T x="302" y="58" size="16">
        →
      </T>
      <rect x="320" y="20" width="220" height="70" rx="10" fill="#fff8d6" />
      <T x="430" y="48" size="12" weight="700">
        Q: how many leave days?
      </T>
      <T x="430" y="70" size="11">
        retrieves page 3 node
      </T>

      <T x="280" y="118" size="16">
        ↓
      </T>
      <rect x="100" y="132" width="360" height="60" rx="12" fill="#fffef5" />
      <T x="280" y="158" size="13" weight="700">
        A: 12 days a year (Policy v4, p.3)
      </T>
      <T x="280" y="178" size="11">
        written from the retrieved node — not from memory alone
      </T>
    </Fig>
  );
}

/** LlamaIndex vs LangChain — one picture */
export function LlamaIndexVsLangChain() {
  return (
    <Fig caption="Same RAG idea. Different default focus." viewBox="0 0 540 200">
      <rect x="16" y="18" width="248" height="164" rx="12" fill="#e8f2fb" />
      <T x="140" y="46" size="14" weight="700">
        LlamaIndex
      </T>
      <T x="140" y="76" size="12">
        data → index → query
      </T>
      <T x="140" y="104" size="12">
        strong at documents,
      </T>
      <T x="140" y="124" size="12">
        retrieval, and RAG apps
      </T>
      <T x="140" y="158" size="12" weight="700">
        “connect my files to an LLM”
      </T>

      <rect x="276" y="18" width="248" height="164" rx="12" fill="#fff" />
      <T x="400" y="46" size="14" weight="700">
        LangChain
      </T>
      <T x="400" y="76" size="12">
        models · tools · chains
      </T>
      <T x="400" y="104" size="12">
        strong at workflows,
      </T>
      <T x="400" y="124" size="12">
        agents, and composition
      </T>
      <T x="400" y="158" size="12" weight="700">
        “wire the whole app”
      </T>
    </Fig>
  );
}
