<template>
  <section class="dashboard-container">
    <transition mode="out-in">
      <div class="dashboards">
        <div class="dashboard">
          <router-link to="/cadastro-cliente">
            <img src="@/assets/edit.svg" alt="Register User" />
            <h2 class="titulo">Cadastrar Cliente</h2>
            <p>Realizar um novo cadastro de cliente</p>
          </router-link>
        </div>
        <div class="dashboard">
          <router-link to="/produtos">
            <img src="@/assets/box.svg" alt="Register Product" />
            <h2 class="titulo">Cadastrar Produto</h2>
            <p>Realizar um novo cadastro de produto</p>
          </router-link>
        </div>
        <div class="dashboard">
          <router-link to="/cadastro-func">
            <img src="@/assets/employee.svg" alt="Register User" />
            <h2 class="titulo">Cadastrar Funcionário</h2>
            <p>Realizar um novo cadastro de funcionário</p>
          </router-link>
        </div>
        <div class="dashboard">
          <router-link to="/cadastro-plano">
            <img src="@/assets/plans.svg" alt="Register User" />
            <h2 class="titulo">Cadastrar Planos</h2>
            <p>Realizar um novo cadastro de planos</p>
          </router-link>
        </div>
        <div class="dashboard">
          <router-link to="/lista-clientes">
            <img src="@/assets/clients.svg" alt="Clientes" />
            <h2 class="titulo">Clientes</h2>
            <p>Lista Clientes</p>
          </router-link>
        </div>
        <div class="dashboard">
          <router-link to="/">
            <img src="@/assets/sale.svg" alt="Register User" />
            <h2 class="titulo">Venda</h2>
            <p>Registra a venda de produtos</p>
          </router-link>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "DashboardLista",
};
</script>

<style scoped>
.dashboard-container {
  max-width: 1000px;
  margin: 0 auto;
}

.dashboards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.dashboard {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  transition: all 0.2s;
}

.dashboard:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.dashboard img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  font-weight: bold;
  color: #e80;
}

.sem-resultados {
  text-align: center;
}
</style>
