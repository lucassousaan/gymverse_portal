<template>
  <section class="produto">
    <h1>Adicionar produto</h1>
    <ProdutosAdicionar />
    <h2>Todos os produtos</h2>

    <transition-group v-if="produtos" name="list" tag="ul">
      <li v-for="(produto, index) in produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">
            Deletar
          </button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutosAdicionar from "@/components/ProdutosAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "Produtos",
  components: {
    ProdutosAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "produtos"]),
  },
  methods: {
    ...mapActions(["getProdutos"]),
    deletarProduto(id) {
      const confirmar = window.confirm("Deseja remover este produto?");
      if (confirmar) {
        api
          .delete(`produto/${id}`)
          .then(() => {
            this.getProdutos();
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },
  watch: {
    login() {
      this.getProdutos();
    },
  },
  created() {
    if (this.login) {
      this.getProdutos();
    }
  },
};
</script>

<style scoped>
.produto {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

h2 {
  margin-bottom: 20px;
}

.list-enter .list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  overflow: hidden;
  border: none;
  color: red;
}
</style>
