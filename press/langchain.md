---
title: LangChain, LangGraph, and MCP
sidebar_position: 8
---

<QAItem q="When is a chain enough, and when do you want a graph?">
A chain fits a straight path: prompt, model, maybe one tool, then an answer. A graph fits a workflow that must branch, loop, retry, and carry shared state, such as “need a tool?” followed by an update and a return to the plan.
</QAItem>
<QAItem q="Why can “reduce electricity bills” match “tips to lower power consumption”?">
Semantic search embeds both texts as vectors and compares direction, often with cosine similarity. The words differ. The meaning is close, so the chunk can rank above an unrelated page that shares no idea with the question.
</QAItem>
<QAItem q="What does MCP do that LangChain does not?">
MCP is the <Highlight>standard connection to tools</Highlight>, resources, and prompts. LangChain composes the application: models, retrieval, tools, and the order of steps. Together, MCP opens the door and LangChain decides what to do with what comes back.
</QAItem>
