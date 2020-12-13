<template>
  <div class="plano" v-if="plano">
    <div class="plano-img" :to="{name: 'plano', params: { id: plano.id }}">
      <img v-if="plano.imagem" :src="plano.imagem" :alt="plano.imagem" />
    </div>
    <div class="info">
      <p class="preco">{{ plano.preco | numeroPreco }}</p>
      <h2 class="titulo">{{ plano.nome }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanoItem",
  props: ["plano"],
};
</script>

<style scoped>
.plano {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 30px;
  margin-bottom: 40px;
  position: relative; 
}

.info {
  align-self: end;
}

.plano-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100;
  margin-top: 20px;
}
</style>
