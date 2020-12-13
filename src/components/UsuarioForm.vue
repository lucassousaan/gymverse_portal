<template>
  <form>
    <label for="name">Nome</label>
    <input type="text" id="nome" name="nome" v-model="nome" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email" />
    <label for="cep">CEP</label>
    <input type="text" id="cep" name="cep" v-model="cep" />
    <label for="rua">Rua</label>
    <input type="text" id="rua" name="rua" v-model="rua" />
    <label for="cidade">Cidade</label>
    <input type="text" id="cidade" name="cidade" v-model="cidade" />
    <label for="estado">Estado</label>
    <input type="text" id="estado" name="estado" v-model="estado" />
    <label for="numero">Número</label>
    <input type="number" id="numero" name="numero" v-model="numero" />
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" v-model="senha" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "cep",
        "rua",
        "cidade",
        "estado",
        "numero",
        "senha",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
  },
  methods: {
    async atualizarUsuario() {
      try {
        await this.$store.dispatch("atualizarUsuario", this.$store.state.usuario);
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
