# 📐 数学基础

> 推荐顺序：线性代数 → 多元微积分 → 概率统计 → 凸优化

---

## 线性代数

### 3Blue1Brown — Essence of Linear Algebra

最好的线代直觉建立资源，16集动画。

<ColabLink
  title="3Blue1Brown — Essence of Linear Algebra"
  description="每集看完后在纸上重新推导。重点：矩阵乘法的几何意义、特征值/特征向量、SVD"
  href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
/>

### Gilbert Strang — MIT 18.06 Linear Algebra

MIT 经典线代课，配合 Problem Sets 做题。

<ColabLink
  title="MIT 18.06 Linear Algebra"
  description="配合花书效果佳。建议完成所有 Problem Sets"
  href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
/>

### Mathematics for ML Specialization（Imperial College）

<ColabLink
  title="Mathematics for ML（Coursera）"
  description="第一门课专注线代，第二门多元微积分，第三门 PCA。免费旁听"
  href="https://www.coursera.org/specializations/mathematics-machine-learning"
/>

---

## 概率 & 统计

### MIT 6.041 — Probabilistic Systems Analysis

<ColabLink
  title="MIT 6.041 概率论"
  description="重点：贝叶斯定理、期望、方差、常见分布"
  href="https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/"
/>

### Seeing Theory（布朗大学）

<ColabLink
  title="Seeing Theory — 概率统计可视化"
  description="直觉建立非常好，交互式可视化"
  href="https://seeing-theory.brown.edu/"
/>

---

## 凸优化（进阶）

### Boyd & Vandenberghe — Convex Optimization

<ColabLink
  title="Convex Optimization（免费教材 + 视频）"
  description="重点章节：第2章（凸集）、第3章（凸函数）、第9章（无约束优化）"
  href="https://web.stanford.edu/~boyd/cvxbook/"
/>

---

## 知识检测

<Quiz
  question="在线性代数中，特征值分解 A = PDP⁻¹ 的几何意义是什么？"
  :options="[
    '将矩阵转换为稀疏矩阵',
    '将线性变换分解为：旋转/反射 → 拉伸 → 逆旋转',
    '将矩阵分解为上三角和下三角矩阵的乘积',
    '将矩阵转换为行最简阶梯形'
  ]"
  :answer="1"
  explanation="特征值分解将线性变换理解为：先变换到特征向量的坐标系（P⁻¹），在该坐标系下做拉伸（D，对角线是特征值），再变换回原坐标系（P）。这就是矩阵乘法的几何本质。"
/>

<Quiz
  question="贝叶斯定理 P(A|B) = P(B|A)P(A)/P(B) 中，P(A) 被称为什么？"
  :options="[
    '似然（Likelihood）',
    '后验概率（Posterior）',
    '先验概率（Prior）',
    '边际概率（Marginal）'
  ]"
  :answer="2"
  explanation="P(A) 是先验概率（Prior），表示在观测到 B 之前对 A 的信念。P(B|A) 是似然（Likelihood），P(A|B) 是后验概率（Posterior）。机器学习中大量使用贝叶斯推断。"
/>

<Quiz
  question="SVD（奇异值分解）在机器学习中最常见的应用是什么？"
  :options="[
    '训练神经网络的权重初始化',
    '降维和数据压缩，如 PCA 的底层实现',
    '计算损失函数的梯度',
    '生成随机数据样本'
  ]"
  :answer="1"
  explanation="SVD 将矩阵分解为 U*Sigma*V^T，保留前 k 个最大奇异值就能得到最佳低秩近似，这是 PCA 降维、推荐系统和图像压缩的数学基础。"
/>

<Quiz
  question="梯度下降中，学习率过大会导致什么问题？"
  :options="[
    '收敛速度太慢，需要更多迭代',
    '损失函数在最优点附近震荡甚至发散',
    '模型参数全部变为零',
    '梯度消失，无法更新参数'
  ]"
  :answer="1"
  explanation="学习率过大时，每步更新的幅度太大，导致参数在最优点附近来回跳动（震荡），严重时甚至发散。学习率过小则收敛太慢。实践中常用 Adam 等自适应学习率方法来缓解这个问题。"
/>

<Quiz
  question="高斯分布（正态分布）在深度学习中为什么如此重要？"
  :options="[
    '因为它是唯一的连续概率分布',
    '因为中心极限定理：大量独立随机变量之和趋向正态分布',
    '因为它的计算速度最快',
    '因为所有数据都服从正态分布'
  ]"
  :answer="1"
  explanation="中心极限定理说明，无论原始分布是什么，大量独立随机变量之和趋向正态分布。这使得正态分布成为噪声建模、参数初始化（Xavier/He 初始化）和概率推断的基础。"
/>

<Checklist
  id="phase1-math"
  title="数学基础完成清单"
  :items="[
    '看完 3B1B Essence of Linear Algebra 全部16集',
    '能手推 SVD 分解',
    '理解矩阵乘法的几何意义（旋转 + 拉伸）',
    '完成 MIT 6.041 至少前 10 讲',
    '理解贝叶斯定理并能举例应用',
    '浏览 Boyd 凸优化前3章'
  ]"
/>
