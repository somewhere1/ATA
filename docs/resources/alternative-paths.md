# 备选路线：不读博也能进 Anthropic

> 适合人群：工程能力极强、或开源影响力已经较大的人

---

## 路线一：开源 → Research Engineer

Anthropic 的 Research Engineer 岗位与 Research Scientist 同等重要，且对学历要求相对宽松。

### 开源项目门槛

- GitHub Stars > 500，且有持续的用户和贡献者
- 解决了 AI Safety / Interpretability 领域的真实痛点
- 代码质量高，有完整文档和测试
- 在社区中被主动引用

### 典型路径

```
开源项目（Mech Interp 工具/RLHF 框架）
    → Alignment Forum 发帖介绍
        → 被 Anthropic 研究者关注
            → 邀请合作 or 直接面试
```

### 项目方向建议

| 方向 | 参考项目 |
|------|----------|
| Mech Interp 工具库 | TransformerLens |
| SAE 训练框架 | SAELens |
| RLHF 基础设施 | trl, OpenRLHF |
| Evaluation 框架 | lm-eval-harness |
| 可视化工具 | CircuitsVis |

---

## 路线二：大厂积累 → 跳槽

### 推荐积累的公司

| 公司 | 方向 |
|------|------|
| **Google DeepMind** | Safety, Interpretability |
| **Meta FAIR** | 基础研究，LLaMA 系列 |
| **OpenAI** | Alignment, Safety |
| **Microsoft Research** | 基础研究 |

### 跳槽时机

- 工作 **2-3年** 后跳，太短资历不够
- 期间需要发表 1+ 篇论文
- 或在 Alignment Forum 有可见度
- 参加过至少 1 次 AI Safety 相关项目

---

## 路线三：独立研究者

门槛极高，但不是不可能。

### 资金来源

| 来源 | 说明 |
|------|------|
| Long-Term Future Fund | EA 基金，支持 AI Safety 独立研究 |
| SFF | 灵活，支持量不一 |
| Open Philanthropy | 大额资助，竞争激烈 |

### 生存法则

1. 在 Alignment Forum 建立声誉
2. 找到合作者（独立 ≠ 孤立）
3. 参加 Workshops（MATS alumni 社区等）
4. 3-5年内争取进入机构

---

## 三条路的对比

| | 开源 RE 路线 | 大厂跳槽路线 | 独立研究路线 |
|--|------------|------------|------------|
| **难度** | 高 | 中 | 极高 |
| **时间** | 2-3年 | 4-6年 | 不定 |
| **风险** | 中 | 低（大厂保底） | 极高 |
| **适合** | 工程能力极强 | 求稳健成长 | 极度自驱 |

---

**无论哪条路，核心都是：在 AI Safety 社区建立可见度和贡献记录。**

<Quiz
  question="如果你工程能力很强但没有博士学位，进入 Anthropic 的最佳策略是什么？"
  :options="[
    '直接投简历等面试通知',
    '创建有影响力的 AI Safety 开源项目 + 在 Alignment Forum 建立声誉',
    '先读一个博士学位',
    '在非 AI 公司积累 10 年经验'
  ]"
  :answer="1"
  explanation="对于工程能力强的人，创建解决 AI Safety 真实痛点的开源项目（如 Mech Interp 工具库），并在 Alignment Forum 展示你的工作，是被 Anthropic 注意到的最有效方式。Research Engineer 岗位看的是实际贡献，不是学历。"
/>
