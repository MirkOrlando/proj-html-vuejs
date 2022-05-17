<template>
  <li :class="getNavItemClass(index)" @click="$emit('clickActive')">
    <a href="#">{{ navItem }}</a>
  </li>
</template>

<script>
import state from "@/state.js";
export default {
  name: "NavItemComponent",
  props: {
    navItem: String,
    index: Number,
  },
  methods: {
    getNavItemClass(i) {
      if (state.navItems[i] === "Store" && state.activeNavItem === i) {
        return "active new";
      } else if (state.navItems[i] === "Store") {
        return "new";
      } else if (state.activeNavItem === i) {
        return "active";
      } else {
        return "";
      }
    },
  },
};
</script>