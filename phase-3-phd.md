# 第三阶段：博士期间积累竞争力（3–5年）

> 目标：在 NeurIPS/ICML/ICLR 发表论文；拿到 Anthropic 暑期实习 → return offer

---

## 🎓 博士选择的关键决策

### 导师 > 学校

在 AI Safety 领域，**导师的学术网络 > 学校排名**。
一个与 Anthropic 有直接合作的导师，比一所顶校但导师与 Safety 无关要有价值得多。

### 推荐导师（Alignment / Interp 方向）

| 导师 | 机构 | 研究重点 | 与 Anthropic 关联 |
|------|------|----------|-------------------|
| **Jacob Steinhardt** | UC Berkeley | Alignment, Robustness, Distribution Shift | 强（合著论文，学生入职 Anthropic） |
| **Percy Liang** | Stanford | Foundation Models, HELM Evaluation | 强（CRFM 与 Anthropic 合作） |
| **Dan Hendrycks** | UC Berkeley（CAIS） | Safety, Robustness, MMLU | 强（CAIS 与 Anthropic 联系密切） |
| **Finale Doshi-Velez** | Harvard | Interpretability, Clinical ML | 中 |
| **David Haussler** | UCSC | ML Theory | 中 |
| **Swarat Chaudhuri** | UT Austin | Formal Methods + AI | 中 |

### 选校建议（按 Safety 生态优先）

1. **UC Berkeley**（强烈推荐）：CHAI / CAIS 都在这里，Steinhardt 组校友多入 Anthropic
2. **Stanford**：CRFM、HAI，与 Anthropic 有直接合作
3. **MIT**：偏系统和理论，Safety 方向相对弱，但计算机基础强
4. **CMU**：工程见长，Safety 氛围近年在加强
5. **UW**：Luke Zettlemoyer 组（NLP 强）

---

## 📑 前沿跟进体系

### 每周必读

| 资源 | 频率 | 说明 |
|------|------|------|
| **Anthropic Alignment Blog** | 不定期 | 直接看他们在研究什么 |
| **Alignment Forum（精选）** | 每天10分钟 | 只看 Karma 前10的帖子 |
| **arXiv cs.LG / cs.AI 每日新文** | 每天 | 用 ConnectedPapers 找关联 |
| **CAIS Newsletter** | 每月 | 领域动态摘要 |

### 论文追踪工具

- **ConnectedPapers：** https://www.connectedpapers.com/ — 找一篇论文的相关研究图谱
- **Semantic Scholar：** https://www.semanticscholar.org/ — 追踪引用和被引用
- **Papers With Code：** https://paperswithcode.com/ — 带代码的论文
- **Elicit：** https://elicit.com/ — AI辅助文献综述

---

## 🔬 核心研究方向深度资源

### Mechanistic Interpretability（最推荐）

**为什么：** Anthropic 内部 Interp 团队是核心团队，论文发出来 Anthropic 研究者一定会看到。

**必读论文（完整清单）**

```
基础层（必读）
├── A Mathematical Framework for Transformer Circuits (2021)
├── In-context Learning and Induction Heads (2022)  
├── Interpretability in the Wild: IOI (2022)
└── Softmax Linear Units (2022)

特征与表征层
├── Toy Models of Superposition (2022)
├── Towards Monosemanticity: SAE (2023)
├── Scaling and Evaluating SAE (2024)
└── Sparse Feature Circuits (2024)

电路分析工具
├── Activation Patching Tutorial (Neel Nanda)
├── Path Patching (Wang et al.)
└── Direct Logit Attribution

最新前沿
└── 持续关注 transformer-circuits.pub
```

**工具链**

```bash
# 安装 TransformerLens
pip install transformer_lens

# 安装 SAELens（SAE 训练和分析）
pip install sae_lens

# 安装 CircuitsVis（可视化）
pip install circuitsvis
```

### RLHF & Constitutional AI

**必读论文**

| 论文 | 链接 |
|------|------|
| Constitutional AI（Anthropic 2022） | https://arxiv.org/abs/2212.08073 |
| RLHF（InstructGPT, OpenAI 2022） | https://arxiv.org/abs/2203.02155 |
| DPO（Rafailov et al. 2023） | https://arxiv.org/abs/2305.18290 |
| Scalable Oversight（Bowman et al.） | https://arxiv.org/abs/2211.03540 |
| RLAIF（Lee et al. 2023） | https://arxiv.org/abs/2309.00267 |

**实践工具**

- `trl`（HuggingFace）：https://github.com/huggingface/trl
- `OpenRLHF`：https://github.com/OpenRLHF/OpenRLHF
- `LLaMA-Factory`：https://github.com/hiyouga/LLaMA-Factory

### Evaluation & Red-Teaming

| 资源 | 链接 |
|------|------|
| METR（机器评估与研究） | https://metr.org/ |
| ARC Evals | https://evals.alignment.org/ |
| lm-evaluation-harness | https://github.com/EleutherAI/lm-evaluation-harness |
| HELM（Stanford） | https://crfm.stanford.edu/helm/ |
| BigBench | https://github.com/google/BIG-bench |

---

## 🏆 顶会投稿策略

### 时间线（以 2025-2026 为例）

| 月份 | 行动 |
|------|------|
| 3月 | 确定论文核心实验，完成初稿 |
| 4月 | 内部 peer review，修改 |
| 5月 | 投 ICLR 2026（截止约10月，提前准备） |
| 6月 | 投 NeurIPS 2025 Workshop（截止约6-7月） |
| 7月-8月 | Anthropic 暑期实习（如果拿到） |
| 9月 | NeurIPS Workshop 通知 |
| 10月 | ICLR 2026 投稿截止 |

### 投稿经验

**写好 Abstract 的公式：**
```
[研究问题] 是一个重要问题，因为 [原因]。
现有方法的局限是 [X]。
我们提出 [方法名]，通过 [核心思路] 解决这个问题。
在 [实验设置] 上，我们取得了 [核心结果]。
```

**Reviewer 最看重的：**
1. 清晰的研究问题（Introduction 第一段）
2. 扎实的 baseline 对比
3. Ablation Study（证明每个组件都有用）
4. 诚实的 Limitation 讨论

**如何处理 Rejection：**
- 读每条 review，找共性问题
- 把主会 rejection 的论文直接投对应 Workshop
- 大多数顶会论文都被 reject 过 2-3次

---

## 💼 Anthropic 实习申请详细指南

### 申请时间

- **开放时间：** 通常每年 **11月–1月**（暑期实习）
- **项目时长：** 12周（6月–8月）
- **申请入口：** https://www.anthropic.com/careers

### 岗位类型

| 岗位 | 要求 | 说明 |
|------|------|------|
| **Research Scientist Intern** | 博士生，有顶会论文 | 做研究，产出论文 |
| **Research Engineer Intern** | 博士生/强工程背景 | 实现研究想法，做基础设施 |
| **Alignment Researcher Intern** | 有 Safety 研究背景 | Alignment Science 团队 |

### 申请材料

1. **简历（1页）**：重点放在论文、开源贡献、技术技能
2. **Research Statement（可选但重要）**：你想研究什么，为什么与 Anthropic 匹配
3. **论文样本**：1-2篇最好的工作（即使是 Workshop 论文也算）

### 面试流程（参考）

```
简历筛选（1-2周）
    → 技术电话面试（1-2轮，45-60分钟）
        → Research talk（展示你的研究工作）
            → 最终决定
```

**技术面试准备：**
- 能清晰讲解你的论文（15分钟版本 + 5分钟版本）
- Transformer 内部机制（能在白板上推导 Attention）
- PyTorch 基础（能写 training loop，debug 内存问题）
- 对 Anthropic 近期论文有了解（至少读过 3-5 篇）

### 如何增加被看到的概率

1. **MATS 校友身份**：MATS mentor 有时直接推荐学生
2. **Twitter 可见度**：Anthropic 研究者会关注在 Alignment Forum 活跃的人
3. **引用 Anthropic 论文**：你的论文引用了他们的工作，他们更容易注意到你
4. **直接冷邮件**：找到感兴趣的 Anthropic 研究者，简短介绍你的工作，问是否有实习机会

---

## ✅ 阶段三完成检查表（每年更新）

**博一：**
- [ ] 确定导师和研究方向
- [ ] 完成至少 2 篇 Workshop 投稿
- [ ] 在 Alignment Forum 活跃（月均 2 帖）
- [ ] 申请 Anthropic 实习（即使没有论文也要试）

**博二：**
- [ ] 第一篇主会论文投稿（NeurIPS/ICML/ICLR）
- [ ] 拿到 Anthropic（或同等机构）实习
- [ ] 在社区有一定知名度（被引用，被 mention）

**博三+：**
- [ ] 2+ 篇主会论文
- [ ] Anthropic return offer（或明确的 full-time 路径）
- [ ] 有自己清晰的研究方向和 vision
