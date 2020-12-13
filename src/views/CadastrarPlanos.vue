<template>
  <section class="plano">
    <h1>Adicionar plano</h1>
    <PlanosAdicionar />
    <h2>Todos os planos</h2>

    <transition-group v-if="planos" name="list" tag="ul">
      <li v-for="plano in planos" :key="plano.id">
        <PlanoItem :plano="plano">
          <p>{{ plano.descricao }}</p>
          <button class="deletar" @click="deletarPlano(plano.id)">
            Deletar
          </button>
        </PlanoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import PlanosAdicionar from "@/components/PlanosAdicionar.vue";
import PlanoItem from "@/components/PlanoItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "CadastrarPlanos",
  components: {
    PlanosAdicionar,
    PlanoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "planos"]),
  },
  methods: {
    ...mapActions(["getPlanos"]),
    deletarPlano(id) {
      const confirmar = window.confirm("Deseja remover este plano?");
      if (confirmar) {
        api
          .delete(`plano/${id}`)
          .then(() => {
            this.getPlanos();
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },
  watch: {
    login() {
      this.getPlanos();
    },
  },
  created() {
    if (this.login) {
      this.getPlanos();
    }
  },
};
</script>

<style scoped>
.plano {
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

h2 {
  margin-bottom: 20px;
}

.list-enter .list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  overflow: hidden;
  border: none;
  color: red;
}
</style>
