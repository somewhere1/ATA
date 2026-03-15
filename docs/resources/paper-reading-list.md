# 必读论文清单

> 按阶段和方向整理。⭐ = 强烈推荐优先读。

---

## 阶段一：深度学习基础论文

### Transformer 架构

| 论文 | 作者 | 年份 | 链接 |
|------|------|------|------|
| ⭐ Attention Is All You Need | Vaswani et al. | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |
| ⭐ BERT | Devlin et al. | 2018 | [arXiv](https://arxiv.org/abs/1810.04805) |
| GPT-3 | Brown et al. | 2020 | [arXiv](https://arxiv.org/abs/2005.14165) |
| ⭐ Scaling Laws | Kaplan et al. | 2020 | [arXiv](https://arxiv.org/abs/2001.08361) |
| ViT | Dosovitskiy et al. | 2020 | [arXiv](https://arxiv.org/abs/2010.11929) |

### 训练技术

| 论文 | 说明 | 链接 |
|------|------|------|
| Adam | 标准优化器 | [arXiv](https://arxiv.org/abs/1412.6980) |
| Batch Normalization | 深度网络训练关键 | [arXiv](https://arxiv.org/abs/1502.03167) |
| Dropout | 正则化标准方法 | [JMLR](https://jmlr.org/papers/v15/srivastava14a.html) |
| Layer Normalization | Transformer 中使用 | [arXiv](https://arxiv.org/abs/1607.06450) |

---

## 阶段二：AI Safety & Mech Interp

### Mech Interp 奠基论文（必读顺序）

| # | 论文 | 链接 |
|---|------|------|
| 1 | ⭐ A Mathematical Framework for Transformer Circuits | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| 2 | ⭐ In-context Learning and Induction Heads | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| 3 | ⭐ Interpretability in the Wild: IOI Circuit | [arXiv](https://arxiv.org/abs/2211.00593) |
| 4 | Softmax Linear Units | [链接](https://transformer-circuits.pub/2022/solu/index.html) |
| 5 | ⭐ Toy Models of Superposition | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| 6 | ⭐ Towards Monosemanticity（SAE） | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| 7 | Scaling and Evaluating SAE | [arXiv](https://arxiv.org/abs/2406.04093) |
| 8 | Sparse Feature Circuits | [arXiv](https://arxiv.org/abs/2403.19647) |

### 对齐核心论文

| 论文 | 链接 |
|------|------|
| ⭐ Constitutional AI | [arXiv](https://arxiv.org/abs/2212.08073) |
| ⭐ InstructGPT（RLHF） | [arXiv](https://arxiv.org/abs/2203.02155) |
| ⭐ DPO | [arXiv](https://arxiv.org/abs/2305.18290) |
| RLAIF | [arXiv](https://arxiv.org/abs/2309.00267) |
| Scalable Oversight | [arXiv](https://arxiv.org/abs/2211.03540) |
| Concrete Problems in AI Safety | [arXiv](https://arxiv.org/abs/1606.06565) |

---

## 阶段三：博士阶段前沿

### Mech Interp 前沿（2024-2025）

| 论文 | 链接 |
|------|------|
| Gemma Scope（SAE on Gemma） | [arXiv](https://arxiv.org/abs/2408.05147) |
| Not All Language Model Features Are Linear | [arXiv](https://arxiv.org/abs/2405.14860) |
| Evaluating Sparse Autoencoders | [arXiv](https://arxiv.org/abs/2411.07180) |
| Alignment Faking（Anthropic） | [arXiv](https://arxiv.org/abs/2412.14093) |

### 评估（Evals）

| 论文 | 链接 |
|------|------|
| MMLU | [arXiv](https://arxiv.org/abs/2009.03300) |
| BIG-Bench | [arXiv](https://arxiv.org/abs/2206.04615) |
| HELM | [arXiv](https://arxiv.org/abs/2211.09110) |

---

## 如何高效读论文

### 三遍阅读法

**第一遍（5分钟）：** 读 Title + Abstract + Introduction（最后一段）+ Conclusion。看图表标题。决定是否值得精读。

**第二遍（1小时）：** 完整读正文，跳过证明。在每节开头写 1-2 句总结。记录不理解的地方。

**第三遍（2-4小时）：** 重现核心实验（用代码）。思考 assumption 和 limitation。思考改进方向。

::: tip 读 Mech Interp 论文的注意事项
打开 Colab，边读边运行代码。重点关注 Activation Patching 实验的设计。追问：causal claim 有多强？控制了哪些 confounds？
:::

---

## 论文管理

推荐使用 **Zotero** 管理文献。在每篇论文上加 Tag：`阶段1`、`Mech-Interp`、`必读`、`已读` 等。

<ColabLink title="Zotero" description="免费文献管理工具，配合浏览器插件一键保存论文" href="https://www.zotero.org/" />
