<template>
    <div class="item">
        <input type="image" :src="imageUrl" alt="">
        <h3>{{ el.title }}</h3>
        <h4>{{ el.regular_price.value + " " + el.regular_price.currency }}</h4>
    </div>
</template>

<script>
import { mapActions} from "vuex";

export default {
    data(){
        return{
            imageUrl: require("@/assets" + this.el.image)
        }
    },
    props: {
        el: {
            type: Object,
            required: true,
        },
    },
    computed: {

    },
    methods: {
        ...mapActions({
            setItem: "prods/setItem",
            setImageUrl: "prods/setImageUrl",
        }),
    },
    mounted() {
        this.setItem(this.el.id-1);
    },
};
</script>

<style lang="scss" scoped>
.item {
    flex: 0 1 300px;
    position: relative;
    border: 5px solid rgb(63, 209, 129);
    border-radius: 50px;
    height: 400px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    @media screen and (max-width: 699px) {
        height: 300px;
        flex: 0 0 225px;
    }
    input {
        display: block;
        position: absolute;
        top: 10px;
        height: 300px;
        width: inherit;
        @media screen and (max-width: 699px) {
            height: 225px;
        }
    }
    h3, h4{
        margin: 12px 0;
    }
}
</style>
