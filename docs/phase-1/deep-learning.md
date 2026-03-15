# 🧠 深度学习核心

> 推荐顺序：Karpathy Zero to Hero → CS229 → 花书 → CS231n/CS224n 选修

---

## 动手入门（最重要）

### Andrej Karpathy — Neural Networks: Zero to Hero ⭐⭐⭐

从头手写 GPT，业内公认最好的 LLM 实战入门。包含：micrograd → makemore → GPT-2。

<ColabLink
  title="Karpathy — Zero to Hero"
  description="每一行代码自己敲一遍，不要复制粘贴"
  href="https://karpathy.ai/zero-to-hero.html"
/>

<ColabLink
  title="配套 GitHub Repo"
  description="ng-video-lecture — 课程配套代码仓库"
  href="https://github.com/karpathy/ng-video-lecture"
/>

---

## 理论课程

### Stanford CS229 — Machine Learning

<ColabLink
  title="CS229 Lecture Notes（最有价值）"
  description="数学推导非常清晰，是精华所在"
  href="https://cs229.stanford.edu/"
/>

### Deep Learning Specialization（Andrew Ng）

<ColabLink
  title="Deep Learning Specialization（Coursera）"
  description="5门课，免费旁听全部内容。覆盖 RNN/CNN/Transformers"
  href="https://www.coursera.org/specializations/deep-learning"
/>

### fast.ai — Practical Deep Learning for Coders

<ColabLink
  title="fast.ai"
  description="自顶向下学习，先用再理解原理"
  href="https://course.fast.ai/"
/>

---

## 教材

| 教材 | 说明 | 链接 |
|------|------|------|
| **Goodfellow — Deep Learning（花书）** | 标准教材。重点 Ch.6/8/10 | [deeplearningbook.org](https://www.deeplearningbook.org/) |
| **Dive into Deep Learning** | 代码可运行，中文版可用 | [d2l.ai](https://d2l.ai/) |

---

## 必读论文（阶段一）

| 论文 | 链接 | 重要性 |
|------|------|--------|
| Attention Is All You Need（Transformer） | [arXiv](https://arxiv.org/abs/1706.03762) | ⭐⭐⭐ |
| BERT（Devlin et al.） | [arXiv](https://arxiv.org/abs/1810.04805) | ⭐⭐ |
| GPT-2（Radford et al.） | [OpenAI Blog](https://openai.com/research/language-unsupervised) | ⭐⭐ |
| Scaling Laws（Kaplan et al.） | [arXiv](https://arxiv.org/abs/2001.08361) | ⭐⭐ |

---

## 知识检测

<Quiz
  question="在 Transformer 的 Self-Attention 中，Q、K、V 分别代表什么？"
  :options="[
    'Question, Key, Value — 用于数据库查询',
    'Query, Kernel, Vector — 用于卷积操作',
    'Query, Key, Value — Query 与 Key 计算注意力权重，加权 Value',
    'Quantization, Knowledge, Validation — 用于模型压缩'
  ]"
  :answer="2"
  explanation="Self-Attention 中 Q(Query) 与 K(Key) 做点积得到注意力分数，经过 softmax 后作为权重对 V(Value) 加权求和。公式：Attention(Q,K,V) = softmax(QKT/sqrt(dk))V。这是 Transformer 的核心机制。"
/>

<Quiz
  question="Backpropagation 的数学基础是什么？"
  :options="[
    '泰勒展开（Taylor Expansion）',
    '链式法则（Chain Rule）',
    '拉格朗日乘子法',
    '蒙特卡洛采样'
  ]"
  :answer="1"
  explanation="Backpropagation 本质上就是链式法则的应用：将损失函数对每个参数的梯度，通过计算图中的链式求导逐层传播回来。理解这一点是理解深度学习训练的关键。"
/>

<WritingExercise
  id="dl-abstract"
  title="论文摘要仿写练习"
  prompt="阅读 Attention Is All You Need 的摘要，然后不看原文，用自己的话（不超过200词）写一个摘要，描述 Transformer 的核心贡献。"
>
  <template #example>
    Transformer 是一种完全基于注意力机制的新型序列转换架构，摒弃了传统的循环和卷积结构。其核心创新是 Self-Attention 机制，允许模型直接建模序列中任意两个位置之间的依赖关系，不受距离限制。在机器翻译任务（WMT 2014 English-to-German）上，Transformer 达到了 28.4 BLEU 的新 SOTA，同时训练时间大幅缩短。该架构的并行化特性使其在训练效率上远优于 RNN 系列模型，成为后续 BERT、GPT 等预训练模型的基础。
  </template>
</WritingExercise>

<Checklist
  id="phase1-dl"
  title="深度学习完成清单"
  :items="[
    '完成 Karpathy Zero to Hero 全部视频（自己敲代码）',
    '从头实现了 mini-GPT 并能运行',
    '看完 CS229 至少 10 讲 Lecture Notes',
    '读完花书 Ch.6（前馈网络）和 Ch.8（优化）',
    '精读 Attention Is All You Need 并理解 90% 数学',
    '精读 BERT 和 Scaling Laws 论文'
  ]"
/>
