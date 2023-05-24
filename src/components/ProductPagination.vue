<template>
    <div>
        <div
            @click="changePage(pageNumber)"
            class="page"
            :class="{
                'current-page': pageNumber === page,
            }"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: {
        page: {
            type: Number,
            required: true,
        },
        pageNumber: {
            type: Number,
            required: true,
        },
    },
    methods: {
        ...mapGetters({
            getCurrentPage: "prods/getCurrentPage",
        }),
        changePage(pageNumber) {
            // this.page = pageNumber
            this.$emit("getChangedPage", pageNumber);
            console.log(pageNumber);
        },
    },
};
</script>

<style lang="scss" scoped>
.page {
    // display: inline-block;
    width: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 4px;
    margin: 10px;
    padding: 5px;
    &:hover {
        cursor: pointer;
    }
}
.current-page {
    border: 2px solid rgb(63, 209, 129);
}
</style>