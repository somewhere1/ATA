# 第二阶段：建立学术可见度（12–24个月）

> 目标：完成 ARENA 课程；在 Alignment Forum 发帖；发第一篇论文（Workshop 或 arXiv）；申请 MATS

---

## 🔬 AI Safety 技术入门路径

### 推荐顺序

```
ARENA Chapter 0-1（基础 + Mech Interp）
    → Anthropic Transformer Circuits 系列论文
        → 用 TransformerLens 做第一个 Mech Interp 项目
            → 在 Alignment Forum 发研究笔记
                → 申请 MATS
```

### 核心课程

#### ARENA（最重要）⭐⭐⭐

- **链接：** https://www.arena.education/
- **内容：**
  - Chapter 0：PyTorch & ML 基础
  - Chapter 1：Transformer & Mechanistic Interpretability（Anthropic 团队成员背书）
  - Chapter 2：RL & RLHF
  - Chapter 3：Training at Scale
- **建议：** Chapter 0 → Chapter 1 是核心，其余按兴趣选修
- **注意：** 在 BlueDot Impact 平台上有带 cohort 版本，可以结交同伴

#### AI Safety Fundamentals

- **链接：** https://aisafetyfundamentals.com/
- **Alignment Track：** 技术对齐方向，8周课程
- **Governance Track：** 政策方向，可选修
- **建议：** 选 Alignment Track，有 cohort 可以认识全球同路人

### Mechanistic Interpretability 专项

#### 入门顺序

1. **Neel Nanda Getting Started Guide**
   - 链接：https://www.neelnanda.io/mechanistic-interpretability/getting-started
   - 这是 Mech Interp 入门最权威的指南

2. **TransformerLens Tutorial（Colab）**
   - 链接：https://colab.research.google.com/github/TransformerLensOrg/TransformerLens/blob/main/demos/Main_Demo.ipynb
   - 直接在 Colab 运行，不需要本地 GPU

3. **Anthropic Transformer Circuits 必读论文**

| 论文 | 链接 | 说明 |
|------|------|------|
| A Mathematical Framework for Transformer Circuits（Elhage et al. 2021） | [链接](https://transformer-circuits.pub/2021/framework/index.html) | Mech Interp 奠基文章，必读 |
| In-context Learning and Induction Heads（Olsson et al. 2022） | [链接](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html) | 理解 Induction Heads |
| Interpretability in the Wild（Wang et al. 2022） | [arXiv](https://arxiv.org/abs/2211.00593) | IOI Circuit，标准技术示范 |
| Towards Monosemanticity（Bricken et al. 2023） | [链接](https://transformer-circuits.pub/2023/monosemantic-features/index.html) | SAE 方向奠基 |
| Scaling and Evaluating Sparse Autoencoders（Gao et al. 2024） | [arXiv](https://arxiv.org/abs/2406.04093) | SAE 最新进展 |

4. **ARENA Chapter 1 Exercises**
   - 涵盖：TransformerLens、Induction Heads、Superposition、SAE
   - GitHub：https://github.com/callummcdougall/ARENA_2.0

---

## 📄 第一篇论文：完整攻略

### 选题策略

**最容易出结果的方向（按难度从低到高）：**

1. **复现 + 扩展**：复现一篇 Mech Interp 论文，加一个新实验或新发现
2. **新模型上的分析**：把已有 Interp 技术应用到新模型（如 Qwen/Llama）
3. **新 Circuit 发现**：用 TransformerLens 找到一个新的 attention circuit
4. **方法改进**：改进 Activation Patching / SAE 的某个细节

### 发表渠道（按门槛从低到高）

| 渠道 | 门槛 | 速度 | 建议 |
|------|------|------|------|
| **Alignment Forum / LessWrong** | 无 | 即时 | 先发研究笔记，测试想法 |
| **arXiv 预印本** | 极低（需要背书人） | 1天 | 正式化你的工作 |
| **Workshop（NeurIPS/ICML/ICLR）** | 低 | 3个月 | 第一篇正式论文的目标 |
| **主会（NeurIPS/ICML/ICLR）** | 高（~25%接受率） | 6个月 | 博士期间的主要目标 |

### 重要 Workshop（2025-2026）

| Workshop | 挂靠会议 | 方向 |
|----------|----------|------|
| ATTRIB（可归因性和可解释性） | NeurIPS | Interp |
| TrustNLP | ACL | NLP Safety |
| SoLaR（Socially Responsible LM） | NeurIPS | Alignment |
| AGI Safety | ICML/NeurIPS | Broad Safety |

> 👉 查找最新 Workshop：https://neurips.cc/Conferences/2025/CallForWorkshops

### 论文写作工具

- **LaTeX 模板：** 直接用 NeurIPS/ICLR 官方模板（Overleaf 有现成的）
- **参考文献管理：** Zotero（免费）
- **实验可视化：** matplotlib + seaborn，或 Weights & Biases
- **论文检查清单：** 见 [`/resources/paper-checklist.md`](../resources/paper-checklist.md)

---

## 🎯 MATS 申请全攻略

**MATS（ML Alignment Theory Scholars）** 是进入 Anthropic 最强的跳板之一。

### 基本信息

- **时长：** 10周，在伯克利线下进行
- **待遇：** 提供住宿、生活费、计算资源（$12k compute）
- **申请时间：** 每年2月（夏季项目）和9月（冬季项目）
- **链接：** https://www.matsprogram.org/

### 申请材料准备

**技术写作样本（最重要）**
- 一篇 Alignment Forum 帖子 或 arXiv 预印本
- 如果没有论文，用 ARENA 的完成项目代替
- 重点展示：你能独立推进一个研究问题

**导师匹配**
- MATS 有不同 mentor 方向（Interp / Alignment / Evals / Governance）
- 申请前研究每位 mentor 的论文，在 SOP 中说明匹配理由
- Interp 方向 mentor 通常与 Anthropic 有最强连接

**SOP 写作重点**
1. 你当前的研究问题是什么（要具体）
2. 你的背景中哪些最相关（着重开源项目和 ARENA 经历）
3. 为什么现在（不是以后）做 AI Safety

---

## 🌍 社区活跃度策略

### Twitter/X 活跃

**必须关注：**
- @NeelNanda5（Mech Interp 领域最重要的声音之一）
- @ch402（Chris Olah，Anthropic 解释性团队）
- @paulfchristiano（Paul Christiano，ARC，Scalable Oversight）
- @jacobsteinhardt（Jacob Steinhardt，UCB，Safety + Robustness）

**活跃方式：**
- 每周1-2条关于你正在研究内容的推文
- 转发并添加有见解的评论（不要空转）
- 把你发的 arXiv 或 Alignment Forum 帖子在这里推广

### Alignment Forum 发帖

**发什么：**
- 论文复现笔记（"我复现了 X 论文，发现了 Y"）
- 研究进展更新（"我在研究 Z，遇到了这个问题"）
- 问题/困惑（社区非常乐于帮助认真的新人）

**发帖频率：** 每月至少 1 篇，质量 > 数量

### Discord 社区

| 社区 | 邀请链接 | 说明 |
|------|----------|------|
| EleutherAI Discord | https://discord.gg/zBGx3azzUn | 开源 LLM 研究最活跃的地方 |
| AI Safety Discord | 在 80000hours.org 可申请 | 新人友好 |
| ARENA Discord | 注册 ARENA 后获得 | 课程配套 |

---

## ✅ 阶段二完成检查表

- [ ] 完成 ARENA Chapter 0 + Chapter 1
- [ ] 用 TransformerLens 做完一个完整的 Mech Interp 小项目
- [ ] 在 Alignment Forum 发了 2+ 篇研究笔记
- [ ] 参加了至少 1 次 Apart Research Hackathon
- [ ] 在 arXiv 或 Workshop 上有了第一篇论文 / 预印本
- [ ] 向 MATS 提交了申请（无论是否录取）
- [ ] 在 Twitter 上有了基本的学术存在感
- [ ] 开始关注 2-3 所目标博士院校的招生信息
