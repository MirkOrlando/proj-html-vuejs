<template>
  <div id="app">
    <header>
      <div class="container">
        <nav>
          <div class="logo">
            <img src="@/assets/img/logo.png" alt="logo" />
          </div>
          <div class="nav-menu">
            <ul class="nav-items">
              <li v-for="(navItem, index) in navItems" :key="index">
                <a href="#">{{ navItem }}</a>
              </li>
            </ul>
            <div class="nav-actions">
              <a href="#" class="btn btn-primary">Schedule a Workout</a>
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="mx-2"
              />
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main>Site Main Here</main>
    <footer>Site Footer Here</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navItems: ["Home", "Services", "About", "Videos", "Blog", "Store"],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
/* #region header */
header {
  background-color: $darkestColor;
  color: $jumbo;
  padding: 2rem 0;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-menu {
      display: flex;
      gap: 2rem;
      width: fit-content;
      .nav-items {
        display: flex;
        li {
          padding: 0 2rem;
        }
      }
    }
  }
}
/* #endregion header */
</style>
