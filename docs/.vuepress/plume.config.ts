import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://www.helloimg.com/i/2025/02/04/67a1701789733.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/wsp03' },
  ],
  navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: 'CC-BY-NC-SA-4.0',

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> & <a href="https://icp.gov.moe/?keyword=20250314" target="_blank">萌ICP备20250314号</a>',
    copyright: 'Copyright © 2025 <a target="_blank" rel="noopener" href="https://www.uxn.cc" data-pjax-state="">时间的距离</a>',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://cravatar.cn/avatar/0d11b8d26a46ef39fbd6f1df6815e458?&d=mm&s=200',
    name: '时间的距离',
    description: '路就在脚下',
    location: '河南, 中国',
    organization: '皓月',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '欢迎来到回忆录',
  //   content: '即将开业',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
