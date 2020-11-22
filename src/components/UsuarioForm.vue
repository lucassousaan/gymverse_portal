<template>
  <form>
    <label for="name">Nome</label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Nome"
      v-model="nome"
    />
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      v-model="email"
    />
    <label for="cep">CEP</label>
    <input type="text" id="cep" name="cep" placeholder="CEP" v-model="cep" />
    <label for="rua">Rua</label>
    <input type="text" id="rua" name="rua" placeholder="Rua" v-model="rua" />
    <label for="cidade">Cidade</label>
    <input
      type="text"
      id="cidade"
      name="cidade"
      placeholder="Cidade"
      v-model="cidade"
    />
    <label for="estado">Estado</label>
    <input
      type="text"
      id="estado"
      name="estado"
      placeholder="UF"
      v-model="estado"
    />
    <label for="numero">Número</label>
    <input
      type="number"
      id="numero"
      name="numero"
      placeholder="numero"
      v-model="numero"
    />
    <label for="senha">Senha</label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Senha"
      v-model="senha"
    />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "UsuarioForm",
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
