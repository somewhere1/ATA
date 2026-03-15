# 学术写作资源

---

## 📚 必读写作书籍与指南

### 通用英语写作（基础）

| 书名 | 作者 | 说明 | 链接 |
|------|------|------|------|
| ⭐ **The Elements of Style** | Strunk & White | 英文写作圣经，通读一遍受益终身。极短（105页），所有写作的基础 | [Amazon](https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X) |
| **On Writing Well** | William Zinsser | 非虚构写作经典，教你写简洁清晰的英文 | [Amazon](https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548) |
| **Stylish Academic Writing** | Helen Sword | 让学术写作更生动有力，反对枯燥学术腔 | [Amazon](https://www.amazon.com/Stylish-Academic-Writing-Helen-Sword/dp/0674064488) |

### CS 学术写作（核心）

| 书名 | 作者 | 说明 | 链接 |
|------|------|------|------|
| ⭐ **Writing for Computer Science** (3rd Ed) | Justin Zobel | CS 学术写作专项教材，覆盖论文结构、写作风格、研究方法 | [Springer](https://link.springer.com/book/10.1007/978-0-85729-422-7) · [PDF](https://faculty.kashanu.ac.ir/file/download/course/1677017074-justin-zobel-auth.-writing-for-computer-science-springer-verlag-london-2014-.pdf) |
| ⭐ **How to Write a Great Research Paper** | Simon Peyton Jones | 7 个简单建议，写论文不是报告研究，而是推动研究的方式 | [Talk 视频 + Slides](https://simon.peytonjones.org/great-research-paper/) |
| **How to Give a Great Research Talk** | Simon Peyton Jones | 配套演讲指南，面试和 Research Talk 必看 | [Talk 视频](https://simon.peytonjones.org/great-research-talk/) |
| **How to Write Papers So People Can Read Them** | Derek Dreyer | SIGPLAN 写作建议，7 个与 SPJ 不同角度的建议 | [视频](https://www.youtube.com/watch?v=PM1iPLrgNe4) |

### 科学写作（进阶）

| 书名 | 作者 | 说明 | 链接 |
|------|------|------|------|
| **Writing Science** | Joshua Schimel | 用叙事结构原则来写论文，教你讲好科学故事 | [Amazon](https://www.amazon.com/Writing-Science-Papers-Proposals-Funded/dp/0199760241) |
| **The Scientist's Guide to Writing** | Stephen B. Heard | 实用写作入门，核心理念：科学写作的目标是绝对清晰 | [Amazon](https://www.amazon.com/Scientists-Guide-Writing-Communicate-Effectively/dp/0691170223) |
| **How to Write a Good Scientific Paper** | Chris A. Mack | 教论文各部分（标题、摘要、图表）的写作规范 | [SPIE](https://spie.org/publications/pm286_good-scientific-paper) |
| **Scientific Writing and Publishing** | Denys Wheatley | 40 年科研经验总结，覆盖写作到发表全流程 | [Cambridge](https://www.cambridge.org/core/books/scientific-writing-and-publishing/92765D918D99015011DD71071C8CFD90) |

### 数学写作（Mech Interp 论文必备）

| 书名 | 作者 | 说明 | 链接 |
|------|------|------|------|
| **Mathematical Writing** | Donald Knuth et al. | 技术写作大师 Knuth 的写作课笔记，仅 8 页精华，回报极高 | [PDF](https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf) |
| **How to Write Mathematics** | Paul Halmos | 数学写作经典指南 | [PDF](https://entropiesschool.sciencesconf.org/data/How_to_Write_Mathematics.pdf) |

### 免费在线课程与指南

| 资源 | 说明 | 链接 |
|------|------|------|
| ⭐ **Simon Peyton Jones — Research Skills** | SPJ 的所有研究技能资源汇总（写作、演讲、研究方法） | [链接](https://simon.peytonjones.org/research-skills/) |
| **Scientific Writing for CS Students** | 芬兰 UEF 的免费 CS 科学写作教材 | [PDF](https://www.cs.joensuu.fi/pages/whamalai/sciwri/sciwri.pdf) |
| **Academic Writing for CS (RIT)** | RIT 的 CS 学术写作资源页 | [链接](https://www.cs.rit.edu/~rlaz/writing.html) |
| **Stanford Writing Guidebooks** | Stanford 教授推荐的写作书单 | [链接](https://facultydevelopment.stanford.edu/essential-guidebooks-academic-writing) |
| **Editage Top 10 Writing Resources** | 学术写作十大资源推荐 | [链接](https://www.editage.com/insights/top-10-books-and-other-resources-on-academic-writing-for-researchers) |

### 推荐阅读顺序

```
入门（第1-3月）
├── The Elements of Style（1周读完，建立英文写作基础）
├── How to Write a Great Research Paper（看1小时视频）
└── Scientific Writing for CS Students（免费 PDF，按需查阅）

进阶（第4-6月）
├── Writing for Computer Science（CS 论文写作圣经）
├── Mathematical Writing（Knuth，8页精华）
└── Derek Dreyer talk（补充 SPJ 的不同视角）

高级（写论文时查阅）
├── Writing Science（用叙事结构写论文）
├── The Scientist's Guide to Writing（全面写作指南）
└── On Writing Well（提升英文表达力）
```

<Checklist
  id="writing-books"
  title="写作书籍阅读进度"
  :items="[
    '读完 The Elements of Style',
    '看完 Simon Peyton Jones — How to Write a Great Research Paper',
    '读完 Writing for Computer Science 核心章节',
    '读完 Knuth — Mathematical Writing（8页）',
    '看完 Derek Dreyer talk',
    '浏览了 Writing Science 或 The Scientists Guide'
  ]"
/>

---

## 论文摘要写作模板

### 标准 Abstract 结构（4-6句）

```
句1：[研究领域] 中，[研究问题] 是一个重要挑战。
句2：现有方法存在 [具体局限性]。
句3：我们提出 [方法名称]，核心思路是 [一句话描述]。
句4：在 [数据集] 上，取得了 [具体数字] 的提升。
句5（可选）：我们的分析表明 [重要发现]。
句6（可选）：代码和数据集公开在 [链接]。
```

---

## 各部分写作指南

### Introduction（最重要）

1. 第一段：研究领域的重要性（大图景）
2. 第二段：具体问题是什么
3. 第三段：现有方法做了什么，有什么不足
4. 第四段：我们的贡献（列举 2-3 点）
5. 第五段：论文结构

### Related Work

- 不要逐篇介绍，按**主题分组**
- 每组结尾说明与你的工作的区别
- 引用要完整

### Method

- 先给一个整体 overview（配图）
- 再逐步介绍每个组件
- 数学公式要有 notation table

### Experiments

- Main Results Table（与 baseline 对比）
- Ablation Study（每个组件的影响）
- Case Study / 定性分析
- Failure Case Analysis

### Conclusion

- 简要总结贡献
- 指出 Limitations（诚实！）
- Future Work

---

## 常用学术句型

**Introduction:**
- "Despite recent progress in X, Y remains poorly understood."
- "A key challenge is that..."
- "In this work, we propose..."
- "Our main contributions are: (1)... (2)... (3)..."

**Related Work:**
- "Prior work on X has focused on..."
- "In contrast to [method], our approach..."

**Experiments:**
- "We evaluate our method on..."
- "Table 1 summarizes our main results."

**Conclusion:**
- "We have presented..."
- "A limitation of our approach is..."

---

## 投稿检查清单

<Checklist
  id="paper-checklist"
  title="论文投稿检查清单"
  :items="[
    '符合会议页数限制',
    '使用官方 LaTeX 模板',
    '匿名化（去掉作者信息、机构、致谢）',
    '参考文献格式统一',
    'Abstract 在 250 词以内',
    '每个图表有 caption，且独立可理解',
    '所有引用都在参考文献中',
    '主要结论有实验支撑',
    'Ablation Study 覆盖主要设计选择',
    '说明了 Limitations',
    '提供了 reproducibility 信息'
  ]"
/>

---

## 实用工具

| 工具 | 用途 | 链接 |
|------|------|------|
| Overleaf | LaTeX 写作 | [overleaf.com](https://www.overleaf.com) |
| Zotero | 参考文献管理 | [zotero.org](https://www.zotero.org) |
| Weights & Biases | 实验追踪 | [wandb.ai](https://wandb.ai) |
| ConnectedPapers | 文献图谱 | [connectedpapers.com](https://www.connectedpapers.com) |
| Grammarly | 语法检查 | [grammarly.com](https://www.grammarly.com) |
| DeepL Write | 学术英语润色 | [deepl.com/write](https://www.deepl.com/write) |
