---
title: "Chapter 14 · AI Agents — a model that can take a next step"
sidebar_label: "14 · Agents"
sidebar_position: 14
hide_title: true
slug: "/parts/part-4/14-ai-agents-a-model-that-can-take-a-next-step"
description: "14 · AI Agents — a model that can take a next step"
---

<ChapterHero n="14" title="AI agents" kicker="A model that can take a next step">
<p>An agent is an application that calls a language model, may call tools, reads what came back, and repeats until a stop rule. The model proposes the next step. <strong>Your code decides whether that step is allowed, runs it, and records the result.</strong></p>
<PlainWords label="In plain words">
a chat box answers from the words you just sent. An agent can <Highlight>look something up, run a step</Highlight>, notice the result, and <Highlight>take another step before it answers</Highlight>.
</PlainWords>
</ChapterHero>

```
One model call → an answer                       (a chat reply)
Agent → act, observe, look, then try again…      (a loop until done or stopped)
```

<PlotReActLoop />

### The parts of an agent

**Model** (proposes the next step) → **Tools** (actions your code runs) → **State** (what this run knows) → **Stop rule** (steps, cost, or done).

### AI agents 101

- **What are AI agents?** A system with a goal, a model, tools, state for this run, and a loop that steps. The model does not reach into your database by itself. It returns a *proposed* action. Your application checks that action and either runs it or refuses it. A single chat reply can be built with one call. An agent exists because the next useful step depends on a result the model does not have yet.
- **What are tools?** A function the model is allowed to request: search, a database read, a calendar lookup, a sandboxed calculation. The **description** tells the model when the tool is relevant; the **schema** tells it what arguments are valid. The model fills in the arguments; your code validates them, runs the function, and returns an observation. **A tool the model "calls" in prose did not run until your code ran it.**

### The agent loop — four beats, then a stop rule

```
1 Perception (user input + current state) → 2 Reason and plan (the model chooses a next step)
→ 3 Acting / tool invocation → 4 Observation (reflect on what came back) → next beat, or stop
```

1. **Perception / user input:** read the new message together with the state that belongs in this call: instructions, recent turns, and any memory you deliberately retrieved.
2. **Reason and plan:** the model decides to answer, to ask the user, or to request a tool. Some designs write the plan as text. The plan is a draft.
3. **Acting / tool invocation:** if the response contains a tool call, validate the name and arguments, run the function under its permission, and catch failures as data.
4. **Observation and reflection:** append the tool result to the state; the next model call can see it. The model may call another tool, correct itself, or write the final answer.
5. **Stop** when the model returns a final answer, when a person must approve, or when a budget is spent: max steps, max tokens, max cost, or a timeout. **A loop without a <Highlight>stop rule</Highlight> will run until the bill or the context window stops it for you.**

### Learn the prerequisites

An agent is ordinary software around a model call.

1. **Basic backend development** — a small service that receives a request, reads JSON, calls another system, returns a result. That service is where tools live: HTTP handlers, status codes, JSON bodies; authentication (a tool runs as a known user with known permission); logs and errors; configuration outside the code (model name, timeouts, secrets).
2. **Git and terminal usage** — the agent is a project you can run, change, and roll back. Clone, branch, commit, diff, open a review. Run a server, set an environment variable, follow a log. **Read an exit code: a tool that fails should not look like a success.**
3. **REST API knowledge** — most tools are a function shaped like an API call. The model may choose the call; your code still has to make it correctly.

| Idea | Why an agent needs it |
| --- | --- |
| GET read · POST create · PUT/PATCH update · DELETE remove | A read tool and a send tool are different permissions. |
| Status codes | 200 = result. 400 = bad argument. 401/403 = permission. 404 = missing. 429 = "slow down". 500 = the other system failed. |
| Idempotency | A retried "charge the card" must not charge twice. A retried "read the row" can run again safely. |
| Pagination and limits | Ask for a page of rows, not the whole database, and step at a time. |
| Auth headers | The token belongs to your service. The model should not be handed a key and told to paste it into a URL. |

### LLM fundamentals for the loop

A transformer is the architecture behind most current language models. A chat LLM uses it to predict the next token, append it, and predict again. The agent sees the finished message, or a tool call, at the end of that process. (Model mechanics, tokenization, context windows, and token-based pricing: see Chapter 11.)

### Generation controls

> These settings change how the next token is chosen, or when generation stops. **They do not make a false statement true.** Some reasoning models ignore temperature and top-p and spend the extra budget on a separate reasoning pass.

| Control | What it does |
| --- | --- |
| **Temperature** | Scales the probabilities before a token is picked. Near 0, the model repeats the most likely wording; higher values spread chance across more tokens. Use low temperature for a stable tool argument or fixed format; higher for varied drafts. It is not a truth setting. |
| **Top-p** | Nucleus sampling: considers the smallest set of tokens whose probabilities add up to p, then samples inside it. A low p cuts off the long tail. Change temperature and top-p one at a time when testing. |
| **Frequency penalty** | Lowers the chance of a token in proportion to how often it has already appeared. Pushes back against the same phrase repeating. |
| **Presence penalty** | Lowers the chance of a token once it has appeared at all, nudging toward unused words — can change the topic as well as the wording. |
| **Stopping criteria** | Generation ends on a stop sequence you set, the model's stop token, a length cap, or a tool call. The loop should treat "the model wants a tool" as a step to run and "the model finished the answer" as a possible exit. A stop sequence inside a JSON tool argument will cut the call in half. |
| **Max length** | A cap on generated tokens. Too small → the answer or tool-call JSON is cut off. Too large → a rambling reply spends the budget. Input tokens + maximum output must fit the context window; reasoning models may also spend hidden tokens before the visible answer. |

### Ideas that sit beside the model

- **Streamed vs unstreamed:** unstreamed returns the finished message in one response — simple to parse; the user waits. Streamed sends tokens as produced; tool-call arguments may be incomplete until the stream ends. **Parse and run a tool only when that call is finished. Save the assembled message, not only the pieces you painted on screen.**
- **Reasoning vs standard models:** a standard instruction model writes the visible answer directly. A reasoning model may spend extra inference-time computation (sometimes hidden thinking tokens) before that answer — helps on hard multi-step tasks, costs more time and money, can still be wrong. Keep a stop on reasoning tokens and judge the final action, not the length of the thinking.
- **Fine-tuning vs prompt engineering:** prompting changes the words sent on this call; you can change it before the next request. Fine-tuning continues training so a skill or style is baked into the weights — use when the same behaviour must hold across many prompts and prompting is not enough. A document that changes next week still belongs in retrieval.
- **Embeddings and vector search:** the lookup behind RAG and one kind of long-term memory. It finds similar text. It does not say whether that text is current, allowed for this user, or the right source of truth. Filters for date, owner, and permission belong there too.

### Prompt engineering for agents

**Prompt anatomy (the six layers):**
1. **System instruction:** purpose, boundaries, priorities, refusal behaviour.
2. **Role and behaviour:** the audience, tone, and decision the output supports.
3. **Context:** trusted facts, examples, conversation state, tool results.
4. **Task and input format:** the exact work and how input fields should be read.
5. **Constraints:** source limits, length, policy, what not to infer.
6. **Structured output:** a schema — fields, types, and a valid example.

**Writing good prompts — six habits:**
1. **Be specific.** Name the task, the user, the decision. "Help with travel" is weaker than "propose two trains that arrive before 10:00".
2. **Provide additional context.** Put in the policy, the date, the user's constraints, the retrieved notes. The model does not know your private rules.
3. **Use relevant technical terms.** The words in the prompt, tool descriptions, and documents should match. If the policy says "casual leave", do not make the model guess from "holiday".
4. **Use examples.** One or two examples of a good tool call, or a good and a bad answer, teach the format faster than a long adjective.
5. **Iterate and test.** Keep a fixed set of cases. Change one instruction, run the set, keep the version that fails less. **A single lucky demo is not a test.**
6. **Specify length, format, and the refusal.** JSON that matches a schema, a sentence limit, and a required "the notes do not say" when evidence is missing.

**Prompting techniques:** zero-shot (instructions without examples) · few-shot (representative input-output examples) · chain of thought (extra reasoning effort for multi-step tasks — verify the result rather than trusting fluent steps) · ReAct (interleave reasoning, an action, and an observation from a tool). Use examples from real edge cases and maintain a regression set. **"Be accurate" is not a test.**

**Chain of thought vs tree of thought:** CoT asks for intermediate steps before the final answer — helps on multi-hop problems, but the written steps can still be fluent and wrong; when a tool can check the result, prefer the tool result over the paragraph. Tree of thought explores several candidate next steps, scores them, continues from better branches — each branch is another call, so cost rises quickly. Use it when a first guess is often wrong and you have a scorer that is not just the model's own confidence (a unit test, a rubric, a tool result). Cap the depth and the number of branches; **a tree without a budget is an expensive loop.**

### Tools and actions

> A tool definition is what the model sees. The implementation is what your code runs. They should describe the same action, including the failures.

| Part | What to write |
| --- | --- |
| **Name and description** | The name is a stable identifier. The description says when to use the tool *and when not to*. The model chooses from these words. A vague description selects the wrong tool. |
| **Input / output schema** | A schema (usually JSON Schema) for arguments, and a documented shape for the result. Your code validates arguments before the function runs. Extra fields are rejected. |
| **Error handling** | Return a structured error the model can read and act on: timeout, permission denied. A stack trace is for your logs. An empty string looks like a successful empty result. |
| **Usage examples** | One valid call and one valid result, in the description or system prompt. Examples cut down malformed arguments more reliably than adjectives such as "correctly". |

**Common tools, and the boundary each needs:**

| Tool | Guardrail |
| --- | --- |
| Web search | Query in, titles/snippets/URLs out. A snippet is a clue — the answer should open or cite a source when the fact matters. Search does not grant the right to ignore the page's terms. |
| Code execution / REPL | Run in a sandbox with limits on time, memory, and network. The observation is stdout, stderr, and the exit code. The host shell, with the service's credentials, is **not** a REPL for the model. |
| Database queries | Parameterized queries, a role that can only do the intended reads or writes, a row limit, a timeout. The database enforces permission — the model does not get a superuser connection. |
| File system access | A rooted directory, a block on path traversal, a size limit. Read and write are different tools. "Delete" is a third tool, usually behind a confirmation. |
| API requests | An allow-list of hosts and methods. A general "HTTP anywhere" tool aimed at the internal network will eventually be asked to call something it should not. |
| Email / Slack / SMS | Draft first. Send only after a policy check or a person confirms. Log the recipient and enough of the message to audit; keep the provider credential on the server. |

**MCP note:** when a tool should be shared across apps, put it behind MCP (see *Model Context Protocol — in detail* within Chapter 13). In this chapter, a tool is still a function you validate; MCP is only the standard door that function can stand behind.

### Agent memory

> Memory is information carried past a single model call so a later step can use it. Some of it is just the message list. Some of it lives in a store and is copied into the prompt when it is relevant.

| Kind | What it is |
| --- | --- |
| **Episodic memory** | Particular events: "On Tuesday the user asked to move the Delhi trip, and the 18:00 train was booked." An episode has a time and a source. It is evidence of what happened — which can go stale. |
| **Semantic memory** | General facts used later: "This user prefers aisle seats." "Casual leave is 12 days." A fact pulled out of episodes still needs a source and a date. A preference the user corrected should replace the old fact, not sit beside it with equal weight. |
| **Short-term memory** | Within the prompt: system instructions, recent messages, tool results for this run. Available only while it fits in the context window. When the window fills, older turns are dropped or replaced by a summary you chose to keep. **Short-term memory dies with the conversation unless you write it somewhere else.** |
| **Long-term memory** | A store outside the call. Three shapes: **vector database** (similar past notes, retrieved by embedding), **SQL** (exact records, counts, preferences, "the latest row"), **custom** (files, key-value store, the game's own state). Retrieved rows are pasted into this turn's prompt. The store is not inside the model. |

**Maintaining memory:**

| Practice | Details |
| --- | --- |
| RAG / vector databases | Embed notes, retrieve the nearest. Strong for "what did we say about X". Weak for exact identifiers, counts, "which version is current" — put those in a table. |
| User profile storage | Structured fields with an owner and an edit path: name, preferences, permissions. A profile hidden only inside a vector index is hard to correct and hard to delete. |
| Summarisation / compression | When the transcript grows, a model writes a shorter state and the prompt keeps that. Compression drops detail — keep the original log if you may need to audit a decision. |
| Forgetting / aging | Down-rank or delete old memories, expire facts that go stale, honour a user's request to delete. Removal means the store, the backups you control, and the next prompt. Omitting a sentence once is not forgetting. |

### Agent architectures

> Patterns for who plans, who acts, and how a run stops. A more elaborate pattern costs more calls. **Start with the smallest loop that can finish the task.**

| Architecture | How it runs |
| --- | --- |
| **RAG agent** | Retrieval is a tool inside the loop: search, read the passages, notice a gap, rewrite the query, search again, answer with the source. A plain RAG pipeline searches once; the agent searches until the evidence is enough or the step budget ends. |
| **ReAct (Reason + Act)** | The model writes a thought, chooses an action, reads the observation, repeats. The thought is useful in a trace and can be wrong — interleave it with tool results so the next step is tied to evidence, not only to the previous thought. |
| **Planner–Executor** | One step writes a plan; later steps carry out each item, often with tools. If a step fails, re-plan from the observation. The executor must be allowed to stop and report a blocked step — a plan written at the start does not know what the tools will return. |
| **DAG agents** | The work is a directed acyclic graph: tasks with edges, no cycle. Independent nodes can run at the same time. Retries live outside the DAG or become single nodes. Use a DAG when the shape of the job is known before it runs. |
| **Multi-agent** | Several agents with different instructions pass messages. A researcher, a writer, and a critic is the usual sketch. Use it when roles and tools truly differ. |
| **Self-critique** | The same model in a second seat marks the draft against a rubric and requests a revision. Cap the rounds — a critic that hates the draft forever is a loop. |

**Use cases:** personal assistants · coding · research · support · data analysis · workflow automation. **Reality check:** every extra agent adds cost and failure paths.

### Example use cases (with the catch)

- **Personal assistant:** calendar, mail, reminders. The useful version can read the user's own data and draft a reply. Sending, deleting, or paying waits for a confirm step. The tool's permission is the *user's* permission, not the developer's admin account.
- **Code generation:** the model proposes an edit, a sandbox runs the tests, and the failure text comes back as the observation. The loop is "change, run, read the error". The sandbox has a time limit, a memory limit, and no access to production secrets.
- **Data analysis:** the agent writes or fills a query; a warehouse role that can only read returns a limited result; the model summarises it. Cite the query. A free-form query against a production database is a different, much riskier tool.
- **Web scraping / crawling:** fetch pages the product is allowed to read; extract a field. Prefer an official API when one exists. Respect terms, access controls, and rate limits. Bypassing a login, a paywall, or a block is not a feature of this handbook.
- **NPC / game AI:** a character with a persona, short dialogue memory, and tools that read game state (location, inventory, quest flags). The loop runs every turn, so latency and token cost are part of the design. The model may choose a line; the game rules for damage, inventory, and win conditions stay in the game code.

### Building agents — manual, from scratch

You own the loop. A framework is optional until the path branches, waits for a person, or needs many integrations.

| Piece | What you implement |
| --- | --- |
| Direct LLM API calls | HTTPS to the provider with the model name, the message list, the tool schemas, and a timeout. Store the raw response for the trace. |
| The agent loop | Append the user message, call the model, and branch. A tool call is validated and run; the observation is appended. A final answer is returned. A counter increments. At the cap, stop with a clear failure or a partial answer. |
| Parsing model output | Prefer the API's structured tool-call fields. If you must read JSON from prose, validate it and retry once with the validation error in the next message. **Do not evaluate the string as code.** |
| Error and rate-limit handling | Retry timeouts and HTTP 429 with backoff, jitter, and a budget. A 400 from a bad schema will not succeed by being sent again. When the budget is spent, fail in the product, and record the provider error. |

**LLM-native function calling:** the API accepts tool definitions and can return a structured call — a name and arguments, separate from the prose. Your application still executes the function. **Native function calling is a parsing contract. It is not permission to run every function the model names.** (OpenAI function calling is this pattern on its chat APIs; other providers expose the same idea under their own request fields. OpenAI's Assistants API hosts the thread and some tool state on the platform; newer apps often keep the loop themselves on the Responses API or Chat Completions. Provider surfaces move — confirm which one is current, and what it stores, before you depend on it.)

**Building with frameworks:**
- **LangChain:** prompts, chat models, retrievers, and tools as pieces you compose. A chain fits a path that does not need to branch.
- **LangGraph:** the same pieces as a graph of nodes and edges with shared state. Fits loops, branches, and steps that wait for a person.
- **CrewAI:** assign roles, goals, and tools to agents and run them as a crew. Useful for trying a role split. You still need stop rules and tests.
- **AutoGen:** a multi-agent conversation framework in which agents message each other, including a human proxy. Group workflows are easier to sketch and harder to trace — keep one run id across every speaker.

> A framework should not hide the tool boundary. You should still be able to point at the line that runs a function.

### Evaluation, debugging, and monitoring

> A demo that worked once is not an evaluation. Fix a set of cases, score them the same way after every prompt or model change, and watch live runs for cost and failures.

**Metrics to track:** task success (on a fixed set, did the outcome match the expected record?) · tool accuracy (right tool, valid arguments, no extra dangerous call) · faithfulness (the answer stays within the retrieved notes when the task requires that) · cost of a run (steps, latency, input/output tokens, failure rate) · regression (yesterday's passing cases still pass after the prompt change). Budget per task, and log tokens per task so the bill is not a surprise.

- **Unit testing for individual tools:** call the function with fixed inputs, including bad ones. No model in this test. The tool must reject path traversal, a missing id, an oversized query, and a missing permission **on its own**. A tool that only behaves because the prompt said "be careful" is untested.
- **Integration testing for flows:** walk the loop with a scripted model or a recorded trace: user message, expected tool, canned observation, final answer. This catches a broken parser when the live model is flaky. Keep a smaller live suite that hits the real model on a few cases — and expect that suite to move when the provider updates the model.
- **Human-in-the-loop evaluation:** a person approves a send, a payment, or a low-confidence answer before the tool runs. People also score traces with a rubric while you are still deciding what "good" means. Use a person where a wrong action is costly or the automatic metric does not match the job yet.

**Evaluation frameworks:**

| Tool | What teams use it for |
| --- | --- |
| LangSmith | Traces of each step, datasets of examples, and scores. Compare a new prompt with last week's run. |
| DeepEval | Test cases and metrics you can run in CI, including faithfulness and answer-relevance checks. |
| Ragas | Metrics aimed at RAG: faithfulness, context precision and recall, answer relevancy. Use when the agent's answer is supposed to come from the retrieved notes. |

**Debugging and monitoring:** structured logs (run id, step number, tool name, latency, token counts, error class — leave secrets and full customer documents out of the default log) · traces (the prompt, the tool call, and the observation, in order, so a bad answer can be walked backwards) · metrics (success rate, steps per task, cost per task, timeout rate, tool error rate) · alerts (fire when cost, error rate, or a safety check crosses a line you chose, and attach a runbook — **an alert that nobody can act on is noise**).

**In one line (chapter):** an agent is a guarded loop around a model. Tools, memory, MCP, and frameworks are ways to give that loop a next step. Tests, traces, and a stop rule are what make the loop safe to run again tomorrow.
