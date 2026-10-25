---
title: "03 · How machines learn"
sidebar_label: "03 · How it learns"
sidebar_position: 3
hide_title: true
slug: "/parts/part-1/03-how-machines-learn-supervised-unsupervised-rl"
description: "03 · Supervised, unsupervised, reinforcement learning"
---

<ChapterHero n="03" title="How machines learn" kicker="Answers, patterns, or a score" />

<NoteBar>
This beginner taxonomy is not exhaustive. Semi-supervised, self-supervised, online and other learning settings are also important.
</NoteBar>

<PlotThreeLearnTypes />

### The three commonly introduced types

<FoundGrid>
<div>
<h3>Supervised · answer key</h3>
The model receives input **and** correct output (<Highlight>labeled data</Highlight>), learns their mapping, and predicts outputs for unseen data.

`Labeled data → Algorithm → Prediction`

- *Classification* — category (spam / not spam)
- *Regression* — a number (house price)
</div>
<div>
<h3>Unsupervised · find groups</h3>
The model receives inputs **without** predefined answers and searches for <Highlight>patterns, similarities, or useful representations</Highlight>.

`Raw data → Algorithm → Group / structure`

- *Clustering* · *Dimensionality reduction* · *Association*
</div>
<div>
<h3>Reinforcement · stars and tries</h3>
An agent acts in an environment, receives rewards/penalties, and learns a <Highlight>policy that maximizes total reward</Highlight> over time.

`State → Agent → Action → Environment → Reward → (repeat)`

**Agent** · **State** · **Action** · **Policy** · **Reward**
</div>
</FoundGrid>

<PlainWords label="In plain words">
sometimes the computer gets <Highlight>the answers with the homework</Highlight>. Sometimes it only gets a pile and has to <Highlight>notice groups</Highlight>. Sometimes it tries, gets a star or a "try again", and <Highlight>learns the path</Highlight>.
</PlainWords>

### Train · Validate · Test

| Split | Share | Job |
| --- | --- | --- |
| Training | 60–70% | Teaches the model. |
| Validation | 10–20% | Tunes choices and helps avoid overfitting. |
| Test | 10–20% | Measures final performance on unseen data. |

### Underfitting vs. Overfitting

<PlotFitSketch />

- **Underfitting:** <Highlight>too simple</Highlight>; high bias and poor performance (on train *and* test).
- **Good fit:** captures the pattern and generalizes.
- **Overfitting:** <Highlight>memorizes noise</Highlight>; great training score, poor testing score.

<PlainWords label="In plain words">
too straight a line misses the shape. A smooth line through the dots is the sweet spot. A crazy scribble that touches every dot has only memorized the homework.
</PlainWords>
