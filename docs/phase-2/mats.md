# 🎯 MATS 申请全攻略

> **MATS（ML Alignment Theory Scholars）** 是进入 Anthropic 最强的跳板之一。

---

## 基本信息

| 项目 | 详情 |
|------|------|
| **时长** | 10周，伯克利线下 |
| **待遇** | 住宿 + 生活费 + $12k compute |
| **申请时间** | 每年2月（夏季）和9月（冬季） |
| **链接** | [matsprogram.org](https://www.matsprogram.org/) |

---

## 申请材料准备

### 技术写作样本（最重要）

- 一篇 Alignment Forum 帖子或 arXiv 预印本
- 如果没有论文，用 ARENA 的完成项目代替
- **重点展示：你能独立推进一个研究问题**

### 导师匹配

MATS 有不同 mentor 方向：Interp / Alignment / Evals / Governance

- 申请前研究每位 mentor 的论文
- 在 SOP 中说明匹配理由
- **Interp 方向 mentor 通常与 Anthropic 有最强连接**

### SOP 写作重点

1. 你当前的研究问题是什么（要具体）
2. 你的背景中哪些最相关（着重开源项目和 ARENA 经历）
3. 为什么**现在**（不是以后）做 AI Safety

---

## SOP 写作练习

<WritingExercise
  id="mats-sop"
  title="MATS SOP 核心段落练习"
  prompt="写一段 150-200 词的 SOP 核心段落，说明：(1) 你对哪个 AI Safety 问题感兴趣，(2) 你目前做了什么相关工作，(3) 为什么 MATS 是你的下一步。"
>
  <template #example>
    I am deeply interested in understanding how large language models represent and manipulate factual knowledge internally, specifically through the lens of mechanistic interpretability. My recent work has focused on reproducing the IOI circuit analysis on GPT-2, where I discovered additional backup behavior in attention heads not fully characterized in the original paper. Through MATS, I aim to extend my circuit analysis methods to larger models and investigate how factual knowledge circuits interact with safety-relevant behaviors such as honesty and refusal. My background in open-source tooling (contributions to TransformerLens) and hands-on interpretability research positions me well to make rapid progress during the program.
  </template>
</WritingExercise>

---

## 其他关键项目

| 项目 | 说明 | 链接 |
|------|------|------|
| **SPAR** | 远程配对导师项目，适合在校生 | [sparai.org](https://sparai.org/) |
| **Redwood Research** | AI Safety 方向研究实习 | [redwoodresearch.org](https://www.redwoodresearch.org/) |

<Checklist
  id="phase2-mats"
  title="MATS 申请完成清单"
  :items="[
    '研究了 MATS 各位 mentor 的论文方向',
    '确定了 1-2 位目标 mentor',
    '准备好技术写作样本（AF 帖子或论文）',
    '完成 SOP 写作并请人 review',
    '提交了 MATS 申请'
  ]"
/>
