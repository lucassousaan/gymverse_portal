<template>
    <form>
        <input name="busca" id="busca" type="text" v-model="busca" placeholder="Digite o nome do cliente">
        <input id="lupa" type="submit" value="Buscar" @click.prevent="buscarClientes">
    </form>
</template>

<script>
export default {
    name: "ClientesBuscar",
    data() {
        return {
            busca: ""
        }
    },
    methods: {
        buscarClientes() {

        }
        // buscarProdutos() {
        //     this.$router.push({query: { q: this.busca }})
        // }
    }
};
</script>

<style scoped>
form {
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;
}

#busca {
    width: 100%;
    padding: 20px;
    border: none;
}

#busca:focus,
#busca:hover {
    transform: scale(1.1);
}

#lupa {
    width: 62px;
    height: 62px;
    background: url("../assets/search.svg") no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    box-shadow: none;
    background-size: 20px;
}
</style>
