<template>
  <section>
    <h1>O que deseja fazer a seguir?</h1>
    <DashboardLista />
  </section>
</template>

<script>
import DashboardLista from "@/components/DashboardLista.vue";

export default {
  name: "dashboard",
  components: {
    DashboardLista,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
