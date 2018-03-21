import Vue from 'vue'
import store from '@/store/index'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import RetrievalPassword from '@/components/retrievalPassword'
import Personal from '@/components/personal'
import Release from '@/components/release'
import ArticleList from '@/components/articleList'
import Search from '@/components/search'
import Article from '@/components/article'
import Article2 from '@/components/article2'
import PersonalList from '@/components/personalList'
import ReleaseSuccess from '@/components/releaseSuccess'
import Ranking from '@/components/ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {// 首页
      path: '/',
      name: 'Index',
      component: Index
    },
    {// 登陆/注册
      path: '/login/:id',
      component: Login
    },
    {// 找回密码
      path: '/retrievalPassword',
      component: RetrievalPassword
    },
    {// 个人中心
      path: '/personal',
      component: Personal,
      beforeEnter: (to, from, next) => {
        store.dispatch('getLocalStorage', store.state) // 获取本地存储全局用户状态
        if (store.state.username === undefined || store.state.username.length === 0) {
          alert('请先登陆')
          next('/login/dl')
        } else {
          next()
        }
      }
    },
    {// 个人中心列表页
      path: '/personalList/:typeName',
      component: PersonalList
    },
    {// 发布需求/服务
      path: '/release/:name',
      component: Release,
      beforeEnter: (to, from, next) => {
        store.dispatch('getLocalStorage', store.state) // 获取本地存储全局用户状态
        if (store.state.username === undefined || store.state.username.length === 0) {
          alert('请先登陆')
          next('/login/dl')
        } else {
          next()
        }
      }
    },
    {// 列表页
      path: '/articleList/:type',
      component: ArticleList
    },
    {// 搜索页
      path: '/search',
      component: Search
    },
    {// 文章页
      path: '/article/:id',
      component: Article
    },
    {// 支付成功文章页
      path: '/article2/:id',
      component: Article2
    },
    {// 审核文章页
      path: '/sharticle/:id',
      component: Article
    },
    {// 一键发布
      path: '/releaseSuccess/:name',
      component: Release,
      beforeEnter: (to, from, next) => {
        store.dispatch('getLocalStorage', store.state) // 获取本地存储全局用户状态
        if (store.state.username === undefined || store.state.username.length === 0) {
          next()
        } else {
          next()
        }
      }
    },
    {// 发布成功
      path: '/releaseSuccess/',
      component: ReleaseSuccess
    },
    {// 关键词排名
      path: '/ranking/',
      component: Ranking
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 保证每次跳转页面，当前视区在头部置顶处
    return { x: 0, y: 0 }
  }
})
