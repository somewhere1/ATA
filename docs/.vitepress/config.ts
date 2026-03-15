import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aim to Anthropic',
  description: 'A roadmap for researchers aiming to join Anthropic',
  lang: 'zh-CN',
  base: '/ATA/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Aim to Anthropic',
    nav: [
      { text: '首页', link: '/' },
      { text: '阶段一', link: '/phase-1/' },
      { text: '阶段二', link: '/phase-2/' },
      { text: '阶段三', link: '/phase-3/' },
      {
        text: '资源',
        items: [
          { text: '论文清单', link: '/resources/paper-reading-list' },
          { text: '社区指南', link: '/resources/community-guide' },
          { text: '写作模板', link: '/resources/writing-templates' },
          { text: '备选路线', link: '/resources/alternative-paths' },
        ]
      }
    ],
    sidebar: {
      '/phase-1/': [
        {
          text: '第一阶段：补齐基础（0–12个月）',
          items: [
            { text: '概览', link: '/phase-1/' },
            { text: '数学基础', link: '/phase-1/math' },
            { text: '深度学习核心', link: '/phase-1/deep-learning' },
            { text: '英语学术写作', link: '/phase-1/writing' },
            { text: '开源贡献策略', link: '/phase-1/open-source' },
          ]
        }
      ],
      '/phase-2/': [
        {
          text: '第二阶段：建立学术可见度（12–24个月）',
          items: [
            { text: '概览', link: '/phase-2/' },
            { text: 'AI Safety 技术入门', link: '/phase-2/ai-safety' },
            { text: '第一篇论文', link: '/phase-2/first-paper' },
            { text: 'MATS 申请', link: '/phase-2/mats' },
            { text: '社区活跃度', link: '/phase-2/community' },
          ]
        }
      ],
      '/phase-3/': [
        {
          text: '第三阶段：博士期间（3–5年）',
          items: [
            { text: '概览', link: '/phase-3/' },
            { text: '博士选择', link: '/phase-3/phd-choice' },
            { text: '研究方向', link: '/phase-3/research' },
            { text: '顶会投稿', link: '/phase-3/conferences' },
            { text: 'Anthropic 实习', link: '/phase-3/internship' },
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源库',
          items: [
            { text: '必读论文清单', link: '/resources/paper-reading-list' },
            { text: '社区与人脉指南', link: '/resources/community-guide' },
            { text: '学术写作资源', link: '/resources/writing-templates' },
            { text: '备选路线', link: '/resources/alternative-paths' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/somewhere1/ATA' }
    ],
    footer: {
      message: '路虽远，行则将至。',
      copyright: 'Released under the MIT License'
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
