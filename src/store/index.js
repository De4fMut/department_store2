import { createStore } from "vuex";
import productList from "@/store/modules/productList.js";
import brandsList from "@/store/modules/brandsList.js";

export default createStore({ 
  modules: {
    prods: productList,
    brands: brandsList
  },
});
