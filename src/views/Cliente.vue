<template>
  <section>
    <div v-if="cliente" class="cliente">
      <ul class="fotos" v-if="cliente.imagem">
        <li>
          <img :src="cliente.imagem" :alt="cliente.nome" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ cliente.nome }}</h1>
        <div id="endereco">
          <p class="client-plano">{{ cliente.plano.nome }} - {{ cliente.plano.preco | numeroPreco }}</p>
          <p class="client-endereco">{{ cliente.rua }}, {{ cliente.numero }}</p>
          <p class="client-endereco">
            {{ cliente.cidade }} - {{ cliente.estado }}
          </p>
        </div>
        <transition mode="out-in" v-if="cliente">
          <button class="btn" v-if="!imc" @click="imc = true">
            Calcular IMC
          </button>

          <div v-else>
            <h2 class="imc">IMC</h2>
            <form>
              <label for="peso">Peso (Kg)</label>
              <input type="number" id="peso" name="peso" v-model="peso" />
              <label for="altura">Altura (cm)</label>
              <input type="number" id="altura" name="altura" v-model="altura" />
            </form>
            <p id="imc-value" v-if="imc_value > 0">
              {{ imc_value.toFixed(2) }}
            </p>
            <button class="btn" @click.prevent="calcularIMC()">
              Calcular IMC
            </button>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Cliente",
  props: ["id"],
  data() {
    return {
      cliente: null,
      imc: false,
      imc_value: 0.0,
      peso: null,
      altura: null,
    };
  },

  methods: {
    getCliente() {
      api.get(`/cliente/${this.id}`).then((response) => {
        this.cliente = response.data;
      });
    },
    calcularIMC() {
      var height = Number(this.altura) * 0.01;
      var weigth = Number(this.peso);
      var imc = weigth / (height * height);
      this.imc_value = imc;
    },
    exportExcel() {},
  },
  created() {
    this.getCliente();
  },
};
</script>

<style scoped>
.cliente {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.client-endereco,
.client-plano {
  font-weight: bold;
  font-size: 1.5rem;
}

#endereco {
  margin-top: 20px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

#imc-value,
.client-plano {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.imc {
  margin-top: 30px;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
