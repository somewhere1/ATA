# 🏆 顶会投稿策略

---

## 投稿时间线（2025-2026）

| 会议 | 摘要截止 | 论文截止 | 通知 |
|------|----------|----------|------|
| NeurIPS 2025 | 5月 | 5月 | 9月 |
| ICLR 2026 | 9月 | 10月 | 1月 |
| ICML 2026 | 1月 | 1月 | 5月 |

::: tip 策略建议
先投 **Workshop**（门槛低，接受率高），积累审稿反馈后打磨再投主会。
:::

---

## 年度行动计划

| 月份 | 行动 |
|------|------|
| 3月 | 确定论文核心实验，完成初稿 |
| 4月 | 内部 peer review，修改 |
| 5月 | 投 NeurIPS 2025 |
| 6月 | 投 NeurIPS Workshop（截止约6-7月） |
| 7-8月 | Anthropic 暑期实习（如有） |
| 9月 | NeurIPS Workshop 通知 |
| 10月 | ICLR 2026 投稿截止 |

---

## 写好 Abstract 的公式

```
[研究问题] 是一个重要问题，因为 [原因]。
现有方法的局限是 [X]。
我们提出 [方法名]，通过 [核心思路] 解决这个问题。
在 [实验设置] 上，我们取得了 [核心结果]。
```

---

## Reviewer 最看重的

1. **清晰的研究问题**（Introduction 第一段）
2. **扎实的 baseline 对比**
3. **Ablation Study**（证明每个组件都有用）
4. **诚实的 Limitation 讨论**

---

## 如何处理 Rejection

- 读每条 review，找共性问题
- 把主会 rejection 的论文直接投对应 Workshop
- 大多数顶会论文都被 reject 过 2-3次

<WritingExercise
  id="conf-abstract"
  title="顶会 Abstract 写作练习"
  prompt="为一个假想的 Mech Interp 论文写一个 Abstract（150-250 词）。论文主题：用 Sparse Autoencoders 分析 LLM 中的 safety-relevant features。按照上面的公式结构来写。"
>
  <template #example>
    Understanding how large language models internally represent safety-relevant concepts is critical for building trustworthy AI systems. Existing interpretability methods either operate at the behavioral level, missing internal mechanisms, or require extensive manual circuit analysis that does not scale beyond small models. We present SafetyLens, a framework that applies sparse autoencoders to systematically discover and characterize safety-relevant features in language models up to 7B parameters. SafetyLens introduces a targeted training objective that enriches SAE dictionaries with features related to refusal, deception detection, and harmful content recognition. On Llama-2-7B, our method identifies 847 safety-relevant features, 73% of which show causal influence on model safety behavior as verified through activation steering experiments.
  </template>
</WritingExercise>

<Checklist
  id="phase3-conf"
  title="顶会投稿完成清单"
  :items="[
    '确定了年度投稿目标和时间线',
    '完成论文初稿',
    '进行了内部 peer review',
    '投稿了至少 1 个 Workshop',
    '投稿了至少 1 个主会',
    '根据 review 反馈修改了论文'
  ]"
/>
