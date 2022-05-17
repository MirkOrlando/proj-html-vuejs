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
        .collapse-togglers {
          display: block;
        }
        .collapse-menu {
          display: none;
          position: absolute;
          left: 0;
          top: 100%;
          background-color: #0d0d10;
          color: $lightestColor;
          width: 100%;
          z-index: 100;
          transition: all 250ms linear;
          &.show-menu {
            display: block;
            animation: show 500ms linear forwards;
          }
          &.hide-menu {
            animation: hide 500ms linear forwards;
          }
          .nav-items {
            display: block;
            li {
              display: block;
              padding: 1rem;
              border-bottom: 1px solid #212121;
              background-color: transparent;
              transition: all 250ms linear;
              &.active {
                background-color: #1f1f22;
              }
            }
          }
          .nav-actions {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 100;
            .btn {
              display: none;
            }
            .ex-btn {
              display: block;
              padding: 1rem;
              order: 0;
              border-bottom: 1px solid #212121;
              width: 100%;
              &:hover {
                background-color: #1f1f22;
              }
            }
            .chart {
              order: 1;
              border-bottom: 1px solid #212121;
              width: 100%;
              &:hover {
                background-color: #1f1f22;
              }
            }
            a {
              padding: 1rem;
              margin: 0;
              display: block;
            }
            .search {
              display: flex;
              padding: 0 1rem;
              order: 0;
              border-bottom: 1px solid #212121;
              width: 100%;
              input {
                padding: 0.5rem;
                margin: 0.5rem 0;
                display: block;
                border-top-left-radius: 2rem;
                border-bottom-left-radius: 2rem;
                width: 20%;
                transition: all 1000ms linear;
                &:focus {
                  width: 100%;
                }
              }
              a {
                margin: 0.5rem 0;
                padding: 0.5rem;
                background-color: $darkestColor;
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
              }
            }
          }
        }
      }
    }
  }
}

/* animation show menu */
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
