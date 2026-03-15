# 🔬 核心研究方向深度资源

---

## Mechanistic Interpretability（最推荐）

**为什么：** Anthropic 内部 Interp 团队是核心团队，论文发出来 Anthropic 研究者一定会看到。

### 必读论文（完整清单）

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

### 工具链

```bash
pip install transformer_lens   # TransformerLens
pip install sae_lens            # SAE 训练和分析
pip install circuitsvis         # 可视化
```

---

## RLHF & Constitutional AI

| 论文 | 链接 |
|------|------|
| Constitutional AI（Anthropic 2022） | [arXiv](https://arxiv.org/abs/2212.08073) |
| RLHF（InstructGPT, OpenAI 2022） | [arXiv](https://arxiv.org/abs/2203.02155) |
| DPO（Rafailov et al. 2023） | [arXiv](https://arxiv.org/abs/2305.18290) |
| Scalable Oversight（Bowman et al.） | [arXiv](https://arxiv.org/abs/2211.03540) |
| RLAIF（Lee et al. 2023） | [arXiv](https://arxiv.org/abs/2309.00267) |

**实践工具：**

<ColabLink title="trl（HuggingFace）" description="RLHF/DPO 训练库" href="https://github.com/huggingface/trl" />
<ColabLink title="OpenRLHF" description="开源 RLHF 训练框架" href="https://github.com/OpenRLHF/OpenRLHF" />
<ColabLink title="LLaMA-Factory" description="LLM 微调工厂" href="https://github.com/hiyouga/LLaMA-Factory" />

---

## Evaluation & Red-Teaming

| 资源 | 链接 |
|------|------|
| METR（机器评估与研究） | [metr.org](https://metr.org/) |
| ARC Evals | [evals.alignment.org](https://evals.alignment.org/) |
| lm-evaluation-harness | [GitHub](https://github.com/EleutherAI/lm-evaluation-harness) |
| HELM（Stanford） | [crfm.stanford.edu/helm](https://crfm.stanford.edu/helm/) |
| BigBench | [GitHub](https://github.com/google/BIG-bench) |

---

## 前沿跟进体系

| 资源 | 频率 | 说明 |
|------|------|------|
| [Anthropic Alignment Blog](https://alignment.anthropic.com/2025/recommended-directions/) | 不定期 | 直接看 Anthropic 的 open problems |
| [Alignment Forum](https://www.alignmentforum.org/) | 每天10分钟 | 只看 Karma 前10的帖子 |
| [CAIS Newsletter](https://www.safe.ai/newsletter) | 每月 | 领域动态摘要 |
| [ConnectedPapers](https://www.connectedpapers.com/) | 按需 | 找论文的相关研究图谱 |

<Quiz
  question="DPO 相比传统 RLHF 的主要优势是什么？"
  :options="[
    '需要更多的人类标注数据',
    '不需要训练一个独立的 reward model，直接从偏好数据优化策略',
    '只能用于小模型',
    '训练结果更不稳定'
  ]"
  :answer="1"
  explanation="DPO（Direct Preference Optimization）跳过了训练 reward model 的步骤，直接用偏好数据对策略进行优化。这简化了训练流程，减少了超参数调节，且在很多场景下效果与 RLHF 相当甚至更好。"
/>

<Quiz
  question="以下哪个是 Anthropic 的核心对齐方法？"
  :options="[
    'RLHF（纯人类反馈）',
    'Constitutional AI（基于规则的自我改进）',
    'PPO（近端策略优化）',
    'Supervised Fine-tuning'
  ]"
  :answer="1"
  explanation="Constitutional AI 是 Anthropic 提出的核心方法：用一组原则（constitution）指导模型自我改进，减少对人类标注的依赖。这与 OpenAI 的 RLHF 路线不同，体现了 Anthropic 'AI 辅助 AI 对齐' 的研究哲学。"
/>
