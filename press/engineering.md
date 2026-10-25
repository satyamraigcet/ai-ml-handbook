---
title: AI engineering
sidebar_position: 7
---

<QAItem q="What makes AI engineering different from calling a model API?">
The surrounding product system: context, retrieval, tools, identity, permissions, safety, evaluation, observability, cost control, and a feedback loop.
</QAItem>
<QAItem q="When should facts go into RAG rather than fine-tuning?">
When they change, are private, need citations, or must be updated without retraining. Fine-tuning is better for repeatable behaviour or specialised skill.
</QAItem>
<QAItem q="What is the difference between prompt and context engineering?">
Prompt engineering shapes instructions and examples. <Highlight>Context engineering</Highlight> shapes the entire information supplied to each call, including retrieval, memory, tools, state, security, and compaction.
</QAItem>
<QAItem q="Why is prompt injection not solved by a stronger system prompt?">
Untrusted content can still influence model output. Real protection comes from code-enforced permissions, isolation, validation, allow-lists, approval, and monitoring around the model.
</QAItem>
<QAItem q="What should be measured before changing models?">
Quality on representative cases, safety, latency, throughput, cost per successful task, capabilities, data controls, licence, and operational fit.
</QAItem>
