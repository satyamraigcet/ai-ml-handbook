import React, { useMemo, useState } from 'react';
import { JargonCard } from './index';

const GROUPS = [
  {
    id: 'core',
    label: 'Core',
    title: '01 Core fields',
    cards: [
      ['AI', 'Artificial Intelligence', 'The broad field of machines doing tasks that appear intelligent.'],
      ['ML', 'Machine Learning', 'Models learn patterns from data instead of using only fixed rules.'],
      ['DL', 'Deep Learning', 'Machine learning with neural networks containing many layers.'],
      ['DS', 'Data Science', 'Using data, statistics and code to produce insight or predictions.'],
      ['NLP', 'Natural Language Processing', 'Computers working with human text or speech.'],
      ['CV', 'Computer Vision', 'Computers understanding images and video.'],
      ['RL', 'Reinforcement Learning', 'An agent learns a policy from rewards and experience.'],
      ['AGI', 'Artificial General Intelligence', 'A proposed system capable across a wide range of intellectual tasks.'],
      ['ANI', 'Artificial Narrow Intelligence', 'AI designed for a limited task or domain.'],
      ['XAI', 'Explainable AI', "Methods that help people understand a model's result."],
    ],
  },
  {
    id: 'data',
    label: 'Data',
    title: '02 Data and preparation',
    cards: [
      ['EDA', 'Exploratory Data Analysis', 'Inspect distributions, patterns, relationships and outliers first.'],
      ['ETL', 'Extract, Transform, Load', 'Move data from sources, clean it, then store it.'],
      ['ELT', 'Extract, Load, Transform', 'Load raw data first and transform it inside the destination.'],
      ['CSV', 'Comma-Separated Values', 'A simple text table, one record per line.'],
      ['JSON', 'JavaScript Object Notation', 'A common structured format for APIs and model outputs.'],
      ['SQL', 'Structured Query Language', 'Read and change data in relational databases.'],
      ['DB', 'Database', 'An organized store of data.'],
      ['API', 'Application Programming Interface', 'A defined way for one program to call another.'],
      ['PCA', 'Principal Component Analysis', 'Compress features into directions that preserve high variance.'],
      ['SVD', 'Singular Value Decomposition', 'Factor a matrix; useful for compression and latent structure.'],
      ['SMOTE', 'Synthetic Minority Over-sampling Technique', 'Create synthetic minority examples to help balance training data.'],
      ['PII', 'Personally Identifiable Information', 'Data that can identify a person and needs careful protection.'],
    ],
  },
  {
    id: 'models',
    label: 'Models',
    title: '03 Algorithms and model families',
    cards: [
      ['LinReg', 'Linear Regression', 'Predict a continuous number with a linear relationship.'],
      ['LogReg', 'Logistic Regression', 'Turn a linear score into a class probability.'],
      ['DT', 'Decision Tree', 'Reach a prediction through feature-based branches.'],
      ['RF', 'Random Forest', 'Many randomized trees vote or average.'],
      ['NB', 'Naive Bayes', "Probabilistic classifier using Bayes' theorem and an independence assumption."],
      ['KNN', 'K-Nearest Neighbors', 'Predict from the closest stored examples.'],
      ['SVM', 'Support Vector Machine', 'Find a maximum-margin decision boundary.'],
      ['GBM', 'Gradient Boosting Machine', 'Weak learners are added sequentially to correct errors.'],
      ['XGBoost', 'Extreme Gradient Boosting', 'An optimized gradient-boosted tree implementation.'],
      ['NN', 'Neural Network', 'Layers of weighted units learn a mapping.'],
      ['CNN', 'Convolutional Neural Network', 'Convolution filters learn local patterns, often in images.'],
      ['RNN', 'Recurrent Neural Network', 'Processes a sequence while carrying state forward.'],
      ['LSTM', 'Long Short-Term Memory', 'A gated RNN designed to retain useful sequence information.'],
      ['GAN', 'Generative Adversarial Network', 'A generator competes against a discriminator.'],
      ['AE', 'Autoencoder', 'Encode data into a compact representation, then reconstruct it.'],
      ['MoE', 'Mixture of Experts', 'A router selects part of a larger model for each input.'],
    ],
  },
  {
    id: 'metrics',
    label: 'Metrics',
    title: '04 Evaluation and errors',
    cards: [
      ['TP', 'True Positive', 'Predicted positive, and it really is positive.'],
      ['TN', 'True Negative', 'Predicted negative, and it really is negative.'],
      ['FP', 'False Positive', 'A false alarm: predicted positive, actually negative.'],
      ['FN', 'False Negative', 'A missed case: predicted negative, actually positive.'],
      ['CM', 'Confusion Matrix', 'A table containing TP, TN, FP and FN counts.'],
      ['Acc', 'Accuracy', 'Correct predictions divided by all predictions.'],
      ['P', 'Precision', 'Of predicted positives, how many were correct?'],
      ['R', 'Recall', 'Of real positives, how many did we find?'],
      ['F1', 'F1 Score', 'The harmonic mean of precision and recall.'],
      ['ROC', 'Receiver Operating Characteristic', 'A curve of true-positive rate against false-positive rate.'],
      ['AUC', 'Area Under the Curve', 'A summary of a curve, usually ROC-AUC unless stated otherwise.'],
      ['MAE', 'Mean Absolute Error', 'Average absolute distance between prediction and truth.'],
      ['MSE', 'Mean Squared Error', 'Average squared error; larger misses receive more weight.'],
      ['RMSE', 'Root Mean Squared Error', "Square root of MSE, in the target's original unit."],
      ['R²', 'Coefficient of Determination', 'How much target variation a regression explains.'],
      ['BLEU', 'Bilingual Evaluation Understudy', 'N-gram overlap metric originally designed for translation.'],
      ['ROUGE', 'Recall-Oriented Understudy for Gisting Evaluation', 'Text overlap metrics often used for summaries.'],
    ],
  },
  {
    id: 'nets',
    label: 'Neural nets',
    title: '05 Neural-network training',
    cards: [
      ['GD', 'Gradient Descent', 'Move parameters opposite the loss gradient.'],
      ['SGD', 'Stochastic Gradient Descent', 'Update from one example or, commonly, a small batch.'],
      ['BGD', 'Batch Gradient Descent', 'Use the full training set for an update.'],
      ['LR', 'Learning Rate', 'The size of each optimization step.'],
      ['BP', 'Backpropagation', 'Use the chain rule to calculate gradients through the network.'],
      ['ReLU', 'Rectified Linear Unit', 'Activation function: max(0, x).'],
      ['Adam', 'Adaptive Moment Estimation', 'Optimizer combining momentum-like estimates with adaptive steps.'],
      ['BN', 'Batch Normalization', 'Normalize intermediate activations during training.'],
      ['Epoch', 'One pass through the training set', 'Ten epochs means the model saw the dataset ten times.'],
      ['Batch', 'A group of training examples', 'One parameter update commonly uses one mini-batch.'],
    ],
  },
  {
    id: 'genai',
    label: 'Gen AI',
    title: '06 Generative AI and language models',
    cards: [
      ['GenAI', 'Generative AI', 'Models that create new text, images, audio, code or video.'],
      ['FM', 'Foundation Model', 'A broadly trained model adapted to many downstream tasks.'],
      ['LLM', 'Large Language Model', 'A large model trained to learn patterns over language tokens.'],
      ['SLM', 'Small Language Model', 'A smaller language model designed for lower cost or local use.'],
      ['GPT', 'Generative Pre-trained Transformer', 'A decoder-style transformer family trained before task use.'],
      ['BERT', 'Bidirectional Encoder Representations from Transformers', 'An encoder model that learns contextual text representations.'],
      ['VLM', 'Vision-Language Model', 'A model that works across images and language.'],
      ['CoT', 'Chain of Thought', 'Intermediate reasoning steps used before a final answer.'],
      ['SFT', 'Supervised Fine-Tuning', 'Train a pre-trained model on input-and-answer examples.'],
      ['PEFT', 'Parameter-Efficient Fine-Tuning', 'Adapt a model while changing only a small share of parameters.'],
      ['LoRA', 'Low-Rank Adaptation', 'A PEFT method that trains small low-rank update matrices.'],
      ['RLHF', 'Reinforcement Learning from Human Feedback', 'Use preference feedback to align model behavior.'],
      ['DPO', 'Direct Preference Optimization', 'Train directly from preferred and rejected response pairs.'],
      ['KV cache', 'Key-Value Cache', 'Reuse earlier attention states during token generation.'],
      ['Ctx', 'Context', 'The tokens available to the model for its current response.'],
    ],
  },
  {
    id: 'rag',
    label: 'RAG & agents',
    title: '07 RAG and agents',
    cards: [
      ['RAG', 'Retrieval-Augmented Generation', 'Retrieve passages, add them to the prompt, then generate.'],
      ['Embed', 'Embedding', 'Text mapped to numbers so meaning can be compared by direction.'],
      ['KB', 'Knowledge Base', 'The documents or structured facts available for retrieval.'],
      ['ANN search', 'Approximate Nearest Neighbor Search', 'Quickly find vectors close to the query vector.'],
      ['Top-k', 'Top k results', 'The k highest-scoring chunks or model choices.'],
      ['HyDE', 'Hypothetical Document Embeddings', 'Embed a generated hypothetical answer to improve retrieval.'],
      ['MMR', 'Maximal Marginal Relevance', 'Balance retrieval relevance with result diversity.'],
      ['MCP', 'Model Context Protocol', 'An open standard for exposing tools, resources, and prompts to AI apps.'],
      ['HITL', 'Human in the Loop', 'A person reviews, guides or approves part of the workflow.'],
      ['ReAct', 'Reason + Act', 'An agent pattern that alternates reasoning with tool actions.'],
      ['Tool call', 'A structured request to a function', 'The model asks application code to perform an allowed action.'],
      ['State', 'Saved workflow information', 'Messages, results and decisions carried between agent steps.'],
      ['Trace', 'A record of one run', 'Shows prompts, retrieval, tool calls, outputs, timing and errors.'],
    ],
  },
  {
    id: 'prod',
    label: 'Production',
    title: '08 Production and operations',
    cards: [
      ['MLOps', 'Machine Learning Operations', 'Practices for training, deploying and monitoring ML systems.'],
      ['LLMOps', 'Large Language Model Operations', 'Evaluation, deployment and monitoring practices for LLM apps.'],
      ['CI/CD', 'Continuous Integration / Continuous Delivery', 'Automatically test and release software changes.'],
      ['SDK', 'Software Development Kit', 'Libraries and tools for building with a platform.'],
      ['CPU', 'Central Processing Unit', 'General-purpose processor.'],
      ['GPU', 'Graphics Processing Unit', 'Highly parallel processor widely used for model training and inference.'],
      ['TPU', 'Tensor Processing Unit', 'Accelerator designed for tensor computations.'],
      ['ONNX', 'Open Neural Network Exchange', 'A format for moving models between compatible runtimes.'],
      ['SLA', 'Service-Level Agreement', 'A formal promise about service availability or performance.'],
      ['SLO', 'Service-Level Objective', 'An internal reliability or performance target.'],
      ['KPI', 'Key Performance Indicator', 'A measurable business or product outcome.'],
      ['latency', 'Time taken for a response', 'Often measured end-to-end or per generated token.'],
    ],
  },
];

export function JargonBoard() {
  const [chip, setChip] = useState('all');
  const groups = useMemo(
    () => (chip === 'all' ? GROUPS : GROUPS.filter((g) => g.id === chip)),
    [chip],
  );
  return (
    <div>
      <div className="chip-row" role="tablist">
        <button type="button" className={chip === 'all' ? 'chip is-on' : 'chip'} onClick={() => setChip('all')}>
          All
        </button>
        {GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={chip === g.id ? 'chip is-on' : 'chip'}
            onClick={() => setChip(g.id)}>
            {g.label}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <section key={g.id} className="jargon-section">
          <h3 className="jargon-section__title">{g.title}</h3>
          <div className="jargon-grid">
            {g.cards.map(([abbr, full, clue]) => (
              <JargonCard key={abbr} abbr={abbr} full={full} clue={clue} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
