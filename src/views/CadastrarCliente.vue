<template>
  <section class="register-client">
    <h1>Cadastrar Cliente</h1>
    
    <form>
      <label for="name">Nome</label>
      <input type="text" id="nome" name="nome" v-model="cliente.nome" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="cliente.email" />
      <label for="telefone">Telefone</label>
      <input type="text" id="telefone" name="telefone" v-model="cliente.telefone" />
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" name="cpf" v-model="cliente.cpf" />
      <label for="cep">CEP</label>
      <input type="text" id="cep" name="cep" v-model="cliente.cep" />
      <label for="rua">Rua</label>
      <input type="text" id="rua" name="rua" v-model="cliente.rua" />
      <label for="cidade">Cidade</label>
      <input type="text" id="cidade" name="cidade" v-model="cliente.cidade" />
      <label for="estado">Estado</label>
      <input type="text" id="estado" name="estado" v-model="cliente.estado" />
      <label for="numero">Número</label>
      <input type="number" id="numero" name="numero" v-model="cliente.numero" />
      <label for="imagem">Imagem</label>
      <input type="text" id="imagem" name="imagem" v-model="cliente.imagem" />
      <label for="plano">Plano</label>
      <select name="plan" id="plan" v-model="selected">
        <option v-for="plano in planos" :key="plano.id" v-bind:value="plano">{{
          plano.nome
        }}</option>
      </select>
      <div class="button">
        <button class="btn btn-form" @click.prevent="adicionarCliente()">Criar Usuário</button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "CadastrarCliente",
  data() {
    return {
      cliente: {
        email: "",
        nome: "",
        senha: "",
        rua: "",
        cep: "",
        cpf: "",
        numero: "",
        estado: "",
        telefone: "",
        cidade: "",
        imagem: "",
        plano: {
          nome: "",
          preco: "",
          descricao: "",
          imagem: "",
        },
      },
      selected: ''
    };
  },
  computed: {
    ...mapState(["login", "usuario", "planos"]),
  },
  methods: {
    ...mapActions(["getPlanos"]),
    async adicionarCliente() {
      this.cliente.plano = this.selected;
      try {
        await api.post("cliente", this.cliente);
        this.$router.push({
          name: "dashboard",
        });
      } catch(error) {
        console.log(error);
      }
    },
  },
  created() {
    this.$store.dispatch("getPlanos");
  },
};
</script>

<style scoped>
.register-client {
  max-width: 900px;
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
  grid-template-columns: 80px 1fr;
  align-items: center;
  margin-top: 20px;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>
