<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="produto.nome" />
    <label for="descricao">Descrição</label>
    <textarea
      id="descricao"
      name="descricao"
      type="text"
      v-model="produto.descricao"
    />
    <label for="preco">Preço (R$)</label>
    <input id="preco" name="preco" type="number" v-model="produto.preco" />
    <label for="qtd">Quantidade </label>
    <input id="qtd" name="qtd" type="number" v-model="produto.qtd" />
    <label for="imagem">Imagem</label>
    <input id="imagem" name="imagem" type="text" v-model="produto.imagem" />
    <input
      class="btn"
      type="button"
      value="Adicionar Produto"
      @click.prevent="adicionarProduto"
    />
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "ProdutosAdicionar",
  data() {
    return {
      produto: {
        nome: "",
        preco: "",
        qtd: 0,
        descricao: "",
        imagem: "",
      },
    };
  },
  methods: {
    formatarProduto() {
      this.produto.usuarioId = this.$store.state.usuario.id;
    },
    adicionarProduto() {
      api.post("produto", this.produto).then(() => {
        this.$store.dispatch("getProdutos");
      });
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  margin-top: 20px;
}

.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
