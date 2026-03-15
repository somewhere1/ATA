# 第一阶段：补齐基础（0–12个月）

> 目标：能读懂顶会论文的数学；从头实现 Transformer；写出基本学术英语段落

---

## 📐 数学基础学习路径

### 推荐顺序

```
线性代数（3B1B）→ 多元微积分（Khan Academy）→ 概率统计（MIT 6.041）→ 凸优化（Boyd）
```

### 详细资源

#### 线性代数

- **3Blue1Brown — Essence of Linear Algebra**
  - 链接：https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab
  - 建议：每集看完后在纸上重新推导
  - 重点：矩阵乘法的几何意义、特征值/特征向量、SVD

- **Gilbert Strang — MIT 18.06 Linear Algebra**
  - 链接：https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/
  - 建议：配合 Problem Sets 做题

- **Mathematics for ML Specialization（Imperial College）**
  - 链接：https://www.coursera.org/specializations/mathematics-machine-learning
  - 第一门课专注线代，第二门多元微积分，第三门 PCA

#### 概率 & 统计

- **MIT 6.041 — Probabilistic Systems Analysis**
  - 链接：https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/
  - 重点：贝叶斯定理、期望、方差、常见分布

- **Seeing Theory（布朗大学）**
  - 链接：https://seeing-theory.brown.edu/
  - 概率统计可视化，直觉建立很好

#### 凸优化（进阶，可在第二阶段再学）

- **Boyd & Vandenberghe — Convex Optimization**
  - 链接：https://web.stanford.edu/~boyd/cvxbook/
  - 视频：https://www.youtube.com/playlist?list=PL3940DD956CDF0622
  - 重点章节：第2章（凸集）、第3章（凸函数）、第9章（无约束优化）

---

## 🧠 深度学习学习路径

### 推荐顺序

```
Karpathy Zero to Hero → CS229 Lecture Notes → 花书 → CS231n/CS224n 选修
```

### 详细资源

#### 动手入门（最重要）

- **Andrej Karpathy — Neural Networks: Zero to Hero** ⭐⭐⭐
  - 链接：https://karpathy.ai/zero-to-hero.html
  - 包含：micrograd → makemore → GPT-2
  - 建议：**每一行代码自己敲一遍，不要复制粘贴**
  - 配套 repo：https://github.com/karpathy/ng-video-lecture

#### 理论课程

- **Stanford CS229 — Machine Learning**
  - 链接：https://cs229.stanford.edu/
  - 最有价值的是 Lecture Notes（PDF），数学推导非常清晰
  - 2022年版本：https://www.youtube.com/playlist?list=PLoROMvodv4rNyWOpJg_Yh4NSqI4Z4vOYy

- **Deep Learning Specialization（Andrew Ng）**
  - 链接：https://www.coursera.org/specializations/deep-learning
  - 5门课，免费旁听全部内容

- **fast.ai — Practical Deep Learning for Coders**
  - 链接：https://course.fast.ai/
  - 自顶向下学习，先用再理解原理

#### 教材

- **Goodfellow et al. — Deep Learning（花书）**
  - 链接：https://www.deeplearningbook.org/
  - 重点章节：Ch.6（前馈网络）、Ch.8（优化）、Ch.10（RNN）

- **Dive into Deep Learning（动手学深度学习）**
  - 链接：https://d2l.ai/
  - 中文版也有，代码可运行，适合查阅

#### 必读论文（阶段一）

| 论文 | 链接 | 重要性 |
|------|------|--------|
| Attention Is All You Need（Transformer） | [arXiv](https://arxiv.org/abs/1706.03762) | ⭐⭐⭐ |
| BERT（Devlin et al.） | [arXiv](https://arxiv.org/abs/1810.04805) | ⭐⭐ |
| GPT-2（Radford et al.） | [OpenAI Blog](https://openai.com/research/language-unsupervised) | ⭐⭐ |
| Scaling Laws（Kaplan et al.） | [arXiv](https://arxiv.org/abs/2001.08361) | ⭐⭐ |

---

## ✍️ 英语学术写作训练

### 每周练习计划

**第1-4周：精读训练**
1. 从 [PapersWithCode](https://paperswithcode.com/) 选一篇近期 NeurIPS/ICLR 高引论文
2. 精读 Abstract + Introduction + Conclusion
3. 用自己的话（不超过200词）写一个摘要
4. 对比原文摘要，找差距

**第5-8周：写作训练**
1. 选你的开源项目中一个功能
2. 按照论文格式写一个 2 页的 Technical Report
3. 结构：Motivation → Method → Experiment → Conclusion

**第9-12周：投稿准备**
1. 找 Apart Research 的下一个 Hackathon
2. 提前准备一个研究问题
3. 在 Hackathon 中完成第一篇合作论文雏形

### 参考书

- Strunk & White — *The Elements of Style*（写作基础）
- Zobel — *Writing for Computer Science*（CS学术写作专项）
- 论文写作检查清单：见 [`/resources/paper-checklist.md`](../resources/paper-checklist.md)

---

## 🛠 开源贡献策略

### 选择方向

**优先级排序（对 Anthropic 简历最有帮助）：**

1. **Mechanistic Interpretability 工具**（TransformerLens、SAELens）
2. **RLHF / 对齐训练**（trl、OpenRLHF）
3. **模型评估**（lm-evaluation-harness、HELM）
4. **LLM 基础设施**（vllm、llama.cpp）

### 具体行动

```bash
# 第一步：找 Good First Issue
# https://github.com/TransformerLensOrg/TransformerLens/issues?q=label%3A%22good+first+issue%22

# 第二步：本地复现一篇 Mech Interp 论文
# 推荐：Induction Heads 论文的 Colab 实现

# 第三步：发现 Bug 或新 Feature → 开 PR
```

---

## ✅ 阶段一完成检查表

完成以下检查点，说明你已准备好进入阶段二：

- [ ] 能解释矩阵乘法的几何意义，能手推 SVD
- [ ] 能解释 Backpropagation 的数学原理（Chain Rule）
- [ ] 从头实现了一个可以运行的 mini-GPT（参考 Karpathy）
- [ ] 能读懂 "Attention Is All You Need" 中 90% 的数学
- [ ] 写了 3+ 篇论文摘要仿写练习
- [ ] 在一个 AI Safety 相关开源项目中合并了 1+ 个 PR
- [ ] 读完了 "A Mathematical Framework for Transformer Circuits"（Elhage et al.）
