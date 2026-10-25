// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  notes: [
    {
      type: 'link',
      label: 'Index',
      href: '/',
    },
    {
      type: 'category',
      label: 'Part I · The field',
      collapsed: false,
      items: [
        { type: 'doc', id: 'part-1/ai-vs-ml-vs-dl', label: '01 · AI vs ML' },
        { type: 'doc', id: 'part-1/ani-to-asi-types-of-artificial-intelligence', label: '02 · ANI to ASI' },
        { type: 'doc', id: 'part-1/how-machines-learn-supervised-unsupervised-rl', label: '03 · How it learns' },
      ],
    },
    {
      type: 'category',
      label: 'Part II · Classical machine learning',
      collapsed: false,
      items: [
        { type: 'doc', id: 'part-2/the-ml-pipeline', label: '04 · Pipeline' },
        {
          type: 'category',
          label: '05 · The lineup',
          link: { type: 'doc', id: 'part-2/the-model-lineup' },
          items: [
            { type: 'doc', id: 'algorithms/linear', label: 'Linear Regression' },
            { type: 'doc', id: 'algorithms/logistic', label: 'Logistic Regression' },
            { type: 'doc', id: 'algorithms/tree', label: 'Decision Tree' },
            { type: 'doc', id: 'algorithms/forest', label: 'Random Forest' },
            { type: 'doc', id: 'algorithms/naive-bayes', label: 'Naive Bayes' },
            { type: 'doc', id: 'algorithms/knn', label: 'K-Nearest Neighbors (KNN)' },
            { type: 'doc', id: 'algorithms/svm', label: 'Support Vector Machine (SVM)' },
            { type: 'doc', id: 'algorithms/boosting', label: 'Gradient Boosting' },
          ],
        },
        { type: 'doc', id: 'part-2/beyond-the-model', label: '06 · Beyond' },
        { type: 'doc', id: 'part-2/maths-one-line-each', label: '07 · Maths' },
        { type: 'doc', id: 'part-2/the-formula-sheet', label: '08 · Formulas' },
      ],
    },
    {
      type: 'category',
      label: 'Part III · In the world',
      items: [
        { type: 'doc', id: 'part-3/ai-in-the-wild-real-world-applications', label: '09 · In the wild' },
        { type: 'doc', id: 'part-3/the-ai-ml-toolkit', label: '10 · Toolkit' },
      ],
    },
    {
      type: 'category',
      label: 'Part IV · Modern AI',
      items: [
        { type: 'doc', id: 'part-4/from-ai-to-agentic-ai', label: 'Map · AI → Agentic' },
        { type: 'doc', id: 'part-4/generative-ai-and-llms', label: '11 · GenAI' },
        {
          type: 'category',
          label: '12 · RAG',
          link: { type: 'doc', id: 'part-4/rag-retrieval-augmented-generation' },
          items: [{ type: 'doc', id: 'part-4/llamaindex', label: 'LlamaIndex' }],
        },
        {
          type: 'category',
          label: '13 · LangChain',
          link: { type: 'doc', id: 'part-4/langchain-langgraph-and-mcp' },
          items: [
            { type: 'doc', id: 'part-4/langchain', label: 'LangChain' },
            { type: 'doc', id: 'part-4/langgraph', label: 'LangGraph' },
            { type: 'doc', id: 'part-4/langsmith', label: 'LangSmith' },
            { type: 'doc', id: 'part-4/mcp', label: 'MCP' },
          ],
        },
        { type: 'doc', id: 'part-4/ai-agents-a-model-that-can-take-a-next-step', label: '14 · Agents' },
        { type: 'doc', id: 'part-4/ai-engineering-from-a-useful-model-to-a-dependable-product', label: '15 · Engineering' },
      ],
    },
    {
      type: 'category',
      label: 'Part V · After the notebook',
      items: [
        { type: 'doc', id: 'part-5/mlops-from-one-notebook-to-a-real-product', label: '16 · MLOps' },
        { type: 'doc', id: 'part-5/benefits-challenges-and-the-future-use-it-responsibly', label: '17 · The risk' },
      ],
    },
    {
      type: 'category',
      label: 'Back matter',
      items: [
        { type: 'doc', id: 'back-matter/a-jargon-cards', label: 'A · Jargon' },
        { type: 'doc', id: 'back-matter/b-lock-it-in', label: 'B · Lock it in' },
        { type: 'doc', id: 'back-matter/references', label: 'Sources' },
      ],
    },
  ],
};

module.exports = sidebars;
