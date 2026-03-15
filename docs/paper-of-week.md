# 📰 本周推荐论文

> 每周精选一篇 AI Safety / Interpretability 领域的重要论文，附带导读问题。

---

## 本周论文

### Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet

**作者：** Anthropic (Templeton et al., 2024)

**链接：** [transformer-circuits.pub](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)

**为什么重要：** 这是 Anthropic 将 Sparse Autoencoders 扩展到生产级模型（Claude 3 Sonnet）的里程碑工作，证明了 SAE 方法可以在大模型上发现可解释的 features。

---

### 导读问题

在阅读这篇论文时，思考以下问题：

<Quiz
  question="Sparse Autoencoders (SAE) 的核心目标是什么？"
  :options="[
    '压缩模型参数以减少推理成本',
    '将神经元的激活分解为可解释的单义特征',
    '加速模型训练过程',
    '生成更自然的文本输出'
  ]"
  :answer="1"
  explanation="SAE 的目标是解决 superposition 问题：单个神经元可能编码多个概念。SAE 通过学习一个稀疏的过完备字典，将激活分解为单义（monosemantic）的 features，每个 feature 对应一个可理解的概念。"
/>

<WritingExercise
  id="potw-summary"
  title="论文摘要练习"
  prompt="读完论文后，用自己的话（200词以内）总结这篇论文的核心贡献和主要发现。"
>
  <template #example>
    Anthropic 的研究团队将 Sparse Autoencoders 技术扩展到了 Claude 3 Sonnet 这一生产级模型上，成功提取出数百万个可解释的特征。这些特征涵盖了从具体实体（城市、人物）到抽象概念（欺骗、偏见）的广泛语义范围。研究发现，通过激活特定特征可以直接操纵模型行为，证明这些特征具有因果作用。论文还展示了安全相关特征的存在，如检测有害内容和拒绝危险请求的特征，为构建更安全的 AI 系统提供了新的工具。
  </template>
</WritingExercise>

---

## 往期推荐

| 日期 | 论文 | 方向 |
|------|------|------|
| Week 1 | [Alignment Faking in Large Language Models](https://arxiv.org/abs/2412.14093) | Alignment |
| Week 2 | [Not All Language Model Features Are Linear](https://arxiv.org/abs/2405.14860) | Mech Interp |
| Week 3 | [Sparse Feature Circuits](https://arxiv.org/abs/2403.19647) | Mech Interp |

---

## 如何使用这个页面

1. **每周一更新** — 新论文会在周一发布
2. **先回答导读问题** — 测试你对该方向的理解
3. **精读论文** — 用三遍阅读法（见[论文阅读指南](/resources/paper-reading-list#如何高效读论文)）
4. **完成写作练习** — 用自己的话总结，然后对比参考答案
5. **在评论区讨论** — 分享你的理解和疑问

<GiscusComments />
