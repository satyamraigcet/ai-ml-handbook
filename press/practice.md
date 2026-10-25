---
title: Practice questions
sidebar_position: 10
---

The numbered set also sits in **B · Lock it in**. Open one when you want the answer.

### Quick revision

Six lines to keep, then the revision questions.

- **AI** is the broad field.
- **ML** <Highlight>learns patterns from data</Highlight>.
- **DL** uses deep neural networks.
- **Data** is the foundation.
- **Evaluation** checks generalization.
- **Ethics** belongs in every step.

### Practice questions

<QAItem q="1. What is the difference between AI, ML and Deep Learning?">
AI is the broad goal of intelligent machines. ML is an AI method that learns from data. DL is an ML method based on multi-layer neural networks.
</QAItem>
<QAItem q="2. What are three commonly introduced types of Machine Learning?">
Supervised learning uses labeled data, unsupervised learning uses unlabeled data, and reinforcement learning improves a policy through reward signals. This is not exhaustive: semi-supervised, self-supervised and online learning are also important.
</QAItem>
<QAItem q="3. Why do we split data into training, validation and testing sets?">
Training teaches the model, validation helps tune it, and testing gives a final unbiased check on unseen data.
</QAItem>
<QAItem q="4. What are underfitting and overfitting?">
Underfitting means the model is too simple to learn the pattern. Overfitting means it memorizes training details and fails to generalize.
</QAItem>
<QAItem q="5. What challenges must responsible AI address?">
Data quality, privacy, security, bias, fairness, explainability, computing cost, ethical misuse and workforce impact.
</QAItem>
<QAItem q="6. Why is Naive Bayes called “naive”?">
Because it assumes every feature is independent of the others given the class. That is rarely exactly true, but the model is still fast and works very well for text.
</QAItem>
<QAItem q="7. Bagging vs. Boosting — what is the difference?">
Bagging (Random Forest) trains many trees in parallel on bootstrap samples and votes / averages. Boosting (Gradient Boosting) trains trees one after another, each correcting the errors of the previous ones.
</QAItem>
<QAItem q="8. What are support vectors, and why does the margin matter?">
Support vectors are the data points nearest to the SVM boundary; they define it. A larger margin (2 / ‖w‖) usually means better generalization on new data.
</QAItem>
<QAItem q="9. Which algorithms need feature scaling?">
Distance- or gradient-based ones: KNN, SVM, K-Means and anything trained with gradient descent. Tree-based models (Decision Tree, Random Forest) do not need scaling.
</QAItem>
<QAItem q="10. What does a small vs. large K do in KNN?">
Small K is sensitive to noise (can overfit). Large K gives a smoother boundary (can underfit). K is usually chosen by validation.
</QAItem>
<QAItem q="11. Precision or recall — which matters more?">
Precision = TP / (TP + FP) matters when false alarms are costly (spam filter). Recall = TP / (TP + FN) matters when missing a positive is costly (disease detection). F1 balances both.
</QAItem>
<QAItem q="12. L1 vs. L2 regularization?">
L1 (Lasso) adds λΣ|w| and can shrink weights to exactly zero (feature selection). L2 (Ridge) adds λΣw² and shrinks all weights smoothly. Elastic Net combines both.
</QAItem>
<QAItem q="13. What does a large language model actually do?">
It learns statistical language patterns over tokens. Autoregressive chat models predict a next token repeatedly; encoder models can learn through objectives such as masked-token prediction. Generative AI is the wider family of models that creates text, images, code, audio or other content.
</QAItem>
<QAItem q="14. LangChain, LangGraph, LangSmith, MLflow — who does what?">
In one optional stack, LangChain supplies integrations, LangGraph coordinates routes that branch and loop, LangSmith traces and evaluates application runs, and MLflow tracks experiments and model artifacts. Comparable systems can be built with other tools.
</QAItem>
<QAItem q="15. What makes an agent different from one chat reply?">
An LLM agent can keep state, choose tools and continue across several controlled steps. It also needs stop conditions, restricted permissions, validation and human approval for high-impact actions.
</QAItem>
<QAItem q="16. What is RAG, in order?">
Retrieval-Augmented Generation searches your documents at question time. Documents are split into chunks, turned into embeddings, and stored. The question is embedded the same way, the nearest chunks are placed in the prompt, and the LLM writes the answer from those passages, ideally with a source.
</QAItem>
<QAItem q="17. What is data leakage?">
The model sees something at training time that it will not honestly have at prediction time, such as the answer itself or a fact from the future. The test score looks strong and the live system fails.
</QAItem>
<QAItem q="18. Why is a random split wrong for time series?">
Random rows mix the future into the past. The model trains on information it would not have had. Split by time: train on earlier rows, test on later ones.
</QAItem>
<QAItem q="19. Data drift or concept drift?">
Data drift means the inputs changed. Concept drift means the relationship between inputs and the label changed. Both make an old score stale. Monitor inputs and real outcomes.
</QAItem>
<QAItem q="20. When is a rule better than a model?">
When the decision is fixed by policy or law, when you need a reason you can read, or when you do not have enough honest data. A model is for patterns you cannot write down completely.
</QAItem>
<QAItem q="21. Keyword search or semantic search?">
Keyword, or lexical, search matches the words in the query, usually through an inverted index. Semantic search embeds the query and the chunks as vectors and returns the nearest meanings, often with cosine similarity, so “reduce electricity bills” can match “tips to lower power consumption”. Many systems use both.
</QAItem>
<QAItem q="22. What is MCP, and what does LangChain still do?">
MCP, the Model Context Protocol, is an open standard that lets an AI application reach tools, resources, and prompts through a client and a server. LangChain is a framework that composes the workflow: prompts, retrieval, tools, and the order of steps. MCP opens the connection. The framework, or ordinary code, decides what to do with what comes back.
</QAItem>
<QAItem q="23. What does a forward deployer do, and why did hiring jump?">
A forward deployer sits with a real team, connects the model to their documents, tools, and permissions, and brings failures back so the product can be fixed. Companies list the job as Forward Deployed Engineer. Palantir made the title. From 2024 to 2026 demand rose about fourfold on one index. Travel is often 25–50%. US posted bases often sit around $180,000–$250,000. Read the current posting: the numbers move.
</QAItem>
