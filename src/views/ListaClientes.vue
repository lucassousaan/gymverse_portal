<template>
  <section>
    <h1>Clientes</h1>
    <ClientesBuscar />
    <ListarClientes />
  </section>
</template>

<script>
import ClientesBuscar from "@/components/ClientesBuscar.vue";
import ListarClientes from "@/components/ListarClientes.vue";

export default {
  name: "ListaClientes",
  components: {
      ClientesBuscar,
      ListarClientes
  }
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
