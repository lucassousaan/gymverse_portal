import Vue from 'vue';
import Vuex from 'vuex';
import {api} from "@/services.js";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
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
    planos: null,
    funcionarios: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_PRODUTOS(state, payload) {
      state.produtos = payload;
    },
    UPDATE_PLANOS(state, payload) {
      state.planos = payload;
    },
    UPDATE_FUNCIONARIOS(state, payload) {
      state.funcionarios = payload;
    },
    ADD_PRODUTOS(state, payload) {
      state.produtos.unshit(payload);
    },
  },
  actions: {
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload)
    },
    atualizarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.put("/usuario", payload)
    },
    getProdutos(context) {
      api.get("produto").then(response => {
        context.commit("UPDATE_PRODUTOS", response.data);
      })
    },
    getPlanos(context) {
      api.get("plano").then(response => {
        context.commit("UPDATE_PLANOS", response.data);
      })
    },
    getFuncionarios(context) {
      api.get("funcionario").then(response => {
        context.commit("UPDATE_FUNCIONARIOS", response.data);
      })
    },
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then(response => {
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
