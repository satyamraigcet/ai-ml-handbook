---
title: MLOps
sidebar_position: 5
---

<QAItem q="In one sentence, what is MLOps?">
The practices and tools that take ML models from experiments to <Highlight>reliable, monitored products</Highlight> — and keep improving them.
</QAItem>
<QAItem q="Why isn’t Git alone enough for ML?">
Git tracks code, but a model also depends on data, settings and environment. Tools like DVC and MLflow record those.
</QAItem>
<QAItem q="What problem does a container solve?">
“It works on my machine.” The container carries the code and all its dependencies, so it runs the same everywhere.
</QAItem>
<QAItem q="What is the difference between CI, CD and CT?">
CI tests every change; CD releases tested changes; CT retrains the model when new data arrives.
</QAItem>
<QAItem q="When would you choose batch over online serving?">
When answers can wait, such as overnight forecasts for every store.
</QAItem>
<QAItem q="What is a canary release?">
Giving the new model to a small share of users first and growing it only if it behaves well.
</QAItem>
<QAItem q="Data drift or concept drift: a new train station makes nearby houses pricier?">
Concept drift — the relationship between house features and price changed.
</QAItem>
<QAItem q="Your server is up and fast. Is the model fine?">
Not necessarily. Check data quality, prediction quality and business results too.
</QAItem>

> **Final idea:** a model is a living thing. MLOps feeds it good data, checks its health, and lets you replace it safely when the world changes.
