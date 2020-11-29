<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" v-model="login.senha" />
      <button class="btn" to="/login" @click.prevent="logar">Entrar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Esqueceu a senha?</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  name: "login",
  components: {
    LoginCriar,
  },
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", "1");
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
