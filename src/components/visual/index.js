import React from 'react';
import { Doodle } from './doodles';

export function CardGrid({ children }) {
  return <div className="pic-grid">{children}</div>;
}

export function PictureCard({ doodle, title, example, children }) {
  return (
    <article className="pic-card">
      <div className="pic-card__art">
        <Doodle name={doodle} />
      </div>
      <h3 className="pic-card__title">{title}</h3>
      <div className="pic-card__job">{children}</div>
      {example ? (
        <p className="pic-card__example">
          <strong>Example.</strong> {example}
        </p>
      ) : null}
    </article>
  );
}

export function QAItem({ q, children }) {
  return (
    <details className="qa">
      <summary>{q}</summary>
      <div className="qa__a">{children}</div>
    </details>
  );
}

export function JargonCard({ abbr, full, clue }) {
  return (
    <article className="jargon-card">
      <div className="jargon-card__abbr">{abbr}</div>
      <div className="jargon-card__body">
        <div className="jargon-card__full">{full}</div>
        <p className="jargon-card__clue">{clue}</p>
      </div>
    </article>
  );
}

export function KeepCard({ title, children }) {
  return (
    <article className="keep-card">
      <strong>{title}</strong>
      <p>{children}</p>
    </article>
  );
}

const TOOLS = [
  {
    group: 'Programming',
    items: [
      {
        doodle: 'python',
        title: 'Python',
        job: 'The language you will use most: data work, training, tests, and small APIs.',
        example: 'A script reads house prices, fits a model, and prints how far it missed.',
      },
      {
        doodle: 'bash',
        title: 'Bash',
        job: 'The terminal language. Move files, run scripts, and read logs.',
        example: 'One command counts how many ERROR lines are in today’s log.',
      },
      {
        doodle: 'sql',
        title: 'SQL',
        job: 'Ask a database questions, and change rows when you are allowed to.',
        example: 'Average sale price for each city, without opening the file yourself.',
      },
      {
        doodle: 'go',
        title: 'Go',
        job: 'A fast language for services. Docker and Kubernetes are written in it. Learn it later.',
        example: 'A small service takes one house and returns a price.',
      },
    ],
  },
  {
    group: 'Version control',
    items: [
      {
        doodle: 'git',
        title: 'Git',
        job: 'Stores snapshots of the code, called commits, and lets you try ideas on a branch.',
        example: 'You try a new feature split on a branch, then join it back when the score is better.',
      },
      {
        doodle: 'github',
        title: 'GitHub',
        job: 'The website where the team shares the Git repo, reviews changes, and tracks issues.',
        example: 'You open a pull request, and a teammate writes that the split looks right.',
      },
      {
        doodle: 'dvc',
        title: 'DVC',
        job: 'Version control for the big files. Git keeps a tiny pointer; the dataset or model sits in storage.',
        example: 'houses.csv is 2 GB, so Git stores only a small pointer file.',
      },
    ],
  },
  {
    group: 'CI/CD',
    items: [
      {
        doodle: 'actions',
        title: 'GitHub Actions',
        job: 'A robot inside GitHub. A YAML file builds, tests, and can release when you push or open a pull request.',
        example: 'You push to main, the tests run, and a tick appears when they pass.',
      },
      {
        doodle: 'gitlab',
        title: 'GitLab',
        job: 'A home for the code that also runs its own build, test, and release pipelines.',
        example: 'One project page shows the repository beside build, test, and ship.',
      },
      {
        doodle: 'jenkins',
        title: 'Jenkins',
        job: 'A separate automation server for build, test, and deploy, extended with plugins.',
        example: 'A nightly job on your own build machine trains the model while you sleep.',
      },
      {
        doodle: 'cml',
        title: 'CML',
        job: 'Continuous machine learning. It trains on a change and posts the model scores back on the pull request.',
        example: 'The pull request comment says the error fell from 21.0 to 18.4.',
      },
    ],
  },
  {
    group: 'Machine learning',
    items: [
      {
        doodle: 'maths',
        title: 'Maths & statistics',
        job: 'Averages, spread, probability, and the algebra used to train and judge a model.',
        example: 'The average price is 420k, and most houses sit near that middle.',
      },
      {
        doodle: 'ml',
        title: 'Machine learning',
        job: 'Teaching a model to find patterns in examples, then predict on data it has not seen.',
        example: 'It learns from past sales, then guesses the price of a new house.',
      },
      {
        doodle: 'dl',
        title: 'Deep learning',
        job: 'Neural networks with many layers, used for images, text, and sound.',
        example: 'A photo of a kitchen goes in, and the word kitchen comes out.',
      },
      {
        doodle: 'eval',
        title: 'Model evaluation',
        job: 'Scores such as accuracy, precision, recall, F1, RMSE, and MAE, checked on held-out data.',
        example: 'These 200 houses were kept back, and the typical miss is 18k.',
      },
      {
        doodle: 'sklearn',
        title: 'scikit-learn',
        job: 'The Python library for classic models: classification, regression, clustering, and preprocessing.',
        example: 'One call fits a straight line through a table of house features.',
      },
      {
        doodle: 'pytorch',
        title: 'PyTorch',
        job: 'A deep-learning framework with a flexible computation graph, used for vision, language, and more.',
        example: 'You change one layer, then run the training step yourself.',
      },
      {
        doodle: 'tensorflow',
        title: 'TensorFlow',
        job: 'Google’s library for numerical work and large deep-learning models.',
        example: 'The same image model trains across several GPUs at once.',
      },
      {
        doodle: 'mlflow',
        title: 'MLflow',
        job: 'Records each training run, packages the code, and keeps the model so you can deploy it later.',
        example: 'Run 14 used 200 trees and missed by 18.4.',
      },
    ],
  },
  {
    group: 'Cloud and containers',
    items: [
      {
        doodle: 'cloud',
        title: 'AWS, Azure, GCP',
        job: 'Rent servers, storage, and GPUs. Pay for what you use, then stop paying when the job ends.',
        example: 'A GPU runs for two hours of training, then switches off.',
      },
      {
        doodle: 'cloudml',
        title: 'Cloud ML services',
        job: 'The vendor’s managed train-and-deploy platform: SageMaker, Azure ML, or Vertex AI.',
        example: 'You upload the script. They run the job and host the live endpoint.',
      },
      {
        doodle: 'docker',
        title: 'Docker',
        job: 'Packs your code and libraries into one container that runs the same on a laptop and a server.',
        example: 'Python and the model libraries are identical on your laptop and the server.',
      },
      {
        doodle: 'k8s',
        title: 'Kubernetes',
        job: 'Runs many containers across machines, restarts the ones that crash, and adds copies when traffic grows.',
        example: 'Three copies answer requests, a crashed one restarts, and a fourth appears at lunchtime.',
      },
    ],
  },
  {
    group: 'Data',
    items: [
      {
        doodle: 'pipelines',
        title: 'Data pipelines',
        job: 'Automatic steps that extract, clean, transform, and load data, in a batch or as it arrives.',
        example: 'Every night the job pulls yesterday’s sales, drops bad rows, and writes a clean table.',
      },
      {
        doodle: 'lake',
        title: 'Data lake',
        job: 'Cheap storage for raw files, kept as they came in.',
        example: 'A bucket of untouched CSV and JSON dumps, not yet formed into tables.',
      },
      {
        doodle: 'warehouse',
        title: 'Data warehouse',
        job: 'Tidy tables, already shaped for questions and reports.',
        example: 'One sales table you can average by city.',
      },
      {
        doodle: 'ingestion',
        title: 'Data ingestion',
        job: 'How data enters from databases, APIs, or streams, then gets checked and stored.',
        example: 'An hourly API pull that rejects a row when the price is missing.',
      },
      {
        doodle: 'spark',
        title: 'Spark',
        job: 'Splits a huge data job across many computers. It handles batch, streams, and SQL.',
        example: 'A billion log rows are counted by hour on a cluster, not on one laptop.',
      },
      {
        doodle: 'kafka',
        title: 'Kafka',
        job: 'A streaming post office. Apps drop live events in, and other apps pick them up.',
        example: 'Each new house listing is a letter. The model service collects the letters.',
      },
      {
        doodle: 'flink',
        title: 'Flink',
        job: 'Processes those live events as they arrive, with low delay and fault tolerance.',
        example: 'The average price of the last five minutes updates even if one machine dies.',
      },
      {
        doodle: 'lineage',
        title: 'Data lineage',
        job: 'The record of where data came from and how it changed before it reached the model.',
        example: 'This column started in the CRM, was renamed, then joined to sales.',
      },
    ],
  },
  {
    group: 'Infrastructure and pipelines',
    items: [
      {
        doodle: 'terraform',
        title: 'Terraform',
        job: 'Writes down the cloud resources you want, then builds that same setup every time.',
        example: 'A file asks for one bucket, one GPU job, and one endpoint, and builds them again later.',
      },
      {
        doodle: 'ansible',
        title: 'Ansible',
        job: 'Sets up software on machines from a YAML playbook, the same way every time.',
        example: 'Docker and the same Python version land on every server.',
      },
      {
        doodle: 'airflow',
        title: 'Airflow',
        job: 'Runs a workflow as a map of tasks. It waits for dependencies, retries failures, and keeps logs.',
        example: 'Clean the data, then train, then score. If cleaning fails, training waits and retries.',
      },
      {
        doodle: 'kubeflow',
        title: 'KubeFlow',
        job: 'Runs machine-learning pipelines, training, and serving as containers on Kubernetes.',
        example: 'Each step is a container, and the cluster runs train, then score, then serve.',
      },
    ],
  },
  {
    group: 'Monitoring',
    items: [
      {
        doodle: 'prometheus',
        title: 'Prometheus',
        job: 'Collects numbers over time, such as response time and errors, and can alert when a limit is crossed.',
        example: 'If the error rate stays above 2% for five minutes, an alert fires.',
      },
      {
        doodle: 'grafana',
        title: 'Grafana',
        job: 'Draws those numbers as dashboards and sends the alert. It can also show logs and traces.',
        example: 'A board shows predictions per minute next to the error line.',
      },
    ],
  },
  {
    group: 'Edge and explanations',
    items: [
      {
        doodle: 'mobile',
        title: 'PyTorch Mobile',
        job: 'Runs a PyTorch model on a phone, on the device, including when there is no network.',
        example: 'The camera labels a plant while the phone has no signal.',
      },
      {
        doodle: 'tflite',
        title: 'TFLite',
        job: 'A small TensorFlow runtime for phones, sensors, and other small devices.',
        example: 'A tiny model on a doorbell camera decides if someone is at the door.',
      },
      {
        doodle: 'jetson',
        title: 'NVIDIA Jetson',
        job: 'A small computer board for models on cameras, robots, drones, and vehicles.',
        example: 'A robot sees an obstacle and stops, using a computer on the robot itself.',
      },
      {
        doodle: 'shap',
        title: 'SHAP',
        job: 'Shares one prediction out among the inputs, so you can see what pushed the score up or down.',
        example: 'For this sale, the suburb added 4k and the small garden took 2k away.',
      },
      {
        doodle: 'lime',
        title: 'LIME',
        job: 'Wiggles the inputs around one case and fits a simple local model to see what mattered there.',
        example: 'For this one house, floor area mattered more than the year it was built.',
      },
    ],
  },
];

export function MlopsToolPictures() {
  return (
    <div className="tool-pictures">
      {TOOLS.map((group) => (
        <section key={group.group} className="tool-pictures__group">
          <h3>{group.group}</h3>
          <CardGrid>
            {group.items.map((item) => (
              <PictureCard
                key={item.title}
                doodle={item.doodle}
                title={item.title}
                example={item.example}>
                {item.job}
              </PictureCard>
            ))}
          </CardGrid>
        </section>
      ))}
    </div>
  );
}
