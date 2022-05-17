<template>
  <header id="site-header">
    <div class="container">
      <nav>
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="logo" />
        </div>
        <div class="nav-menu">
          <div class="collapse-togglers">
            <a
              href="#"
              class="btn btn-hamburger nav-toggler d-flex"
              @click="showMenu"
              ref="bars"
            >
              <font-awesome-icon icon="fa-solid fa-bars" />
            </a>
            <a
              href="#"
              class="btn btn-hamburger nav-toggler-cross d-none"
              @click="hideMenu"
              ref="cross"
            >
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </a>
          </div>
          <div class="collapse-menu" ref="collapseMenu">
            <ul class="nav-items">
              <NavItem
                :navItem="navItem"
                :index="index"
                v-for="(navItem, index) in navItems"
                :key="index"
                @clickActive="getActiveNavItem(index)"
              />
            </ul>
            <div class="nav-actions">
              <a href="#" class="btn btn-primary">Schedule a Workout</a>
              <div class="ex-btn">Schedule a Workout</div>
              <div class="chart">
                <a href="#" class="mx-2">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </a>
              </div>
              <div class="search">
                <input type="text" placeholder="Search" />
                <a href="#">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import state from "@/state.js";
import NavItem from "@/components/NavItemComponent.vue";
export default {
  name: "SiteHeaderComponent",
  components: {
    NavItem,
  },
  data() {
    return {
      navItems: ["Home", "Services", "About", "Videos", "Blog", "Store"],
      activeNavItem: 0,
    };
  },
  methods: {
    getActiveNavItem(i) {
      state.activeNavItem = i;
    },
    showMenu() {
      //console.log(this.$refs.collapseMenu);
      this.$refs.collapseMenu.classList.add("show-menu");
      this.$refs.bars.classList.remove("d-flex");
      this.$refs.bars.classList.add("d-none");
      this.$refs.cross.classList.remove("d-none");
      this.$refs.cross.classList.add("d-flex");
    },
    hideMenu() {
      //console.log("hiding menu"); opacity-0
      this.$refs.collapseMenu.classList.add("hide-menu");
      setTimeout(() => {
        this.$refs.collapseMenu.classList.remove("show-menu");
        this.$refs.collapseMenu.classList.remove("hide-menu");
      }, 600);
      this.$refs.bars.classList.add("d-flex");
      this.$refs.bars.classList.remove("d-none");
      this.$refs.cross.classList.add("d-none");
      this.$refs.cross.classList.remove("d-flex");
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
    .nav-toggler-cross,
    .nav-toggler {
      align-items: center;
      justify-content: center;
      aspect-ratio: 1/1;
      width: 40px;
    }
    .collapse-togglers {
      display: none;
    }
    .collapse-menu {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .nav-menu {
      display: flex;
      gap: 1rem;
      width: fit-content;
      & a:hover {
        color: $lightestColor;
      }
      .nav-items {
        display: flex;
      }
      .nav-actions {
        display: flex;
        align-items: center;
        .ex-btn {
          display: none;
        }
        .search {
          input {
            display: none;
          }
        }
      }
    }
  }
}
</style>