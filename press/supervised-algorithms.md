---
title: B · Supervised algorithms
sidebar_label: Supervised algorithms
sidebar_position: 2
---

Models that learn from answers you already know.

<QAItem q="What is Linear Regression?">
Linear Regression is a <Highlight>supervised learning</Highlight> algorithm used to predict a continuous (numeric) output variable. It models the relationship between the input features (independent variables) and the output variable (dependent variable) using a linear equation.

`y = β₀ + β₁x₁ + β₂x₂ + … + βₙxₙ + ε`

The model learns the best-fit line by minimizing the error (usually the sum of squared errors) between the actual and predicted values.
</QAItem>
<QAItem q="What is Logistic Regression?">
Logistic Regression is a supervised learning algorithm used for classification problems. It is based on the linear regression model but uses the sigmoid (logistic) function to predict the probability of a categorical output (usually 0 or 1). It is mainly used for binary classification, but can also be extended to multi-class classification (using techniques like One-vs-Rest or Softmax).
</QAItem>
<QAItem q="What is Decision Tree?">
A Decision Tree is a tree-like model used for both classification and regression. It splits the data into subsets based on the feature values to create a tree structure, where each internal node represents a decision on a feature, each branch represents an outcome, and each leaf node represents a final prediction (class or value). It uses measures like Entropy, Information Gain or Gini Index to find the best splits.
</QAItem>
<QAItem q="What is Random Forest?">
Random Forest is an ensemble learning algorithm that combines multiple decision trees. It builds many trees on different random subsets of data and features, and then aggregates their predictions (majority voting for classification or average for regression). This helps to reduce overfitting and improve model accuracy and robustness.
</QAItem>
<QAItem q="What is SVM?">
Support Vector Machine (SVM) is a supervised learning algorithm used for classification and regression. It finds the optimal hyperplane that separates the classes with the <Highlight>maximum margin</Highlight> (distance) between them. SVM works well in high-dimensional spaces and can also handle non-linear data using kernel functions (e.g. Linear, Polynomial, RBF kernel).
</QAItem>
<QAItem q="What is KNN (K-Nearest Neighbors)?">
K-Nearest Neighbors (KNN) is a simple, instance-based, non-parametric supervised learning algorithm used for both classification and regression. It works by finding the k closest data points (neighbors) to a new data point based on a distance metric (such as Euclidean distance, Manhattan distance, etc.) and then:

- **For classification:** it assigns the class that occurs most frequently among the k neighbors (majority voting).
- **For regression:** it predicts the output as the average (or weighted average) of the k neighbors.

KNN is easy to implement but can be computationally expensive for large datasets.
</QAItem>
