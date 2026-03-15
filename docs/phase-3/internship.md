# 💼 Anthropic 实习申请详细指南

---

## 申请信息

| 项目 | 详情 |
|------|------|
| **开放时间** | 每年 11月–1月（暑期实习） |
| **项目时长** | 12周（6月–8月） |
| **申请入口** | [anthropic.com/careers](https://www.anthropic.com/careers) |
| **建议时机** | 博二/博三，至少 1 篇 Workshop 论文 |

---

## 岗位类型

| 岗位 | 要求 | 说明 |
|------|------|------|
| **Research Scientist Intern** | 博士生，有顶会论文 | 做研究，产出论文 |
| **Research Engineer Intern** | 博士生/强工程背景 | 实现研究想法，做基础设施 |
| **Alignment Researcher Intern** | 有 Safety 研究背景 | Alignment Science 团队 |

---

## 申请材料

1. **简历（1页）**：重点放在论文、开源贡献、技术技能
2. **Research Statement**（可选但重要）：你想研究什么，为什么与 Anthropic 匹配
3. **论文样本**：1-2篇最好的工作（Workshop 论文也算）

---

## 面试流程

```
简历筛选（1-2周）
    → 技术电话面试（1-2轮，45-60分钟）
        → Research talk（展示你的研究工作）
            → 最终决定
```

### 技术面试准备

- 能清晰讲解你的论文（15分钟版本 + 5分钟版本）
- Transformer 内部机制（能在白板上推导 Attention）
- PyTorch 基础（能写 training loop，debug 内存问题）
- 对 Anthropic 近期论文有了解（至少读过 3-5 篇）

---

## 如何增加被看到的概率

| 策略 | 说明 |
|------|------|
| **MATS 校友身份** | MATS mentor 有时直接推荐学生 |
| **Twitter 可见度** | Anthropic 研究者会关注在 AF 活跃的人 |
| **引用 Anthropic 论文** | 你的论文引用他们的工作，更容易被注意到 |
| **直接冷邮件** | 找感兴趣的研究者，简短介绍你的工作 |

---

## 知识检测

<Quiz
  question="以下哪个背景组合对 Anthropic 实习申请最有帮助？"
  :options="[
    'Top 10 CS PhD + 多篇 NLP 论文（非 Safety 方向）',
    'MATS 校友 + 1 篇 Mech Interp Workshop 论文 + AF 活跃',
    '10年工业经验 + 多个大型项目',
    '数学博士 + 纯理论研究'
  ]"
  :answer="1"
  explanation="Anthropic 最看重的是：(1) 直接与 AI Safety/Alignment 相关的研究经验，(2) 在 Safety 社区的可见度，(3) 有推荐人背书（MATS mentor）。MATS + Mech Interp 论文 + Alignment Forum 活跃 是最强的组合，比非 Safety 方向的高产更有优势。"
/>

<Checklist
  id="phase3-internship"
  title="Anthropic 实习申请清单"
  :items="[
    '准备了 1 页简历（突出论文和开源贡献）',
    '写了 Research Statement',
    '准备了 15 分钟版 Research Talk',
    '读了 5+ 篇 Anthropic 近期论文',
    '能在白板上推导 Self-Attention',
    '提交了实习申请'
  ]"
/>
