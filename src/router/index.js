import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default new Router({
  routes: [
    { path: '/', name: 'TodoList', component: TodoList },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/login', component: Login }
  ]
})
