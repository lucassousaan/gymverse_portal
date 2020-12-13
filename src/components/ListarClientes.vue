<template>
  <section class="clientes-container">
    <transition mode="out-in">
      <div class="clientes" key="clientes">
        <download-excel
          class="btn"
          :data="clientes"
          :fields="json_fields"
          worksheet="Relatorio Usuários Gymverse"
          name="gymverse_report_users.xls"
        >
          Extrair Relatório de Usuários
        </download-excel>
        <ul>
          <li class="user" v-for="cliente in clientes" :key="cliente.id">
            <router-link :to="{ name: 'cliente', params: { id: cliente.id } }">
              <div class="div-name">
                {{ cliente.nome }}
                <input
                  id="presenca"
                  type="submit"
                  value="Presenca"
                  @click="presenca(cliente)"
                />
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <div v-else-if="clientes.length == 0" key="sem-resultados">
        <p class="sem-resultados">Nenhum produto encontrado</p>
      </div>
      <div v-else key="carregando">
        <PaginaCarregando />
      </div> -->
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ListarClientes",
  data() {
    return {
      clientes: null,
      produtosPorPagina: 100,
      json_fields: {
        "Nome": "nome",
        "Email": "email",
        "Rua": "rua",
        "CEP": "cep",
        "Número": "numero",
        "Telefone": "telefone",
        "Estado": "estado",
        "Cidade": "cidade",
        "Plano": "plano.nome",
        "Preço do Plano": "plano.preco",
      },
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/cliente?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getClientes() {
      this.clientes = null;
      api.get(this.url).then((res) => {
        this.clientes = res.data;
      });
    },
    presenca(client) {
      var data = new Date();
      const confirmar = window.confirm(
        `${
          client.nome
        } está presente hoje (${data.getDate()}/${data.getMonth() +
          1}/${data.getFullYear()})?`
      );
      if (confirmar) {
        this.getClientes();
      }
    },
  },
  watch: {
    url() {
      this.getClientes();
    },
  },
  created() {
    this.getClientes();
  },
};
</script>

<style scoped>
.div-name {
  max-width: 600px;
  margin: 20px auto 20px auto;
  border-radius: 8px;
  position: relative;
  width: 100%;
  padding: 20px;
  border: none;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.2s;
}

.clientes {
  max-width: 600px;
  margin: 0 auto;
}

.div-name:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

#presenca {
  width: 62px;
  height: 62px;
  background: url("../assets/check.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
  background-size: 20px;
}

.btn {
  width: 100%;
}
</style>
