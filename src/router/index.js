import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/views/ProductList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ShoppingCart.vue"),
  },
  {
    path: "/icons",
    name: "icons",
    component: () =>
    import("@/components/UI/AppIcon.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
