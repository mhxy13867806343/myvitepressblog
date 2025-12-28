import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/myvitepressblog/',
  title: "勿扰的二次元世界",
  description: "前端开发工程师 | Vue.js | AI探索者",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ff6b9d' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: '/avatar.png',
    siteTitle: '勿扰の博客',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '✨ 关于我', link: '/about/' },
      { text: '💼 工作经历', link: '/work/' },
      { text: '🎨 项目作品', link: '/projects/' },
      { text: '🎮 生活爱好', link: '/life/' },
      { text: '📝 技术博客', link: '/blog/' },
      { text: '📮 联系我', link: '/contact/' },
      { text: '📚 归档', link: '/archive/' }
    ],
    sidebar: {
      '/about/': [
        {
          text: '关于我',
          items: [
            { text: '个人介绍', link: '/about/' },
            { text: '技能清单', link: '/about/skills' }
          ]
        }
      ],
      '/work/': [
        {
          text: '工作经历',
          items: [
            { text: '工作历程', link: '/work/' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目作品',
          items: [
            { text: '作品展示', link: '/projects/' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '技术博客',
          items: [
            { text: 'Vue.js笔记', link: '/blog/vue' },
            { text: 'AI探索之路', link: '/blog/ai' },
            { text: '前端工具', link: '/blog/tools' },
            { text: '🔌 联调工具', link: '/blog/api' }
          ]
        }
      ],
      '/life/': [
        {
          text: '生活爱好',
          items: [
            { text: '游戏 & 旅游', link: '/life/' }
          ]
        }
      ],
      '/archive/': [
        {
          text: '归档',
          items: [
            { text: '博客归档', link: '/archive/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mhxy13867806343' }
    ],
    footer: {
      message: '用代码编织二次元梦想 ✨',
      copyright: 'Copyright © 2024-present 勿扰'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
