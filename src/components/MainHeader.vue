<template>
    <nav>
        <router-link to="/">
            <icon-base width="30px" height="30px" viewBox="0 0 256 256">
                <catalog></catalog>
            </icon-base>
        </router-link>
        |
        |
        <router-link to="/cart">
            <icon-base width="30px" height="30px" viewBox="0 0 24 24">
                <cart></cart>
            </icon-base>
        </router-link>
        |
        |
        <router-link to="/icons">0-0</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            catalogUrl: require("@/assets/icons/catalog.svg"),
        };
    },
};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: flex-end;
    background: #1c8556;
    height: 30px;
    width: 100%;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
