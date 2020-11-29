<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar Usuário
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services.js";

export default {
  name: "EditarUsuario",
  components: {
    UsuarioForm,
  },
  methods: {
    atualizarUsuario() {
      api.put("/");
    },
  },
};
</script>

<style scoped></style>
