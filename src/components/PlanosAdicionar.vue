<template>
  <form class="adicionar-plano">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="plano.nome" />
    <label for="descricao">Descrição</label>
    <textarea
      id="descricao"
      name="descricao"
      type="text"
      v-model="plano.descricao"
    />
    <label for="preco">Preço (R$)</label>
    <input id="preco" name="preco" type="number" v-model="plano.preco" />
    <label for="imagem">Imagem</label>
    <input id="imagem" name="imagem" type="text" v-model="plano.imagem" />
    <input
      class="btn"
      type="button"
      value="Adicionar Plano"
      @click.prevent="adicionarPlano"
    />
  </form>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "PlanosAdicionar",
  data() {
    return {
      plano: {
        nome: "",
        preco: "",
        descricao: "",
      },
    };
  },
  methods: {
    formatarPlano() {
      this.plano.usuarioId = this.$store.state.usuario.id;
    },
    adicionarPlano() {
      api.post("plano", this.plano).then(() => {
        this.$store.dispatch("getPlanos");
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

.adicionar-plano {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
