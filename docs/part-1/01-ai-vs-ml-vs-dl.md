---
title: "01 · The foundations"
sidebar_label: "01 · AI vs ML"
sidebar_position: 1
hide_title: true
slug: "/parts/part-1/01-ai-vs-ml-vs-dl"
description: "01 · AI vs ML vs DL"
---

<ChapterHero n="01" title="The foundations" kicker="Start here" />
<PillRow>
<Pill>The words</Pill>
<Pill>History</Pill>
<Pill>AGI</Pill>
<Pill>Foundation models</Pill>
<Pill>ChatGPT now</Pill>
</PillRow>

<FoundGrid>
<div>
<h3>Artificial Intelligence</h3>
A broad field of computer science that enables machines to perform <Highlight>tasks that normally require human intelligence</Highlight> — learning, reasoning, problem-solving, language understanding and pattern recognition.

**Example:** A voice assistant understands speech, processes a request and gives a suitable response.
</div>
<div>
<h3>Machine Learning</h3>
A subset of AI in which computers <Highlight>learn patterns from data</Highlight> and improve their performance without being explicitly programmed for every task.

**Example:** A spam filter learns from earlier emails and predicts whether a new email is spam.
</div>
<div>
<h3>Deep Learning</h3>
A subset of ML that uses <Highlight>multi-layer neural networks</Highlight> to learn complex patterns, usually from large amounts of data.

**Example:** Image recognition, speech recognition and autonomous driving.
</div>
</FoundGrid>

<TeachSteps />

<PlainWords label="In plain words">
<Highlight>artificial intelligence is a computer helper</Highlight>. Machine learning means <Highlight>it learns from examples</Highlight>, instead of a person writing every single rule. Deep learning is <Highlight>machine learning with many layers</Highlight>, like a tall stack of ideas.
</PlainWords>

<LoopStrip
  title="THE BIG IDEA"
  steps={[
    {label: 'Data', sub: 'input'},
    {label: 'Algorithm', sub: 'learns patterns'},
    {label: 'Model', sub: 'learned knowledge'},
    {label: 'Prediction', sub: 'decision / output'},
  ]}
/>

### Goals of AI

- ✓ Create systems that perform human-like tasks.
- ✓ Enable machines to learn from experience.
- ✓ Solve complex real-world problems.
- ✓ Understand, reason, plan and make decisions.
- ✓ Improve efficiency and accuracy.

### A short history (landmarks, not a full timeline)

| When | Landmark | Why it matters |
| --- | --- | --- |
| 1950 | Turing Test | Asks whether a machine's replies can be told apart from a person's. |
| 1956 | Dartmouth Conference | The name **Artificial Intelligence** and the field as a research programme. |
| 1960s–80s | Search, rules, expert systems | Hand-written knowledge and search through possible moves. |
| 1990s–2000s | Statistical ML at scale | Models learn from data; web and ads supply volume. |
| 2010s | Deep learning | CNNs, RNNs, and large labelled sets unlock vision and speech. |
| 2017→ | Transformers → GenAI | Attention at scale; chat and multimodal products become everyday tools. |

Names you will meet again: **Alan Turing**, **John McCarthy** (coined "AI"), and later deep-learning pioneers such as Hinton, LeCun, and Bengio. The ideas in Chapters 03–05 sit on this older stack — GenAI did not appear from nowhere.

<TwoCol>
<div>
### The nesting
<NestOvals />
Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence

Generative AI sits inside that stack (usually deep learning) and <Highlight>creates new content</Highlight> — text, images, code, audio. Chapter 11 covers GenAI and LLMs in full.

<PlainWords label="In plain words">
like boxes inside boxes. The small box is deep learning. It sits inside machine learning. That sits inside artificial intelligence. Generative AI is the part that <Highlight>makes something new</Highlight>, not only a label or a number.
</PlainWords>
</div>
<div>
### Artificial general intelligence
<PlainWords label="In plain words">
a chat assistant can be brilliant at the jobs it was trained for and still be narrow. AGI would learn a new intellectual job the way a person can move from maths to writing to planning. That is a research goal. It is not a box you can tick on a product page.
</PlainWords>
</div>
</TwoCol>

<FoundGrid>
<div>
<h3>01 Narrow AI</h3>
Built for a <Highlight>bounded set of tasks</Highlight>. It can be extremely capable inside that boundary.

**Today:** spam filters, recommenders, and current chat assistants.
</div>
<div>
<h3>02 AGI</h3>
Would transfer learning across unfamiliar domains, plan over long horizons, and stay reliable without a new model for every job.

**Status:** disputed research goal, not an established achievement.
</div>
<div>
<h3>03 Superintelligence</h3>
A hypothetical system that would exceed the best human ability across nearly every important cognitive domain.

**Status:** a future concept, not a current product.
</div>
</FoundGrid>

### What “general” would require

- ✓ Move a skill from one domain to a very different one.
- ✓ Handle unfamiliar tasks without task-specific retraining.
- ✓ Use language, perception, memory, tools, and reasoning together.
- ✓ Recover from mistakes over a long piece of work.
- ✓ Stay reliable outside the examples used in a demo.

### There is no agreed finish line

AGI has no universal scientific test. OpenAI’s Charter describes it as highly autonomous systems that outperform humans at most economically valuable work. Other researchers mean broad human-level learning and adaptability.

A model can beat people at coding, exams, or games and still fail at reliability, the physical world, novel situations, or sustained work. A strong benchmark is not proof of AGI.

**Primary reference:** OpenAI Charter. That definition belongs to OpenAI. It is not a universal standard.

A <Highlight>foundation model</Highlight> is a very large model trained on a huge mix of examples, then reused for many jobs. An LLM such as a GPT model is a foundation model for language. Newer ones can also see, hear, or call tools. **Being large and useful is not the same thing as being AGI.**

