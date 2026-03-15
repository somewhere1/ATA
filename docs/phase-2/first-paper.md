# 📄 第一篇论文：完整攻略

---

## 选题策略

**最容易出结果的方向（按难度从低到高）：**

| 难度 | 策略 | 说明 |
|------|------|------|
| ⭐ | 复现 + 扩展 | 复现一篇 Mech Interp 论文，加一个新实验或新发现 |
| ⭐⭐ | 新模型分析 | 把已有 Interp 技术应用到新模型（如 Qwen/Llama） |
| ⭐⭐⭐ | 新 Circuit 发现 | 用 TransformerLens 找到一个新的 attention circuit |
| ⭐⭐⭐⭐ | 方法改进 | 改进 Activation Patching / SAE 的某个细节 |

---

## 发表渠道（按门槛从低到高）

| 渠道 | 门槛 | 速度 | 建议 |
|------|------|------|------|
| **Alignment Forum / LessWrong** | 无 | 即时 | 先发研究笔记，测试想法 |
| **arXiv 预印本** | 极低 | 1天 | 正式化你的工作 |
| **Workshop（NeurIPS/ICML/ICLR）** | 低 | 3个月 | 第一篇正式论文的目标 |
| **主会（NeurIPS/ICML/ICLR）** | 高（约25%接受率） | 6个月 | 博士期间的主要目标 |

---

## 重要 Workshop（2025-2026）

| Workshop | 挂靠会议 | 方向 |
|----------|----------|------|
| ATTRIB | NeurIPS | Interpretability |
| TrustNLP | ACL | NLP Safety |
| SoLaR | NeurIPS | Alignment |
| AGI Safety | ICML/NeurIPS | Broad Safety |

<ColabLink
  title="Apart Research — Alignment Hackathons"
  description="几天内产出 Workshop 级别论文雏形，适合第一次合作写作"
  href="https://www.apartresearch.com/"
/>

---

## 推荐路径

```
Apart Hackathon 雏形 → arXiv 预印本 → NeurIPS/ICLR Workshop → 主会
```

---

## 论文写作工具

| 工具 | 用途 |
|------|------|
| **Overleaf** | LaTeX 写作（直接用 NeurIPS/ICLR 官方模板） |
| **Zotero** | 参考文献管理 |
| **Weights & Biases** | 实验追踪与可视化 |
| **matplotlib + seaborn** | 论文图表 |

---

## 知识检测

<Quiz
  question="对于第一篇论文，最推荐的策略是什么？"
  :options="[
    '尝试提出一个全新的理论框架',
    '复现一篇已有论文，在其基础上加入新发现',
    '直接投顶会主会，一步到位',
    '先写一本教材，再从中提取论文'
  ]"
  :answer="1"
  explanation="复现加扩展是最稳妥的第一篇论文策略：你已经有了可参考的方法和基线结果，只需要在此基础上添加新的实验或发现。这比从零开始一个全新方向风险低得多。"
/>

<WritingExercise
  id="paper-research-note"
  title="Alignment Forum 研究笔记练习"
  prompt="假设你复现了 IOI Circuit 论文的实验，在 GPT-2 Small 上成功识别了 Indirect Object Identification circuit。写一篇 200-300 词的研究笔记，说明你做了什么、发现了什么、以及你不确定的地方。"
>
  <template #example>
    我复现了 Wang et al. (2022) 的 IOI（Indirect Object Identification）实验，使用 TransformerLens 在 GPT-2 Small 上进行。主要发现：成功识别了论文中描述的 26 个 attention heads 中的 23 个，component overlap 为 88%。Name Mover Heads 的行为与论文一致，但 S-Inhibition Heads 的 patching 效果略弱于预期。一个有趣的观察：在我的实验中，Head 9.6 表现出比论文报告更强的 backup 行为——当 Head 9.9 被 ablated 时，9.6 的贡献增加了约 15%。不确定的地方：(1) 我使用的 prompt 模板与原论文略有不同，(2) S-Inhibition Heads 的较弱表现是否因为模型版本差异。下一步：计划在 GPT-2 Medium 上重复实验。
  </template>
</WritingExercise>

<Checklist
  id="phase2-paper"
  title="第一篇论文完成清单"
  :items="[
    '确定了研究选题（复现+扩展 or 新分析）',
    '完成了核心实验',
    '在 Alignment Forum 发了研究笔记',
    '参加了 Apart Research Hackathon',
    '在 arXiv 上传了预印本',
    '投稿了至少一个 Workshop'
  ]"
/>
