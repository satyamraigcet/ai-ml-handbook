---
title: "05 · The lineup"
sidebar_label: "05 · The lineup"
sidebar_position: 5
slug: "/parts/part-2/05-the-model-lineup"
description: "The model lineup — eight algorithm sheets"
---

> Every sheet follows the same recipe: **definition · maths · picture · when to use · code · assumptions · pros · cons · hyperparameters · real-world uses.** Simplest model first.

Open a sheet from the sidebar under **05 · The lineup**.

### Which algorithm when?

| Algorithm | Learning | Task | Core idea | Watch out for |
| --- | --- | --- | --- | --- |
| [Linear Regression](/docs/algorithms/linear) | <Highlight>Supervised</Highlight> | Regression | <Highlight>Best-fit straight line</Highlight> | Outliers, non-linear data |
| [Logistic Regression](/docs/algorithms/logistic) | Supervised | Classification | Sigmoid → probability | Linear boundary only |
| [Decision Tree](/docs/algorithms/tree) | Supervised | Both | Yes/no splits by entropy / Gini | Overfitting, instability |
| [Random Forest](/docs/algorithms/forest) | Supervised (ensemble) | Both | Many trees vote / average | Memory, slower, less interpretable |
| [Naive Bayes](/docs/algorithms/naive-bayes) | Supervised | Classification | Bayes' theorem + independence | Correlated features, zero frequency |
| [KNN](/docs/algorithms/knn) | Supervised (lazy) | Both | Copy the K nearest neighbours | Scaling, slow prediction |
| [SVM](/docs/algorithms/svm) | Supervised | Classification + regression | Maximum-margin hyperplane | Scaling, large data, kernel choice |
| [Gradient Boosting](/docs/algorithms/boosting) | Supervised (ensemble) | Both | Trees fix previous errors in sequence | Tuning, training time |
| K-Means | <Highlight>Unsupervised</Highlight> | Clustering | <Highlight>Assign to nearest centroid</Highlight>, update mean | Choosing K, scaling |

<CardGrid>
<PictureCard doodle="linear" title="Linear Regression" example="More experience → more salary? A line can tell you how much more.">
Draw the <Highlight>straight line that passes as close as possible</Highlight> to every dot.
</PictureCard>
<PictureCard doodle="logistic" title="Logistic Regression" example="Above 0.5 → class 1, below → class 0.">
Straight-line maths squeezed through an S-curve into a probability.
</PictureCard>
<PictureCard doodle="tree" title="Decision Tree" example="Each leaf is a final decision.">
A game of 20 questions: the most useful yes/no split first.
</PictureCard>
<PictureCard doodle="forest" title="Random Forest" example="Fraud-risk support, clinical decision support, demand forecasting.">
Many slightly different trees vote. One tree can be silly; the forest rarely is.
</PictureCard>
<PictureCard doodle="knn" title="KNN" example="Small K is noisy; large K is smooth.">
Copy the K nearest neighbours.
</PictureCard>
<PictureCard doodle="svm" title="SVM" example="A wider road means safer predictions.">
The widest possible road between two groups. Edge points are support vectors.
</PictureCard>
<PictureCard doodle="boosting" title="Gradient Boosting" example="XGBoost, LightGBM, sklearn GradientBoosting.">
A relay of small trees: each one fixes the last one's mistakes.
</PictureCard>
<PictureCard doodle="kmeans" title="K-Means" example="Choose K, assign, update the mean, repeat.">
Unsupervised clustering by nearest centroid.
</PictureCard>
</CardGrid>
