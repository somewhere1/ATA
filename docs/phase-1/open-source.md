# 🛠 开源贡献策略

> 把现有项目往 AI Safety 方向靠拢，主动贡献。

---

## 选择方向

**优先级排序（对 Anthropic 简历最有帮助）：**

| 优先级 | 方向 | 代表项目 |
|--------|------|----------|
| ⭐⭐⭐ | Mechanistic Interpretability 工具 | TransformerLens, SAELens |
| ⭐⭐ | RLHF / 对齐训练 | trl, OpenRLHF |
| ⭐⭐ | 模型评估 | lm-evaluation-harness, HELM |
| ⭐ | LLM 基础设施 | vllm, llama.cpp |

---

## 推荐贡献项目

<ColabLink
  title="TransformerLens"
  description="Mech Interp 标准工具库。找 Good First Issue 开始"
  href="https://github.com/TransformerLensOrg/TransformerLens"
/>

<ColabLink
  title="trl（Hugging Face）"
  description="RLHF 训练库，社区活跃，文档贡献也有价值"
  href="https://github.com/huggingface/trl"
/>

<ColabLink
  title="EleutherAI"
  description="开源 LLM 研究组织，多个子项目可参与"
  href="https://github.com/EleutherAI"
/>

<ColabLink
  title="lm-evaluation-harness"
  description="模型评估框架，添加新 benchmark 是很好的入门贡献"
  href="https://github.com/EleutherAI/lm-evaluation-harness"
/>

---

## 具体行动步骤

### 第一步：找 Good First Issue

去 TransformerLens 的 Issues 页面，筛选 `good first issue` 标签。

### 第二步：本地复现一篇 Mech Interp 论文

推荐从 Induction Heads 论文的 Colab 实现开始。

### 第三步：发现 Bug 或新 Feature → 开 PR

在复现过程中发现的问题或可改进点，直接开 PR 贡献。

---

## 知识检测

<Quiz
  question="以下哪个项目对申请 Anthropic 帮助最大？"
  :options="[
    '给一个 Web 前端框架贡献代码',
    '给 TransformerLens 添加对新模型的支持',
    '给一个数据可视化库修 Bug',
    '创建一个个人博客网站'
  ]"
  :answer="1"
  explanation="TransformerLens 是 Anthropic 团队背书的 Mechanistic Interpretability 工具库。给它贡献代码不仅直接展示你的 Interp 技术能力，还能让 Anthropic 研究者直接看到你的工作。这比其他方向的开源贡献有更直接的帮助。"
/>

<Checklist
  id="phase1-opensource"
  title="开源贡献完成清单"
  :items="[
    'Fork 了至少一个 AI Safety 相关项目',
    '成功在本地运行了 TransformerLens 的 demo',
    '复现了一篇 Mech Interp 论文（如 Induction Heads）',
    '提交了至少 1 个 PR 并被合并',
    '在 GitHub 上有了基本的 AI Safety 方向贡献记录'
  ]"
/>
