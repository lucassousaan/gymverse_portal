<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.imagem">
        <li>
          <img :src="produto.imagem" :alt="produto.nome" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <transition mode="out-in" v-if="produto.qtd">
          <button class="btn" v-if="!comprar" @click="comprar=true">Vender</button>
          <Compra v-else :produto="produto"/>
        </transition>
        <button class="btn" v-else>Produto indisponível</button>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import Compra from "@/components/Compra.vue";

export default {
  name: "Produto",
  props: ["id"],
  components: {
    Compra,
  },
  data() {
    return {
      produto: null,
      comprar: false,
    };
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then((response) => {
        this.produto = response.data;
      });
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
