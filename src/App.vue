<template>
  <div id="app">
    <SiteHeader />
    <main>Site Main Here</main>
    <footer>Site Footer Here</footer>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
