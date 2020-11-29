import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Usuario from '../views/usuario/Usuario.vue'
import Dashboard from '../views/Dashboard.vue'
import CadastrarCliente from '../views/CadastrarCliente.vue'
import CadastrarFuncionario from '../views/CadastrarFuncionario.vue'
import Produtos from '../views/Produtos.vue'
import EditarUsuario from '../views/usuario/EditarUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/usuario',
    component: Usuario,
    children: [
      {
        path: "",
        name: 'usuario',
        component: EditarUsuario
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/cadastro-cliente',
    name: 'cadastro-cliente',
    component: CadastrarCliente
  },
  {
    path: '/cadastro-func',
    name: 'cadastro-func',
    component: CadastrarFuncionario
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo(top, 0);
  }
})

export default router
