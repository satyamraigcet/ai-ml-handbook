---
title: The formula sheet
sidebar_label: 08 · Formulas
sidebar_position: 8
hide_title: true
hide_table_of_contents: true
slug: "/parts/part-2/08-the-formula-sheet"
description: "Chapter 08. The equations follow the algorithm sheets, then neural and generative models."
---

<ChapterHero title="The formula sheet" />
Chapter 08. The equations follow the algorithm sheets, then neural and generative models. Each box names the equation and says, in one line, what it is for.

<FormulaGrid>
<FormulaBox title="Linear Regression">
**Prediction Equation**

`y = w₁x₁ + w₂x₂ + ⋯ + wₙxₙ + b`

**Cost Function (MSE)**

`MSE = (1/n) Σ (yᵢ − ŷᵢ)²`

**Gradient Descent Update**

`w := w − α ∂J/∂w`

Predict a number, measure the squared error, then <Highlight>nudge the weights downhill</Highlight>.
</FormulaBox>

<FormulaBox title="Logistic Regression">
**Sigmoid Function**

`σ(z) = 1 / (1 + e⁻ᶻ)`

**Binary Cross Entropy Loss**

`L = −(1/n) Σ [ yᵢ log(ŷᵢ) + (1−yᵢ) log(1−ŷᵢ) ]`

Squash any number into 0–1; <Highlight>punish confident wrong answers heavily</Highlight>.
</FormulaBox>

<FormulaBox title="Decision Tree">
**Entropy**

`Entropy(S) = − Σ pᵢ log₂(pᵢ)`

**Information Gain**

`IG(S,A) = Entropy(S) − Σ (|Sᵥ|/|S|) Entropy(Sᵥ)`

**Gini Index**

`Gini = 1 − Σ pᵢ²`

Pick the split that makes the groups <Highlight>most “pure”</Highlight>.
</FormulaBox>

<FormulaBox title="Random Forest">
**Classification Voting**

`ŷ = mode(T₁(x), T₂(x), …, Tₙ(x))`

**Regression Averaging**

`ŷ = (1/n) Σ Tᵢ(x)`

Many trees vote (classify) or average (regress).
</FormulaBox>

<FormulaBox title="Support Vector Machine (SVM)">
**Hyperplane**

`w′x + b = 0`

**Margin**

`Margin = 2 / ‖w‖`

**Classification Function**

`f(x) = sign(w′x + b)`

Smaller ‖w‖ → wider margin → better generalization.
</FormulaBox>

<FormulaBox title="Naive Bayes">
**Bayes Theorem**

`P(A|B) = P(B|A) P(A) / P(B)`

**Naive Bayes Formula**

`P(C|X) = P(C) Π P(xᵢ|C)`

Prior × likelihood of each feature, multiplied together.
</FormulaBox>

<FormulaBox title="K-Nearest Neighbors (KNN)">
**Euclidean Distance**

`d(x,y) = √ Σ (xᵢ − yᵢ)²`

**Manhattan Distance**

`d = Σ |xᵢ − yᵢ|`

Straight-line distance vs. city-block (grid) distance.
</FormulaBox>

<FormulaBox title="K-Means Clustering">
**Centroid Update**

`μₖ = (1/|Cₖ|) Σ_{x∈Cₖ} x`

**Objective Function**

`J = Σₖ Σ_{x∈Cₖ} ‖x − μₖ‖²`

Centroid = mean of its points; minimize total squared distance (inertia).
</FormulaBox>

<FormulaBox title="Principal Component Analysis (PCA)">
**Covariance Matrix**

`Cov(X) = (1/n) (X − X̄)ᵀ (X − X̄)`

**Eigenvalue Equation**

`Av = λv`

Eigenvectors of the covariance give the directions of most variance.
</FormulaBox>

<FormulaBox title="Neural Networks">
**Neuron Output**

`z = Σ wᵢxᵢ + b`

**Activation Function (ReLU)**

`f(z) = max(0, z)`

**Softmax**

`Softmax(zᵢ) = e^{zᵢ} / Σ e^{zⱼ}`

Weighted sum → activation → probabilities for each class.
</FormulaBox>

<FormulaBox title="Deep Learning">
**Backpropagation**

`∂L/∂w = (∂L/∂y)(∂y/∂w)`

**Adam Optimizer**

`θₜ = θₜ₋₁ − α m̂ₜ / (√v̂ₜ + ε)`

Chain rule passes the error backwards; Adam adapts each step size.
</FormulaBox>

<FormulaBox title="Evaluation Metrics">
**Accuracy** `(TP+TN) / (TP+TN+FP+FN)`

**Precision** `TP / (TP+FP)`

**Recall** `TP / (TP+FN)`

**F1 Score** `2 · (Precision · Recall) / (Precision + Recall)`

Precision: of predicted positives, how many were right? Recall: of real positives, how many did we catch?
</FormulaBox>

<FormulaBox title="Probability & Statistics">
**Mean**

`μ = (1/n) Σ xᵢ`

**Variance**

`σ² = (1/n) Σ (xᵢ − μ)²`

**Standard Deviation**

`σ = √σ²`

Centre of the data, and how spread out it is.
</FormulaBox>

<FormulaBox title="Regularization">
**L1 Regularization (Lasso)**

`L = Loss + λ Σ |wᵢ|`

**L2 Regularization (Ridge)**

`L = Loss + λ Σ wᵢ²`

Penalty for big weights → simpler model → less overfitting.
</FormulaBox>

<FormulaBox title="Reinforcement Learning">
**Q-Learning Update**

`Q(s,a) = Q(s,a) + α [r + γ max_{a′} Q(s′,a′) − Q(s,a)]`

Move the old estimate toward reward + best future value.
</FormulaBox>

<FormulaBox title="Transformer / Attention">
**Attention Formula**

`Attention(Q,K,V) = Softmax(QKᵀ / √dₖ) V`

**Positional Encoding**

`PE(pos, 2i) = sin(pos / 10000^(2i/dₖ))`

Each word looks at every other word and decides how much to focus on it.
</FormulaBox>

<FormulaBox title="GAN (Generative Adversarial Network)">
**GAN Objective**

`min_G max_D V(D,G) = E[log D(x)] + E[log(1 − D(G(z)))]`

Generator tries to fool the Discriminator; Discriminator tries to catch fakes.
</FormulaBox>

<FormulaBox title="Autoencoder">
**Reconstruction Loss**

`L(x, x̂) = ‖x − x̂‖²`

Compress, rebuild, and measure how different the copy is.
</FormulaBox>

<FormulaBox title="Gradient Descent Variants">
**Batch Gradient Descent**

`θ = θ − α ∇J(θ)`

**Momentum**

`vₜ = β vₜ₋₁ + (1 − β) ∇J(θ)`

Momentum remembers past steps, like a ball rolling downhill.
</FormulaBox>

<FormulaBox title="Cosine Similarity">
**Cosine Similarity**

`Cosine(x,y) = (x · y) / (‖x‖ ‖y‖)`

1 = same direction, 0 = unrelated, −1 = opposite.
</FormulaBox>
</FormulaGrid>

Notation: x = input features · y = true value · ŷ = predicted value · w = weights · b = bias · α = learning rate · n = number of samples · c = number of classes.
