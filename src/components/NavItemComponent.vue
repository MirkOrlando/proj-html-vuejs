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

<style lang="scss" scoped>
li {
  display: flex;
  padding: 0 1rem;
  &.new a:after {
    content: "new";
    font-size: 0.75rem;
    color: $darkestColor;
    margin-left: 0.5rem;
    padding: 0.5rem;
    background-color: $new;
  }
  &.active {
    color: $lightestColor;
  }
  & a:hover {
    color: $lightestColor;
  }
}
</style>