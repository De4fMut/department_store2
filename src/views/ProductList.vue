<template>
    <div class="items">
        <ProductItem 
        v-for="el in getLimitedItems" 
        :key="el.id" 
        :el="el" />
    </div>
    <div class="page__wrapper">
        <ProductPagination
            v-for="pageNumber in getTotalPages"
            :key="pageNumber"
            :pageNumber="pageNumber"
            :page="page"
            @getChangedPage="changePage"
        />
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import ProductPagination from "@/components/ProductPagination.vue";

export default {
    data(){
        return{
            ...mapState({
            page: (state) => state.prods.page,
        }),
        }
    },
    components: {
        ProductItem,
        ProductPagination,
    },
    methods: {
        ...mapActions({
            fetchPage: "prods/fetchPage"
        }),
        changePage(pageNumber) {
            this.page = pageNumber;
            this.fetchPage(this.page);
            console.log(this.page);
        }
    },
    computed: {
        ...mapGetters({
            getTotalPages: "prods/getTotalPages",
            getLimitedItems: "prods/getLimitedItems",
        }),
        // ...mapState({
        //     page: (state) => state.prods.page,
        // }),
    },
    mounted() {
        console.log(this.page + "-");
    },
};
</script>

<style lang="scss" scoped>
.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px auto 0;
    width: 960px;
    @media screen and (max-width: 999px) {
        width: 750px;
    }
    @media screen and (max-width: 779px) {
        width: 650px;
    }
    @media screen and (max-width: 669px) {
        width: 520px;
    }
    @media screen and (max-width: 550px) {
        width: 320px;
    }
    @media screen and (max-width: 350px) {
        width: 280px;
    }
}
.page__wrapper {
    display: flex;
    flex-direction: row;
}
</style>
