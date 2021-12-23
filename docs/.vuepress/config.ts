/*
 * @Author: SLC
 * @Date: 2021-12-22 09:45:32
 * @LastEditors: SLC
 * @LastEditTime: 2021-12-23 17:00:13
 * @Description: file content
 */

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { resolve } from 'path';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: '/slc-blog/',
  lang: 'zh-CN',
  title: '虚幻的光',
  description: '万物皆有裂痕，那是光进来的地方。',
  head: [
    ['link', { rel: 'icon', href: '/slc-blog/images/slc.ico' }]
  ],

  // 多语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '虚幻的光',
      description: '万物皆有裂痕，那是光进来的地方。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Illusory light',
      description: 'There are cracks in everything, and that is where the light comes in.',
    },
  },

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: null, // '/images/logo.png',
    repo: 'SLC5514/slc-blog', // 项目仓库
    repoLabel: 'GitHub', // 项目仓库的标签
    docsBranch: 'master', // 目标分支
    docsDir: 'docs', // 源文档目录
    // 主题多语言配置
    locales: {
      '/': {
        selectLanguageText: '语言',
        selectLanguageName: '简体中文',
        editLinkText: '编辑此页',
        lastUpdatedText: '最近更新时间',
        contributorsText: '贡献者列表',
        backToHome: '返回首页',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        selectLanguageText: 'Language',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
        backToHome: 'Back to home',
        toggleDarkMode: 'toggle dark mode',
        toggleSidebar: 'toggle sidebar',
      },
    },
    // 导航栏
    navbar: [
      {
        text: '类别',
        link: '/',
        children: [
          {
            text: '文章',
            link: '/about.md',
          },
          {
            text: '前端',
            link: '/',
          },
          {
            text: '后端',
            link: '/',
          },
          {
            text: '其他',
            link: '/',
          },
        ]
      },
      {
        text: '标签',
        link: '/about.md',
      },
      {
        text: '时间线',
        link: '/',
      },
      {
        text: '关于',
        link: '/',
      },
    ],
  },

  // 静态资源的别名
  alias: {
    '@docs': resolve(__dirname, '../'),
  },
  markdown: {
    importCode: {
      // 导入代码块的别名使用
      handleImportPath: str => str.replace(/^@docs/, resolve(__dirname, '../')),
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: resolve(__dirname, './components'),
      },
    ],
  ],
})
