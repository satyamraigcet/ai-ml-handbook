---
title: MCP
sidebar_position: 9
---

<QAItem q="Why are host and client separate ideas?">
The host owns the user experience, model, permissions, and combined context. A client is one protocol connection inside that host, normally to one MCP server. One host can therefore manage several isolated server sessions.
</QAItem>
<QAItem q="When should something be a resource instead of a tool?">
Use a resource when the main operation is to identify and read content, such as a file or notebook. Use a tool for a bounded action or computation. Do not disguise a dangerous write as a resource read.
</QAItem>
<QAItem q="Does a successful MCP connection authorize every capability?">
No. Discovery says a capability exists. The host decides whether to expose or request it, and the server must authorize the actual user and operation when the request arrives.
</QAItem>
<QAItem q="What is the important stdout rule for a local server?">
Stdout carries <Highlight>protocol messages</Highlight>. Send diagnostic logs to stderr. Unframed log text on stdout can break the JSON-RPC stream.
</QAItem>
<QAItem q="Why can a read-only resource still be risky?">
It may reveal sensitive data or contain prompt injection that influences later model behaviour. Access control, content boundaries, and treatment as untrusted data still matter.
</QAItem>
