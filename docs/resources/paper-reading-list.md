# 必读论文清单

> 按推荐阅读时间线排列。⭐ = 必读，不可跳过。每篇标注预计阅读时间和阅读深度建议。
>
> **阅读深度：** 🟢 精读（含代码复现）| 🟡 细读（理解方法和实验）| 🔵 泛读（了解思路和结论）

---

## 第 1-2 月：深度学习基石

> 目标：理解现代深度学习的核心思想和数学基础

### 经典架构论文

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 1 | ⭐ ImageNet Classification with Deep CNNs (AlexNet) | Krizhevsky et al. | 2012 | 🔵 | [NeurIPS](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html) |
| 2 | ⭐ Deep Residual Learning (ResNet) | He et al. | 2015 | 🟡 | [arXiv](https://arxiv.org/abs/1512.03385) |
| 3 | Sequence to Sequence Learning | Sutskever et al. | 2014 | 🔵 | [arXiv](https://arxiv.org/abs/1409.3215) |
| 4 | Neural Machine Translation by Jointly Learning to Align and Translate (Attention) | Bahdanau et al. | 2014 | 🟡 | [arXiv](https://arxiv.org/abs/1409.0473) |

### 训练技术

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 5 | ⭐ Adam Optimizer | 标准优化器，理解动量和自适应学习率 | 🟡 | [arXiv](https://arxiv.org/abs/1412.6980) |
| 6 | Batch Normalization | 加速训练，理解 internal covariate shift | 🟡 | [arXiv](https://arxiv.org/abs/1502.03167) |
| 7 | Dropout | 正则化核心方法 | 🔵 | [JMLR](https://jmlr.org/papers/v15/srivastava14a.html) |
| 8 | Layer Normalization | Transformer 使用的归一化方式 | 🔵 | [arXiv](https://arxiv.org/abs/1607.06450) |
| 9 | Xavier/Glorot Initialization | 权重初始化理论 | 🔵 | [AISTATS 2010](https://proceedings.mlr.press/v9/glorot10a.html) |

<Checklist
  id="papers-month1-2"
  title="第 1-2 月论文进度"
  :items="[
    'AlexNet — 了解 CNN 的历史突破',
    'ResNet — 理解残差连接的重要性',
    'Seq2Seq — 了解编码器-解码器架构',
    'Bahdanau Attention — 理解注意力机制的起源',
    'Adam — 理解自适应学习率原理',
    'Batch Normalization — 理解归一化加速训练',
    'Dropout — 理解正则化',
    'Layer Normalization — 为 Transformer 做准备'
  ]"
/>

---

## 第 3-4 月：Transformer 革命

> 目标：深度理解 Transformer 架构及其衍生模型

### 核心 Transformer 论文

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 10 | ⭐ Attention Is All You Need | Vaswani et al. | 2017 | 🟢 | [arXiv](https://arxiv.org/abs/1706.03762) |
| 11 | ⭐ BERT: Pre-training of Deep Bidirectional Transformers | Devlin et al. | 2018 | 🟡 | [arXiv](https://arxiv.org/abs/1810.04805) |
| 12 | ⭐ Language Models are Unsupervised Multitask Learners (GPT-2) | Radford et al. | 2019 | 🟡 | [OpenAI](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) |
| 13 | ⭐ Language Models are Few-Shot Learners (GPT-3) | Brown et al. | 2020 | 🟡 | [arXiv](https://arxiv.org/abs/2005.14165) |
| 14 | An Image is Worth 16x16 Words (ViT) | Dosovitskiy et al. | 2020 | 🔵 | [arXiv](https://arxiv.org/abs/2010.11929) |

### Scaling 理论

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 15 | ⭐ Scaling Laws for Neural Language Models | Kaplan et al. (Anthropic 联合创始人) | 2020 | 🟢 | [arXiv](https://arxiv.org/abs/2001.08361) |
| 16 | ⭐ Training Compute-Optimal LLMs (Chinchilla) | Hoffmann et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2203.15556) |
| 17 | Emergent Abilities of Large Language Models | Wei et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2206.07682) |
| 18 | Are Emergent Abilities a Mirage? | Schaeffer et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2304.15004) |

### 现代架构改进

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 19 | LLaMA: Open and Efficient Foundation Language Models | Meta, 开源 LLM 标杆 | 🔵 | [arXiv](https://arxiv.org/abs/2302.13971) |
| 20 | Llama 2 | 开源 + Safety 训练的标杆 | 🔵 | [arXiv](https://arxiv.org/abs/2307.09288) |
| 21 | FlashAttention: Fast and Memory-Efficient Attention | IO-aware 注意力优化 | 🔵 | [arXiv](https://arxiv.org/abs/2205.14135) |
| 22 | RoFormer: Enhanced Transformer with Rotary Position Embedding | RoPE 位置编码 | 🔵 | [arXiv](https://arxiv.org/abs/2104.09864) |

<Checklist
  id="papers-month3-4"
  title="第 3-4 月论文进度"
  :items="[
    'Attention Is All You Need — 精读+代码复现（最重要）',
    'BERT — 理解双向预训练',
    'GPT-2 — 理解自回归语言模型',
    'GPT-3 — 理解 in-context learning',
    'Scaling Laws — 精读，理解 power law',
    'Chinchilla — 理解 compute-optimal training',
    'Emergent Abilities + Mirage — 理解涌现能力争论',
    'LLaMA 系列 — 了解开源 LLM 生态'
  ]"
/>

---

## 第 5-6 月：AI Safety 基础

> 目标：理解 AI Safety 的问题定义和研究动机

### AI Safety 经典综述与框架

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 23 | ⭐ Concrete Problems in AI Safety | Amodei et al. (多位 Anthropic 创始人) | 2016 | 🟢 | [arXiv](https://arxiv.org/abs/1606.06565) |
| 24 | ⭐ Unsolved Problems in ML Safety | Hendrycks et al. | 2021 | 🟡 | [arXiv](https://arxiv.org/abs/2109.13916) |
| 25 | X-Risk Analysis for AI Research | Hendrycks et al. | 2022 | 🔵 | [arXiv](https://arxiv.org/abs/2206.05862) |
| 26 | The Alignment Problem from a Deep Learning Perspective | Ngo et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2209.00626) |

### RLHF 与对齐训练

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 27 | ⭐ Training Language Models to Follow Instructions (InstructGPT/RLHF) | Ouyang et al. (OpenAI) | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2203.02155) |
| 28 | Learning to Summarize from Human Feedback | Stiennon et al. | 2020 | 🟡 | [arXiv](https://arxiv.org/abs/2009.01325) |
| 29 | ⭐ Constitutional AI: Harmlessness from AI Feedback | Bai et al. (Anthropic) | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2212.08073) |
| 30 | Training a Helpful and Harmless Assistant | Bai et al. (Anthropic) | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2204.05862) |
| 31 | ⭐ Scalable Oversight / Supervising Strong Learners | Bowman et al. | 2022 | 🟡 | [arXiv](https://arxiv.org/abs/2211.03540) |

<Checklist
  id="papers-month5-6"
  title="第 5-6 月论文进度"
  :items="[
    'Concrete Problems in AI Safety — 精读，理解5大问题分类',
    'Unsolved Problems in ML Safety — 了解当前研究前沿',
    'Alignment Problem (Ngo et al.) — 理解对齐问题的全貌',
    'InstructGPT/RLHF — 精读，理解 reward model + PPO 训练',
    'Constitutional AI — 精读 Anthropic 核心方法',
    'Helpful and Harmless — 理解 Anthropic 的 HHH 框架',
    'Scalable Oversight — 理解可扩展监督框架'
  ]"
/>

---

## 第 7-9 月：Mechanistic Interpretability 入门

> 目标：掌握 Mech Interp 的核心概念和技术。按顺序读，不要跳过。

### Mech Interp 奠基论文（严格按顺序）

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 32 | ⭐ Zoom In: An Introduction to Circuits | Olah et al. (Anthropic) | 2020 | 🟢 | [distill.pub](https://distill.pub/2020/circuits/zoom-in/) |
| 33 | ⭐ A Mathematical Framework for Transformer Circuits | Elhage et al. (Anthropic) | 2021 | 🟢 | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| 34 | ⭐ In-context Learning and Induction Heads | Olsson et al. (Anthropic) | 2022 | 🟢 | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| 35 | ⭐ Interpretability in the Wild: IOI Circuit | Wang et al. | 2022 | 🟢 | [arXiv](https://arxiv.org/abs/2211.00593) |
| 36 | Softmax Linear Units | Elhage et al. | 2022 | 🟡 | [链接](https://transformer-circuits.pub/2022/solu/index.html) |

### 表征与 Superposition

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 37 | ⭐ Toy Models of Superposition | Elhage et al. (Anthropic) | 2022 | 🟢 | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| 38 | Linear Representations in LLMs | Park et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2311.03658) |
| 39 | Representation Engineering | Zou et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2310.01405) |

### Interp 工具与方法

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 40 | Locating and Editing Factual Associations (ROME) | 知识定位与编辑 | 🟡 | [arXiv](https://arxiv.org/abs/2202.05262) |
| 41 | Causal Scrubbing | Interp 方法的形式化 | 🔵 | [AF](https://www.alignmentforum.org/posts/JvZjjviFbR37Rxd5i/causal-scrubbing-a-method-for-rigorously-testing) |
| 42 | Attribution Patching | 高效的 circuit 发现方法 | 🟡 | [arXiv](https://arxiv.org/abs/2310.10348) |

<Checklist
  id="papers-month7-9"
  title="第 7-9 月论文进度"
  :items="[
    'Zoom In: Circuits — 建立 circuits 视角的直觉',
    'Mathematical Framework — 精读+用 TransformerLens 复现',
    'Induction Heads — 精读+Colab 实验',
    'IOI Circuit — 精读，标准 circuit analysis 示范',
    'Softmax Linear Units — 理解 SoLU 的动机',
    'Toy Models of Superposition — 精读，理解 feature superposition',
    'Linear Representations — 理解线性探针方法',
    'Representation Engineering — 理解 activation steering',
    'ROME — 理解知识编辑',
    'Attribution Patching — 理解高效 patching 方法'
  ]"
/>

---

## 第 10-12 月：SAE 与对齐前沿

> 目标：深入 Sparse Autoencoders 和对齐训练的最新进展

### Sparse Autoencoders 系列（核心）

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 43 | ⭐ Towards Monosemanticity: Decomposing Language Models with Dictionary Learning | Bricken et al. (Anthropic) | 2023 | 🟢 | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| 44 | ⭐ Scaling Monosemanticity: Extracting Features from Claude 3 Sonnet | Templeton et al. (Anthropic) | 2024 | 🟢 | [链接](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) |
| 45 | ⭐ Scaling and Evaluating Sparse Autoencoders | Gao et al. (Anthropic) | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2406.04093) |
| 46 | Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs | Marks et al. | 2024 | 🟡 | [arXiv](https://arxiv.org/abs/2403.19647) |
| 47 | Gemma Scope: Open Sparse Autoencoders Everywhere | Lieberum et al. (DeepMind) | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2408.05147) |

### DPO 与新对齐方法

| # | 论文 | 作者 | 年份 | 深度 | 链接 |
|---|------|------|------|------|------|
| 48 | ⭐ Direct Preference Optimization (DPO) | Rafailov et al. | 2023 | 🟢 | [arXiv](https://arxiv.org/abs/2305.18290) |
| 49 | RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback | Lee et al. | 2023 | 🟡 | [arXiv](https://arxiv.org/abs/2309.00267) |
| 50 | KTO: Model Alignment as Prospect Theoretic Optimization | Ethayarajh et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2402.01306) |
| 51 | ORPO: Monolithic Preference Optimization without Reference Model | Hong et al. | 2024 | 🔵 | [arXiv](https://arxiv.org/abs/2403.07691) |

### 幻觉与可靠性

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 52 | ⭐ TruthfulQA: Measuring How Models Mimic Human Falsehoods | 模型诚实度评估基准 | 🟡 | [arXiv](https://arxiv.org/abs/2109.07958) |
| 53 | Measuring Faithfulness in Chain-of-Thought Reasoning | CoT 忠实度分析 | 🟡 | [arXiv](https://arxiv.org/abs/2307.13702) |
| 54 | Language Models Don't Always Say What They Think | Unfaithful explanation 问题 | 🟡 | [arXiv](https://arxiv.org/abs/2305.04388) |

<Checklist
  id="papers-month10-12"
  title="第 10-12 月论文进度"
  :items="[
    'Towards Monosemanticity — 精读 SAE 奠基之作',
    'Scaling Monosemanticity — 精读 Claude 3 Sonnet 上的 SAE',
    'Scaling and Evaluating SAE — 理解 SAE 评估方法',
    'Sparse Feature Circuits — 理解 circuit-level 分析',
    'DPO — 精读，理解直接偏好优化',
    'RLAIF — 理解 AI 反馈替代人类反馈',
    'TruthfulQA — 理解诚实度评估',
    'CoT Faithfulness — 理解推理链忠实度问题'
  ]"
/>

---

## 第 13-18 月：评估、Red-Teaming 与 Safety 行为

> 目标：理解如何评估和检测 LLM 的安全问题

### 模型评估基准

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 55 | ⭐ MMLU: Measuring Massive Multitask Language Understanding | 知识评估标杆 | 🟡 | [arXiv](https://arxiv.org/abs/2009.03300) |
| 56 | BIG-Bench: Beyond the Imitation Game | 大规模多任务评估 | 🔵 | [arXiv](https://arxiv.org/abs/2206.04615) |
| 57 | ⭐ HELM: Holistic Evaluation of Language Models | Stanford 综合评估框架 | 🟡 | [arXiv](https://arxiv.org/abs/2211.09110) |
| 58 | GPQA: A Graduate-Level QA Benchmark | 研究生难度 QA | 🔵 | [arXiv](https://arxiv.org/abs/2311.12022) |
| 59 | SimpleQA (OpenAI) | 事实准确性评估 | 🔵 | [arXiv](https://arxiv.org/abs/2411.07140) |

### Red-Teaming 与安全评估

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 60 | ⭐ Red Teaming Language Models to Reduce Harms | Anthropic 红队方法 | 🟡 | [arXiv](https://arxiv.org/abs/2209.07858) |
| 61 | Universal and Transferable Adversarial Attacks on Aligned LLMs | GCG 越狱攻击 | 🟡 | [arXiv](https://arxiv.org/abs/2307.15043) |
| 62 | Jailbroken: How Does LLM Safety Training Fail? | 越狱攻击分类学 | 🟡 | [arXiv](https://arxiv.org/abs/2307.02483) |
| 63 | ⭐ Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training | Anthropic 后门持久性 | 🟢 | [arXiv](https://arxiv.org/abs/2401.05566) |

### 欺骗与策略行为

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 64 | ⭐ Sycophancy to Subterfuge: Investigating Reward Tampering in LLMs | 从谄媚到颠覆 | 🟡 | [arXiv](https://arxiv.org/abs/2406.10162) |
| 65 | Discovering Latent Knowledge in Language Models (CCS) | 发现模型内部的潜在知识 | 🟡 | [arXiv](https://arxiv.org/abs/2212.03827) |
| 66 | ⭐ Alignment Faking in Large Language Models | Anthropic 对齐伪装研究 | 🟢 | [arXiv](https://arxiv.org/abs/2412.14093) |

<Checklist
  id="papers-month13-18"
  title="第 13-18 月论文进度"
  :items="[
    'MMLU — 理解知识评估基准',
    'HELM — 理解综合评估框架',
    'Red Teaming (Anthropic) — 理解红队方法',
    'GCG 越狱攻击 — 理解对抗攻击',
    'Jailbroken — 理解 Safety 训练失败模式',
    'Sleeper Agents — 精读，理解后门持久性',
    'Sycophancy to Subterfuge — 理解奖励破坏',
    'Alignment Faking — 精读 Anthropic 最新重要发现'
  ]"
/>

---

## 第 19-24 月：前沿研究方向

> 目标：跟踪最新研究前沿，为自己的研究方向做准备

### Mech Interp 前沿（2024-2025）

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 67 | Not All Language Model Features Are Linear | 非线性特征发现 | 🟡 | [arXiv](https://arxiv.org/abs/2405.14860) |
| 68 | Evaluating Sparse Autoencoders on Targeted Concept Removal | SAE 定向评估 | 🟡 | [arXiv](https://arxiv.org/abs/2411.07180) |
| 69 | ⭐ Open Problems in Mechanistic Interpretability | Sharkey et al., 论文选题参考 | 🟢 | [arXiv](https://arxiv.org/abs/2501.16496) |
| 70 | Mapping the Mind of a Large Language Model | Anthropic Claude 特征图谱 | 🟡 | [Anthropic](https://www.anthropic.com/research/mapping-mind-language-model) |
| 71 | Circuit Component Reuse Across Tasks in Transformer Models | 电路复用研究 | 🔵 | [arXiv](https://arxiv.org/abs/2310.08744) |

### Agent & Tool Use Safety

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 72 | Toolformer: Language Models Can Teach Themselves to Use Tools | 工具使用能力 | 🔵 | [arXiv](https://arxiv.org/abs/2302.04761) |
| 73 | ⭐ The Risks of AI Agents | Anthropic Agent 安全综述 | 🟡 | [Anthropic](https://www.anthropic.com/research/risks-of-ai-agents) |
| 74 | Language Agent Tree Search (LATS) | 搜索增强的 Agent 规划 | 🔵 | [arXiv](https://arxiv.org/abs/2310.04406) |

### Responsible Scaling & Governance

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 75 | ⭐ Anthropic's Responsible Scaling Policy | Anthropic RSP 框架 | 🟡 | [Anthropic](https://www.anthropic.com/index/anthropics-responsible-scaling-policy) |
| 76 | Model Cards for Model Reporting | 模型文档标准 | 🔵 | [arXiv](https://arxiv.org/abs/1810.03993) |
| 77 | Managing AI Risks in an Era of Rapid Progress | 多位大佬联合呼吁 | 🔵 | [arXiv](https://arxiv.org/abs/2310.17688) |

### Multimodal & 前沿能力

| # | 论文 | 说明 | 深度 | 链接 |
|---|------|------|------|------|
| 78 | LLaVA: Large Language and Vision Assistant | 多模态 LLM | 🔵 | [arXiv](https://arxiv.org/abs/2304.08485) |
| 79 | GPT-4 Technical Report | 理解大模型能力边界 | 🔵 | [arXiv](https://arxiv.org/abs/2303.08774) |
| 80 | Claude 3 Model Card | Anthropic 模型文档 | 🟡 | [Anthropic](https://www.anthropic.com/news/claude-3-family) |

<Checklist
  id="papers-month19-24"
  title="第 19-24 月论文进度"
  :items="[
    'Non-Linear Features — 理解 SAE 的局限',
    'Open Problems in Mech Interp — 精读，选题参考',
    'Mapping the Mind — 了解 Anthropic 最新 Interp 成果',
    'Risks of AI Agents — 理解 Agent Safety',
    'Anthropic RSP — 理解 Responsible Scaling',
    'Claude 3 Model Card — 了解 Anthropic 产品'
  ]"
/>

---

## Anthropic 团队论文汇总

> 以下是所有由 Anthropic 团队发表或核心参与的论文，面试前至少读 5 篇。

| 论文 | 方向 | 链接 |
|------|------|------|
| Scaling Laws for Neural Language Models | Scaling | [arXiv](https://arxiv.org/abs/2001.08361) |
| Concrete Problems in AI Safety | Safety | [arXiv](https://arxiv.org/abs/1606.06565) |
| Constitutional AI | Alignment | [arXiv](https://arxiv.org/abs/2212.08073) |
| Training a Helpful and Harmless Assistant | RLHF | [arXiv](https://arxiv.org/abs/2204.05862) |
| A Mathematical Framework for Transformer Circuits | Interp | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| In-context Learning and Induction Heads | Interp | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| Toy Models of Superposition | Interp | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| Towards Monosemanticity | Interp/SAE | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| Scaling Monosemanticity | Interp/SAE | [链接](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) |
| Scaling and Evaluating SAE | Interp/SAE | [arXiv](https://arxiv.org/abs/2406.04093) |
| Red Teaming Language Models | Safety | [arXiv](https://arxiv.org/abs/2209.07858) |
| Sleeper Agents | Safety | [arXiv](https://arxiv.org/abs/2401.05566) |
| Sycophancy to Subterfuge | Safety | [arXiv](https://arxiv.org/abs/2406.10162) |
| Alignment Faking | Safety | [arXiv](https://arxiv.org/abs/2412.14093) |
| Measuring Faithfulness in CoT | Reasoning | [arXiv](https://arxiv.org/abs/2307.13702) |

---

## 如何高效读论文

### 三遍阅读法

**第一遍（5分钟）：** 读 Title + Abstract + Introduction 最后一段 + Conclusion。看图表标题。决定是否值得精读。

**第二遍（1小时）：** 完整读正文，跳过证明。在每节开头写 1-2 句总结。记录不理解的地方。

**第三遍（2-4小时）：** 重现核心实验（用代码）。思考 assumption 和 limitation。思考改进方向。

::: tip 读 Mech Interp 论文的注意事项
打开 Colab，边读边运行代码。重点关注 Activation Patching 实验的设计。追问：causal claim 有多强？控制了哪些 confounds？
:::

### 建议阅读节奏

| 阶段 | 每周论文数 | 说明 |
|------|-----------|------|
| 第 1-6 月 | 2-3 篇 | 基础论文，需要仔细理解 |
| 第 7-12 月 | 3-4 篇 | Interp 论文，配合代码实验 |
| 第 13-24 月 | 4-5 篇 | 广泛阅读，建立研究视野 |

---

## 论文管理

推荐使用 **Zotero** 管理文献。在每篇论文上加 Tag：

- 按阶段：`Month-1-2`、`Month-3-4`、...
- 按方向：`Mech-Interp`、`Alignment`、`Safety`、`Scaling`
- 按状态：`必读`、`已读`、`精读完成`

<ColabLink title="Zotero" description="免费文献管理工具，配合浏览器插件一键保存论文" href="https://www.zotero.org/" />

---

## 统计

- **总计 80 篇论文**，覆盖 24 个月阅读计划
- **其中 15 篇 Anthropic 论文**，面试前必读
- **25 篇标记为精读（🟢）**，需要代码复现
- **35 篇标记为细读（🟡）**，需要理解方法和实验
- **20 篇标记为泛读（🔵）**，了解思路和结论即可
