import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Enchant from "./views/Enchant.vue";
import Dungeon from "./views/Dungeon.vue";
import Fight from "./views/Fight.vue";
import Monster from "./views/Monster.vue";
import Treasure from "./views/Treasure.vue";
import Spell from "./views/Spell.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/enchant",
      name: "enchant",
      component: Enchant
    },
    {
      path: "/dungeon",
      name: "dungeon",
      component: Dungeon
    },
    {
      path: "/fight",
      name: "fight",
      component: Fight
    },
    {
      path: "/monster",
      name: "monster",
      component: Monster
    },
    {
      path: "/treasure",
      name: "treasure",
      component: Treasure
    },
    {
      path: "/spell",
      name: "spell",
      component: Spell
    }
  ]
});
