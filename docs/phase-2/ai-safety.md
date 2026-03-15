# 🔬 AI Safety 技术入门

---

## 核心课程

### ARENA（最重要）⭐⭐⭐

Anthropic 研究者背书，业内最好的免费技术安全课程。

<ColabLink
  title="ARENA — Alignment Research Engineer Accelerator"
  description="Chapter 0：PyTorch 基础 | Chapter 1：Transformer & Mech Interp | Chapter 2：RL & RLHF"
  href="https://www.arena.education/"
/>

**建议：** Chapter 0 → Chapter 1 是核心，其余按兴趣选修。BlueDot Impact 平台上有带 cohort 版本，可以结交同伴。

### AI Safety Fundamentals

<ColabLink
  title="AI Safety Fundamentals（BlueDot Impact）"
  description="Alignment Track：技术对齐方向，8周课程。有 cohort 可认识全球同路人"
  href="https://aisafetyfundamentals.com/"
/>

---

## Mechanistic Interpretability 专项

### 入门顺序

**1. Neel Nanda Getting Started Guide**

<ColabLink
  title="Neel Nanda — Mech Interp 入门指南"
  description="Mech Interp 入门最权威的指南，前 Anthropic 解释性团队成员"
  href="https://www.neelnanda.io/mechanistic-interpretability/getting-started"
/>

**2. TransformerLens Tutorial**

<ColabLink
  title="TransformerLens Main Demo（Colab）"
  description="直接在 Colab 运行，不需要本地 GPU"
  href="https://colab.research.google.com/github/TransformerLensOrg/TransformerLens/blob/main/demos/Main_Demo.ipynb"
/>

**3. Anthropic Transformer Circuits 必读论文**

| # | 论文 | 说明 |
|---|------|------|
| 1 | [A Mathematical Framework for Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html) | Mech Interp 奠基文章，**必读** |
| 2 | [In-context Learning and Induction Heads](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) | 理解 Induction Heads |
| 3 | [Interpretability in the Wild: IOI Circuit](https://arxiv.org/abs/2211.00593) | 标准技术示范 |
| 4 | [Towards Monosemanticity（SAE）](https://transformer-circuits.pub/2023/monosemantic-features/index.html) | SAE 方向奠基 |
| 5 | [Scaling and Evaluating SAE](https://arxiv.org/abs/2406.04093) | SAE 最新进展 |

**4. ARENA Chapter 1 Exercises**

涵盖：TransformerLens、Induction Heads、Superposition、SAE

<ColabLink
  title="ARENA 2.0 GitHub"
  description="完整的 Mech Interp 练习代码"
  href="https://github.com/callummcdougall/ARENA_2.0"
/>

---

## 知识检测

<Quiz
  question="Mechanistic Interpretability 的核心目标是什么？"
  :options="[
    '让模型的预测更准确',
    '逆向工程神经网络，理解它们如何实现特定算法',
    '减少模型的参数数量',
    '提高模型的训练速度'
  ]"
  :answer="1"
  explanation="Mechanistic Interpretability 的目标是逆向工程（reverse-engineer）神经网络，理解模型内部的计算结构如何实现特定功能。比如，找到 Transformer 中负责 indirect object identification 的 attention heads（即 circuit）。这与只看输入输出的 behavioral interpretability 不同。"
/>

<Quiz
  question="Induction Heads 的作用是什么？"
  :options="[
    '处理图像中的边缘检测',
    '实现 in-context learning：识别并延续之前出现过的模式',
    '计算词语的 TF-IDF 分数',
    '管理模型的内存分配'
  ]"
  :answer="1"
  explanation="Induction Heads 是 Transformer 中实现 in-context learning 的关键 circuit。它们通过 'prefix matching' + 'copying' 机制，识别之前出现过的序列模式并预测下一个 token。这是 Olsson et al. (2022) 的重要发现。"
/>

<Checklist
  id="phase2-safety"
  title="AI Safety 入门完成清单"
  :items="[
    '完成 ARENA Chapter 0（PyTorch 基础）',
    '完成 ARENA Chapter 1（Mech Interp）',
    '读完 Neel Nanda 入门指南',
    '在 Colab 中运行了 TransformerLens Demo',
    '精读了 Transformer Circuits 系列前 3 篇论文',
    '理解 Induction Heads 和 IOI Circuit',
    '了解了 Sparse Autoencoders（SAE）的基本原理'
  ]"
/>
