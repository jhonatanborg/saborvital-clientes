import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../components/user/session/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/lista-de-produtos",
    name: "list-products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/kumbucha",
    name: "kumbucha",
    component: () => import("../views/Kumbucha.vue"),
  },
  {
    path: "/minha-conta",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    children: [
      {
        path: "/",
        name: "account",
        component: () => import("../components/user/profile/Profile.vue"),
      },
      {
        path: "/pedidos",
        name: "purchases",
        component: () => import("../components/user/profile/Purchases.vue"),
      },
      {
        path: "/pedidos-detalhes/:id",
        name: "purchase-details",
        component: () =>
          import("../components/user/profile/PurchaseDetails.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/lista-de-produtos", "", "/kumbucha"];
  const authRequired = !publicPages.includes(to.matched[0].path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next({
      path: "/",
    });
  }
  next();
});
export default router;
