<template>
  <section class="register-client">
    <h1>Cadastrar Funcionário</h1>
    <form>
      <label for="name">Nome</label>
      <input type="text" id="nome" name="nome" v-model="funcionario.nome" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="funcionario.email" />
      <label for="telefone">Telefone</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        v-model="funcionario.telefone"
      />
      <label for="cpf">CPF</label>
      <input type="text" id="cpf" name="cpf" v-model="funcionario.cpf" />
      <label for="cep">CEP</label>
      <input type="text" id="cep" name="cep" v-model="funcionario.cep" />
      <label for="rua">Rua</label>
      <input type="text" id="rua" name="rua" v-model="funcionario.rua" />
      <label for="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        v-model="funcionario.cidade"
      />
      <label for="estado">Estado</label>
      <input
        type="text"
        id="estado"
        name="estado"
        v-model="funcionario.estado"
      />
      <label for="numero">Número</label>
      <input
        type="number"
        id="numero"
        name="numero"
        v-model="funcionario.numero"
      />
      <label for="plano">É adm?</label>
      <div>
        <input type="radio" id="yes" value="true" v-model="picked" />
        <label for="yes">sim</label>
        <br />
        <input type="radio" id="no" value="false" v-model="picked" />
        <label for="no">não</label>
      </div>
      <div class="button">
        <button class="btn btn-form" @click.prevent="adicionarFunc">
          Criar Funcionário
        </button>
      </div>
      <div class="button">
        <download-excel
          v-if="funcionarios"
          class="btn btn-form"
          :data="funcionarios"
          :fields="json_fields"
          worksheet="Relatorio Funcionários Gymverse"
          name="gymverse_report_employees.xls"
        >
          Extrair Relatório de Funcionários
        </download-excel>
      </div>
    </form>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "CadastrarFuncionario",
  data() {
    return {
      funcionario: {
        email: "",
        nome: "",
        senha: "",
        rua: "",
        cep: "",
        cpf: "",
        numero: "",
        estado: "",
        cidade: "",
        telefone: "",
        isAdm: "",
      },
      picked: null,
      json_fields: {
        Nome: "nome",
        Email: "email",
        Rua: "rua",
        CEP: "cep",
        CPF: "cpf",
        Número: "numero",
        Estado: "estado",
        Cidade: "cidade",
        Telefone: "telefone",
        "É Administrador?": "isAdm",
      },
    };
  },
  computed: {
    ...mapState(["login", "usuario", "funcionarios"]),
  },
  methods: {
    ...mapActions(["getFuncionarios"]),
    async adicionarFunc() {
      this.funcionario.isAdm = this.picked;
      try {
        await api.post("funcionario", this.funcionario);
        this.$router.push({
          name: "dashboard",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.$store.dispatch("getFuncionarios");
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
