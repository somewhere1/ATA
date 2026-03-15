# 备选路线：不读博也能进 Anthropic

> 适合人群：工程能力极强、或开源影响力已经较大的人

---

## 路线一：开源 → Research Engineer

Anthropic 的 Research Engineer 岗位与 Research Scientist 同等重要，且对学历要求相对宽松。

### 这条路的关键

**开源项目需要达到的门槛：**
- GitHub Stars > 500，且有持续的用户和贡献者
- 解决了一个 AI Safety / Interpretability 领域的真实痛点
- 代码质量高，有完整文档和测试
- 在社区中被主动引用（论坛、推文、论文）

**典型路径：**
```
开源项目（Mech Interp 工具/RLHF 框架）
    → Alignment Forum 发帖介绍
        → 被 Anthropic 研究者关注
            → 邀请合作 or 直接面试
```

### 技术栈要求

```python
# 必须精通
- PyTorch（能 debug CUDA OOM，理解 autograd）
- Transformers（HuggingFace 生态）
- 分布式训练（至少了解 DDP/FSDP 原理）
- 系统优化（Flash Attention，KV Cache，量化）

# 加分项
- Triton / CUDA kernel 开发
- JAX / XLA
- 大规模数据处理（Spark, Ray）
```

### 项目方向建议

| 项目方向 | 说明 | 参考项目 |
|----------|------|----------|
| **Mech Interp 工具库** | 扩展 TransformerLens，支持更多模型 | TransformerLens |
| **SAE 训练框架** | 更高效的 Sparse Autoencoder 训练 | SAELens |
| **RLHF 基础设施** | 更好的 reward model + 训练流程 | trl, OpenRLHF |
| **Evaluation 框架** | 针对 Safety 的 eval 工具 | lm-eval-harness |
| **可视化工具** | 让研究者更容易理解模型内部 | CircuitsVis |

---

## 路线二：大厂积累 → 跳槽

### 推荐积累的公司（Safety 氛围）

| 公司 | 方向 | 说明 |
|------|------|------|
| **Google DeepMind** | Safety, Interpretability | 有专门的 Safety 团队 |
| **Meta FAIR** | 基础研究 | LLaMA 系列，开源友好 |
| **OpenAI** | Alignment, Safety | 与 Anthropic 文化最接近 |
| **Microsoft Research** | 基础研究 | 与 OpenAI 合作紧密 |

### 跳槽时机

- 在大厂工作 **2-3年** 后跳，太短资历不够
- 期间需要：发表 1+ 篇论文（哪怕是 Technical Report）
- 或者在 Alignment Forum 有可见度
- 参加过至少 1 次 AI Safety 相关项目（MATS / Apart / 等）

### 面试准备（跳槽到 Anthropic）

无论学历如何，Anthropic 的面试都会考：

**技术面试**
- Transformer 内部机制（手推 Attention，解释 Positional Encoding）
- RLHF 原理（Policy Gradient，KL 散度的作用）
- 系统设计（如何高效 serve 大语言模型）
- 代码题（通常与 ML 相关）

**Research 面试（RE 岗）**
- 讲解你参与过的一个项目（从问题到方案到结果）
- 讨论一篇你读过的论文（批判性分析）
- 设计一个实验来验证某个假设

---

## 路线三：独立研究者

适合少数人，门槛极高，但不是不可能。

### 什么样的人可以走这条路

- 有极强的自我驱动力和学习能力
- 能独立发表可被社区认可的研究
- 在 Alignment Forum 有高 Karma 和影响力
- 有一定经济支撑（资金可以来自 grants）

### 资金来源

| 来源 | 说明 | 链接 |
|------|------|------|
| **Long-Term Future Fund** | EA 基金，支持 AI Safety 独立研究 | [链接](https://funds.effectivealtruism.org/funds/far-future) |
| **SFF（Survival and Flourishing Fund）** | 灵活，支持量不一 | [链接](https://survivalandflourishing.fund/) |
| **Open Philanthropy** | 大额资助，竞争激烈 | [链接](https://www.openphilanthropy.org/) |
| **LTFF Regrant Program** | 快速小额资助 | 通过 LTFF |

### 独立研究者的生存法则

1. **在 Alignment Forum 建立声誉**：发高质量帖子，得到 upvotes
2. **找到合作者**：独立不代表孤立，主动找人合作
3. **参加 Workshops**：MATS alumni 社区、SERI、etc.
4. **及早转正**：不要一直独立，3-5年内争取进入机构

---

## 三条路的对比

| | 开源 RE 路线 | 大厂跳槽路线 | 独立研究路线 |
|--|------------|------------|------------|
| **难度** | 高 | 中 | 极高 |
| **时间** | 2-3年 | 4-6年 | 不定 |
| **风险** | 中（项目不一定有影响力） | 低（大厂经历保底） | 极高 |
| **适合** | 工程能力极强 | 求稳健成长 | 极度自驱 |
| **进 Anthropic 概率** | 中 | 中 | 低，但非零 |

---

**无论哪条路，核心都是：在 AI Safety 社区建立可见度和贡献记录。**
