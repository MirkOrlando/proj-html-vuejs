<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="logo" />
        </div>
        <div class="nav-menu">
          <a href="#" class="btn btn-hamburger">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </a>
          <div class="collapse-menu">
            <ul class="nav-items">
              <li
                v-for="(navItem, index) in navItems"
                :key="index"
                :class="getNavItemClass(index)"
                @click="getActiveNavItem(index)"
              >
                <a href="#">{{ navItem }}</a>
              </li>
            </ul>
            <div class="nav-actions">
              <a href="#" class="btn btn-primary">Schedule a Workout</a>
              <a href="#" class="mx-2">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              </a>
              <a href="#">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeaderComponent",
  data() {
    return {
      navItems: ["Home", "Services", "About", "Videos", "Blog", "Store"],
      activeNavItem: 0,
    };
  },
  methods: {
    getActiveNavItem(i) {
      this.activeNavItem = i;
    },
    getNavItemClass(i) {
      if (this.navItems[i] === "Store" && this.activeNavItem === i) {
        return "active new";
      } else if (this.navItems[i] === "Store") {
        return "new";
      } else if (this.activeNavItem === i) {
        return "active";
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $darkestColor;
  color: $headerColor;
  padding: 2rem 0;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-menu {
      display: flex;
      gap: 1rem;
      width: fit-content;
      & a:hover {
        color: $lightestColor;
      }
      .nav-items {
        display: flex;
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
        }
      }
    }
  }
}
</style>