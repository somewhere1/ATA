# 学术写作资源

## 论文摘要写作模板

### 标准 Abstract 结构（4-6句）

```
句1：[研究领域/背景] 中，[研究问题] 是一个重要挑战。
句2：现有方法存在 [具体局限性]。
句3：我们提出 [方法名称]，核心思路是 [一句话描述核心贡献]。
句4：在 [数据集/实验设置] 上，我们的方法在 [指标] 上取得了 [具体数字] 的提升。
句5（可选）：我们的分析表明，[一个重要发现/洞见]。
句6（可选）：代码和数据集将公开在 [链接]。
```

### 示例（Mech Interp 方向）

> Understanding the internal mechanisms of large language models remains a central challenge in AI interpretability. Existing methods for circuit analysis are limited to small models and hand-crafted tasks. We present **CircuitFinder**, an automated pipeline that identifies functional circuits in transformer models using sparse attribution and causal interventions. Applied to GPT-2 Medium on indirect object identification, our method recovers the known IOI circuit with 94% component overlap while reducing manual analysis time by 10×. Our analysis reveals that attention head composition plays a more critical role in medium-sized models than previously reported.

---

## 论文各部分写作指南

### Introduction（最重要）

**结构：**
1. 第一段：研究领域的重要性（大图景）
2. 第二段：具体问题是什么
3. 第三段：现有方法做了什么，有什么不足
4. 第四段：我们的贡献（列举 2-3 点）
5. 第五段：论文结构

**常用句型：**
```
- "Despite recent progress in X, Y remains poorly understood."
- "A key challenge is that..."
- "In this work, we propose..."
- "Our main contributions are: (1)... (2)... (3)..."
```

### Related Work

- 不要逐篇介绍，要按主题分组
- 每组结尾说明与你的工作的区别
- 引用要完整，不要遗漏重要前人工作

### Method

- 先给一个整体 overview（配图）
- 再逐步介绍每个组件
- 数学公式要有 notation table

### Experiments

**必须有的内容：**
- Main Results Table（与 baseline 的对比）
- Ablation Study（去掉每个组件的影响）
- Case Study / 定性分析
- Failure Case Analysis

### Conclusion

- 简要总结贡献（不要重复 Abstract）
- 指出 Limitations（诚实，reviewer 会欣赏）
- Future Work

---

## 论文投稿检查清单

### 提交前检查

**格式**
- [ ] 符合会议页数限制
- [ ] 使用官方 LaTeX 模板
- [ ] 匿名化（去掉作者信息、机构、致谢、自引用中的作者名）
- [ ] 参考文献格式统一

**内容**
- [ ] Abstract 在 250 词以内
- [ ] 每个图表都有 caption，且 caption 独立可理解
- [ ] 所有引用的论文都在参考文献中
- [ ] 主要结论都有实验支撑
- [ ] Ablation Study 覆盖了主要设计选择
- [ ] 说明了 Limitations
- [ ] 提供了 reproducibility 信息（超参数、随机种子、计算资源）

**代码**
- [ ] 如果承诺开源，附上匿名 GitHub 链接
- [ ] README 包含运行说明
- [ ] 实验可以从代码复现

### 写完初稿后的自测问题

1. 如果我是 reviewer，会提什么问题？
2. 这篇论文最大的 weakness 是什么？我是否在文中承认了？
3. 实验结果真的支持我的 claim 吗？
4. Related work 里有没有漏掉重要的竞争方法？

---

## 冷邮件模板

### 给潜在导师的邮件

```
Subject: [PhD Application Inquiry] [Your Research Area] — [Your Name]

Dear Professor [Name],

I am writing to inquire about potential PhD openings in your group for [Fall 2026].

I am currently completing my Master's at [Institution] and have been working on [brief description of your research]. My most relevant work is [project/paper name], where [one sentence on what you did and found].

I am particularly interested in [specific aspect of their research] as discussed in your recent paper "[Paper Title]". I believe my background in [X] would complement your group's work on [Y].

I have attached my CV and a brief research statement. I would welcome the opportunity to discuss potential fit.

Best regards,
[Your Name]
[GitHub | Google Scholar | Personal Website]
```

### 给 Anthropic 研究者的邮件

```
Subject: [Research Collaboration/Internship Inquiry] — [Your Name]

Hi [Name],

I recently read your paper on [paper name] and found [specific aspect] particularly compelling, especially [specific point that connects to your work].

I'm a PhD student at [Institution] working with [Advisor] on [research area]. My recent work on [your work] addresses [related problem]. [One sentence on your result].

I'd love to discuss potential collaboration or internship opportunities, particularly around [specific Anthropic research area].

Best,
[Your Name]
[Link to your paper or GitHub]
```

---

## 实用工具清单

| 工具 | 用途 | 链接 |
|------|------|------|
| Overleaf | LaTeX 写作（免费版够用） | https://www.overleaf.com |
| Zotero | 参考文献管理 | https://www.zotero.org |
| Weights & Biases | 实验追踪 | https://wandb.ai |
| ConnectedPapers | 文献图谱 | https://www.connectedpapers.com |
| Grammarly | 语法检查 | https://www.grammarly.com |
| QuillBot | 改写/润色 | https://quillbot.com |
| DeepL Write | 学术英语润色 | https://www.deepl.com/write |
