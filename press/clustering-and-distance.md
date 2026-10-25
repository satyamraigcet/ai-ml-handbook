---
title: C · Clustering and distance
sidebar_label: Clustering and distance
sidebar_position: 3
---

Finding groups when nobody labelled the data.

<QAItem q="What is K-means?">
K-means is an <Highlight>unsupervised learning</Highlight> algorithm used for clustering. It partitions the data into K clusters based on feature similarity. The algorithm works as follows:

1. Choose the number of clusters K.
2. Randomly initialize K centroids.
3. Assign each data point to the nearest centroid (based on distance).
4. Update the centroids as the mean of the assigned points.
5. Repeat steps 3 and 4 until the centroids no longer change (convergence).

The goal is to <Highlight>minimize the within-cluster sum of squares</Highlight> (inertia).
</QAItem>
<QAItem q="What is Euclidean distance?">
Euclidean distance is a measure of the straight-line distance between two points in a multidimensional space. It is calculated as the square root of the sum of the squared differences between the corresponding features of the two points.

`d(x, y) = √ Σ (xᵢ − yᵢ)²`

where `(x₁, x₂, …, xₙ)` and `(y₁, y₂, …, yₙ)` are two data points in n-dimensional space. It is commonly used in algorithms like KNN and K-means.
</QAItem>
