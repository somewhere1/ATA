# 必读论文清单

按阶段和方向整理。⭐ = 强烈推荐优先读。

---

## 阶段一：深度学习基础论文

### Transformer 架构

| 论文 | 作者 | 年份 | 链接 |
|------|------|------|------|
| ⭐ Attention Is All You Need | Vaswani et al. | 2017 | [arXiv](https://arxiv.org/abs/1706.03762) |
| ⭐ BERT | Devlin et al. | 2018 | [arXiv](https://arxiv.org/abs/1810.04805) |
| Language Models are Few-Shot Learners（GPT-3） | Brown et al. | 2020 | [arXiv](https://arxiv.org/abs/2005.14165) |
| ⭐ Scaling Laws for Neural Language Models | Kaplan et al. | 2020 | [arXiv](https://arxiv.org/abs/2001.08361) |
| An Image is Worth 16x16 Words（ViT） | Dosovitskiy et al. | 2020 | [arXiv](https://arxiv.org/abs/2010.11929) |

### 训练技术

| 论文 | 说明 | 链接 |
|------|------|------|
| Adam Optimizer | 标准优化器，必须理解 | [arXiv](https://arxiv.org/abs/1412.6980) |
| Batch Normalization | 深度网络训练关键 | [arXiv](https://arxiv.org/abs/1502.03167) |
| Dropout | 正则化标准方法 | [JMLR](https://jmlr.org/papers/v15/srivastava14a.html) |
| Layer Normalization | Transformer 中使用 | [arXiv](https://arxiv.org/abs/1607.06450) |

---

## 阶段二：AI Safety & Mechanistic Interpretability

### Mech Interp 奠基论文（必读顺序）

| # | 论文 | 作者 | 链接 |
|---|------|------|------|
| 1 | ⭐ A Mathematical Framework for Transformer Circuits | Elhage et al. (Anthropic) | [链接](https://transformer-circuits.pub/2021/framework/index.html) |
| 2 | ⭐ In-context Learning and Induction Heads | Olsson et al. (Anthropic) | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) |
| 3 | ⭐ Interpretability in the Wild: IOI Circuit | Wang et al. | [arXiv](https://arxiv.org/abs/2211.00593) |
| 4 | Softmax Linear Units | Elhage et al. | [链接](https://transformer-circuits.pub/2022/solu/index.html) |
| 5 | ⭐ Toy Models of Superposition | Elhage et al. (Anthropic) | [链接](https://transformer-circuits.pub/2022/toy_model/index.html) |
| 6 | ⭐ Towards Monosemanticity（SAE） | Bricken et al. (Anthropic) | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) |
| 7 | Scaling and Evaluating SAE | Gao et al. (Anthropic) | [arXiv](https://arxiv.org/abs/2406.04093) |
| 8 | Sparse Feature Circuits | Marks et al. | [arXiv](https://arxiv.org/abs/2403.19647) |

### 对齐（Alignment）核心论文

| 论文 | 说明 | 链接 |
|------|------|------|
| ⭐ Constitutional AI | Anthropic 的核心对齐方法 | [arXiv](https://arxiv.org/abs/2212.08073) |
| ⭐ InstructGPT（RLHF） | RLHF 标准实现 | [arXiv](https://arxiv.org/abs/2203.02155) |
| ⭐ DPO（Direct Preference Optimization） | RLHF 替代方法 | [arXiv](https://arxiv.org/abs/2305.18290) |
| RLAIF | AI 反馈替代人类反馈 | [arXiv](https://arxiv.org/abs/2309.00267) |
| Scalable Oversight | 可扩展监督框架 | [arXiv](https://arxiv.org/abs/2211.03540) |
| Concrete Problems in AI Safety | AI Safety 经典综述 | [arXiv](https://arxiv.org/abs/1606.06565) |

### 幻觉与可靠性

| 论文 | 链接 |
|------|------|
| TruthfulQA | [arXiv](https://arxiv.org/abs/2109.07958) |
| Measuring Faithfulness in Chain-of-Thought | [arXiv](https://arxiv.org/abs/2307.13702) |
| Sycophancy to Subterfuge | [arXiv](https://arxiv.org/abs/2406.10162) |

---

## 阶段三：博士阶段深度论文

### Mech Interp 前沿（2024-2025）

| 论文 | 链接 |
|------|------|
| Gemma Scope（SAE on Gemma） | [arXiv](https://arxiv.org/abs/2408.05147) |
| Not All Language Model Features Are Linear | [arXiv](https://arxiv.org/abs/2405.14860) |
| Evaluating Sparse Autoencoders | [arXiv](https://arxiv.org/abs/2411.07180) |
| Anthropic Alignment Faking paper | [arXiv](https://arxiv.org/abs/2412.14093) |

### 评估（Evals）

| 论文 | 链接 |
|------|------|
| MMLU | [arXiv](https://arxiv.org/abs/2009.03300) |
| BIG-Bench | [arXiv](https://arxiv.org/abs/2206.04615) |
| HELM | [arXiv](https://arxiv.org/abs/2211.09110) |
| Dangerous Capability Evaluations（Anthropic） | [Anthropic](https://www.anthropic.com/research) |

### 扩展与涌现

| 论文 | 链接 |
|------|------|
| Emergent Abilities of LLM | [arXiv](https://arxiv.org/abs/2206.07682) |
| Are Emergent Abilities of LLM a Mirage? | [arXiv](https://arxiv.org/abs/2304.15004) |
| Chinchilla（计算优化 Scaling） | [arXiv](https://arxiv.org/abs/2203.15556) |

---

## 如何高效读论文

### 三遍阅读法

**第一遍（5分钟）：了解大意**
- 读 Title + Abstract + Introduction（最后一段）+ Conclusion
- 看图表标题
- 决定是否值得精读

**第二遍（1小时）：理解贡献**
- 完整读正文，跳过证明
- 在每节开头写 1-2 句总结
- 记录不理解的地方

**第三遍（2-4小时）：批判性理解**
- 重现核心实验（用代码）
- 思考：这个方法的 assumption 成立吗？Limitation 是什么？
- 思考：有什么改进方向？

### 读 Mech Interp 论文的注意事项

- 打开 Colab，边读边运行他们的代码
- 重点关注：Activation Patching 实验的设计
- 追问：他们的 causal claim 有多强？控制了哪些 confounds？

---

## 论文管理

推荐使用 **Zotero** 管理文献：
- 下载：https://www.zotero.org/
- 配合 Zotero Connector（浏览器插件）一键保存论文
- 在每篇论文上加 Tag：`阶段1`、`Mech-Interp`、`必读`、`已读` 等
