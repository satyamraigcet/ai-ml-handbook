---
title: Beyond the model
sidebar_label: "06 · Beyond"
sidebar_position: 6
hide_title: true
hide_table_of_contents: true
slug: "/parts/part-2/06-beyond-the-model"
description: "Beyond the Model"
---

<ChapterHero title="Beyond the model" />
Chapters 01–05 teach the famous ideas. This is the rest of the work: the data, the score you are willing to trust, the models the eight sheets do not cover, and what happens after a model leaves the notebook.

<PlainWords label="In plain words">
a model is <Highlight>the middle of the job</Highlight>. Before it, you need <Highlight>data that does not cheat</Highlight>. After it, you need a score that matches the decision, and a <Highlight>watch on the live system</Highlight>.
</PlainWords>

### Data, before any model

<FoundGrid>
<div>
<h3>Kinds of data</h3>
Table, text, image, audio, graph or time. The kind decides the model family.
</div>
<div>
<h3>The split</h3>
Train fits the model. Validation chooses it. Test is spent once. Tuning on the test set makes it dishonest.
</div>
<div>
<h3>Leakage</h3>
A column that contains the answer, or a <Highlight>fact from the future</Highlight>, lets the model peek. The number looks excellent and fails live.
</div>
</FoundGrid>

<FoundGrid>
<div>
<h3>Missing and rare</h3>
Mark or fill missing values with a rule you can repeat. If one class is rare, accuracy will flatter you — read recall.
</div>
<div>
<h3>Features</h3>
Scale distance models. Encode categories. Trees do not need scaling. Only keep a feature you can rebuild in production.
</div>
<div>
<h3>Baseline</h3>
Start with a simple anchor: the average. A new model has to beat that, in the honest split, or it has not earned its complexity.
</div>
</FoundGrid>

### Judging the model

<FoundGrid>
<div>
<h3>Bias and variance</h3>
Too simple: it misses the pattern. Too flexible: it memorizes the sample. You want the middle, checked on new data.
</div>
<div>
<h3>Regression scores</h3>
MAE is the typical error; RMSE punishes large misses more; R² asks whether you beat predicting the mean.
</div>
<div>
<h3>Cross-validation</h3>
Several train/validation cuts give an average score. Use it when the dataset is small. Keep the final test untouched.
</div>
</FoundGrid>

### Models the eight sheets do not cover

<FoundGrid>
<div>
<h3>Clustering</h3>
K-Means groups nearby rows. You choose K. It prefers compact groups. There is no label, so check stability and whether the groups mean anything.
</div>
<div>
<h3>PCA</h3>
Squashes many columns into a few directions that keep the most spread. It is a view of the data, not a prediction.
</div>
<div>
<h3>Anomaly</h3>
A point far from the crowd. Useful for fraud and faults. Most alarms are false, so set a rate a person can review.
</div>
</FoundGrid>

<FoundGrid>
<div>
<h3>Recommenders</h3>
Content-based uses item features. Collaborative uses people like you. A new user or item has no history: that is the cold start.
</div>
<div>
<h3>Time</h3>
Split by time, never at random. Yesterday must not train on tomorrow. Trend and season are the first baseline.
</div>
</FoundGrid>

<FoundGrid>
<div>
<h3>A neuron / perceptron</h3>
Weighted sum of inputs, plus a bias, then an <Highlight>activation</Highlight> (step, sigmoid, tanh, or ReLU). Stack many of these and you have a network. Training nudges the weights to reduce a loss (see backpropagation on the formula sheet).
</div>
<div>
<h3>CNN</h3>
A small <Highlight>filter (kernel)</Highlight> slides across an image: convolution → ReLU → pooling → more layers → a fully connected head for the class. Shared weights keep the model small. Classic names: LeNet, AlexNet, ResNet. Used for recognition, detection, and segmentation.
</div>
<div>
<h3>Sequence models</h3>
An <Highlight>RNN</Highlight> reads one step at a time and keeps a hidden state. <Highlight>LSTM</Highlight> and <Highlight>GRU</Highlight> add gates so longer memory survives training. A <Highlight>Transformer</Highlight> looks across positions at once with attention — that is what most LLMs use today.
</div>
</FoundGrid>

<FoundGrid>
<div>
<h3>Self-supervised</h3>
The label is made from the data, such as a hidden word or a missing patch. You then fine-tune on the real task.
</div>
<div>
<h3>Computer vision stack</h3>
Image processing (resize, denoise, edges) → CNN features → detect, segment, or classify. OpenCV and similar libraries handle the classical steps; deep models handle the hard recognition.
</div>
<div>
<h3>NLP before / with transformers</h3>
Older pipelines: clean text → tokenize → bag-of-words or early embeddings → a classifier. Modern pipelines: embeddings + transformers (and often RAG for private facts).
</div>
</FoundGrid>

### Graph and causal

A graph model uses links between things. “What if we change X?” is a causal question. It is not the same as predicting Y.

### Classical AI, not only learning

Before "learn from a table" was the default, AI meant <Highlight>perceive → decide → act</Highlight> with search, rules, and structured knowledge. LLM agents (Chapter 14) reuse the same loop idea with tools; this section is the older vocabulary.

#### Intelligent agent and PEAS

An agent senses the world (**sensors**), runs a program, and acts (**actuators**) to improve a **performance** measure. **PEAS** names the four design choices: Performance, Environment, Actuators, Sensors. Example — self-driving car: safe arrival · roads and traffic · steering/brakes · cameras/lidar.

| Agent type | Idea |
| --- | --- |
| Simple reflex | Condition → action from the current percept only. |
| Model-based | Keeps internal state when the world is only partly visible. |
| Goal-based | Chooses actions that reach a stated goal. |
| Utility-based | Scores outcomes; picks the better expected score. |
| Learning | Improves from experience. |

Environments differ too: fully vs partially observable, deterministic vs stochastic, episodic vs sequential, static vs dynamic, discrete vs continuous.

#### Search

Find a path from an initial state to a goal through a **search space** (states, actions, cost, goal test).

| Family | Examples | One-line idea |
| --- | --- | --- |
| Uninformed | BFS, DFS, uniform-cost | Explore without a goal hint. |
| Informed | Greedy best-first, A* | Use a heuristic toward the goal. |
| Local | Hill climbing, simulated annealing | Improve one state for optimization. |
| Adversarial | Minimax, alpha-beta | Plan against an opponent (games). |

#### Knowledge representation

Encode facts so a program can reason: logic (propositional / first-order), semantic networks, frames, scripts, ontologies, and production rules (`IF … THEN …`). Still useful when the rule *is* the policy — combine with learning when the pattern must come from data.

<FoundGrid>
<div>
<h3>Rules</h3>
If this, then that. Clear and brittle. Still the right tool when the rule is the law.
</div>
<div>
<h3>Planning</h3>
Choose actions that reach a goal under limits, such as time, cost, or safety.
</div>
<div>
<h3>Perception</h3>
Turn a raw signal into a description. Vision and speech sit here. A model or a rule then decides.
</div>
</FoundGrid>

### After the model ships

<FoundGrid>
<div>
<h3>Drift</h3>
<Highlight>Data drift</Highlight>: the inputs changed. <Highlight>Concept drift</Highlight>: the meaning of the label changed. Either one makes yesterday’s score stale.
</div>
<div>
<h3>Monitor</h3>
Watch input stats, the score distribution, and a sample of real outcomes. Alert on slices, not only the average.
</div>
<div>
<h3>Retrain</h3>
New data, same recipe, new weights. Keep the old model until the new one wins on a fresh time window.
</div>
</FoundGrid>

<FoundGrid>
<div>
<h3>A human gate</h3>
High-impact decisions need a person, a limit on what the system may do, and a log of what it did.
</div>
<div>
<h3>Reproduce</h3>
Same data version, code, seed, and library versions. If you cannot rebuild the number, you cannot trust it.
</div>
<div>
<h3>Uncertainty</h3>
A probability is not a fact. When the score is weak or the input is strange, the right output is “I don’t know.”
</div>
</FoundGrid>

<LoopStrip
  title="ONE PASS"
  steps={[
    {label: 'Question', sub: 'the decision'},
    {label: 'Data', sub: 'no leakage'},
    {label: 'Baseline', sub: 'beat this'},
    {label: 'Model', sub: 'as simple as it can be'},
    {label: 'Watch', sub: 'drift and outcomes'},
  ]}
/>
