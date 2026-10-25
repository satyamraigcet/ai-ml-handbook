---
title: "04 · The ML pipeline"
sidebar_label: "04 · Pipeline"
sidebar_position: 4
hide_title: true
slug: "/parts/part-2/04-the-ml-pipeline"
description: "04 · The ML Pipeline — from the question to a watched model"
---

<ChapterHero n="04" title="The ML pipeline" kicker="One project, end to end" />

<StageStrip stages={[
  { label: 'Define', sub: 'the question' },
  { label: 'Collect', sub: 'examples' },
  { label: 'Prepare', sub: 'clean' },
  { label: 'Explore', sub: 'look' },
  { label: 'Train', sub: 'fit' },
  { label: 'Evaluate', sub: 'score' },
  { label: 'Deploy', sub: 'watch' },
]} />

<PlainWords label="In plain words">
first <Highlight>decide the question</Highlight>. Then gather examples, clean them up, practice, check the score, and only then <Highlight>let the helper answer for real</Highlight>.
</PlainWords>

### The seven stages

| Stage | What happens |
| --- | --- |
| **Define** | Understand the problem, objective, inputs, outputs, criteria. |
| **Collect** | Gather reliable data from datasets, APIs or databases. |
| **Prepare** | Clean data, handle missing values and engineer useful features. |
| **Explore** | Visualize patterns, trends, outliers and correlations. |
| **Train** | Select an algorithm, split the data and tune the model. |
| **Evaluate** | Measure performance on unseen data with suitable metrics. |
| **Deploy** | Use the model in the real world, then monitor and maintain it. |

### Common algorithms, one line each

| Algorithm | One line |
| --- | --- |
| Linear Regression | continuous values |
| Logistic Regression | categories (via probability) |
| Decision Tree | classification + regression |
| Random Forest | many trees for accuracy |
| Naive Bayes | probability with independence |
| K-Nearest Neighbors | nearby data points |
| Support Vector Machine | maximum-margin classes |
| Gradient Boosting | trees correct earlier errors |
| K-Means | clustering (formula in Chapter 08) |
| Neural Network | complex patterns (formula in Chapter 08) |

### Evaluation metrics by task

- **Classification:** Accuracy · Precision · Recall · F1-score · Confusion matrix
- **Regression:** MAE · MSE · RMSE · R² score
- **Clustering:** Silhouette score · Davies–Bouldin index

<NoteBar>
<strong>Choose a metric that matches the real goal</strong> — not just the biggest number!
</NoteBar>

### Production-ready ML checklist

1. **Prevent leakage** — fit preprocessing only on training data; keep <Highlight>future or target-derived information</Highlight> out of the features.
2. **Reproduce results** — version code, data and dependencies; record seeds, features, parameters, metrics and experiment context.
3. **Cross-validate** — use suitable cross-validation to estimate variability and choose models without repeatedly consulting the test set.
4. **Handle imbalance** — inspect class frequencies and use suitable metrics, thresholds, weighting or resampling — not accuracy alone.
5. **Monitor after release** — watch data quality, drift, latency, cost and outcome metrics; define alerts, ownership and rollback plans.
6. **Build responsibly** — test privacy, security, fairness, explainability and misuse risks with domain experts and affected users.
