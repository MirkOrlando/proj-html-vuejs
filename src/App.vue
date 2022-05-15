<template>
  <div id="app">
    <SiteHeader />
    <main>
      <section class="jumbotron">
        <div class="container"></div>
      </section>
    </main>
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
.jumbotron {
  height: 70vh;
  background: linear-gradient(to right, #060606, #060606 45%, transparent 76%),
    url(http://localhost:8080/img/slider82x-scaled.eb2b1d9f.jpg);
  background-size: auto, cover;
  background-position: top right;
  background-repeat: no-repeat;
}
</style>
