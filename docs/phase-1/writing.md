# ✍️ 英语学术写作

> 每周练习，持续进行。写作能力是发论文的基础。

---

## 每周练习计划

### 第1-4周：精读训练

1. 从 [PapersWithCode](https://paperswithcode.com/) 选一篇近期 NeurIPS/ICLR 高引论文
2. 精读 Abstract + Introduction + Conclusion
3. 用自己的话（不超过200词）写一个摘要
4. 对比原文摘要，找差距

### 第5-8周：写作训练

1. 选你的开源项目中一个功能
2. 按照论文格式写一个 2 页的 Technical Report
3. 结构：Motivation → Method → Experiment → Conclusion

### 第9-12周：投稿准备

1. 找 Apart Research 的下一个 Hackathon
2. 提前准备一个研究问题
3. 在 Hackathon 中完成第一篇合作论文雏形

---

## 参考书

| 书名 | 说明 |
|------|------|
| **Strunk & White — The Elements of Style** | 写作基础，通读一遍受益终身 |
| **Zobel — Writing for Computer Science** | CS 学术写作专项 |

---

## 写作练习

<WritingExercise
  id="writing-abstract-1"
  title="Abstract 结构练习"
  prompt="按照以下模板，为一个你熟悉的 AI 项目写一个 Abstract（150-250词）：1. 研究领域中，研究问题是一个重要挑战。2. 现有方法存在具体局限性。3. 我们提出方法名称，核心思路是什么。4. 在实验设置上，取得了具体结果。"
>
  <template #example>
    Understanding the internal mechanisms of large language models remains a central challenge in AI interpretability. Existing methods for circuit analysis are limited to small models and hand-crafted tasks. We present CircuitFinder, an automated pipeline that identifies functional circuits in transformer models using sparse attribution and causal interventions. Applied to GPT-2 Medium on indirect object identification, our method recovers the known IOI circuit with 94% component overlap while reducing manual analysis time by 10x.
  </template>
</WritingExercise>

<WritingExercise
  id="writing-intro-1"
  title="Introduction 首段练习"
  prompt="写一个 Introduction 的第一段（100-150词），主题：Mechanistic Interpretability 的重要性。要求：从大图景入手，逐步聚焦到具体问题。"
>
  <template #example>
    As large language models are deployed in increasingly consequential domains, understanding their internal decision-making processes becomes not merely an academic interest but a practical necessity. Mechanistic interpretability, the study of how neural networks implement algorithms through their learned parameters, offers a promising path toward this understanding. By reverse-engineering the computational structures within transformers, researchers can identify potential failure modes, detect deceptive behaviors, and build more trustworthy AI systems. However, current interpretability methods remain largely manual, requiring expert knowledge to identify and verify circuits in even small models.
  </template>
</WritingExercise>

---

## 常用学术句型

### Introduction
- *Despite recent progress in X, Y remains poorly understood.*
- *A key challenge is that...*
- *In this work, we propose...*
- *Our main contributions are: (1)... (2)... (3)...*

### Related Work
- *Prior work on X has focused on...*
- *In contrast to [method], our approach...*
- *Most closely related to our work is...*

### Experiments
- *We evaluate our method on...*
- *Table 1 summarizes our main results.*
- *We observe that...*

### Conclusion
- *We have presented...*
- *Our results demonstrate that...*
- *A limitation of our approach is...*

<Checklist
  id="phase1-writing"
  title="学术写作完成清单"
  :items="[
    '读完 The Elements of Style',
    '完成 4 篇论文精读 + 摘要仿写',
    '写了一篇 2 页的 Technical Report',
    '熟悉 NeurIPS/ICLR LaTeX 模板',
    '找到了一个 Apart Research Hackathon'
  ]"
/>
