---
title: "10 · The AI / ML toolbox"
sidebar_label: "10 · Toolkit"
sidebar_position: 10
hide_title: true
slug: "/parts/part-3/10-the-ai-ml-toolkit"
description: "10 · Languages, libraries, platforms, and careers"
---

<ChapterHero n="10" title="The AI / ML toolbox" kicker="Build something smart" />
<ToolKitGrid>
<ToolKitBox title="Languages" doodle="languages">
Python · R · Java · C++ · Julia
</ToolKitBox>
<ToolKitBox title="Libraries" doodle="libraries">
NumPy · Pandas · Matplotlib · Seaborn · Plotly
</ToolKitBox>
<ToolKitBox title="ML & DL" doodle="ml">
scikit-learn · TensorFlow · Keras · PyTorch · OpenCV
</ToolKitBox>
<ToolKitBox title="Platforms" doodle="platforms">
Jupyter · Google Colab · AWS · Azure ML · IBM Watson
</ToolKitBox>
</ToolKitGrid>

### Career paths

<PillRow>
<Pill>ML Engineer</Pill>
<Pill>Data Scientist</Pill>
<Pill>AI Researcher</Pill>
<Pill>Data Analyst</Pill>
<Pill>NLP Engineer</Pill>
<Pill>Computer Vision Engineer</Pill>
<Pill>AI Product Manager</Pill>
</PillRow>

---

### Part II / III quick check

Open one when you want the answer. The full practice set also lives in **B · Lock it in**.

<QAItem q="What is Data preprocessing?">
Cleaning and transforming raw data into a suitable format for machine learning: handle missing values, remove duplicates, treat outliers, encode categorical variables, scale/normalize features — improving overall <Highlight>data quality for better model performance</Highlight>.
</QAItem>
<QAItem q="What are outliers?">
Data points significantly different from the rest — unusually high or low values from measurement errors, data-processing problems, natural variability, or genuine rare events. **Investigate the cause before removing one.** Example: ages = 10, 22, 23, 25, 26, **120** → 120 requires investigation.
</QAItem>
<QAItem q="What is feature scaling?">
Transforming numerical features to a similar range, improving algorithms sensitive to feature magnitude (KNN, SVM, gradient descent). Methods: 1) Normalization (Min-Max) 2) Standardization (Z-score).
</QAItem>
<QAItem q="What is feature engineering?">
Creating new features from existing ones, or transforming them, to improve model performance: adding columns, deleting irrelevant ones, encoding categoricals, extracting datetime features, etc.
</QAItem>
<QAItem q="What is Overfitting?">
A model performs very well on training data but poorly on unseen data — it learned <Highlight>noise and random patterns</Highlight> instead of the underlying signal, so it <Highlight>fails to generalize</Highlight>.
</QAItem>
<QAItem q="What is Underfitting?">
A model too simple to learn the underlying pattern. It performs poorly on both training and unseen data because it cannot capture the relationship between features and target.
</QAItem>
<QAItem q="What is the bias–variance trade-off?">
The balance between underfitting and overfitting. **High bias** → model too simple (underfitting) → high error on train and test. **High variance** → model too complex (overfitting) → low training error, high test error. The goal is the right balance for good performance on unseen data.
</QAItem>
<QAItem q="What is Regularization?">
A technique to prevent overfitting by adding a penalty term to the loss function, discouraging overly complex patterns and improving generalization. Techniques: 1) L1 (Lasso) 2) L2 (Ridge) 3) Elastic Net (L1 + L2).
</QAItem>

