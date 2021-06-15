import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from 'firebase';

Vue.use(VueRouter);
function loadDashboard(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/dashboard/${view}.vue`
    );
}
function loadAuth(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/auth-pages/${view}.vue`
    );
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: loadAuth("SignIn"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: loadAuth("SignUp"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: loadAuth("ForgotPassword"),
  },
  {
    path: "/dashboard",
    name:'Dashboard',
    component: loadDashboard("Dashboard"),
    redirect:"/dashboard/main",
    meta:{
      requiresAuth:true,
    },
    children: [
      {
        path: "main",
        alias: "",
        name: "DashboardHome",
        component: loadDashboard("DashboardHome"),
      },
      {
        path: "plan-trip",
        name: "PlanTrip",
        component: loadDashboard("PlanTrip"),
      },
      {
        path: "reservations",
        name: "Reservations",
        component: loadDashboard("Reservations"),
      },
      {
        path: "settings",
        name: "Settings",
        component: loadDashboard("Settings"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=>{
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next({name:'SignIn'});
  else if(!requiresAuth && currentUser) next({name:'Dashboard'});
  else next();
});


export default router;
