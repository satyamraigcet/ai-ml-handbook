---
title: Maths, one line each
sidebar_label: "07 · Maths"
sidebar_position: 7
hide_title: true
hide_table_of_contents: true
slug: "/parts/part-2/07-maths-one-line-each"
description: "Every card: the name, the formula, and what it means when you use it."
---

<ChapterHero title="Maths, one line each" />
Every card: the name, the formula, and what it means when you use it.

<FormulaGrid>
<FormulaBox title="01 Gradient Descent">
`θ = θ − α ∇J(θ)`

<Highlight>Step opposite to the slope</Highlight> to reduce the cost.
</FormulaBox>

<FormulaBox title="02 Normal Distribution">
`X ~ N(μ, σ²)`

The bell curve, centred at μ with spread σ.
</FormulaBox>

<FormulaBox title="03 Z-Score">
`z = (X − μ) / σ`

How many standard deviations a value is from the mean.
</FormulaBox>

<FormulaBox title="04 Sigmoid Function">
`σ(z) = 1 / (1 + e⁻ᶻ)`

Maps any number into (0, 1).
</FormulaBox>

<FormulaBox title="05 Correlation">
`r = cov(X, Y) / (σₓ σᵧ)`

Strength of a linear relationship, from −1 to +1.
</FormulaBox>

<FormulaBox title="06 Cosine Similarity">
`cos θ = (A·B) / (‖A‖‖B‖)`

Angle-based similarity between two vectors.
</FormulaBox>

<FormulaBox title="07 Naive Bayes">
`P(C|X) = P(X|C)·P(C) / P(X)`

Posterior ∝ likelihood × prior.
</FormulaBox>

<FormulaBox title="08 Maximum Likelihood">
`L(θ) = Π P(xᵢ|θ)`

Choose θ that makes the observed data most likely.
</FormulaBox>

<FormulaBox title="09 Ordinary Least Squares">
`y = β₀ + β₁x`

Line that minimizes the sum of squared errors.
</FormulaBox>

<FormulaBox title="10 F1 Score">
`F1 = 2PR / (P + R)`

<Highlight>Harmonic mean of precision and recall</Highlight>.
</FormulaBox>

<FormulaBox title="11 ReLU Activation">
`f(x) = max(0, x)`

Keeps positives, turns negatives into 0.
</FormulaBox>

<FormulaBox title="12 Eigenvectors">
`Av = λv`

Directions a matrix only stretches, never rotates.
</FormulaBox>

<FormulaBox title="13 R² Score">
`R² = 1 − SS_res / SS_tot`

Compares residual error with the mean baseline.
</FormulaBox>

<FormulaBox title="14 Softmax Function">
`pᵢ = eᶻⁱ / Σⱼ eᶻʲ`

Turns scores into probabilities that sum to 1.
</FormulaBox>

<FormulaBox title="15 Mean Squared Error">
`MSE = (1/n) Σ (y − ŷ)²`

Average of squared prediction errors.
</FormulaBox>

<FormulaBox title="16 Entropy">
`H(S) = − Σ pᵢ log₂ pᵢ`

<Highlight>Uncertainty / impurity</Highlight> of a distribution.
</FormulaBox>

<FormulaBox title="17 KL Divergence">
`D_KL(P‖Q) = Σ P(x) log(P(x)/Q(x))`

How different distribution Q is from P.
</FormulaBox>

<FormulaBox title="18 Log Loss">
`L = −[y·log(ŷ) + (1−y)·log(1−ŷ)]`

Penalty for wrong probability predictions.
</FormulaBox>

<FormulaBox title="19 SVD">
`A = UΣVᵀ`

Splits a matrix into rotation · scaling · rotation.
</FormulaBox>

<FormulaBox title="20 Lagrange Multiplier">
`∇f = λ∇g`

Optimize f while respecting constraint g.
</FormulaBox>

<FormulaBox title="21 Support Vector Machine">
`f(x) = sign(w·x + b)`

The separating hyperplane.
</FormulaBox>

<FormulaBox title="22 Linear Regression">
`y = β₀ + β₁x`

Intercept + slope × input.
</FormulaBox>

<FormulaBox title="23 Multiple Linear Regression">
`y = β₀ + Σ βᵢXᵢ`

One coefficient per feature.
</FormulaBox>

<FormulaBox title="24 PCA">
project onto principal directions

Compress along the directions of most variance.
</FormulaBox>

<FormulaBox title="25 Backpropagation">
chain rule

Chain rule sends error back to each weight.
</FormulaBox>

<FormulaBox title="26 Adam Optimizer">
momentum + adaptive LR

Momentum + adaptive learning rates per parameter.
</FormulaBox>

<FormulaBox title="27 Batch Gradient Descent">
`θ = θ − α ∇J(θ)`

Uses the whole dataset for every update.
</FormulaBox>

<FormulaBox title="28 Momentum">
`vₜ = βvₜ₋₁ + (1−β)∇J(θ)`

Smooths updates using past gradients.
</FormulaBox>

<FormulaBox title="29 K-Nearest Neighbors">
Euclidean / Manhattan

Distance decides who the neighbours are.
</FormulaBox>

<FormulaBox title="30 K-Means Clustering">
`μₖ` · objective `J`

Update centres, minimize within-cluster distance.
</FormulaBox>

<FormulaBox title="31 Evaluation Metrics">
Accuracy · Precision · Recall · F1

Scores read from the confusion matrix.
</FormulaBox>

<FormulaBox title="32 Probability & Statistics">
`μ` · `σ²` · `σ`

Centre and spread of data.
</FormulaBox>

<FormulaBox title="33 Regularization">
L1 / L2 penalties

Penalize large weights.
</FormulaBox>

<FormulaBox title="34 Reinforcement Learning">
Q-learning update

Q-learning update rule.
</FormulaBox>

<FormulaBox title="35 Transformer / Attention">
`Attention(Q,K,V)` · PE

Attention weights + word-position signal.
</FormulaBox>

<FormulaBox title="36 GAN">
`min_G max_D V(D,G)`

Two-player game: forger vs. detective.
</FormulaBox>

<FormulaBox title="37 Autoencoder">
`L(x, x̂)`

Reconstruction loss.
</FormulaBox>

<FormulaBox title="38 Gradient Descent Variants">
Batch GD · Momentum

Plain steps vs. steps with memory.
</FormulaBox>

<FormulaBox title="39 Cosine Similarity">
`cos θ = A·B / (‖A‖‖B‖)`

Used in search, NLP and recommendations.
</FormulaBox>

</FormulaGrid>

Notation: x = input features · y = true value · ŷ = predicted value · w = weights · b = bias · α = learning rate.
