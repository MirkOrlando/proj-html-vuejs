<template>
  <div id="app">
    <SiteHeader />
    <main>Site Main Here</main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import SiteFooter from "@/components/SiteFooterComponent.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
