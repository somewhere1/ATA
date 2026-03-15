# 🎯 Aim to Anthropic

> 一份为「背景普通、有开源经验」的研究者准备的 Anthropic 进入路线图与学习资源库。

**起点假设：** 无论文 · 开源项目 × 1 · QS 1200+ Master · CET-6

---

## 📋 目录

- [整体路线概览](#整体路线概览)
- [第一阶段：补齐基础（0–12个月）](#第一阶段补齐基础012个月)
- [第二阶段：建立学术可见度（12–24个月）](#第二阶段建立学术可见度1224个月)
- [第三阶段：博士期间积累竞争力（3–5年）](#第三阶段博士期间积累竞争力35年)
- [备选路线（不读博）](#备选路线不读博)
- [关键人物 & 社区](#关键人物--社区)
- [贡献指南](#贡献指南)

---

## 整体路线概览

```
现在的你
（开源项目 · Master在读 · CET-6 · 无论文）
        ↓
第一阶段（0–12个月）
夯实数学 & 深度学习理论 · 扩展开源项目至 AI Safety 方向 · 积累英语学术写作
        ↓
第二阶段（12–24个月）
AI Safety 技术入门 · 发第一篇论文（Workshop / arXiv）· 申请 MATS · 连接研究社区
        ↓
第三阶段（3–5年，博士期间）
顶会论文（NeurIPS / ICML / ICLR）· Anthropic 暑期实习 · 方向专精（Alignment / Interp）
        ↓
进入 Anthropic
（Research Scientist · Research Engineer · Alignment Researcher）
```

> **备选路线：** 若开源影响力极大，可跳过博士直接申 Research Engineer；或先入 Google DeepMind / Meta FAIR 积累后跳槽。

---

## 第一阶段：补齐基础（0–12个月）

### 📐 数学基础

| 资源 | 说明 | 链接 | 费用 |
|------|------|------|------|
| **3Blue1Brown — Essence of Linear Algebra** | 最好的线代直觉建立资源，16集动画 | [YouTube](https://www.youtube.com/@3blue1brown) | 免费 |
| **3Blue1Brown — Neural Networks** | Backprop 可视化，深度学习必看 | [YouTube](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) | 免费 |
| **Mathematics for ML Specialization（Imperial College）** | 线代/多元微积分/PCA，ML导向 | [Coursera](https://www.coursera.org/specializations/mathematics-machine-learning) | 免费旁听 |
| **Boyd & Vandenberghe — Convex Optimization** | 斯坦福教材，理解优化算法理论根基 | [官网 PDF](https://web.stanford.edu/~boyd/cvxbook/) | 免费 |
| **Gilbert Strang — Linear Algebra（MIT 18.06）** | MIT 经典线代课，配合花书效果佳 | [MIT OCW](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) | 免费 |

### 🧠 深度学习核心

| 资源 | 说明 | 链接 | 费用 |
|------|------|------|------|
| **Andrej Karpathy — Zero to Hero** ⭐ | 从头手写 GPT，业内公认最好的 LLM 实战入门 | [karpathy.ai](https://karpathy.ai/zero-to-hero.html) | 免费 |
| **CS229 — Stanford Machine Learning（Andrew Ng）** | 最经典 ML 课程，Lecture Notes 是精华 | [cs229.stanford.edu](https://cs229.stanford.edu/) | 免费 |
| **Deep Learning Specialization（DeepLearning.AI）** | 覆盖 RNN/CNN/Transformers 实战 | [Coursera](https://www.coursera.org/specializations/deep-learning) | 免费旁听 |
| **Goodfellow et al. — Deep Learning（花书）** | 深度学习标准教材，在线版免费 | [deeplearningbook.org](https://www.deeplearningbook.org/) | 免费 |
| **Attention Is All You Need（原论文）** | 必读，Transformer 的起点 | [arXiv](https://arxiv.org/abs/1706.03762) | 免费 |
| **fast.ai — Practical Deep Learning for Coders** | 自顶向下学习法，动手导向 | [fast.ai](https://course.fast.ai/) | 免费 |

### ✍️ 英语学术写作

| 资源 | 说明 |
|------|------|
| **Strunk & White — The Elements of Style** | 英文写作圣经，通读一遍受益终身 |
| **精读顶会论文 + 模仿写摘要** | 每周选一篇 NeurIPS/ICLR 论文，读完用自己的话写摘要，再对比原文 |
| **PapersWithCode** | [paperswithcode.com](https://paperswithcode.com/) — 找高质量论文 |
| **学术写作模板** | 见 [`/resources/writing-templates.md`](./resources/writing-templates.md) |

### 🛠 开源项目方向建议

把现有项目往以下方向靠拢，主动贡献：

- [TransformerLens](https://github.com/TransformerLensOrg/TransformerLens) — Mech Interp 标准工具库
- [trl（Hugging Face）](https://github.com/huggingface/trl) — RLHF 训练库
- [EleutherAI](https://github.com/EleutherAI) — 开源 LLM 研究
- [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) — 模型评估框架

---

## 第二阶段：建立学术可见度（12–24个月）

### 🔬 AI Safety & Alignment 技术入门

| 资源 | 说明 | 链接 | 费用 |
|------|------|------|------|
| **ARENA（Alignment Research Engineer Accelerator）** ⭐ | Anthropic 研究者背书，业内最好的免费技术安全课程 | [arena.education](https://www.arena.education/) | 免费 |
| **Neel Nanda — Mech Interp Getting Started Guide** ⭐ | 前 Anthropic 解释性团队成员，TransformerLens 作者 | [neelnanda.io](https://www.neelnanda.io/mechanistic-interpretability/getting-started) | 免费 |
| **Anthropic Transformer Circuits 系列** | Mech Interp 奠基论文，从第一篇开始读 | [transformer-circuits.pub](https://transformer-circuits.pub/) | 免费 |
| **TransformerLens 文档 & Tutorials** | Colab 可直接运行，动手做 Interp 实验 | [GitHub](https://github.com/TransformerLensOrg/TransformerLens) | 免费 |
| **BlueDot Impact — AI Safety Fundamentals** | 对齐+治理方向，有 cohort 模式可结交全球同路人 | [aisafetyfundamentals.com](https://aisafetyfundamentals.com/) | 免费 |
| **80,000 Hours — 67个AI Safety资源** | 完整资源聚合 + 职业建议 + 1-on-1 顾问 | [80000hours.org](https://80000hours.org/2025/06/technical-ai-safety-upskilling-resources/) | 免费 |

### 📄 第一篇论文：策略与步骤

**推荐路径：** `Apart Hackathon 雏形 → arXiv 预印本 → NeurIPS/ICLR Workshop → 主会`

| 资源 | 说明 | 链接 |
|------|------|------|
| **Apart Research — Alignment Hackathons** ⭐ | 几天内产出 Workshop 级别论文雏形，适合第一次合作写作 | [apartresearch.com](https://www.apartresearch.com/) |
| **Alignment Forum — 发研究笔记** | 发帖分享研究笔记是进入社区最有效的方式 | [alignmentforum.org](https://www.alignmentforum.org/) |
| **arXiv cs.LG / cs.AI** | 最低门槛发表渠道，能让圈内人看到你的工作 | [arxiv.org](https://arxiv.org/list/cs.LG/recent) |
| **Open Problems in Mech Interp（Sharkey et al.）** | 找论文选题的最好参考，Anthropic 背书 | [LessWrong](https://www.lesswrong.com/) |

**选题建议：**
- 复现一篇已有 Interp 论文 → 加入新发现 → 发 Workshop
- 在你的开源项目基础上做 Empirical paper（有实验结果比纯理论容易发）
- Mech Interp 方向：用 TransformerLens 发现一个新 circuit

### 🎯 关键项目申请

| 项目 | 说明 | 申请时间 | 链接 |
|------|------|----------|------|
| **MATS（ML Alignment Theory Scholars）** ⭐ | 伯克利10周 mentorship，300+校友，多人直接进入 Anthropic | 每年2月/9月 | [matsprogram.org](https://www.matsprogram.org/) |
| **SPAR（Student Paced Alignment Research）** | 远程配对导师项目，适合还在学校的同学 | 常年开放 | [sparai.org](https://sparai.org/) |
| **Redwood Research Internship** | AI Safety 方向研究实习 | 不定期 | [redwoodresearch.org](https://www.redwoodresearch.org/) |

### 🌍 博士申请目标院校

**Alignment / Interpretability 方向导师推荐：**

| 导师 | 机构 | 方向 |
|------|------|------|
| Jacob Steinhardt | UC Berkeley | Alignment, Robustness |
| Percy Liang | Stanford | Foundation Models, Evaluation |
| Dan Hendrycks | UC Berkeley（CAIS） | Safety, Robustness |
| Pieter Abbeel | UC Berkeley | RL, Robotics |
| Finale Doshi-Velez | Harvard | Interpretability |
| Swarat Chaudhuri | UT Austin | Formal Verification + AI |

---

## 第三阶段：博士期间积累竞争力（3–5年）

### 📑 前沿跟进

| 资源 | 说明 | 链接 |
|------|------|------|
| **Anthropic Alignment Science Blog** ⭐ | 列出了 Anthropic 最重要的 open problems，论文选题参考 | [alignment.anthropic.com](https://alignment.anthropic.com/2025/recommended-directions/) |
| **Anthropic Interpretability Team Blog** | Mech Interp 最新进展 | [transformer-circuits.pub](https://transformer-circuits.pub/) |
| **CAIS Newsletter** | AI Safety 领域每周动态 | [safe.ai/newsletter](https://www.safe.ai/newsletter) |
| **Alignment Forum + LessWrong** | 研究者日常讨论 | [alignmentforum.org](https://www.alignmentforum.org/) |
| **PapersWithCode** | 跟踪 State of the Art | [paperswithcode.com](https://paperswithcode.com/) |

### 🔬 核心研究方向资源

**Mechanistic Interpretability**
- [Anthropic Transformer Circuits 全系列](https://transformer-circuits.pub/)
- [Sparse Autoencoders 论文（Cunningham et al.）](https://arxiv.org/abs/2309.08600)
- [Neel Nanda 的 Mech Interp 综述](https://www.neelnanda.io/mechanistic-interpretability/overview)
- [Open Problems in Mech Interp](https://arxiv.org/abs/2501.16496)

**RLHF & Alignment**
- [Constitutional AI 论文（Anthropic）](https://arxiv.org/abs/2212.08073)
- [InstructGPT 论文（OpenAI）](https://arxiv.org/abs/2203.02155)
- [trl 库](https://github.com/huggingface/trl)
- [Scalable Oversight 论文（Bowman et al.）](https://arxiv.org/abs/2211.03540)

**Evaluation & Red-Teaming**
- [METR（机器评估与研究）](https://metr.org/)
- [Evals for AI Safety（Anthropic）](https://www.anthropic.com/research)

### 🏆 顶会投稿时间线

| 会议 | 摘要截止 | 论文截止 | 通知 |
|------|----------|----------|------|
| NeurIPS 2025 | 5月 | 5月 | 9月 |
| ICLR 2026 | 9月 | 10月 | 1月 |
| ICML 2026 | 1月 | 1月 | 5月 |

> 💡 先投 **Workshop**（门槛低，接受率高），积累审稿反馈后打磨再投主会

### 💼 Anthropic 实习申请

- **时间：** 每年 11月–1月 开放申请（暑期实习）
- **申请链接：** [anthropic.com/careers](https://www.anthropic.com/careers)
- **建议时机：** 博二/博三，有至少 1 篇 Workshop 论文
- **最强背景：** MATS 校友 + Mech Interp / Alignment 方向论文

---

## 备选路线（不读博）

如果工程能力顶尖或开源影响力极大：

1. **直接申 Research Engineer**：Anthropic 对此岗位学历要求相对宽松，看实际工程贡献
2. **先进大厂积累**：Google DeepMind / Meta FAIR / OpenAI 2–3年 → 跳槽 Anthropic
3. **独立研究者路线**：在 Alignment Forum 持续发帖 + arXiv 发文 → 通过开源贡献建立声誉

---

## 关键人物 & 社区

### 必须关注的研究者（Twitter/X）

| 姓名 | 机构 | 方向 |
|------|------|------|
| [@NeelNanda5](https://twitter.com/NeelNanda5) | DeepMind | Mech Interp |
| [@ch402](https://twitter.com/ch402) | Anthropic | Interpretability |
| [@paulfchristiano](https://twitter.com/paulfchristiano) | ARC | Alignment |
| [@jacobsteinhardt](https://twitter.com/jsteinhardt) | UC Berkeley | Safety |
| [@GaryMarcus](https://twitter.com/GaryMarcus) | NYU | AI Critique |
| [@karpathy](https://twitter.com/karpathy) | 独立 | LLM Engineering |

### 核心社区

| 社区 | 平台 | 说明 |
|------|------|------|
| Alignment Forum | 论坛 | AI Safety 研究者最集中的地方 |
| EleutherAI Discord | Discord | 开源 LLM 研究社区 |
| AI Safety Discord | Discord | 入门者友好 |
| LessWrong | 论坛 | 理性主义 & AI Safety 讨论 |

---

## 贡献指南

欢迎 PR！特别需要：
- 补充新的学习资源
- 更新顶会截止日期
- 添加成功案例（保护隐私）
- 翻译成其他语言

请查看 [CONTRIBUTING.md](./CONTRIBUTING.md)

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐**

*路虽远，行则将至。*

</div>
