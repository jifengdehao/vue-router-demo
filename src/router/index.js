import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
//import Apple from '@/components/Apple'
//import Banana from '@/components/Banana'
import Word from '@/components/Word'

Vue.use(Router)
/*
const Banana = resolve => require(['@/components/Banana'], resolve) //第一种组件懒加载

const Banana = resolve => {                                        //第二中组件懒加载
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['@/components/Banana'], () => {
    resolve(require('@/components/Banana'))
  })
}
*/
//把组件按组分块 懒加载
const Hello = r => require.ensure([], () => r(require('@/components/Hello')), 'group-foo')
const Apple = r => require.ensure([], () => r(require('@/components/Apple')), 'group-foo')
const Banana = r => require.ensure([], () => r(require('@/components/Banana')), 'group-foo')

export default new Router({
  linkActiveClass:'active',
  mode: 'history',
  routes: [
    /*
    {
      path: '/',
      redirect: '/Hello'  // =======>重定向地址
    },
    */
    {
      path: '/Hello/:id',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'Word',
          name:'Word',
          component: Word
        }
      ]
    },
    {
      path: '/Apple',
      name: 'Apple',
      component: Apple
    },
    {
      path: '/Banana',
      name: 'Banana',
      component: Banana
    }
  ]
})
