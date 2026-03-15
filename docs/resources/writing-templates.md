# 学术写作资源

---

## 论文摘要写作模板

### 标准 Abstract 结构（4-6句）

```
句1：[研究领域] 中，[研究问题] 是一个重要挑战。
句2：现有方法存在 [具体局限性]。
句3：我们提出 [方法名称]，核心思路是 [一句话描述]。
句4：在 [数据集] 上，取得了 [具体数字] 的提升。
句5（可选）：我们的分析表明 [重要发现]。
句6（可选）：代码和数据集公开在 [链接]。
```

---

## 各部分写作指南

### Introduction（最重要）

1. 第一段：研究领域的重要性（大图景）
2. 第二段：具体问题是什么
3. 第三段：现有方法做了什么，有什么不足
4. 第四段：我们的贡献（列举 2-3 点）
5. 第五段：论文结构

### Related Work

- 不要逐篇介绍，按**主题分组**
- 每组结尾说明与你的工作的区别
- 引用要完整

### Method

- 先给一个整体 overview（配图）
- 再逐步介绍每个组件
- 数学公式要有 notation table

### Experiments

- Main Results Table（与 baseline 对比）
- Ablation Study（每个组件的影响）
- Case Study / 定性分析
- Failure Case Analysis

### Conclusion

- 简要总结贡献
- 指出 Limitations（诚实！）
- Future Work

---

## 常用学术句型

**Introduction:**
- "Despite recent progress in X, Y remains poorly understood."
- "A key challenge is that..."
- "In this work, we propose..."
- "Our main contributions are: (1)... (2)... (3)..."

**Related Work:**
- "Prior work on X has focused on..."
- "In contrast to [method], our approach..."

**Experiments:**
- "We evaluate our method on..."
- "Table 1 summarizes our main results."

**Conclusion:**
- "We have presented..."
- "A limitation of our approach is..."

---

## 投稿检查清单

<Checklist
  id="paper-checklist"
  title="论文投稿检查清单"
  :items="[
    '符合会议页数限制',
    '使用官方 LaTeX 模板',
    '匿名化（去掉作者信息、机构、致谢）',
    '参考文献格式统一',
    'Abstract 在 250 词以内',
    '每个图表有 caption，且独立可理解',
    '所有引用都在参考文献中',
    '主要结论有实验支撑',
    'Ablation Study 覆盖主要设计选择',
    '说明了 Limitations',
    '提供了 reproducibility 信息'
  ]"
/>

---

## 实用工具

| 工具 | 用途 | 链接 |
|------|------|------|
| Overleaf | LaTeX 写作 | [overleaf.com](https://www.overleaf.com) |
| Zotero | 参考文献管理 | [zotero.org](https://www.zotero.org) |
| Weights & Biases | 实验追踪 | [wandb.ai](https://wandb.ai) |
| ConnectedPapers | 文献图谱 | [connectedpapers.com](https://www.connectedpapers.com) |
| Grammarly | 语法检查 | [grammarly.com](https://www.grammarly.com) |
| DeepL Write | 学术英语润色 | [deepl.com/write](https://www.deepl.com/write) |
