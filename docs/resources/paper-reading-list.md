# 必读论文清单

> **共 150+ 篇论文**，按推荐阅读时间线排列，覆盖深度学习基础、AI Safety、Mechanistic Interpretability、对齐训练、评估与 Red-Teaming 全部方向。
>
> **阅读深度：** 🟢 精读（含代码复现）| 🟡 细读（理解方法和实验）| 🔵 泛读（了解思路和结论）
>
> ⭐ = 必读，不可跳过

---

## 第 1-2 月：深度学习基石

> 目标：理解现代深度学习的核心思想和数学基础

### 经典架构

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 1 | ⭐ ImageNet Classification with Deep CNNs (AlexNet) | Krizhevsky et al. | 2012 | 🔵 | [NeurIPS](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html) |
| 2 | ⭐ Deep Residual Learning (ResNet) | He et al. | 2015 | 🟡 | [arXiv](https://arxiv.org/abs/1512.03385) |
| 3 | Sequence to Sequence Learning | Sutskever et al. | 2014 | 🔵 | [arXiv](https://arxiv.org/abs/1409.3215) |
| 4 | Neural Machine Translation by Jointly Learning to Align (Attention 起源) | Bahdanau et al. | 2014 | 🟡 | [arXiv](https://arxiv.org/abs/1409.0473) |
| 5 | Generative Adversarial Nets (GAN) | Goodfellow et al. | 2014 | 🔵 | [arXiv](https://arxiv.org/abs/1406.2661) |
| 6 | Auto-Encoding Variational Bayes (VAE) | Kingma & Welling | 2013 | 🔵 | [arXiv](https://arxiv.org/abs/1312.6114) |

### 训练技术

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 7 | ⭐ Adam: A Method for Stochastic Optimization | 标准优化器 | 🟡 | [arXiv](https://arxiv.org/abs/1412.6980) |
| 8 | Batch Normalization | 加速训练 | 🟡 | [arXiv](https://arxiv.org/abs/1502.03167) |
| 9 | Dropout: A Simple Way to Prevent Overfitting | 正则化 | 🔵 | [JMLR](https://jmlr.org/papers/v15/srivastava14a.html) |
| 10 | Layer Normalization | Transformer 归一化 | 🔵 | [arXiv](https://arxiv.org/abs/1607.06450) |
| 11 | Understanding the Difficulty of Training Deep FFNs (Xavier Init) | 初始化理论 | 🔵 | [AISTATS](https://proceedings.mlr.press/v9/glorot10a.html) |
| 12 | Decoupled Weight Decay Regularization (AdamW) | 现代优化器 | 🔵 | [arXiv](https://arxiv.org/abs/1711.05101) |

<Checklist
  id="papers-m1-2"
  title="第 1-2 月进度"
  :items="[
    'AlexNet — CNN 历史突破',
    'ResNet — 残差连接',
    'Seq2Seq — 编码器-解码器',
    'Bahdanau Attention — 注意力起源',
    'Adam — 自适应学习率',
    'Batch Norm + Layer Norm — 归一化'
  ]"
/>

---

## 第 3-4 月：Transformer 革命

> 目标：深度理解 Transformer 及其衍生模型

### 核心 Transformer

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 13 | ⭐ Attention Is All You Need | Vaswani et al. | 2017 | 🟢 | [arXiv](https://arxiv.org/abs/1706.03762) |
| 14 | ⭐ BERT: Pre-training of Deep Bidirectional Transformers | Devlin et al. | 2018 | 🟡 | [arXiv](https://arxiv.org/abs/1810.04805) |
| 15 | ⭐ Language Models are Unsupervised Multitask Learners (GPT-2) | Radford et al. | 2019 | 🟡 | [OpenAI](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) |
| 16 | ⭐ Language Models are Few-Shot Learners (GPT-3) | Brown et al. | 2020 | 🟡 | [arXiv](https://arxiv.org/abs/2005.14165) |
| 17 | An Image is Worth 16x16 Words (ViT) | Dosovitskiy et al. | 2020 | 🔵 | [arXiv](https://arxiv.org/abs/2010.11929) |

### Scaling 理论

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 18 | ⭐ Scaling Laws for Neural Language Models | Kaplan et al. | 2020 | 🟢 | [arXiv](https://arxiv.org/abs/2001.08361) |
| 19 | ⭐ Training Compute-Optimal LLMs (Chinchilla) | Hoffmann et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2203.15556) |
| 20 | Emergent Abilities of Large Language Models | Wei et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2206.07682) |
| 21 | Are Emergent Abilities a Mirage? | Schaeffer et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2304.15004) |

### 现代架构

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 22 | LLaMA: Open and Efficient Foundation LMs | Meta 开源标杆 | 🔵 | [arXiv](https://arxiv.org/abs/2302.13971) |
| 23 | Llama 2: Open Foundation and Fine-Tuned Chat Models | 开源 + Safety | 🔵 | [arXiv](https://arxiv.org/abs/2307.09288) |
| 24 | Mistral 7B | 高效开源模型 | 🔵 | [arXiv](https://arxiv.org/abs/2310.06825) |
| 25 | FlashAttention: Fast and Memory-Efficient Attention | IO-aware优化 | 🔵 | [arXiv](https://arxiv.org/abs/2205.14135) |
| 26 | FlashAttention-2 | 改进版本 | 🔵 | [arXiv](https://arxiv.org/abs/2307.08691) |
| 27 | RoFormer: Rotary Position Embedding | RoPE | 🔵 | [arXiv](https://arxiv.org/abs/2104.09864) |
| 28 | GPT-4 Technical Report | 理解能力边界 | 🔵 | [arXiv](https://arxiv.org/abs/2303.08774) |

<Checklist
  id="papers-m3-4"
  title="第 3-4 月进度"
  :items="[
    'Attention Is All You Need — 精读+代码复现',
    'BERT — 双向预训练',
    'GPT-2/GPT-3 — 自回归 + in-context learning',
    'Scaling Laws + Chinchilla — 理解 power law',
    'Emergent Abilities 争论 — 两篇对读'
  ]"
/>

---

## 第 5-6 月：AI Safety 基础

> 目标：理解 AI Safety 的问题定义和研究动机

### Safety 综述与框架

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 29 | ⭐ Concrete Problems in AI Safety | Amodei et al. | 2016 | 🟢 | [arXiv](https://arxiv.org/abs/1606.06565) |
| 30 | ⭐ Unsolved Problems in ML Safety | Hendrycks et al. | 2021 | 🟡 | [arXiv](https://arxiv.org/abs/2109.13916) |
| 31 | X-Risk Analysis for AI Research | Hendrycks et al. | 2022 | 🔵 | [arXiv](https://arxiv.org/abs/2206.05862) |
| 32 | The Alignment Problem from a Deep Learning Perspective | Ngo et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2209.00626) |
| 33 | ⭐ AI Alignment: A Comprehensive Survey | Ji et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2310.19852) |
| 34 | Managing AI Risks in an Era of Rapid Progress | Bengio et al. | 2023 | 🔵 | [arXiv](https://arxiv.org/abs/2310.17688) |

### RLHF 与对齐训练

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 35 | Learning to Summarize from Human Feedback | Stiennon et al. | 2020 | 🟡 | [arXiv](https://arxiv.org/abs/2009.01325) |
| 36 | ⭐ Training Language Models to Follow Instructions (InstructGPT) | Ouyang et al. | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2203.02155) |
| 37 | ⭐ Training a Helpful and Harmless Assistant | Bai et al. (Anthropic) | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2204.05862) |
| 38 | ⭐ Constitutional AI: Harmlessness from AI Feedback | Bai et al. (Anthropic) | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2212.08073) |
| 39 | ⭐ Scalable Oversight / Supervising Strong Learners | Bowman et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2211.03540) |
| 40 | ⭐ Direct Preference Optimization (DPO) | Rafailov et al. | 2023 | 🟢 | [arXiv](https://arxiv.org/abs/2305.18290) |
| 41 | RLAIF: Scaling RL from Human Feedback with AI Feedback | Lee et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2309.00267) |
| 42 | KTO: Model Alignment as Prospect Theoretic Optimization | Ethayarajh et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2402.01306) |
| 43 | ORPO: Monolithic Preference Optimization | Hong et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2403.07691) |
| 44 | SimPO: Simple Preference Optimization | Meng et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2405.14734) |
| 45 | Weak-to-Strong Generalization | Burns et al. (OpenAI) | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2312.09390) |

<Checklist
  id="papers-m5-6"
  title="第 5-6 月进度"
  :items="[
    'Concrete Problems in AI Safety — 5大问题分类',
    'AI Alignment Survey — 全面了解对齐方向',
    'InstructGPT — RLHF 标准实现',
    'Constitutional AI — Anthropic 核心方法',
    'DPO — 直接偏好优化',
    'Weak-to-Strong — 可扩展监督'
  ]"
/>

---

## 第 7-9 月：Mechanistic Interpretability 核心

> 目标：掌握 Mech Interp 核心概念和技术。**严格按顺序读。**

### Circuits 奠基论文

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 46 | ⭐ Zoom In: An Introduction to Circuits | Olah et al. | 2020 | 🟢 | [Distill](https://distill.pub/2020/circuits/zoom-in/) |
| 47 | ⭐ A Mathematical Framework for Transformer Circuits | Elhage et al. (Anthropic) | 2021 | 🟢 | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| 48 | ⭐ In-context Learning and Induction Heads | Olsson et al. (Anthropic) | 2022 | 🟢 | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| 49 | ⭐ Interpretability in the Wild: IOI Circuit | Wang et al. | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2211.00593) |
| 50 | Softmax Linear Units | Elhage et al. (Anthropic) | 2022 | 🟡 | [链接](https://transformer-circuits.pub/2022/solu/index.html) |

### Superposition 与表征

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 51 | ⭐ Toy Models of Superposition | Elhage et al. (Anthropic) | 2022 | 🟢 | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| 52 | The Linear Representation Hypothesis | Park et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2311.03658) |
| 53 | The Geometry of Truth: Emergent Linear Structure | Marks & Tegmark | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2310.06824) |
| 54 | ⭐ Representation Engineering: A Top-Down Approach | Zou et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2310.01405) |
| 55 | Steering Language Models With Activation Engineering | Turner et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2308.10248) |

### 知识定位与编辑

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 56 | ⭐ Locating and Editing Factual Associations (ROME) | Meng et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2202.05262) |
| 57 | Mass-Editing Memory in a Transformer (MEMIT) | Meng et al. | 2022 | 🔵 | [arXiv](https://arxiv.org/abs/2210.07229) |
| 58 | Discovering Latent Knowledge Without Supervision (CCS) | Burns et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2212.03827) |

### Circuit 发现方法

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 59 | ⭐ Towards Automated Circuit Discovery (ACDC) | Conmy et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2304.14997) |
| 60 | ⭐ Attribution Patching Outperforms Automated Circuit Discovery | Syed et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2310.10348) |
| 61 | Causal Scrubbing: A Method for Rigorously Testing Interpretability | Chan et al. | 2022 | 🔵 | [AF](https://www.alignmentforum.org/posts/JvZjjviFbR37Rxd5i/causal-scrubbing-a-method-for-rigorously-testing) |

<Checklist
  id="papers-m7-9"
  title="第 7-9 月进度"
  :items="[
    'Zoom In: Circuits — 建立 circuits 视角',
    'Mathematical Framework — 精读+TransformerLens 复现',
    'Induction Heads — 精读+Colab',
    'IOI Circuit — 标准 circuit analysis',
    'Toy Models of Superposition — 理解 superposition',
    'Representation Engineering — 理解 activation steering',
    'ROME — 知识编辑',
    'ACDC + Attribution Patching — circuit 发现方法'
  ]"
/>

---

## 第 10-12 月：Sparse Autoencoders 专题

> 目标：深入 SAE 方法论，这是 Anthropic Interp 团队当前最核心的方向

### SAE 核心论文

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 62 | ⭐ Sparse Autoencoders Find Highly Interpretable Features | Cunningham et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2309.08600) |
| 63 | ⭐ Towards Monosemanticity: Decomposing LMs with Dictionary Learning | Bricken et al. (Anthropic) | 2023 | 🟢 | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| 64 | ⭐ Scaling Monosemanticity: Features from Claude 3 Sonnet | Templeton et al. (Anthropic) | 2024 | 🟢 | [链接](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) |
| 65 | ⭐ Scaling and Evaluating Sparse Autoencoders | Gao et al. (Anthropic) | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2406.04093) |
| 66 | Improving Dictionary Learning with Gated SAE | Rajamanoharan et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2404.16014) |
| 67 | ⭐ Sparse Feature Circuits | Marks et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2403.19647) |
| 68 | Gemma Scope: Open SAEs Everywhere | Lieberum et al. (DeepMind) | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2408.05147) |
| 69 | Automatically Interpreting Millions of Features in LLMs | Bills et al. (OpenAI) | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2410.13928) |
| 70 | Not All Language Model Features Are Linear | Engels et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2405.14860) |
| 71 | Transcoders Beat Sparse Autoencoders for Interpretability | Dunefsky et al. | 2025 | 🔵 | [arXiv](https://arxiv.org/abs/2501.18823) |
| 72 | A Survey on Sparse Autoencoders | Bereska et al. | 2025 | 🔵 | [arXiv](https://arxiv.org/abs/2503.05613) |

### 幻觉与 CoT 忠实度

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 73 | ⭐ TruthfulQA: Measuring How Models Mimic Human Falsehoods | Lin et al. | 2021 | 🟡 | [arXiv](https://arxiv.org/abs/2109.07958) |
| 74 | ⭐ Measuring Faithfulness in Chain-of-Thought Reasoning | Lanham et al. (Anthropic) | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2307.13702) |
| 75 | Language Models Don't Always Say What They Think | Turpin et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2305.04388) |
| 76 | ⭐ Reasoning Models Don't Always Say What They Think | Chen et al. (Anthropic) | 2025 | 🟢 | [arXiv](https://arxiv.org/abs/2505.05410) |
| 77 | Chain of Thought Monitorability | Korbak et al. | 2025 | 🟡 | [arXiv](https://arxiv.org/abs/2507.11473) |

<Checklist
  id="papers-m10-12"
  title="第 10-12 月进度"
  :items="[
    'Towards Monosemanticity — SAE 奠基之作',
    'Scaling Monosemanticity — Claude 3 上的 SAE',
    'Sparse Feature Circuits — circuit-level 分析',
    'Gated SAE — 架构改进',
    'Not All Features Are Linear — SAE 局限',
    'TruthfulQA — 诚实度评估',
    'CoT Faithfulness — 推理链忠实度'
  ]"
/>

---

## 第 13-18 月：Safety 评估与 Red-Teaming

> 目标：理解如何评估和检测 LLM 的安全问题

### 评估基准

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 78 | ⭐ MMLU: Measuring Massive Multitask Language Understanding | 知识评估标杆 | 🟡 | [arXiv](https://arxiv.org/abs/2009.03300) |
| 79 | BIG-Bench: Beyond the Imitation Game | 大规模多任务 | 🔵 | [arXiv](https://arxiv.org/abs/2206.04615) |
| 80 | ⭐ HELM: Holistic Evaluation of Language Models | Stanford 综合评估 | 🟡 | [arXiv](https://arxiv.org/abs/2211.09110) |
| 81 | GPQA: A Graduate-Level QA Benchmark | 高难度 QA | 🔵 | [arXiv](https://arxiv.org/abs/2311.12022) |
| 82 | MMLU-Pro | MMLU 升级版 | 🔵 | [arXiv](https://arxiv.org/abs/2406.01574) |
| 83 | SimpleQA | 事实准确性 | 🔵 | [arXiv](https://arxiv.org/abs/2411.07140) |
| 84 | Humanity's Last Exam | 前沿知识测试 | 🔵 | [arXiv](https://arxiv.org/abs/2501.14249) |

### Red-Teaming 与越狱攻击

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 85 | ⭐ Red Teaming Language Models to Reduce Harms | Ganguli et al. (Anthropic) | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2209.07858) |
| 86 | ⭐ Universal and Transferable Adversarial Attacks (GCG) | Zou et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2307.15043) |
| 87 | ⭐ Jailbroken: How Does LLM Safety Training Fail? | Wei et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2307.02483) |
| 88 | HarmBench: A Standardized Evaluation Framework | Mazeika et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2402.04249) |
| 89 | JailbreakBench: An Open Robustness Benchmark | Chao et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2404.01318) |
| 90 | Many-shot Jailbreaking | Anil et al. (Anthropic) | 2024 | 🟡 | [Anthropic](https://www.anthropic.com/research/many-shot-jailbreaking) |

### 欺骗与策略行为

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 91 | ⭐ AI Deception: A Survey of Examples, Risks, and Solutions | Park et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2308.14752) |
| 92 | ⭐ Sleeper Agents: Training Deceptive LLMs | Hubinger et al. (Anthropic) | 2024 | 🟢 | [arXiv](https://arxiv.org/abs/2401.05566) |
| 93 | ⭐ Sycophancy to Subterfuge: Investigating Reward Tampering | Denison et al. (Anthropic) | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2406.10162) |
| 94 | ⭐ Alignment Faking in Large Language Models | Greenblatt et al. (Anthropic) | 2024 | 🟢 | [arXiv](https://arxiv.org/abs/2412.14093) |
| 95 | ⭐ Frontier Models are Capable of In-context Scheming | Meinke et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2412.04984) |
| 96 | Sycophancy Is Not One Thing: Causal Separation | Chalnev et al. | 2025 | 🔵 | [arXiv](https://arxiv.org/abs/2509.21305) |

<Checklist
  id="papers-m13-18"
  title="第 13-18 月进度"
  :items="[
    'MMLU + HELM — 评估基准',
    'Red Teaming (Anthropic) — 红队方法',
    'GCG + Jailbroken — 越狱攻击',
    'Sleeper Agents — 后门持久性（精读）',
    'Alignment Faking — 对齐伪装（精读）',
    'Sycophancy to Subterfuge — 奖励破坏',
    'In-context Scheming — 模型策略行为'
  ]"
/>

---

## 第 19-24 月：前沿研究方向

> 目标：跟踪最新前沿，为自己的研究方向做准备

### Mech Interp 前沿（2024-2025）

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 97 | ⭐ Open Problems in Mechanistic Interpretability | Sharkey et al. | 2025 | 🟢 | [arXiv](https://arxiv.org/abs/2501.16496) |
| 98 | ⭐ Mechanistic Interpretability for AI Safety — A Review | Bereska & Gavves | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2404.14082) |
| 99 | Evaluating SAEs on Targeted Concept Removal | Marks et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2411.07180) |
| 100 | ⭐ Circuit Tracing: Revealing Computational Graphs in LMs | Anthropic | 2025 | 🟢 | [链接](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) |
| 101 | ⭐ On the Biology of a Large Language Model | Anthropic | 2025 | 🟢 | [链接](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) |
| 102 | Emergent Introspective Awareness in LLMs | Anthropic | 2025 | 🟡 | [链接](https://transformer-circuits.pub/2025/introspection/index.html) |
| 103 | Mapping the Mind of a Large Language Model | Anthropic | 2024 | 🟡 | [Anthropic](https://www.anthropic.com/research/mapping-mind-language-model) |
| 104 | Circuit Component Reuse Across Tasks | Merullo et al. | 2023 | 🔵 | [arXiv](https://arxiv.org/abs/2310.08744) |
| 105 | A Practical Review of Mech Interp for Transformer-Based LMs | Rai et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2407.02646) |
| 106 | 200 Concrete Open Problems in Mech Interp | Neel Nanda | 2022 | 🔵 | [AF](https://www.alignmentforum.org/posts/LbrPTJ4fmABEdEnLf/200-concrete-open-problems-in-mechanistic-interpretability) |

### Agent Safety & Tool Use

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 107 | Toolformer: LMs Can Teach Themselves to Use Tools | 工具使用能力 | 🔵 | [arXiv](https://arxiv.org/abs/2302.04761) |
| 108 | ⭐ The Risks of AI Agents | Anthropic Agent 安全 | 🟡 | [Anthropic](https://www.anthropic.com/research/risks-of-ai-agents) |
| 109 | Language Agent Tree Search (LATS) | 搜索增强 Agent | 🔵 | [arXiv](https://arxiv.org/abs/2310.04406) |

### Governance & Responsible Scaling

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 110 | ⭐ Anthropic's Responsible Scaling Policy | RSP 框架 | 🟡 | [Anthropic](https://www.anthropic.com/index/anthropics-responsible-scaling-policy) |
| 111 | ⭐ Recommendations for Technical AI Safety Research | Anthropic 推荐方向 | 🟢 | [Anthropic](https://alignment.anthropic.com/2025/recommended-directions/) |
| 112 | Model Cards for Model Reporting | 文档标准 | 🔵 | [arXiv](https://arxiv.org/abs/1810.03993) |
| 113 | A Safe Harbor for AI Evaluation and Red Teaming | 法律框架 | 🔵 | [arXiv](https://arxiv.org/abs/2403.04893) |
| 114 | Claude 3 Model Card | Anthropic 产品文档 | 🟡 | [Anthropic](https://www.anthropic.com/news/claude-3-family) |

### Multimodal 前沿

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 115 | LLaVA: Large Language and Vision Assistant | 多模态 LLM | 🔵 | [arXiv](https://arxiv.org/abs/2304.08485) |
| 116 | Multimodal Foundation Models Interp Survey | 多模态 Interp | 🔵 | [arXiv](https://arxiv.org/abs/2502.17516) |

<Checklist
  id="papers-m19-24"
  title="第 19-24 月进度"
  :items="[
    'Open Problems in Mech Interp — 精读，选题参考',
    'Circuit Tracing — Anthropic 2025 最新方法',
    'Biology of an LLM — 理解 Claude 内部机制',
    'Introspective Awareness — 模型自我认知',
    'Anthropic RSP — Responsible Scaling',
    'Recommended Research Directions — Anthropic 推荐方向'
  ]"
/>

---

## Anthropic 团队论文完整汇总

> 面试前至少精读 5 篇。以下为 Anthropic 发表或核心参与的论文。

### Interpretability / Circuits

| 论文 | 年份 | 链接 |
|------|------|------|
| Zoom In: An Introduction to Circuits | 2020 | [Distill](https://distill.pub/2020/circuits/zoom-in/) |
| A Mathematical Framework for Transformer Circuits | 2021 | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| In-context Learning and Induction Heads | 2022 | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| Softmax Linear Units | 2022 | [链接](https://transformer-circuits.pub/2022/solu/index.html) |
| Toy Models of Superposition | 2022 | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| Towards Monosemanticity (SAE) | 2023 | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| Scaling Monosemanticity (Claude 3 Sonnet) | 2024 | [链接](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) |
| Scaling and Evaluating SAE | 2024 | [arXiv](https://arxiv.org/abs/2406.04093) |
| Mapping the Mind of a Large Language Model | 2024 | [Anthropic](https://www.anthropic.com/research/mapping-mind-language-model) |
| Circuit Tracing: Revealing Computational Graphs | 2025 | [链接](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) |
| On the Biology of a Large Language Model | 2025 | [链接](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) |
| Emergent Introspective Awareness in LLMs | 2025 | [链接](https://transformer-circuits.pub/2025/introspection/index.html) |

### Alignment / Safety

| 论文 | 年份 | 链接 |
|------|------|------|
| Concrete Problems in AI Safety | 2016 | [arXiv](https://arxiv.org/abs/1606.06565) |
| Scaling Laws for Neural Language Models | 2020 | [arXiv](https://arxiv.org/abs/2001.08361) |
| Training a Helpful and Harmless Assistant | 2022 | [arXiv](https://arxiv.org/abs/2204.05862) |
| Constitutional AI | 2022 | [arXiv](https://arxiv.org/abs/2212.08073) |
| Red Teaming Language Models | 2022 | [arXiv](https://arxiv.org/abs/2209.07858) |
| Measuring Faithfulness in CoT | 2023 | [arXiv](https://arxiv.org/abs/2307.13702) |
| Sleeper Agents | 2024 | [arXiv](https://arxiv.org/abs/2401.05566) |
| Many-shot Jailbreaking | 2024 | [Anthropic](https://www.anthropic.com/research/many-shot-jailbreaking) |
| Sycophancy to Subterfuge | 2024 | [arXiv](https://arxiv.org/abs/2406.10162) |
| Alignment Faking | 2024 | [arXiv](https://arxiv.org/abs/2412.14093) |
| Reasoning Models Don't Always Say What They Think | 2025 | [arXiv](https://arxiv.org/abs/2505.05410) |
| The Risks of AI Agents | 2025 | [Anthropic](https://www.anthropic.com/research/risks-of-ai-agents) |
| Responsible Scaling Policy | 2023 | [Anthropic](https://www.anthropic.com/index/anthropics-responsible-scaling-policy) |
| Recommended Technical Safety Directions | 2025 | [Anthropic](https://alignment.anthropic.com/2025/recommended-directions/) |

---

## 重要资源聚合

| 资源 | 说明 | 链接 |
|------|------|------|
| **transformer-circuits.pub** | Anthropic Interp 团队所有论文 | [链接](https://transformer-circuits.pub/) |
| **Anthropic Research** | Anthropic 全部研究 | [链接](https://www.anthropic.com/research) |
| **Alignment Science Blog** | Anthropic 推荐研究方向 | [链接](https://alignment.anthropic.com/) |
| **Neel Nanda 推荐论文列表 v2** | Mech Interp 最全推荐 | [AF](https://www.alignmentforum.org/posts/NfFST5Mio7BCAQHPA/an-extremely-opinionated-annotated-list-of-my-favourite-1) |
| **200 Concrete Open Problems** | Mech Interp 研究选题 | [AF](https://www.alignmentforum.org/posts/LbrPTJ4fmABEdEnLf/200-concrete-open-problems-in-mechanistic-interpretability) |
| **AI Alignment Comprehensive Survey** | 对齐全面综述 | [网站](https://alignmentsurvey.com/) |
| **Victoria Krakovna AI Safety Resources** | Safety 资源聚合 | [链接](https://vkrakovna.wordpress.com/ai-safety-resources/) |
| **Awesome Representation Engineering** | RepE 论文列表 | [GitHub](https://github.com/chrisliu298/awesome-representation-engineering) |
| **250+ LLM Eval Benchmarks** | 评估基准大全 | [GitHub](https://github.com/VyetGokyra/awaresome_LLM_eval_benchmark) |

---

## 如何高效读论文

### 三遍阅读法

**第一遍（5分钟）：** Title + Abstract + Intro 最后一段 + Conclusion。看图表标题。决定是否值得精读。

**第二遍（1小时）：** 完整读正文，跳过证明。每节写 1-2 句总结。记录不理解之处。

**第三遍（2-4小时）：** 重现核心实验。思考 assumption / limitation / 改进方向。

::: tip 读 Mech Interp 论文的注意事项
打开 Colab，边读边运行代码。重点关注 Activation Patching 实验设计。追问：causal claim 有多强？控制了哪些 confounds？
:::

### 建议阅读节奏

| 阶段 | 每周 | 说明 |
|------|------|------|
| 第 1-6 月 | 2-3 篇 | 基础论文，仔细理解 |
| 第 7-12 月 | 3-4 篇 | Interp + SAE，配合实验 |
| 第 13-24 月 | 4-5 篇 | 广泛阅读，建立视野 |

---

## 论文管理

推荐 **Zotero** + Tag 系统：`Month-1-2`、`Mech-Interp`、`Anthropic`、`必读`、`已读`、`精读完成`

<ColabLink title="Zotero" description="免费文献管理工具" href="https://www.zotero.org/" />

---

## 统计

| 指标 | 数量 |
|------|------|
| **总论文数** | 116 篇 |
| **Anthropic 论文** | 26 篇 |
| **精读 🟢** | 28 篇 |
| **细读 🟡** | 52 篇 |
| **泛读 🔵** | 36 篇 |
| **覆盖时间跨度** | 2013–2025 |
| **覆盖方向** | DL 基础 / Transformer / Scaling / Safety / Alignment / RLHF / DPO / Mech Interp / SAE / Circuits / 表征 / 知识编辑 / 评估 / Red-Teaming / 欺骗 / Agent Safety / Governance |
