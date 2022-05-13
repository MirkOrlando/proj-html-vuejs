<template>
  <div id="app">
    <SiteHeader />
    <main>Site Main Here</main>
    <footer>
      <div class="footer-top py-3">
        <div class="container">
          <div class="row">
            <div class="col-3">LEFT</div>
            <div class="col-3">CENTER</div>
            <div class="col-3">RIGHT</div>
          </div>
        </div>
      </div>
    </footer>
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
footer {
  background-color: $darkestColor;
  .footer-top {
    color: $lightestColor;
    text-align: center;
  }
}
</style>
