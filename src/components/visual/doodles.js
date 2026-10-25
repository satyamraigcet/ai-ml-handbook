import React from 'react';

function Svg({ children, w = 280, h = 108 }) {
  return (
    <svg
      className="doodle"
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {children}
    </svg>
  );
}

function T({ x, y, children, size = 11, anchor = 'start', weight = 500 }) {
  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      stroke="none"
      fontSize={size}
      textAnchor={anchor}
      fontFamily="Patrick Hand, Caveat, cursive"
      fontWeight={weight}>
      {children}
    </text>
  );
}

export const doodles = {
  python: (
    <Svg>
      <rect x="36" y="18" width="208" height="72" rx="8" />
      <circle cx="52" cy="34" r="3.2" />
      <circle cx="64" cy="34" r="3.2" />
      <circle cx="76" cy="34" r="3.2" />
      <T x="52" y="58">train.py</T>
      <T x="52" y="76" size="10">
        miss by 18k
      </T>
    </Svg>
  ),
  bash: (
    <Svg>
      <rect x="28" y="28" width="168" height="36" rx="6" />
      <T x="40" y="51" size="11">
        $ grep ERROR app.log
      </T>
      <path d="M204 46h24" />
      <circle cx="244" cy="46" r="16" />
      <T x="244" y="50" anchor="middle" weight="700">
        42
      </T>
    </Svg>
  ),
  sql: (
    <Svg>
      <rect x="58" y="16" width="164" height="76" rx="6" />
      <path d="M58 40h164" />
      <T x="72" y="34" size="10">
        city
      </T>
      <T x="150" y="34" size="10">
        avg price
      </T>
      <T x="72" y="60">Pune</T>
      <T x="150" y="60">920k</T>
      <T x="72" y="80">Kochi</T>
      <T x="150" y="80">390k</T>
    </Svg>
  ),
  go: (
    <Svg>
      <rect x="48" y="28" width="88" height="52" rx="8" />
      <T x="92" y="58" anchor="middle" weight="700">
        API
      </T>
      <path d="M148 54h36" markerEnd="url(#a)" />
      <path d="M148 54l28 0" />
      <polygon points="184,50 196,54 184,58" fill="currentColor" stroke="none" />
      <T x="206" y="48">fast</T>
      <T x="206" y="66">price</T>
    </Svg>
  ),
  git: (
    <Svg>
      <circle cx="50" cy="54" r="7" />
      <circle cx="140" cy="54" r="7" />
      <circle cx="210" cy="28" r="7" />
      <path d="M57 54h76" />
      <path d="M140 54c28-2 42-18 63-22" />
      <T x="40" y="80" size="10">
        main
      </T>
      <T x="198" y="18" size="10">
        try idea
      </T>
    </Svg>
  ),
  github: (
    <Svg>
      <rect x="48" y="22" width="184" height="64" rx="8" />
      <T x="64" y="46" weight="700">
        pull request
      </T>
      <T x="64" y="68" size="10">
        split looks right
      </T>
      <rect x="168" y="54" width="48" height="18" rx="4" />
      <T x="192" y="67" size="10" anchor="middle">
        review
      </T>
    </Svg>
  ),
  dvc: (
    <Svg>
      <rect x="36" y="34" width="72" height="40" rx="6" />
      <T x="72" y="58" anchor="middle" weight="700">
        dvc
      </T>
      <path d="M116 54h40" />
      <polygon points="156,50 168,54 156,58" fill="currentColor" stroke="none" />
      <rect x="176" y="28" width="72" height="52" rx="6" />
      <T x="212" y="50" anchor="middle">
        houses
      </T>
      <T x="212" y="66" anchor="middle" size="10">
        2 GB
      </T>
    </Svg>
  ),
  actions: (
    <Svg>
      <T x="36" y="36">push</T>
      <path d="M70 30h48" />
      <polygon points="118,26 130,30 118,34" fill="currentColor" stroke="none" />
      <T x="140" y="36">tests run</T>
      <circle cx="228" cy="54" r="18" />
      <path d="M220 54l6 6 12-14" />
    </Svg>
  ),
  gitlab: (
    <Svg>
      <rect x="24" y="28" width="56" height="52" rx="6" />
      <T x="52" y="58" anchor="middle" size="10">
        repo
      </T>
      <rect x="92" y="28" width="56" height="52" rx="6" />
      <T x="120" y="58" anchor="middle" size="10">
        build
      </T>
      <rect x="160" y="28" width="48" height="52" rx="6" />
      <T x="184" y="58" anchor="middle" size="10">
        test
      </T>
      <rect x="220" y="28" width="40" height="52" rx="6" />
      <T x="240" y="58" anchor="middle" size="10">
        ship
      </T>
    </Svg>
  ),
  jenkins: (
    <Svg>
      <rect x="40" y="22" width="200" height="64" rx="8" />
      <T x="56" y="48">nightly job</T>
      <T x="56" y="70" size="10">
        train model
      </T>
      <circle cx="208" cy="54" r="14" />
      <path d="M208 46v8h8" />
    </Svg>
  ),
  cml: (
    <Svg>
      <rect x="32" y="22" width="216" height="64" rx="8" />
      <T x="48" y="46">pull request</T>
      <T x="48" y="68" size="10">
        error 18.4 was 21.0
      </T>
    </Svg>
  ),
  maths: (
    <Svg>
      <path d="M40 78c20-48 40-48 60 0s40 48 60 0 40-48 60 0" />
      <path d="M28 78h224" />
      <T x="140" y="28" anchor="middle">
        mean 420k
      </T>
    </Svg>
  ),
  ml: (
    <Svg>
      <T x="28" y="40">past</T>
      <path d="M64 34h40" />
      <polygon points="104,30 116,34 104,38" fill="currentColor" stroke="none" />
      <rect x="124" y="22" width="48" height="28" rx="6" />
      <T x="148" y="40" anchor="middle">
        fit
      </T>
      <path d="M180 34h28" />
      <polygon points="208,30 220,34 208,38" fill="currentColor" stroke="none" />
      <T x="228" y="40">new</T>
      <T x="228" y="56">price</T>
    </Svg>
  ),
  dl: (
    <Svg>
      <rect x="28" y="28" width="52" height="52" rx="4" />
      <T x="54" y="58" anchor="middle" size="10">
        photo
      </T>
      <path d="M88 54h16" />
      <rect x="112" y="18" width="28" height="72" rx="3" />
      <rect x="148" y="28" width="22" height="52" rx="3" />
      <rect x="178" y="36" width="18" height="36" rx="3" />
      <path d="M204 54h12" />
      <T x="222" y="58">kitchen</T>
    </Svg>
  ),
  eval: (
    <Svg>
      <rect x="28" y="22" width="100" height="64" rx="6" />
      <T x="78" y="48" anchor="middle">
        seen
      </T>
      <rect x="152" y="22" width="100" height="64" rx="6" />
      <T x="202" y="44" anchor="middle">
        hold out
      </T>
      <T x="202" y="62" anchor="middle" size="10">
        200 / miss 18k
      </T>
    </Svg>
  ),
  sklearn: (
    <Svg>
      <T x="36" y="36">fit(X, y)</T>
      <circle cx="48" cy="72" r="3" fill="currentColor" stroke="none" />
      <circle cx="88" cy="58" r="3" fill="currentColor" stroke="none" />
      <circle cx="128" cy="66" r="3" fill="currentColor" stroke="none" />
      <circle cx="176" cy="44" r="3" fill="currentColor" stroke="none" />
      <circle cx="220" cy="36" r="3" fill="currentColor" stroke="none" />
      <path d="M36 84 L236 28" />
    </Svg>
  ),
  pytorch: (
    <Svg>
      <circle cx="70" cy="36" r="10" />
      <circle cx="140" cy="36" r="10" />
      <circle cx="210" cy="36" r="10" />
      <circle cx="105" cy="78" r="10" />
      <circle cx="175" cy="78" r="10" />
      <path d="M80 36h50M150 36h50M78 44l19 26M132 44l-19 26M150 44l17 26M202 44l-19 26" />
      <T x="140" y="18" anchor="middle" size="10">
        change one
      </T>
    </Svg>
  ),
  tensorflow: (
    <Svg>
      <rect x="28" y="36" width="56" height="36" rx="6" />
      <T x="56" y="58" anchor="middle" size="10">
        GPU
      </T>
      <rect x="112" y="36" width="56" height="36" rx="6" />
      <T x="140" y="58" anchor="middle" size="10">
        GPU
      </T>
      <path d="M84 54h28M168 54h20" />
      <T x="196" y="48">big</T>
      <T x="196" y="66">model</T>
    </Svg>
  ),
  mlflow: (
    <Svg>
      <rect x="56" y="22" width="168" height="64" rx="8" />
      <T x="140" y="50" anchor="middle" weight="700">
        run 14
      </T>
      <T x="140" y="70" anchor="middle">
        18.4
      </T>
    </Svg>
  ),
  cloud: (
    <Svg>
      <rect x="24" y="32" width="64" height="40" rx="6" />
      <T x="56" y="56" anchor="middle" size="10">
        AWS
      </T>
      <rect x="100" y="32" width="64" height="40" rx="6" />
      <T x="132" y="56" anchor="middle" size="10">
        Azure
      </T>
      <rect x="176" y="32" width="64" height="40" rx="6" />
      <T x="208" y="56" anchor="middle" size="10">
        GCP
      </T>
      <T x="140" y="92" anchor="middle" size="10">
        2 hours, then off
      </T>
    </Svg>
  ),
  cloudml: (
    <Svg>
      <T x="24" y="54">script</T>
      <path d="M64 48h28" />
      <T x="104" y="54">train</T>
      <path d="M140 48h28" />
      <T x="180" y="54">live</T>
    </Svg>
  ),
  docker: (
    <Svg>
      <rect x="70" y="22" width="140" height="64" rx="10" />
      <T x="140" y="48" anchor="middle">
        Python + model
      </T>
      <T x="140" y="70" anchor="middle" size="10">
        laptop = server
      </T>
    </Svg>
  ),
  k8s: (
    <Svg>
      <rect x="28" y="30" width="52" height="40" rx="6" />
      <rect x="92" y="30" width="52" height="40" rx="6" />
      <rect x="156" y="30" width="52" height="40" rx="6" />
      <T x="54" y="54" anchor="middle" size="10">
        copy
      </T>
      <T x="118" y="54" anchor="middle" size="10">
        copy
      </T>
      <T x="182" y="54" anchor="middle" size="10">
        copy
      </T>
      <T x="236" y="40" size="10">
        restart
      </T>
      <T x="236" y="58" size="10">
        + one
      </T>
    </Svg>
  ),
  pipelines: (
    <Svg>
      <T x="24" y="54">pull</T>
      <path d="M52 48h20" />
      <T x="80" y="54">clean</T>
      <path d="M116 48h20" />
      <T x="144" y="54">save</T>
      <T x="200" y="54" size="10">
        every night
      </T>
    </Svg>
  ),
  lake: (
    <Svg>
      <rect x="40" y="22" width="60" height="64" rx="6" />
      <T x="70" y="58" anchor="middle">
        csv
      </T>
      <rect x="110" y="22" width="60" height="64" rx="6" />
      <T x="140" y="58" anchor="middle">
        json
      </T>
      <rect x="180" y="22" width="60" height="64" rx="6" />
      <T x="210" y="58" anchor="middle">
        raw
      </T>
    </Svg>
  ),
  warehouse: (
    <Svg>
      <rect x="48" y="22" width="184" height="64" rx="6" />
      <T x="64" y="46">sales</T>
      <T x="64" y="68" size="10">
        by city · tidy rows
      </T>
    </Svg>
  ),
  ingestion: (
    <Svg>
      <T x="24" y="40">DB / API / live</T>
      <path d="M130 34h24" />
      <rect x="160" y="22" width="44" height="24" rx="6" />
      <T x="182" y="38" anchor="middle" size="10">
        ok?
      </T>
      <path d="M182 46v14" />
      <T x="168" y="78">store</T>
    </Svg>
  ),
  spark: (
    <Svg>
      <rect x="28" y="40" width="48" height="28" rx="4" />
      <T x="52" y="58" anchor="middle" size="10">
        job
      </T>
      <path d="M76 48h20" />
      <rect x="104" y="18" width="40" height="24" rx="4" />
      <rect x="104" y="48" width="40" height="24" rx="4" />
      <rect x="104" y="78" width="40" height="18" rx="4" />
      <rect x="160" y="18" width="40" height="24" rx="4" />
      <rect x="160" y="48" width="40" height="24" rx="4" />
      <rect x="160" y="78" width="40" height="18" rx="4" />
    </Svg>
  ),
  kafka: (
    <Svg>
      <rect x="90" y="18" width="100" height="72" rx="6" />
      <path d="M40 36h50M40 72h50M190 36h40M190 72h40" />
      <T x="140" y="48" anchor="middle">
        in / out
      </T>
      <T x="140" y="68" anchor="middle" size="10">
        live
      </T>
    </Svg>
  ),
  flink: (
    <Svg>
      <T x="40" y="40">now</T>
      <rect x="120" y="28" width="120" height="52" rx="8" />
      <T x="180" y="58" anchor="middle">
        last 5 min
      </T>
    </Svg>
  ),
  lineage: (
    <Svg>
      <T x="24" y="54">CRM</T>
      <path d="M56 48h24" />
      <T x="88" y="54">rename</T>
      <path d="M140 48h24" />
      <T x="172" y="40">join</T>
      <T x="172" y="58">model</T>
    </Svg>
  ),
  terraform: (
    <Svg>
      <rect x="20" y="36" width="44" height="32" rx="4" />
      <T x="42" y="56" anchor="middle" size="9">
        file
      </T>
      <rect x="72" y="36" width="52" height="32" rx="4" />
      <T x="98" y="56" anchor="middle" size="9">
        bucket
      </T>
      <rect x="132" y="36" width="44" height="32" rx="4" />
      <T x="154" y="56" anchor="middle" size="9">
        GPU
      </T>
      <rect x="184" y="36" width="72" height="32" rx="4" />
      <T x="220" y="56" anchor="middle" size="9">
        endpoint
      </T>
    </Svg>
  ),
  ansible: (
    <Svg>
      <rect x="28" y="28" width="72" height="52" rx="6" />
      <T x="64" y="58" anchor="middle">
        YAML
      </T>
      <path d="M108 54h28" />
      <rect x="144" y="22" width="40" height="28" rx="4" />
      <rect x="192" y="22" width="40" height="28" rx="4" />
      <rect x="144" y="58" width="40" height="28" rx="4" />
      <rect x="192" y="58" width="40" height="28" rx="4" />
    </Svg>
  ),
  airflow: (
    <Svg>
      <T x="20" y="40">clean</T>
      <path d="M56 34h16" />
      <T x="80" y="40">train</T>
      <path d="M116 34h16" />
      <T x="140" y="40">score</T>
      <T x="200" y="40" size="10">
        wait
      </T>
      <T x="200" y="58" size="10">
        then retry
      </T>
    </Svg>
  ),
  kubeflow: (
    <Svg>
      <ellipse cx="140" cy="54" rx="110" ry="42" />
      <T x="70" y="58">train</T>
      <T x="128" y="58">score</T>
      <T x="186" y="58">serve</T>
    </Svg>
  ),
  prometheus: (
    <Svg>
      <path d="M28 70 L70 50 L110 58 L150 30 L200 38 L240 22" />
      <path d="M28 42h220" strokeDasharray="4 4" />
      <T x="200" y="18" size="10">
        2% · alert
      </T>
    </Svg>
  ),
  grafana: (
    <Svg>
      <rect x="36" y="18" width="208" height="72" rx="8" />
      <path d="M56 70 L90 50 L120 58 L160 36 L200 44" />
      <T x="56" y="36" size="10">
        errors
      </T>
    </Svg>
  ),
  mobile: (
    <Svg>
      <circle cx="70" cy="40" r="16" />
      <path d="M62 48c4 8 12 8 16 0" />
      <rect x="160" y="16" width="48" height="76" rx="8" />
      <T x="100" y="90" size="10">
        no signal
      </T>
    </Svg>
  ),
  tflite: (
    <Svg>
      <rect x="70" y="18" width="80" height="56" rx="6" />
      <circle cx="110" cy="46" r="10" />
      <rect x="96" y="74" width="28" height="10" rx="2" />
      <T x="170" y="48">tiny</T>
      <T x="170" y="66">model</T>
    </Svg>
  ),
  jetson: (
    <Svg>
      <circle cx="90" cy="40" r="16" />
      <rect x="74" y="56" width="32" height="28" rx="4" />
      <path d="M74 64h-16M106 64h16" />
      <T x="160" y="54" weight="700">
        stop
      </T>
    </Svg>
  ),
  shap: (
    <Svg>
      <T x="36" y="40">suburb +$4k</T>
      <T x="36" y="62">garden −$2k</T>
      <T x="36" y="84" size="10">
        one sale
      </T>
    </Svg>
  ),
  lime: (
    <Svg>
      <rect x="48" y="28" width="88" height="56" rx="6" />
      <T x="92" y="52" anchor="middle">
        this
      </T>
      <T x="92" y="70" anchor="middle">
        house
      </T>
      <T x="160" y="58">floor area</T>
    </Svg>
  ),
  linear: (
    <Svg>
      <path d="M32 84h216M40 20v72" />
      <circle cx="80" cy="64" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="120" cy="52" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="160" cy="44" r="3.5" fill="currentColor" stroke="none" />
      <circle cx="200" cy="28" r="3.5" fill="currentColor" stroke="none" />
      <path d="M56 76 L228 24" />
    </Svg>
  ),
  logistic: (
    <Svg>
      <path d="M32 84h216M40 20v72" />
      <path d="M48 76 C100 76 110 28 160 28 C210 28 220 28 240 28" />
      <T x="200" y="20" size="10">
        1
      </T>
      <T x="48" y="96" size="10">
        0
      </T>
    </Svg>
  ),
  tree: (
    <Svg>
      <rect x="108" y="8" width="64" height="22" rx="4" />
      <T x="140" y="24" anchor="middle" size="10">
        age?
      </T>
      <path d="M140 30 L80 48M140 30 L200 48" />
      <rect x="48" y="48" width="64" height="22" rx="4" />
      <rect x="168" y="48" width="64" height="22" rx="4" />
      <T x="80" y="64" anchor="middle" size="10">
        income?
      </T>
      <T x="200" y="64" anchor="middle" size="10">
        yes
      </T>
      <path d="M80 70 L50 90M80 70 L110 90" />
    </Svg>
  ),
  forest: (
    <Svg>
      <path d="M50 78 L50 40 L36 56h28L50 40" />
      <path d="M110 82 L110 36 L92 56h36L110 36" />
      <path d="M170 78 L170 40 L156 56h28L170 40" />
      <path d="M226 82 L226 34 L208 54h36L226 34" />
      <path d="M32 82h220" />
    </Svg>
  ),
  knn: (
    <Svg>
      <circle cx="140" cy="54" r="18" />
      <circle cx="140" cy="54" r="40" />
      <circle cx="140" cy="54" r="4" fill="currentColor" stroke="none" />
      <circle cx="128" cy="44" r="3" />
      <circle cx="156" cy="48" r="3" />
      <circle cx="132" cy="64" r="3" />
      <circle cx="88" cy="36" r="3" />
      <circle cx="190" cy="70" r="3" />
      <T x="188" y="28" size="10">
        k=3
      </T>
    </Svg>
  ),
  svm: (
    <Svg>
      <path d="M48 80 L232 24" />
      <path d="M56 92 L240 36" strokeDasharray="4 4" />
      <path d="M40 68 L224 12" strokeDasharray="4 4" />
      <circle cx="88" cy="36" r="4" />
      <circle cx="70" cy="52" r="4" />
      <circle cx="196" cy="70" r="4" />
      <circle cx="210" cy="54" r="4" />
    </Svg>
  ),
  boosting: (
    <Svg>
      <rect x="24" y="40" width="56" height="36" rx="4" />
      <rect x="100" y="28" width="56" height="48" rx="4" />
      <rect x="176" y="16" width="72" height="64" rx="4" />
      <T x="52" y="62" anchor="middle" size="10">
        tree 1
      </T>
      <T x="128" y="56" anchor="middle" size="10">
        +fix
      </T>
      <T x="212" y="52" anchor="middle" size="10">
        strong
      </T>
    </Svg>
  ),
  kmeans: (
    <Svg>
      <circle cx="90" cy="40" r="4" />
      <circle cx="70" cy="58" r="4" />
      <circle cx="100" cy="70" r="4" />
      <circle cx="88" cy="54" r="6" />
      <circle cx="190" cy="36" r="4" />
      <circle cx="210" cy="54" r="4" />
      <circle cx="186" cy="68" r="4" />
      <circle cx="196" cy="52" r="6" />
    </Svg>
  ),
  doctor: (
    <Svg w={120} h={72}>
      <path d="M48 48c0-10 8-18 18-18s18 8 18 18" />
      <path d="M66 30v-8M58 26h16" />
      <path d="M40 52c8 10 28 10 36 0" />
      <circle cx="58" cy="44" r="3" />
      <circle cx="74" cy="44" r="3" />
    </Svg>
  ),
  shop: (
    <Svg w={120} h={72}>
      <path d="M42 28h36l4 28H38z" />
      <path d="M50 28v-8c0-6 4-10 10-10s10 4 10 10v8" />
      <path d="M48 42h24" />
    </Svg>
  ),
  car: (
    <Svg w={120} h={72}>
      <path d="M30 46h60l-6-14H40z" />
      <path d="M44 32l6-8h20l6 8" />
      <circle cx="46" cy="48" r="5" />
      <circle cx="74" cy="48" r="5" />
      <path d="M54 36h14" />
    </Svg>
  ),
  practise: (
    <Svg w={120} h={72}>
      <path d="M36 52V28h20l8 8v16z" />
      <path d="M56 28v8h8" />
      <path d="M44 40h12M44 46h10" />
      <path d="M78 28l8 24M86 28l-8 24M76 40h12" />
    </Svg>
  ),
  healthcare: (
    <Svg w={120} h={72}>
      <path d="M60 54c-16-12-22-20-22-28a12 12 0 0 1 22-6 12 12 0 0 1 22 6c0 8-6 16-22 28z" />
      <path d="M60 28v16M52 36h16" />
    </Svg>
  ),
  finance: (
    <Svg w={120} h={72}>
      <circle cx="60" cy="36" r="18" />
      <T x="60" y="42" size="18" anchor="middle" weight="700">
        ₹
      </T>
    </Svg>
  ),
  ecommerce: (
    <Svg w={120} h={72}>
      <path d="M40 28h28l8 16v12H48z" />
      <path d="M48 28v-6c0-5 4-8 8-8" />
      <path d="M52 36h20" />
      <circle cx="54" cy="58" r="3" />
      <circle cx="72" cy="58" r="3" />
    </Svg>
  ),
  transport: (
    <Svg w={120} h={72}>
      <path d="M28 48h64" />
      <path d="M36 48l10-16h28l10 16" />
      <path d="M48 36v-8h16" />
      <circle cx="48" cy="48" r="4" />
      <circle cx="72" cy="48" r="4" />
    </Svg>
  ),
  education: (
    <Svg w={120} h={72}>
      <path d="M40 44l20-12 20 12-20 12z" />
      <path d="M48 48v10c8 4 16 4 24 0V48" />
      <path d="M80 44v14" />
    </Svg>
  ),
  cyber: (
    <Svg w={120} h={72}>
      <circle cx="60" cy="36" r="16" />
      <circle cx="60" cy="36" r="6" />
      <path d="M60 20v4M60 48v4M44 36h4M72 36h4M48 24l3 3M69 45l3 3M72 24l-3 3M48 48l3-3" />
    </Svg>
  ),
  agri: (
    <Svg w={120} h={72}>
      <path d="M60 54V28" />
      <path d="M60 40c-12-2-18-12-14-20 10 2 16 10 14 20z" />
      <path d="M60 36c12-2 18-12 14-20-10 2-16 10-14 20z" />
      <path d="M40 54h40" />
    </Svg>
  ),
  entertainment: (
    <Svg w={120} h={72}>
      <circle cx="60" cy="36" r="18" />
      <path d="M54 28l16 8-16 8z" />
    </Svg>
  ),
  languages: (
    <Svg w={120} h={72}>
      <path d="M30 30h60M30 42h48M30 54h54" />
    </Svg>
  ),
  libraries: (
    <Svg w={120} h={72}>
      <circle cx="60" cy="36" r="16" />
      <path d="M60 20v32M44 36h32" />
    </Svg>
  ),
  platforms: (
    <Svg w={120} h={72}>
      <path d="M34 44c0-12 10-20 26-20s26 8 26 20c8 0 12 6 12 12H22c0-6 4-12 12-12z" />
    </Svg>
  ),
};

export function Doodle({ name }) {
  return doodles[name] || null;
}
