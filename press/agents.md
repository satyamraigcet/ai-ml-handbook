---
title: AI agents
sidebar_position: 6
---

<QAItem q="What is the difference between a chat reply and an agent?">
A chat reply can be one model call. An agent <Highlight>keeps state, may request tools</Highlight>, observes the results, and repeats until a <Highlight>stop rule</Highlight>. Your code runs the tools.
</QAItem>
<QAItem q="Which four beats are in the agent loop?">
Perception of the user input and state, reason and plan, acting through a tool, and observation with reflection. Then either another step or a stop.
</QAItem>
<QAItem q="What does a tool definition need?">
A stable name, a description of when to use it, an input schema, a result shape, structured errors, and a usage example. The implementation must enforce the same limits.
</QAItem>
<QAItem q="Where does short-term memory live?">
Inside the current prompt: instructions, recent messages, and tool results. It only lasts while it fits in the context window.
</QAItem>
<QAItem q="What is MCP for?">
A host connects through a client to a server that lists tools, resources, and prompts. Local servers suit one desktop. Remote servers need authentication, tenancy, and rate limits.
</QAItem>
<QAItem q="What should a tool unit test cover?">
The function itself, with fixed good and bad inputs, and no model. Invalid paths, missing permission, and oversized input must fail in the tool.
</QAItem>
