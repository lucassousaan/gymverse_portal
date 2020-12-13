<template>
  <section>
    <h2 class="venda">Venda</h2>
    <form>
    <label for="name">Nome</label>
    <input type="text" id="nome" name="nome" v-model="nome" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" v-model="email" />
    <label for="cpf">CPF</label>
    <input type="text" id="cpf" name="cpf" v-model="cpf" />
    </form>
    <button class="btn" @click.prevent="finalizarCompra()">Finalizar Venda</button>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapState } from "vuex";

export default {
  name: "Compra",
  props: ["produto"],
  computed: {
      ...mapState(["usuario"]),
      compra() {
          return {
            vendedor_id: this.usuario.id,
            comprador_id: this.cpf,
            produto: this.produto
          }
      }
  },
  methods: {
      criarTransacao() {
          api.post("/transacao", this.compra).then(() => {
              this.$router.push({ name: "/dashboard" });
          });
      },
      finalizarCompra() {
          this.criarTransacao();
      }
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.venda {
    margin-top: 30px;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
