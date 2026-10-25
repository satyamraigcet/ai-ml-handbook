---
title: D / E · Fitting and data
sidebar_label: Fitting and data
sidebar_position: 4
---

Preparing the data, and fitting the model well.

### D · Preparing the data

Clean and shape the data before a model ever sees it.

<QAItem q="What is Data preprocessing?">
Data preprocessing is the process of cleaning and transforming raw data into a suitable format for machine learning. It helps to extract useful information, handle missing values, remove duplicates, treat outliers, encode categorical variables, scale / normalize features and improve the overall quality of the data for better model performance.
</QAItem>
<QAItem q="What are outliers?">
Outliers are data points that are significantly different from the rest of the data. They can be unusually high or low and may occur because of measurement errors, data-processing problems, natural variability or genuine rare events. Investigate the cause before removing one.

**Example:** Ages = 10, 22, 23, 25, 26, **120** → 120 requires investigation.
</QAItem>
<QAItem q="What is feature scaling?">
Feature scaling is the process of transforming the values of numerical features to a similar range or scale. It helps in improving the performance of machine learning algorithms that are sensitive to the magnitude of features (like KNN, SVM, and Gradient Descent).

**Common methods:** 1) Normalization (Min-Max Scaling) 2) Standardization (Z-score scaling).
</QAItem>
<QAItem q="What is feature engineering?">
Feature engineering is the process of creating new features from existing features or transforming the existing features to improve the performance of a machine learning model. It includes techniques like adding new columns, deleting irrelevant columns, encoding categorical variables, extracting date/time features, etc.
</QAItem>

### E · Fitting the model well

Too simple, too memorised, and how to hold the line.

<QAItem q="What is Overfitting?">
Overfitting occurs when a model performs very well on the training data but poorly on unseen data (test data). This happens when the model learns the <Highlight>noise and random patterns</Highlight> in the training data instead of the actual underlying pattern. As a result, the model <Highlight>does not generalize well</Highlight> to new data.
</QAItem>
<QAItem q="What is Underfitting?">
Underfitting occurs when a model is too simple to learn the underlying patterns in the data. It performs poorly on both training and unseen data because it cannot capture the complex relationship between the features and the target variable. This usually happens when the model is too simple or not trained enough.
</QAItem>
<QAItem q="What is variance and bias trade off?">
The bias-variance trade-off is the balance between underfitting and overfitting.

- **High bias** → model is too simple (underfitting) → high error on both training and test data.
- **High variance** → model is too complex (overfitting) → low training error but high test error.

The goal is to find the right balance to achieve good performance on unseen data.
</QAItem>
<QAItem q="What is Regularization and its techniques?">
Regularization is a technique used to prevent overfitting by adding a penalty term to the loss function. It discourages the model from learning too complex patterns and helps in improving generalization.

**Common techniques:** 1) L1 Regularization (Lasso) 2) L2 Regularization (Ridge) 3) Elastic Net (combination of L1 and L2).
</QAItem>
