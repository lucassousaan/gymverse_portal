<template>
  <header>
    <nav>
      <router-link v-if="$store.state.login" to="/dashboard" class="logo">
        <img src="@/assets/logo.png" alt="Gymverse" />
      </router-link>
      <router-link v-else to="/" class="logo">
        <img src="@/assets/logo.png" alt="Gymverse" />
      </router-link>
      <router-link v-if="$store.state.login" class="btn" to="/usuario">
        {{ nome }}
      </router-link>
      <router-link v-else class="btn" to="/login">
        Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, "");
    },
  },
};
</script>

<style scopped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
