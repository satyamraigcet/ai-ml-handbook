---
title: "15 · AI engineering"
sidebar_label: "15 · Engineering"
sidebar_position: 15
hide_title: true
slug: "/parts/part-4/15-ai-engineering-from-a-useful-model-to-a-dependable-product"
description: "From a useful model to a dependable product"
---

<ChapterHero n="15" title="AI engineering" kicker="From a useful model to a dependable product">
<p>AI engineering is the work of turning foundation models into useful, safe, measurable software. It combines product thinking, backend development, prompt and context design, retrieval, agents, evaluation, security, and operations.</p>
<PlainWords label="In plain words">
a model is an engine. An AI engineer builds the <Highlight>steering wheel, brakes, dashboard</Highlight>, maps, safety rules, and service plan that let people use it.
</PlainWords>
</ChapterHero>

<PillRow>
<Pill>The role</Pill>
<Pill>LLMs</Pill>
<Pill>Prompts</Pill>
<Pill>Context</Pill>
<Pill>Models</Pill>
<Pill>Current models</Pill>
<Pill>Embeddings</Pill>
<Pill>RAG</Pill>
<Pill>Agents & MCP</Pill>
<Pill>Safety</Pill>
<Pill>Evaluation</Pill>
<Pill>Multimodal</Pill>
<Pill>Tools</Pill>
</PillRow>

<LoopStrip
  title="THE AI ENGINEERING LOOP"
  steps={[
    {label: 'Discover', sub: 'user and problem'},
    {label: 'Prototype', sub: 'model + context'},
    {label: 'Evaluate', sub: 'quality + safety'},
    {label: 'Ship', sub: 'API + interface'},
    {label: 'Observe', sub: 'learn and improve'},
  ]}
/>

## What is an AI engineer?

<TwoCol>
<div>

### ROLE AND RESPONSIBILITIES

- Choose a valuable use case and define what a good answer or action means.
- Select models and design prompts, context, retrieval, tools, and guardrails.
- Build APIs and interfaces, manage identity and permissions, and control cost and latency.
- Create evaluations, inspect traces, monitor production, and improve failures.
- Work with product, design, domain experts, security, legal, data, and platform teams.
</div>
<div>

### IMPACT ON PRODUCT DEVELOPMENT

Probabilistic software cannot be specified only with “if this, then that”. Teams prototype with real examples, measure behaviour, and keep a feedback loop after launch. The product must handle uncertainty: cite evidence, ask for missing facts, refuse unsafe work, and let a person take over.

Start with the smallest useful workflow. A well-tested extraction step is often better than an impressive autonomous demo.
</div>
</TwoCol>

### AI ENGINEER COMPARED WITH AN ML ENGINEER

| Area | AI engineer | ML engineer |
| --- | --- | --- |
| Main building block | Foundation-model APIs or open-weight models, prompts, retrieval, and tools. | Task-specific models, features, training pipelines, and serving. |
| Frequent work | Context design, orchestration, evaluation, safety, product integration. | Data preparation, training, tuning, deployment, drift, and model performance. |
| Shared ground | Software engineering, APIs, data, cloud, security, testing, monitoring, and product judgment. | |

> The boundary is not fixed. One person may do both jobs. Frontend, backend, or full-stack practice is a fair prerequisite because the result is still a software product.

### Context engineering

> A prompt is one message. <Highlight>Context engineering</Highlight> decides **everything the model sees** across the product and keeps that information relevant, authorised, fresh, and small enough.

**Sources and layers:** system and product instructions · current user request and recent conversation · retrieved documents and database records · tool schemas and tool observations · user profile, workflow state, and approved memory · MCP resources supplied by connected servers.

**Techniques:**

| Technique | Purpose |
| --- | --- |
| RAG and dynamic filters | Retrieve at run time and filter by tenant, role, date, product, or source. |
| Memory systems | Store explicit facts or episodes outside the model and retrieve only relevant ones. |
| Context compaction | Summarise or extract durable state when a transcript becomes too large. |
| Long-context processing | Map, rank, or process sections in stages rather than pasting everything blindly. |
| State and historical context | Keep typed workflow state and an auditable event history outside prompts. |
| Multi-agent context sharing | Pass scoped artifacts and results, not every agent's full transcript. |
| Context isolation | Separate users, tasks, secrets, and untrusted content with explicit boundaries. |
| Failure handling | Detect stale, conflicting, missing, poisoned, oversized, or unauthorised context and stop safely. |

**Security and evaluation:** authorise every retrieval before it enters the context. Treat documents, web pages, and tool results as **untrusted data, not instructions**. Redact secrets and sensitive fields, separate tenants, and log only what is necessary. Evaluate context *precision* (was it relevant?), *recall* (was needed evidence present?), freshness, permission correctness, token use, and whether the answer is supported by it. Context warehouses and catalogs (DataHub, Atlan, Postgres, and models) can help discover governed data — a catalog improves discovery; access control must still be enforced at the source.

### AI models and choosing one

**Types of models:** pre-trained (general weights learned before your application uses them) · closed (hosted behind an API: OpenAI, Anthropic, Google, Cohere, Mistral families) · open-weight (downloadable: Llama, DeepSeek, Qwen, Gemma, some Mistral) · self-hosted (you operate inference, scaling, security, upgrades, and capacity). *"Open weight" does not automatically mean open source or unrestricted — read the model card, licence, and acceptable-use terms.*

**Selection scorecard:**
- Quality on **your held-out examples**, not any leaderboard.
- Latency, throughput, context length, and total cost per successful task.
- Text, image, audio, tool calling, structured output, and language support.
- Data location, retention, privacy, safety controls, licence, and vendor risk.
- Operational fit: API reliability, or the GPU skill needed to self-host.

### AI safety and ethics

**Risks to understand:**
- **Prompt injection:** untrusted content tries to replace system or user intent.
- **Privacy and security:** sensitive data leaks through prompts, logs, retrieval, or tools.
- **Bias and unfairness:** quality or outcomes differ across groups.
- **Hallucination:** plausible claims without adequate evidence.
- **Unsafe agency:** an action has more permission or impact than the user intended.

**Practical safety controls:**
- Use moderation APIs where appropriate and define an escalation path.
- Attach an end-user ID or privacy-preserving abuse identifier when supported.
- Run adversarial tests, including indirect injection inside retrieved documents.
- Use robust instructions, delimit untrusted data, and validate every output and tool argument.
- Know the customer and use case; require approval for high-impact actions.
- Constrain inputs, outputs, network destinations, spend, steps, and permissions **in code**.

**Defence in depth:** no prompt can be the security boundary. Combine identity, authorisation, data classification, retrieval filters, sandboxing, allow-lists, output validation, human approval, audit logs, monitoring, and an incident response plan. Test both model behaviour and the surrounding software.

### Evaluation, observability, and regression testing

Track: tracing and logging (model calls, retrieval, tools, timings, tokens, errors, run ids) · cost and latency (per request and per successful task, including retries) · production quality (task success, groundedness, safety events, user corrections, tool failures). Common platforms: **LangSmith, Langfuse, Helicone, Arize AI** — choose based on data controls, integrations, evaluation workflow, and operational fit.

**Evaluation types:**
- **Deterministic:** schema validity, exact fields, citations, tool selection, unit tests.
- **Model-based:** a judge model scores a rubric — calibrate it against human-labelled cases.
- **Human:** experts judge usefulness, correctness, tone, and harm.
- **Metrics:** quality, retrieval precision/recall, groundedness, safety, latency, cost.

DeepEval and Ragas can automate evaluation suites. **Their scores are signals, not unquestionable truth.**

**Regression testing:**
1. Collect representative normal cases, edge cases, failures, and adversarial cases.
2. Record the expected facts, tool actions, constraints, or rubric — not one exact paragraph unless wording is the point.
3. Run the suite whenever the model, prompt, retriever, tool, or policy changes.
4. Compare quality, safety, latency, and cost with the current production baseline.
5. Block or review a release when critical cases regress — then add production failures back into the set.

### Multimodal AI

**Use cases:** image understanding, OCR, visual question answering, and document extraction · image generation and editing · video understanding, search, summarisation, and moderation · audio processing, text-to-speech, speech-to-text, and voice interfaces.

**Platforms:** vision-capable model APIs, image generation APIs, Google's image models, Whisper-style speech recognition, hosted text-to-speech, multimodal models on Hugging Face. LangChain and LlamaIndex connect multimodal inputs to retrieval and workflows. Independently test file limits, media quality, accessibility, consent, copyright, harmful content, latency, and cost. **Product names change faster than the underlying patterns.**

### Development tools and a practical learning path

**AI-assisted coding tools** such as Claude Code, Gemini CLI, Codex, Cursor, Devin, and Replit can explain a repository, draft changes, run commands, and help debug. Capabilities and names evolve. Treat generated code like a new teammate's pull request: understand the diff, keep secrets out of prompts and logs, use least-privilege tools, run tests and security checks, and review dependencies and licences. "Vibe coding" is useful for exploration; **ownership of production behaviour stays with the team.**

**Build one small system end to end:**
1. Choose one narrow user problem and write ten examples of success and failure.
2. Call one model with a clear prompt and structured output.
3. Add retrieval only if the task needs private or changing facts.
4. Add a tool only when the task needs an action or exact computation.
5. Add safety checks, permissions, timeouts, and a human confirmation for risky actions.
6. Create an evaluation set and trace every step.
7. Ship to a small group; watch quality, latency, cost, and incidents; then improve.

**In one line (chapter):** AI engineering is disciplined product and software engineering around probabilistic models — give them the right context and tools, constrain their power, measure the result, and keep improving the system.

**Q&A from the press sheets — AI engineering**

- **What makes AI engineering different from calling a model API?** The surrounding product system: context, retrieval, tools, identity, permissions, safety, evaluation, observability, cost control, and a feedback loop.
- **When should facts go into RAG rather than fine-tuning?** When they change, are private, need citations, or must be updated without retraining. Fine-tuning is better for repeatable behaviour or specialised skill.
- **What is the difference between prompt and context engineering?** Prompt engineering shapes instructions and examples. Context engineering shapes the entire information supplied to each call — retrieval, memory, tools, state, security, and compaction.
- **Why is prompt injection not solved by a stronger system prompt?** Untrusted content can still influence model output. Real protection comes from code-enforced permissions, isolation, validation, allow-lists, approval, and monitoring around the model.
- **What should be measured before changing models?** Quality on representative cases, safety, latency, throughput, cost per successful task, capabilities, data controls, licence, and operational fit.
