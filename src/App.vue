<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import SiteMain from "@/components/SiteMainComponent.vue";
import SiteFooter from "@/components/SiteFooterComponent.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
/* responsive */
@media screen and (max-width: 1070px) {
  header {
    position: relative;
    nav {
      .nav-menu {
        a.nav-toggler {
          display: block;
        }
        .collapse-menu {
          display: block;
          position: absolute;
          left: 0;
          top: 100%;
          background-color: black;
          width: 100%;
          z-index: 100;
          .nav-items {
            display: block;
            li {
              display: block;
              padding: 1rem;
              border-bottom: 1px solid #0d0d10;
            }
          }
          .nav-actions {
            display: flex;
            flex-direction: column;
            a {
              padding: 1rem;
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
