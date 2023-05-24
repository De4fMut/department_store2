<template>
    <nav>
        <router-link to="/">
            <div class="catalog" :style="{backgroundImage: url(catalogUrl)}"></div>
        </router-link>
        | 
        <!-- СОСИ ДАЛБАЕБ\ а если серьёзно убери всю эту хуиту с свг и сделай нормальный компонент а внутрь свг -->
        <router-link to="/cart">
            <div class="cart"></div>
        </router-link>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      catalogUrl: require("@/assets/icons/catalog.svg")
    }
  },
};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: flex-end;
    background: #30815d;
    height: 30px;
    width: 100%;
    .catalog {
        width: 25px;
        height: 25px;
    }
    .cart {
        width: 25px;
        height: 25px;
        background-image: require("@/assets/icons/shopping-cart.svg");
    }
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
