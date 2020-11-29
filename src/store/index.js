import Vue from 'vue';
import Vuex from 'vuex';
import {api} from "@/services.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    usuario: {
      id: "",
      email: "",
      nome: "",
      senha: "",
      rua: "",
      cep: "",
      numero: "",
      estado: "",
      cidade: "",
    },
    produtos: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
    },
    UPDATE_PRODUTOS(state, payload) {
      state.produtos = payload;
    },
    ADD_PRODUTOS(state, payload) {
      state.produtos.unshit(payload);
    },
  },
  actions: {
    getProdutos(context) {
      api.get("produto").then(response => {
        context.commit("UPDATE_PRODUTOS", response.data);
      })
    },
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      })
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        email: "",
        nome: "",
        senha: "",
        rua: "",
        cep: "",
        numero: "",
        estado: "",
        cidade: "",
      });
      context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {
  } 
})
