import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Catalog from "../views/Catalog.vue";
import FAQ from "../views/FAQ.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/catalog", component: Catalog },
  { path: "/faq", component: FAQ },
];
