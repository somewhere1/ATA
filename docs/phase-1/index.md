# 第一阶段：补齐基础（0–12个月）

> **目标：** 能读懂顶会论文的数学；从头实现 Transformer；写出基本学术英语段落

---

## 学习路线总览

```
线性代数（3B1B）→ 多元微积分（Khan Academy）→ 概率统计（MIT 6.041）→ 凸优化（Boyd）
            ↓
Karpathy Zero to Hero → CS229 Lecture Notes → 花书 → CS231n/CS224n 选修
            ↓
精读顶会论文 + 模仿写摘要 → Technical Report → Apart Hackathon
            ↓
TransformerLens / trl 贡献 PR
```

## 章节导航

| 章节 | 内容 | 预计时间 |
|------|------|----------|
| [数学基础](./math) | 线性代数、概率统计、凸优化 | 3-4个月 |
| [深度学习核心](./deep-learning) | 从零实现 GPT、理论课程、必读论文 | 3-4个月 |
| [英语学术写作](./writing) | 精读训练、写作训练、投稿准备 | 持续进行 |
| [开源贡献策略](./open-source) | 方向选择、具体行动步骤 | 持续进行 |

<Checklist
  id="phase1-overview"
  title="阶段一完成检查表"
  :items="[
    '能解释矩阵乘法的几何意义，能手推 SVD',
    '能解释 Backpropagation 的数学原理（Chain Rule）',
    '从头实现了一个可以运行的 mini-GPT（参考 Karpathy）',
    '能读懂 Attention Is All You Need 中 90% 的数学',
    '写了 3+ 篇论文摘要仿写练习',
    '在一个 AI Safety 相关开源项目中合并了 1+ 个 PR',
    '读完了 A Mathematical Framework for Transformer Circuits（Elhage et al.）'
  ]"
/>
