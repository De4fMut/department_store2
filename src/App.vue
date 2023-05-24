<template>
  <MainHeader/>
  <router-view />
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MainHeader from "@/components/MainHeader.vue";


export default {
  data () {
    return {

    }
  },
  components: {
    MainHeader
  },
  methods: {
    ...mapActions({
    setAllItems: 'prods/setAllItems',
    setTotalPages: "prods/setTotalPages"
  })
  },
  computed: {
    ...mapGetters({
      getAllItems: "prods/getAllItems"
    })
  },
  mounted(){
    this.setAllItems()
    this.setTotalPages()
  }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
