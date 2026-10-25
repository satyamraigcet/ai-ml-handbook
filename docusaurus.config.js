// @ts-check
const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pictures First: AI & ML',
  tagline: 'See the picture, then the idea — a visual revision notebook by Satyam Rai',
  url: 'https://ai-ml-handbook.vercel.app',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/logo.svg',
  customFields: {
    // Paste your WhatsApp group invite link (https://chat.whatsapp.com/...)
    whatsappGroupUrl: 'https://chat.whatsapp.com/HxKt15etLlFChreVUNinjD',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'press',
        path: 'press',
        routeBasePath: 'press',
        sidebarPath: require.resolve('./sidebars-press.js'),
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/foundations', to: '/docs/parts/part-1/01-ai-vs-ml-vs-dl' },
          { from: '/docs/types-of-ai', to: '/docs/parts/part-1/02-ani-to-asi-types-of-artificial-intelligence' },
          { from: '/docs/learning', to: '/docs/parts/part-1/03-how-machines-learn-supervised-unsupervised-rl' },
          { from: '/docs/math-definitions', to: '/docs/parts/part-2/07-maths-one-line-each' },
          { from: '/docs/formulas', to: '/docs/parts/part-2/08-the-formula-sheet' },
          { from: '/docs/applications', to: '/docs/parts/part-3/09-ai-in-the-wild-real-world-applications' },
          { from: '/docs/shorthand', to: '/docs/parts/back-matter/a-jargon-cards' },
          { from: '/docs/revision', to: '/docs/parts/back-matter/b-lock-it-in' },
          { from: '/docs/references', to: '/docs/parts/back-matter/references' },
          { from: '/docs/mlops', to: '/docs/parts/part-5/16-mlops-from-one-notebook-to-a-real-product' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      titleTemplate: '%s | Pictures First',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Pictures First',
        logo: {
          alt: 'Pictures First: AI & ML',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'notes',
            position: 'left',
            label: 'Chapters',
          },
          {
            type: 'docSidebar',
            sidebarId: 'press',
            docsPluginId: 'press',
            position: 'left',
            label: 'Press sheets',
          },
          {
            to: '/docs/parts/back-matter/b-lock-it-in',
            position: 'left',
            label: 'Practice',
          },
          {
            type: 'html',
            position: 'right',
            value: '<span class="nb-nav-author">by Satyam Rai</span>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Start here',
            items: [
              { label: 'Handbook index', to: '/docs' },
              { label: 'AI vs ML vs DL', to: '/docs/parts/part-1/01-ai-vs-ml-vs-dl' },
              { label: 'Supervised, unsupervised, RL', to: '/docs/parts/part-1/03-how-machines-learn-supervised-unsupervised-rl' },
              { label: 'The ML pipeline', to: '/docs/parts/part-2/04-the-ml-pipeline' },
            ],
          },
          {
            title: 'The models',
            items: [
              { label: 'The model lineup', to: '/docs/parts/part-2/05-the-model-lineup' },
              { label: 'Beyond the model', to: '/docs/parts/part-2/06-beyond-the-model' },
              { label: 'The formula sheet', to: '/docs/parts/part-2/08-the-formula-sheet' },
              { label: 'AI in the wild', to: '/docs/parts/part-3/09-ai-in-the-wild-real-world-applications' },
            ],
          },
          {
            title: 'Modern AI and after',
            items: [
              { label: 'GenAI and LLMs', to: '/docs/parts/part-4/11-generative-ai-and-llms' },
              { label: 'RAG', to: '/docs/parts/part-4/12-rag-retrieval-augmented-generation' },
              { label: 'AI agents', to: '/docs/parts/part-4/14-ai-agents-a-model-that-can-take-a-next-step' },
              { label: 'MLOps', to: '/docs/parts/part-5/16-mlops-from-one-notebook-to-a-real-product' },
              { label: 'Lock it in', to: '/docs/parts/back-matter/b-lock-it-in' },
            ],
          },
          {
            title: 'Hard copy',
            items: [
              {
                label: 'WhatsApp group — request a printed copy',
                href: 'https://chat.whatsapp.com/HxKt15etLlFChreVUNinjD',
              },
            ],
          },
          {
            title: 'Feedback',
            items: [
              {
                label: 'Send feedback & suggestions',
                href: 'mailto:satyamraigcet@gmail.com?subject=AI%20%26%20ML%20Visual%20Note%20Book%20%E2%80%94%20feedback',
              },
              {
                label: 'satyamraigcet@gmail.com',
                href: 'mailto:satyamraigcet@gmail.com',
              },
            ],
          },
        ],
        copyright:
          'Pictures First: AI & ML · Satyam Rai · © 2026 · All rights reserved · Do not print or redistribute without permission · Hard copy: join the WhatsApp group · Feedback: satyamraigcet@gmail.com',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'text',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
