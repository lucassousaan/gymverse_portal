<template>
  <div class="produto" v-if="produto">
    <router-link class="produto-img" to="/">
      <img v-if="produto.imagem" :src="produto.imagem" :alt="produto.imagem" />
      <p>Ver Produto</p>
    </router-link>
    <div class="info">
      <p class="preco">R$ {{ produto.preco }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["produto"],
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;
}

.produto-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100;
  margin-top: 20px;
}
</style>
