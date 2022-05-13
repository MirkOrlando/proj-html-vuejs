<template>
  <div id="app">
    <header>
      <div class="container">
        <nav>
          <div class="logo">LOGO</div>
          <div class="menu">
            <div class="menu-items">MENU-ITMES</div>
            <div class="actions">ACTIONS</div>
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
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
/* #region header */
header {
  background-color: $darkestColor;
  color: $jumbo;
  padding: 1rem 0;
}
/* #endregion header */
</style>
