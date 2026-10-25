---
title: "Chapter 11 · Generative AI & LLMs"
sidebar_label: "11 · GenAI"
sidebar_position: 11
hide_title: true
slug: "/parts/part-4/11-generative-ai-and-llms"
description: "11 · Generative AI & LLMs"
---

<ChapterHero n="11" title="Generative AI & LLMs" kicker="Something new, then the facts" />

### Basic pictures, plain words

<PlotClassicVsGen />

- **Classic model** → picks a label or a number: house size + rooms + age → *spam or not spam · ₹42 lakh*. The answer already exists in the world.
- **Generative AI** → <Highlight>makes something new</Highlight>: "write a story about rain" → *a new story, picture, or song*. The output was not sitting in a table waiting to be picked.

**In plain words:** one kind of helper answers "what is this?" or "how much?". Generative AI makes a new story, picture, or song that was not sitting in the list already.

<PlotGenFamily />

**The family, in order:** AI (machines that do smart tasks) → ML (they learn from data) → LLM (they work with words) → GenAI (they create something new).

### What is a model?

A deployable model includes its **architecture or computation graph, learned parameters, configuration and preprocessing/tokenization information** — not just one file of numbers. Training code and data are separate but should be versioned for reproducibility. A fine-tuned model is adapted further on task-specific examples.

### What is an LLM?

A large language model learns <Highlight>statistical patterns in language</Highlight> from large datasets. Autoregressive, decoder-style LLMs (the usual chat models) generate text by repeatedly predicting the next token. Other architectures, such as encoder models, may instead learn by predicting masked or otherwise transformed text.

<PlotTokenLoop />

```
Your words → split into small chunks of text (tokens) → deep neural net guesses the next token → add it, and guess again
```

"Large" means a lot of numbers inside the model, learned from a lot of text. **ChatGPT, Claude, Gemini, and Llama are LLMs.** A picture model such as a diffusion model is generative AI too — a different kind of model.

### LLM types — three overlapping questions

**1 · How it is built**

| Type | Example | Behavior |
| --- | --- | --- |
| Decoder-only | GPT, Llama | Reads the past tokens and writes the next one. The usual chat model. |
| Encoder-only | BERT | Reads a whole sentence and builds a meaning. Used for search and sorting, less often for writing. |
| Encoder-decoder | T5, BART | Reads one text, then writes another. Handy for translation and summarisation. |

**2 · How it was adapted or used**

| Type | Behavior |
| --- | --- |
| Base | Only trained to continue text. Completes a sentence; does not reliably follow an instruction. |
| Instruction-tuned | Further trained to follow directions: "summarise this", "answer as JSON". |
| Reasoning-optimized | Adapted or prompted to use more inference-time computation on difficult tasks. Extra computation does **not** guarantee a correct answer. |
| Multimodal | A capability label: accepts or produces more than text, such as images or audio. Can overlap with the labels above. |

**3 · Who can run it**

| Type | Behavior |
| --- | --- |
| Closed model | The weights stay with the company. You send a request to their API and get text back (GPT, Claude, Gemini APIs). |
| Open-weights model | The weights can be downloaded and run on your own machine or server (Llama, Mistral, Qwen, Gemma). "Open weights" is a distribution fact — the licence may still limit commercial use. Read the licence before you ship. |

### Three ways to give a model your facts

| Way | How | Catch |
| --- | --- | --- |
| **Paste it in** | Put the whole file in the prompt. | Works for one short note. A library of policies overflows the context window. |
| **Fine-tune** | Train further on your examples so a skill or style becomes part of the weights. | A PDF that changes next week needs another training run before the new rule is in the weights. |
| **RAG** | Keep documents in an index; on each question, retrieve the current passages and generate from them. | Replace a file in the index and the next answer can use the new text. |

### How large language models work — the short version

```
Tokens → Context → Transformer → next-token probabilities → append the token and repeat
```

A tokenizer breaks text into pieces. During training, the network adjusts its weights to predict missing or next tokens across a large corpus. During inference, those fixed weights produce one token at a time. **An LLM is not a database of guaranteed facts; it is a <Highlight>learned probability model</Highlight>.**

**Core elements**
- **Tokens:** pieces of text; the unit used for limits and billing.
- **Context:** instructions, messages, documents, tool definitions, and results visible in this call.
- **Context window:** the maximum tokens that fit in one request and response.
- **Embeddings:** vectors that place semantically similar items near each other.

**Model mechanics:** each new token can attend to the tokens already in the context; the network turns that into a probability for every token in its vocabulary; a decoding rule picks one (greedy = top probability; sampling = draws from the distribution); the chosen token is added and the step runs again.

**Tokenization:** the model does not read words as the unit of work. "unhappiness" may be several tokens; a long JSON tool result can be many more tokens than it looks. Counts, prices, and the context window are all in tokens.

**Token-based pricing:** hosted APIs bill input and output tokens separately; output is often more expensive. Cached repeated input, reasoning tokens, and images may be billed on their own lines. A tool that pastes a whole file into the next call can cost more than the user's question.

**Sampling parameters** (they change variation, not truth — test one change at a time):
- **Temperature:** lower is steadier; higher spreads probability and adds variation.
- **Top-k:** sample only from the k most likely next tokens.
- **Top-p (nucleus):** sample from the smallest set whose probability reaches p.
- **Repetition penalties:** reduce repeated words or phrases.

### Common terminology

| Term | Meaning |
| --- | --- |
| AI vs AGI | Today's AI performs bounded tasks. AGI is the unproven idea of broadly human-level capability across domains. |
| Fine-tuning | Continue training to change repeatable behaviour or skill. Not the best place for facts that change weekly. |
| Prompt engineering | Design the instructions, examples, and output contract for a model call. |
| Context engineering | Design the complete information system around each call: what enters, what is omitted, and how it is updated. |
| RAG | Retrieve relevant material passages at request time, then generate from them. |
| AI agent | A guarded loop in which a model may choose tools, observe results, and continue to a stop rule. |

### Prompt engineering — four starter patterns

| Pattern | What you do | When it helps |
| --- | --- | --- |
| Zero-shot | Instructions only; no examples. | Clear, familiar tasks. |
| Few-shot | Add a few input → output examples. | Format, tone, or edge cases that words alone miss. |
| Chain-of-thought | Ask for working steps before the final answer. | Multi-step maths or logic — still verify; fluent steps can be wrong. |
| Structured output | Demand a schema (JSON fields, bullet checklist). | Anything another program must parse. |

Keep prompts short, name the audience and constraints, and test on a fixed set of hard cases. Agent-specific prompting (ReAct, tool schemas) lives in Chapter 14.

### Fine-tuning vs PEFT (LoRA)

**Full fine-tuning** updates (almost) every weight — strongest control, highest cost and storage. **PEFT** (*parameter-efficient fine-tuning*) freezes most of the model and trains a small adapter. **LoRA** is the common PEFT method: it learns low-rank update matrices instead of rewriting the whole network.

| Approach | What changes | Prefer when |
| --- | --- | --- |
| Prompt / context | Nothing in the weights | You can steer with words and examples. |
| RAG | Nothing in the weights; the library changes | Facts move, need citations, or stay private. |
| PEFT / LoRA | A small trainable slice | Style, domain phrasing, or a skill must stick across many prompts. |
| Full fine-tune | Most or all weights | PEFT is not enough and you can pay for the run. |

Pre-training ≈ general knowledge. Fine-tuning / PEFT ≈ specialize behaviour. Changing weekly facts still belong in retrieval, not in another training job.

### Foundation models — how they are made

```
Broad data (text, and sometimes more) → Pre-training (learn general patterns) → Post-training (follow instructions, reason, stay safe) → Adaptation (prompts, tools, retrieval, or fine-tuning)
```

- **Pre-training** learns broad patterns from very large datasets.
- **Post-training** improves instruction following, reasoning, safety, or tool use.
- **Adaptation** points the same model at one job with a prompt, retrieved notes, tools, or further training.

**Where it sits:** deep learning is the method. A foundation model is one very large result of that method. ChatGPT is the product people talk to; the GPT model inside it is the foundation model. A powerful foundation model is not automatically AGI — broad training and many skills do not prove human-level transfer, reliability, autonomy, or self-awareness.

### Open-weight vs closed-weight (for builders)

- **Open-weight:** download and run yourself; you control the machine, the logs, and the data path. Familiar families: Llama, Mistral, Qwen, Gemma.
- **Closed-weight:** the weights stay with the provider; you trade control of the weights for a managed service. You still own the agent loop, the tools, the logs, and the decision to send a given document to that API.
- **A family** is a line of models sharing a design and training approach, usually in several sizes. Larger = often stronger, slower, more expensive; smaller = often the right router, classifier, or first draft. Track: family (the product line) · size/variant (checkpoint + instruct/reasoning/vision/code labels) · licence or terms (Apache-2.0 vs community licence vs proprietary API are different permissions).

### ChatGPT's current model family (dated snapshot · 13 October 2026)

> Names, access, prices, and limits change quickly. Check the provider's current model picker before a technical or purchasing decision.

| Name you may see | What it is | Where it shows up |
| --- | --- | --- |
| GPT-6 | The regular Chat option. Paid Chat uses GPT-6 Sol from Instant through Extra High; Free and Go use GPT-6 Terra. | ChatGPT Chat, as the rollout reaches a plan. |
| GPT-6 Pro | The highest Chat option, powered by GPT-6 Astra. | Eligible paid plans. A workspace admin can turn it off. |
| GPT-6.1 Sol | A newer model aimed at coding, computer use, and professional work. | ChatGPT Work, Codex, and the API. Not a normal Chat choice in this snapshot. |

ChatGPT is the product; GPT is the model family inside it. The same menu name can hide a different engine depending on plan, thinking level, app version, and workspace.

### Recent foundation-model news (as of the snapshot)

| Provider | Recent announcement | What it signals |
| --- | --- | --- |
| OpenAI | GPT-6 family (Sol / Terra) in ChatGPT, including answers with interactive UI elements. | Chat answers are moving beyond plain text toward generated interfaces and tools. |
| Google | Gemini Argon announced for phased access, beginning with trusted cyber defenders. | A frontier release may be staged while safety checks continue. |
| Anthropic | Claude Haiku 3.5 launched as a fast, lower-cost model for high-volume work. | Smaller frontier models matter for cost, speed, and everyday production use. |
| Meta | Muse Wonder and Wonder Ball for personal and professional agentic tasks. | Memory, long-horizon work, and personalisation are becoming part of the model, not only the app around it. |

> A launch post is the provider's claim, not independent proof. Compare models on **your** held-out tasks, inspect safety reports and licences, and measure complete-system quality, latency, and cost.

### Platforms, ecosystems, APIs, and SDKs

| Option | What it provides |
| --- | --- |
| Hugging Face | Model hub, datasets, Spaces, inference, and libraries; Transformers.js can run supported models in JavaScript. |
| Ollama | A simple local model runner and local API. |
| LM Studio | A desktop interface for downloading and serving compatible local models. |
| OpenRouter | One API-shaped gateway to models from multiple providers. |
| Provider APIs | OpenAI Responses, Anthropic Messages, Google Gemini, and Hugging Face Inference expose platform capabilities. |
| OpenAI-compatible APIs | A shared request shape offered by several gateways and local servers; extensions and behavior still differ. |

> Pin model versions when reproducibility matters. Provider names, APIs, prices, and availability change — check current documentation before shipping.

**Q: What does a large language model actually do?**
It learns statistical language patterns over tokens. Autoregressive chat models predict a next token repeatedly; encoder models can learn through objectives such as masked-token prediction. Generative AI is the wider family of models that create text, images, code, audio or other content.
