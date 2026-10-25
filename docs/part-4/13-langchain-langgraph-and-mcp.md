---
title: "Chapter 13 · LangChain, LangGraph & MCP"
sidebar_label: "13 · LangChain"
sidebar_position: 13
hide_title: true
slug: "/parts/part-4/13-langchain-langgraph-and-mcp"
description: "13 · LangChain, LangGraph & MCP"
---

<ChapterHero n="13" title="LangChain, LangGraph & MCP" kicker="Parts, route, and doors">
<p>The parts, the route, and the door into real systems.</p>
<PlainWords label="In plain words">
the model writes. LangChain <Highlight>supplies the ports</Highlight>. LangGraph <Highlight>decides the route</Highlight>. MCP is how the route reaches a real weather service, a file, or a database.
</PlainWords>
</ChapterHero>

These are optional tools. Ordinary code can call a model, a database, and a function. The names below are one popular way to organise that work.

### LangChain — a <Highlight>framework and ecosystem</Highlight> for LLM applications

```
User → Agent or LLM (understand the goal) → LangChain (compose the steps) → Tools or retriever (API, search, documents) → Result
```

| Shelf | What it holds |
| --- | --- |
| Models | The same application shape can call OpenAI, Gemini, Anthropic, Hugging Face, or another provider. |
| Data and tools | Loaders, splitters, embeddings, retrievers, calculators, search, and other APIs snap in as components. |
| Workflows | Chains, agents, and memory. A chain is a straight path. An agent may choose a tool and try again. |

**Why the box of parts exists:** one model call is a few lines. An application also has to keep prompts, swap providers, load files, search them, call tools, and show what happened.

| Capability | What it gives you |
| --- | --- |
| Swap the model | Integrate different LLM providers without rewriting the whole application. |
| Keep the prompt | Manage prompts and model inputs in templates. The question changes; the shape stays. |
| Load and split | PDFs and text become chunks small enough to embed and to fit in a prompt. |
| Generate embeddings | Turn text into vectors so a later question can be compared by meaning. |
| Retrieve | Return the top matching chunks, with their source, before the model writes. |
| Build RAG | Load documents, split, embed, retrieve the passages that belong in this answer. |
| Call a tool | Connect search, SQL, a calculator, or an external API when the model must not invent the fact. |
| Stay modular | Prompts, models, parsers, and tools are separate pieces. Replace one without rebuilding the rest. |
| Start faster | The common path — a prompt, a lookup, a tool, an answer — does not begin from a blank file. |

### The LangChain ecosystem — five shelves

| Component | Role |
| --- | --- |
| **LangChain Core** | Building blocks: prompts, runnables, tools, output parsers, composition, and callbacks. |
| **Integrations** | Named providers: OpenAI, Gemini, Anthropic, vector databases, SQL, and APIs. |
| **Community** | Document loaders, vector stores, tools, retrievers, and third-party integrations maintained outside the core. |
| **LangGraph** | Nodes, edges, state, conditional logic, loops, and agentic workflows — the route. |
| **LangSmith** | Tracing, evaluation, debugging, prompt monitoring, performance, and tests — the record of a run. |

**From your data to an application:** use an LLM (one prompt, one reply) → connect data (retrieve, don't paste) → build an agent (tools, state, a stop rule) → monitor (traces and scores) → production (permissions, escalation, a person for high-impact steps). In this stack, LangGraph coordinates the route, LangChain supplies the integrations, and LangSmith evaluates and traces runs. MLflow can track experiments and model artifacts. **None of these layers is required.**

**Sample code (how each piece is used):** [LangChain](/docs/parts/part-4/langchain) · [LangGraph](/docs/parts/part-4/langgraph) · [LangSmith](/docs/parts/part-4/langsmith) · [LlamaIndex](/docs/parts/part-4/llamaindex) (under RAG). Each page has a short worked Python example.

### LangGraph — state, loops, and a decision

**Simple flow · LangChain — a straight line:**
`User question → Prompt template → LLM → Tools (search, a database, an API) → Final answer`
- Pre-built components: chains, agents, tools, and memory.
- A good fit for simple, linear workflows; easy to start; RAG and ordinary tool calling live here.
- Less control once the workflow is long, branching, and stateful.

**Graph flow · LangGraph — state, loops, and a decision:**
`User question → Start → Plan (the LLM) → Need a tool? → Yes: use the tool, update state, loop back to Plan → No: generate the final answer → Respond`
- You design the workflow as nodes and edges.
- State, loops, conditional logic, and retries are ordinary parts of the graph.
- The right shape for a complex multi-step agent; you keep full control of the flow and shared state.
- Built on top of LangChain; it uses LangChain components.

| | LangChain | LangGraph |
| --- | --- | --- |
| Job | Build simple LLM applications from ready parts. | Build stateful, multi-step AI workflows. |
| Shape | A line: prompt → model → tool → answer. | A graph: nodes, edges, conditions, loops. |
| State | Short memory on a straight chain. | Shared state you update at every node. |
| Control | Fast to start; the route is mostly fixed. | You own the route, including when to stop. |
| Relation | The components: models, prompts, tools, retrievers. | Uses those components, and decides the order. |

### MCP in brief — the open door

<PlotDoorsVsHouse />

**In plain words:** MCP opens the doors. LangChain helps build the house. The weather service, the drive, and the database stay where they are; the assistant knocks in a standard way.

| | MCP | LangChain |
| --- | --- | --- |
| What it is | A standard protocol for connecting AI apps to external tools and data. | A development framework for building AI application components. |
| Main focus | Connection and communication with tools, data, and systems. | Orchestration and composition of LLMs, tools, retrieval, and workflows. |
| Scope | A standard; works across different applications that speak it. | A framework and ecosystem with many components. |
| Picture | A common language for AI and external systems. **The doors.** | A toolbox for building AI applications. **The house.** |

**How they work together:** `User → Agent or LLM → LangChain (the workflow) → MCP (the connection) → Tools, resources, data`. MCP provides the connection; LangChain handles the workflow. An agent can also call a tool with ordinary code and skip both. **A protocol is not permission to read every file.**

**One request, three doors:** *"What's the weather in Nagpur today? Also check my latest report from the drive and show me the summary."* → Weather API = the weather · Drive = the file · Database = the rows. MCP connects those three capabilities; the agent decides the order, reads what comes back, and the workflow turns the pieces into one reply.

What an MCP server exposes: **Tools** (actions such as weather, search, or a calculator) · **Resources** (files, databases, and APIs the application may read) · **Prompts** (reusable templates, so every client does not invent the wording). What LangChain composes: **Models** · **Tools and retrieval** · **Workflows** (chains, agents, and memory, in an order you can trace).

---

### Model Context Protocol — in detail

> MCP is an open protocol that lets an AI application discover and use capabilities supplied by another program. A server can expose actions, readable context, and reusable prompt templates. The host remains responsible for the conversation, user consent, model access, and every capability it enables.
>
> **In plain words:** MCP is like a standard socket. The AI application knows how to plug in. Each server decides what appears at the other end: a weather lookup, a repository, a database, or a carefully limited business system.

#### What MCP is — and is not

| What it standardises | What it does not provide |
| --- | --- |
| How two programs establish a session, announce supported features, discover capabilities, exchange requests and results, and report errors. Messages use **JSON-RPC 2.0**. SDKs hide much of the plumbing, but the contract remains visible in logs. A host can connect to several servers; each connection has its own MCP client and its own trust boundary. | MCP is not a model, an agent framework, a database, or a permission system. It does not decide which tool the model should call, it does not make server output trustworthy, and it does not grant access merely because a capability was discovered. The host chooses what reaches the model. The server enforces the real permission when a request arrives. |

#### The complete boundary

```
User → Host (runs the experience) → Model (agent or workflow) → MCP client → MCP server → Business system (the real authority)
```

| Layer | Main question | Example |
| --- | --- | --- |
| User / Host | What should happen next? When should the app call, retry, ask, or stop? | "Use the order lookup." |
| Model / Agent | Plans and chooses the next step. | A LangGraph node or an application loop. |
| MCP | How are capabilities described and invoked? | List tools, then call `get_order`. |
| Underlying system | Is this operation valid and allowed? | The order API checks the user and stores the order. |

**Host, client, server, and the system behind it**
- **HOST:** the user-facing application. It controls the model, conversation, server configuration, permission prompts, and which server results enter the model context. It may combine capabilities from several servers into one model request.
- **CLIENT:** the protocol peer inside the host. One client normally maintains one stateful session with one server: performs initialization, records negotiated capabilities, sends requests, receives notifications, closes the connection.
- **SERVER:** advertises only the capabilities it intends to support. Translates protocol calls into local code or downstream API calls and back into MCP content. Validates inputs and enforces authorization.
- **UNDERLYING SYSTEM:** the server is often an adapter, not the source of truth. The source may be Git, a filesystem, a CRM, or a bank API. Its permissions and invariants still apply. **MCP should narrow that boundary, not bypass it.**

#### The session lifecycle

MCP is stateful. Before normal requests, the peers agree on the protocol version and the optional features each side supports.

```
1 Connect (start process / open HTTP route) → 2 Initialize (version + capabilities) → 3 Initialized (acknowledge) → 4 Operate (list, read, call, notify) → 5 Close (release process and resources)
```

1. **Initialization:** the client sends its supported protocol version, implementation information, and client capabilities; the server replies with the selected version, its information, and server capabilities; the client signals completion.
2. **Capability negotiation:** a peer must not assume every feature exists. A server may offer tools but no resources; a client may support reads but not sampling. Code checks negotiated capabilities before sending feature-specific requests.
3. **Discovery and operation:** the client lists available capabilities and invokes the ones it chooses. Lists may be paginated. A server can notify the client when a list changes, if both sides support that notification.
4. **Progress, cancellation, and errors:** long operations may report progress. Cancellation is cooperative — the implementation must stop its own downstream work. Protocol errors and tool execution errors are different and should remain distinguishable.

**A simplified message sequence:**

```
client → initialize                        server → protocol version + server capabilities
client → initialized notification          client → tools/list
server → tool definitions                  client → tools/call {name: "get_weather", arguments: {city: "Nagpur"}}
server → content: [{type: "text", text: "31°C, light rain"}]
```

The model does not send these messages itself. The host or agent decides to use a capability, and the MCP client performs the protocol exchange.

#### The core primitives

**The easiest distinction: tools do work, resources supply context, and prompts supply a reusable conversation shape.**

| Primitive | Control | What it is | Discovered with | Used with |
| --- | --- | --- | --- | --- |
| **Tools** | model-controlled | Named operations with descriptions and input schemas. The model may propose a call. Examples: search tickets, calculate tax, create a draft, update an approved record. Calls can have side effects, so the host may require confirmation. | `tools/list` | `tools/call` |
| **Resources** | application-controlled | Addressable content identified by a URI: a file, a schema, a notebook, a database record. The application decides what to read and place in context. Resource templates describe parameterised URI patterns. | `resources/list` | `resources/read` |
| **Prompts** | user-controlled | Reusable message templates that can accept arguments — "review this pull request", "summarise this incident". The user or host selects it; it is not an invisible instruction from the server. | `prompts/list` | `prompts/get` |

**Good design test:** Is this a bounded action with a strict schema? → tool. Can the content be named by a stable URI and read without pretending it is an action? → resource. Is this a reusable starting template the user can understand? → prompt.

**Client features:** the direction can reverse for selected features. A server may ask the host to *sample* from its model, request information from the user through *elicitation*, or work within filesystem *roots* the client declares. These are negotiated abilities, not automatic rights.

**Annotations are hints:** metadata can describe intent, audience, or likely behaviour. Treat it as display and planning information, not as an enforcement mechanism. A "read-only" hint does not replace a read-only credential or server-side authorization check.

#### Messages and transports

**Local — standard input/output (stdio):** the host launches the server as a child process and exchanges protocol messages through stdin/stdout. Simple; keeps the endpoint off the network. **Protocol messages belong on stdout; diagnostics belong on stderr** — otherwise one log line can corrupt the stream. The process inherits a local security context: pass the smallest environment and filesystem access it needs.

**Remote — Streamable HTTP:** the client connects to an HTTP endpoint. Fits shared and cloud services; can support streamed server messages. Brings production concerns: TLS, authentication, authorization, origin validation, session handling, rate limits, and tenant isolation. (Older examples may use the earlier HTTP + SSE transport; check the protocol version and SDK docs before copying them.)

**JSON-RPC message shapes:**
- **Request:** method + optional parameters + an id → expects one matching response.
- **Response:** same id, then either a result or an error.
- **Notification:** a method, no id → receives no response.
- **Protocol failure:** malformed request, unknown method, invalid protocol parameters.
- **Capability failure:** the protocol call worked, but the requested tool or downstream operation failed. Return a useful, bounded error; keep sensitive diagnostics in server logs.

#### Security and trust

> An MCP server is executable integration code. Installing one deserves the same care as installing a package or granting an application access to an account.

- **Least privilege:** prefer a narrow `read_orders` tool backed by a read-only role over a general SQL tool. Separate reads, writes, sends, and deletes. Scope filesystem access to declared roots and network access to approved hosts.
- **Consent and side effects:** show the user the concrete action before a high-impact call — recipient, record, amount, or path. Confirmation must happen close to execution; a broad approval at installation time is not enough for every future write.
- **Prompt injection and untrusted output:** a resource, web result, or tool result can contain text that tells the model to ignore its instructions or call another tool. Treat returned content as data. Do not let text from one server silently expand the permissions of another.
- **Validation and limits:** validate the schema *and* the business rule. Apply timeouts, retries, rate limits, and idempotency.
- **Credentials:** keep secrets out of prompts, tool descriptions, and results. Local servers receive only the credentials they need. Remote servers authenticate the user and check authorization on every operation — **the model never becomes the authorization layer.**
- **Auditability:** record the user, server, capability, arguments (redacted), result class, and time for each call.

#### How to design and build a server

**Start from the boundary, not from the SDK:**

1. **Name one user job.** "Read an incident and add a draft comment" is clearer than "connect ServiceNow".
2. **Choose the primitive.** Reading a runbook is a resource. Posting a comment is a tool. A guided incident review can be a prompt.
3. **Design narrow schemas.** Use enums, required fields, length limits, and descriptions that say when *not* to call the tool.
4. **Implement normal application code.** Validate, authorize, call the dependency with a timeout, map its response to a small result.
5. **Add the MCP adapter.** Register the capability with an official or maintained SDK; select stdio or Streamable HTTP.
6. **Test below the model.** Call handlers with valid, invalid, unauthorized, duplicate, and timed-out requests.
7. **Test with a host.** Inspect discovery, confirmation, the exact arguments, result rendering, cancellation, and shutdown.

**A good tool contract:**

```yaml
name: get_order
description: Read one order the current user is allowed to view.
             Use only when an exact order ID is present.
input:  order_id: required string, pattern "^ORD-[0-9]{6}$"
result: order_id, status, updated_at
errors: invalid_id | not_found | forbidden | unavailable
```

The model sees a small, unambiguous capability. The implementation still checks that this user may see this order. The result contains what the next step needs — not the entire customer record.

**Prefer several narrow servers when** capabilities have different owners, credentials, risk levels, or deployment cycles. A repository reader and a payment writer should not share one all-powerful process merely because one assistant uses both. Avoid a server per function.
**Prefer one cohesive server when** the capabilities represent one product boundary, use the same authorization model, and need shared domain logic.

#### Testing and debugging (the common failures)

| Symptom | What to check |
| --- | --- |
| **The server never appears** | Run the configured command outside the host. Check executable path, working directory, environment, file permissions. For stdio, keep all logs off stdout. Confirm initialization completes and the protocol versions overlap. |
| **The tool appears but is not selected** | Make the name and description specific. Say when to use it *and* when not to. Remove overlapping tools or explain their boundary. Test the model with fixed cases — discovery alone does not guarantee selection. |
| **The call fails** | Separate schema validation from downstream failure. Log the request id and a redacted argument summary. Check user authorization, token audience, timeout, and rate limit. Return a structured error the host can explain or retry safely. |
| **The response is too expensive** | Paginate discovery and data results. Return only the fields needed for the next decision. Expose a resource for large readable content instead of placing it all in a tool result. Measure bytes, tokens, duration, and calls per completed task. |

**In one line (chapter):** MCP standardises discovery and communication between an AI host and capability servers; safe systems still require narrow contracts, real authorization, user consent, validation, limits, and an auditable application around the protocol.

Press-sheet Q&A for MCP lives under **Press sheets → MCP** and the **MCP** notes page.
