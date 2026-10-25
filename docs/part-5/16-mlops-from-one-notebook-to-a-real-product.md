---
title: "Chapter 16 · MLOps — From One Notebook to a Real Product"
sidebar_label: "16 · MLOps"
sidebar_position: 16
hide_title: true
slug: "/parts/part-5/16-mlops-from-one-notebook-to-a-real-product"
description: "16 · MLOps — From One Notebook to a Real Product"
---

<ChapterHero n="16" title="MLOps" kicker="From one notebook to a real product">
<p><strong>MLOps, explained from zero.</strong> MLOps (Machine Learning Operations) is the set of habits, tools and teamwork that take a model out of a notebook and keep it working for real people, every day, safely. You do not need to know every tool to begin. Read the pictures first, then the words under them.</p>
<PlainWords label="In plain words">
baking one good cake at home is machine learning. Running a bakery that sells thousands of good cakes every day — <Highlight>same taste, on time</Highlight>, with fresh ingredients and happy customers — is <Highlight>MLOps</Highlight>.
</PlainWords>
</ChapterHero>

*Notebook → one good cake. Production → thousands a day.*

### Part 1 · Why do we need MLOps?

#### 1. The model is only the tip of the iceberg

What people imagine: *"I trained a model!"* — the visible tip. What real products need — everything under the water:

<MlopsIceberg />

**MLOps — the system behind it:** ML code · data collection → cleaning → labels · feature pipelines · data checks · testing · packaging · CI/CD · serving · scaling · security · monitoring · alerts · retraining.

In real companies, the code that trains the model is usually a small part of the whole system. Most of the work is getting good data, testing, delivering the model, and watching it after launch. **MLOps is about <Highlight>that hidden part</Highlight>.**

#### 2. Life without MLOps

- ✗ *"It worked on my laptop"* — but not on the server.
- ✗ Nobody remembers which data or settings made the good model.
- ✗ Updating the model means copying files by hand at midnight.
- ✗ The model slowly gets worse and nobody notices for months.
- ✗ When something breaks, there is no quick way to go back.

#### 3. Life with MLOps

- ✓ The same packaged model runs everywhere.
- ✓ Every model can be traced to its code, data and settings.
- ✓ Pressing "merge" runs tests and delivers the model automatically.
- ✓ Dashboards and alerts warn you when quality drops.
- ✓ One click rolls back to the last good version.

### Part 2 · The MLOps loop

#### 4. Eight steps that repeat forever

The loop never stops: the world changes — is the model keeping up?

<MlopsLoopDiagram />

**Plan → Collect data → Prepare → Train → Validate → Deploy → Monitor → Improve → (back through Plan · Collect · Prepare)**

Plan, Collect and Prepare are not a one-time warm-up. Every improve cycle asks them again — new goal?, new data?, still clean?

<table className="nb-table-steps">
<thead>
<tr><th>Step</th><th>Beginner question to ask</th><th>Example (predict house price)</th></tr>
</thead>
<tbody>
<tr><td>1 · Plan</td><td>What decision will the model help with, and how do we measure success?</td><td>Help agents price homes; goal: error under 5%.</td></tr>
<tr><td>2 · Collect</td><td>Where does the data come from? Are we allowed to use it?</td><td>Past sales from the company database.</td></tr>
<tr><td>3 · Prepare</td><td>Is the data clean, complete and correct?</td><td>Remove duplicates; fill missing room counts.</td></tr>
<tr><td>4 · Train</td><td>Which model and settings work best? Did we write them down?</td><td>Try linear regression and gradient boosting.</td></tr>
<tr><td>5 · Validate</td><td>Is it better than what we have today, on data it never saw?</td><td>Test on last month's sales.</td></tr>
<tr><td>6 · Deploy</td><td>How do people or apps get predictions?</td><td>A web API the agents' app calls.</td></tr>
<tr><td>7 · Monitor</td><td>Is it still fast, healthy and accurate?</td><td>Compare predictions to real sale prices.</td></tr>
<tr><td>8 · Improve</td><td>Should we retrain, get more data, or change the goal?</td><td>Retrain every month with new sales.</td></tr>
</tbody>
</table>

#### 5. Who does what?

| Role | In one line |
| --- | --- |
| **Product owner** | Picks the problem and the goal. |
| **Data engineer** | Builds the pipes that deliver clean data. |
| **Data scientist** | Tries and trains models. |
| **ML engineer** | Turns models into production services. |
| **Platform / DevOps** | Runs the servers and pipelines. |
| **Security & risk** | Checks access, privacy and fairness. |

In a small team one person may wear all these hats. MLOps is the shared way of working that lets them hand work to each other without losing anything.

### Part 3 · The building blocks, one at a time

#### 6. Programming basics

```
$ python train.py
$ grep ERROR app.log | wc -l
SELECT city, AVG(price) FROM houses GROUP BY city;
$ go build ./server
```

- **Python** — the main language: data work, training, tests and small APIs. Start here.
- **Bash** — typing commands into a terminal: move files, run scripts, read logs.
- **SQL** — asking a database questions, like average price per city.
- **Go** — optional; used for fast servers and cloud tools. Docker and Kubernetes are written in it.

> **Tip:** learn Python and SQL first. You will use Bash every day without noticing.

#### 7. Version control: a time machine for work

- **Git** saves snapshots (called *commits*) of your code. You can try ideas on a branch without breaking the main version.
- **GitHub** (or **GitLab**) hosts the code online so teammates can review changes in a *pull request* before they are merged.
- **DVC** (Data Version Control) does the same for big data and model files. Git keeps a tiny "ticket" (a pointer, a few KB); the heavy file (dataset `v1` — 5 GB, `model.pkl` — 300 MB) sits in cloud storage. Now *"which data made model v3?"* has an exact answer.

#### 8. CI/CD: a conveyor belt with quality checks

| Word | Simple meaning |
| --- | --- |
| **CI — Continuous Integration** | Every time someone saves code, a robot builds it and runs the tests. |
| **CD — Continuous Delivery / Deployment** | Work that passes the tests is packaged and released automatically (or with one approval click). |
| **CT — Continuous Training** | Special to ML: the model is retrained when new data arrives, then checked before release. |

If any check fails, the belt stops and the team is told. Broken work never reaches users.

A tiny GitHub Actions pipeline — `github/workflows/ai.yml`, runs on every push:

```yaml
name: ai-pipeline
on: [push]
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements.txt   # 1 · setup
      - run: pytest                            # 2 · code tests
      - run: python check_data.py              # 3 · data checks
      - run: python train.py                   # 4 · train
      - run: python evaluate.py --min-accuracy 0.85   # 5 · model gate
```

Tools you will hear about: **GitHub Actions, GitLab CI, Jenkins, and CML** (Continuous ML — posts model charts as comments on a pull request).

#### 9. ML fundamentals you still need

> MLOps does not replace machine learning — it carries it. Before automating, make sure you understand:

- **Maths & statistics:** averages, spread, probability, sampling.
- **Machine learning:** train/test split, overfitting, features (see Chapters 03–05).
- **Deep learning:** neural networks for images, text and sound.
- **Model evaluation:** pick a metric that matches the real cost of mistakes.
- **Libraries:** scikit-learn for classic models, PyTorch or TensorFlow for deep learning.

**Remember: automating a bad model only delivers bad answers faster.**

#### 10. Experiment tracking: a lab notebook

You will train dozens of models. Write down every try automatically, or you will forget which one was good.

| Run | Model | Data | Setting | Error |
| --- | --- | --- | --- | --- |
| 12 | Linear | v1 | — | 22% |
| 13 | Boosting | v2 | 100 trees | 6.4% |
| 14 | Boosting | v2 | 300 trees | **4.7%** |

```python
import mlflow
with mlflow.start_run():
    mlflow.log_param("trees", 300)
    mlflow.log_param("data_version", "v2")
    model = train(trees=300)
    mlflow.log_metric("error", 0.047)
    mlflow.sklearn.log_model(model, "model")
```

**MLflow** is a popular free tool for this. It also keeps the model files, so you can reload run 14 later.

#### 11. Data engineering: the water pipes

Models drink data. Data engineering builds the pipes that bring clean water instead of mud.

**Batch — fill a bucket once a day** (every night, 2 am) · **Streaming — a tap that never stops** (each event as it arrives).

| Word | Simple meaning |
| --- | --- |
| **Data pipeline** | A recipe of steps that moves and cleans data automatically. |
| **Data lake** | A big, cheap store for raw files of any kind. |
| **Data warehouse** | Tidy, organised tables ready for questions and reports. |
| **Data ingestion** | How data enters from databases, APIs, or live sources, then gets checked and stored. |
| **Feature store** | A shared shelf of ready-made model inputs, so training and the product use the same values. |
| **Spark** | Splits a huge data job across many computers. Handles batch, streams, and SQL. |
| **Kafka** | A post office for live events: apps drop messages in, others pick them up. |
| **Flink** | Processes live event streams as they arrive (counts, windows, alerts). |
| **Data lineage** | A family tree for data: where each table came from and what uses it. |

#### 12. Containers: a lunchbox for your model

*"But it works on my machine!"* — your laptop runs Python 3.12, the server runs 3.8. A **container** packs your code together with everything it needs to run (libraries, Python version, small Linux base): one box → laptop · server · cloud. **Docker** is the tool that builds and runs containers. The recipe is a **Dockerfile**, the packed result is an **image**, a running copy is a **container**.

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "serve:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### 13. Kubernetes: the manager of many lunchboxes

One container is easy. A hundred, across many machines, needs a manager. **Kubernetes** (often written **K8s**) decides where each container runs, restarts any that crash, adds copies when traffic grows, and gives users one front door. A control plane holds the goal: *"always keep 3 copies running."*

| Kubernetes word | Simple meaning |
| --- | --- |
| **Pod** | One running copy of your container. |
| **Node** | One machine that runs pods. |
| **Deployment** | "Keep 3 copies of model v2 running" — K8s makes it true. |
| **Service** | A stable address that spreads requests across pods. |
| **Autoscaling** | Add pods when busy, remove them when quiet. |

> **Beginner tip:** you do not need Kubernetes on day one. A managed cloud endpoint is often simpler and is a perfectly good start.

#### 14. Cloud computing: rent, don't buy

Training big models needs strong computers (GPUs) for a few hours. Renting them from a cloud is cheaper than buying them — pay only for what you use.

| Need | AWS | Azure | Google Cloud |
| --- | --- | --- | --- |
| Servers | EC2 | VMs | Compute Engine |
| Store files | S3 | Blob | Cloud Storage |
| ML platform | SageMaker | Azure ML | Vertex AI |
| Kubernetes | EKS | AKS | GKE |

**Learn one cloud well; the ideas transfer to the others.**

#### 15. Infrastructure as code: a blueprint

Instead of clicking around a cloud website, you write down the servers, storage and networks you want in a file. A tool builds exactly that, every time. **Terraform** creates cloud resources; **Ansible** sets up software on machines. Both live in Git, so changes are reviewed like code.

```hcl
# main.tf — "I want one storage bucket"
resource "aws_s3_bucket" "models" {
  bucket = "my-team-models"
}
```

#### 16. Orchestration: the conductor of the steps

A pipeline has many steps, and some must wait for others. An **orchestrator** runs each step at the right time, in the right order, retries failures, and shows you what happened. The map of steps with arrows that never loop back is called a **DAG**: *get new data → check data → train model → make report* (retry if it fails).

```python
from airflow.decorators import dag, task

@dag(schedule="0 6 * * *")            # every day at 6:00
def house_prices():
    @task
    def get_data():
        ...
    @task
    def check(data):
        ...
    @task
    def train(data):
        ...
    train(check(get_data()))

house_prices()
```

**Airflow** is a general scheduler for any data job. **Kubeflow Pipelines** runs ML steps as containers on Kubernetes.

### Part 4 · Putting the model in front of users

#### 17. Model registry: a labelled shelf

v1 *archived* · v2 *production* (error 4.7%) · v3 *staging* (being tested).

A **model registry** stores every approved model with a version number, who made it, which data it used, its scores, and its stage (testing, production, archived). If v3 misbehaves, you can put v2 back in seconds.

#### 18. Serving: three ways to deliver predictions

| Way | When to use | Example |
| --- | --- | --- |
| **Batch** | Answers can wait hours; many rows at once. | Amazon's sales forecast for every store. |
| **Online (API)** | A person or app is waiting for the answer. | House price shown while the agent types. |
| **Streaming** | Events arrive non-stop and need a quick reaction. | Flagging a suspicious card payment as it happens. |

`serve.py` — a tiny online prediction API:

```python
from fastapi import FastAPI
import joblib

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(rooms: int, area_m2: float):
    price = model.predict([[rooms, area_m2]])[0]
    return {"price": round(price), "model_version": "v2"}
```

#### 19. Releasing safely: don't switch everyone at once

| Strategy | What happens | Why |
| --- | --- | --- |
| **Shadow** | The new model sees real traffic, but its answers are not shown. | Zero risk; good first test. |
| **Canary** | A small group gets the new model first (5% → 25% → 100%), like a canary in a coal mine. | Grow it if nothing goes wrong. |
| **A/B test** | Split users on purpose and measure. | Which model helps the business more? |
| **Blue-green** | Keep two full copies; switch traffic in one move. | Switch back if needed. |
| **Rollback** | Always know how to return to the last good version. | And practise it. |

### Part 5 · Watching the model live

#### 20. Monitoring: the model's health check

**A model can be "up" and still be wrong.** Watch four layers:

| Layer | Question | Example signal |
| --- | --- | --- |
| **System** | Is it running and fast? | Response time, errors, CPU, memory. |
| **Data** | Does today's input look like the training data? | Missing values, new categories, shifted averages. |
| **Model** | Are the predictions still good? | Accuracy once the real answers come in. |
| **Business** | Is it actually helping? | Sales, saved time, customer complaints. |

**Prometheus** collects numbers like response time every few seconds. **Grafana** draws them as dashboards and sends alerts — the live board for *house-price model v2* shows response time (ms), errors per minute, accuracy (when real answers arrive), and input data: training vs today.

#### 21. Drift: when the world changes

*Training day — mostly young customers. Six months later — mostly older customers.*

- **Data drift:** the inputs change. The model learned from young customers, but now most are older.
- **Concept drift:** the rule itself changes. The same house is worth more after a new train station opens nearby.
- **Training-serving skew:** the live app prepares data differently from the training code — **a bug, not a change in the world.**

> **What to do:** drift is a warning light, not an automatic "retrain now". First find out *why*, then fix the data, retrain, or change the model.

### Part 6 · Special topics

#### 22. Edge AI: the model lives on the device

Some models run on phones, cameras, cars or factory sensors instead of a server. They must be small, so we shrink them:

- **Quantize:** store numbers with fewer digits (32-bit → 8-bit).
- **Prune:** cut connections that barely matter.
- **Distil:** a small "student" model learns to copy a big "teacher".

Tools: **TensorFlow Lite** (now LiteRT), **PyTorch Mobile** (its newer successor is **ExecuTorch**) and **NVIDIA Jetson** boards for robots and cameras.

#### 23. Explainable AI: "why did it say that?"

People affected by a model deserve a reason. Explainability tools show which inputs pushed a prediction up or down.

- **SHAP:** shares out the prediction among the inputs fairly, like splitting a restaurant bill by what each person ate. *Example: for this sale, the suburb added 4k and the small garden took 2k away.*
- **LIME:** wiggles the inputs a little around one case and fits a simple model to see what matters there. *Example: for this one house, floor area mattered more than the year it was built.*

> **Careful:** an explanation shows what the model *used*, not what truly *causes* the outcome.

#### 24. Security, privacy and fairness

- **Never put passwords in code** — use a secrets manager.
- **Encrypt data** — both at rest and in transit.
- **Least access** — each person and service gets only what it needs.
- **Keep an audit trail** — who touched what, and when.
- **Test fairness** — check error rates across groups, not just overall.

Also scan your containers and libraries for known security holes, and protect the model from tricky inputs or poisoned training data.

### Part 7 · One story from start to finish

#### 25. Asha ships a house-price model

<MlopsAshaFlow />

*Git + DVC → MLflow → Docker → GitHub Actions → Canary release → Grafana → retrain next month with new sales*

1. **Plan.** Asha agrees with the sales team: "predict a fair price; error under 5%."
2. **Version.** She puts her code in Git and the sales data in DVC as `data v1`.
3. **Experiment.** She tries three models; MLflow records each run. Boosting wins with 4.7% error.
4. **Register.** The winner is saved in the model registry as v1, staging.
5. **Package.** She wraps it in a small FastAPI app and a Docker image.
6. **Automate.** GitHub Actions now tests code, checks data, trains, and blocks any model worse than 5%.
7. **Release.** 5% of agents get the model first (canary). After a week with no problems, everyone does.
8. **Monitor.** Grafana shows speed and errors; a weekly job compares predictions with real sale prices.
9. **Improve.** Prices rise in one city, error climbs to 6%, an alert fires. She adds the new sales (`data v2`), retrains, and the pipeline releases v2.

**Notice: Asha only wrote the model once. Everything else is the system that keeps it honest.**

### Part 8 · Grow step by step

#### 26. The MLOps staircase

<MlopsStaircase />

| Level | What it means |
| --- | --- |
| **Level 0 — manual** | Notebooks; copy files by hand. |
| **Level 1 — automated training** | A pipeline retrains with fresh data. |
| **Level 2 — automated CI/CD** | Tests, deploys, monitors and retrains on its own. |

Most teams start at level 0, and that is fine. **Climb one step when the pain of doing things by hand becomes bigger than the effort of automating them.**

#### 27. Which tool for which job?

| Job | Start with | Bigger teams also use |
| --- | --- | --- |
| Save code history | Git + GitHub | GitLab (hosting and CI) |
| Version data and models | DVC | Table versions (e.g. LakeFS) |
| Track experiments | MLflow | Weights & Biases, Neptune |
| Automate tests and releases | GitHub Actions | GitLab CI, Jenkins, CML |
| Package the model | Docker | — |
| Run many copies | A managed cloud endpoint | Kubernetes |
| Schedule pipelines | A single scheduled job | Airflow, Kubeflow |
| Big or live data | SQL + Spark | Databricks, Kafka, Flink |
| Create cloud resources | Terraform | Ansible (for machine setup) |
| Monitor | Prometheus + Grafana (metrics + simple checks) | The cloud's own tools |
| Explain predictions | SHAP | LIME |
| Run on devices | TensorFlow Lite | PyTorch Mobile / ExecuTorch, Jetson |

#### 28. Each tool, with a picture

*The pictures above show how the pieces fit. This is every name on the MLOps tool map. Each card keeps the job in one sentence, then adds one example. Start at the top; the later tools can wait.*

<MlopsToolPictures />

#### 29. Common beginner mistakes

- ✗ Learning Kubernetes before you can package one model.
- ✗ Not saving which data trained the model.
- ✗ Testing on data the model already saw.
- ✗ Cleaning data one way in training and another way in the app.
- ✗ Only watching "is the server up?" and not "are the answers right?".
- ✗ Retraining automatically without checking the new model is better.
- ✗ Putting passwords or API keys in Git.

#### 30. Your learning path

<MlopsLearningPath />

<LoopStrip steps={['Python + SQL', 'Bash', 'Git', 'Docker', 'CI/CD', 'Cloud', 'Pipelines', 'Monitoring']} />

1. Train a small scikit-learn model and save it.
2. Serve it with a FastAPI `/predict` endpoint.
3. Put the code in Git and the data in DVC.
4. Track runs with MLflow.
5. Build a Docker image.
6. Add a GitHub Actions pipeline with a model-quality gate.
7. Deploy to one cloud and add a simple dashboard.
8. Later: Airflow, Kubernetes, Terraform, drift checks.

#### 31. Pocket glossary

| Term | Meaning |
| --- | --- |
| Pipeline | Steps that run automatically, one after another. |
| Artifact | Any file a step produces: dataset, model, report, image. |
| Registry | A labelled shelf of model versions and their stages. |
| Feature store | Shared, ready-made model inputs for training and serving. |
| Data drift | Live inputs no longer look like the training data. |
| Concept drift | The link between inputs and the right answer changes. |
| Skew | Training and live code prepare data differently. |
| Canary | Release to a small group first, then grow. |
| Rollback | Go back to the last good version quickly. |
| SLO | A promise target, e.g. "99% of answers in under 200 ms". |
| Lineage | The family tree of data, code and models. |
| Reproducible | Anyone can rebuild the same model from the records. |

> **Final idea:** a model is a living thing. MLOps feeds it good data, checks its health, and lets you replace it safely when the world changes.

*Check yourself for this chapter is at the end of the book, with the revision notes and the practice questions.*
