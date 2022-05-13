<template>
  <div id="app">
    <SiteHeader />
    <main>Site Main Here</main>
    <footer>
      <div class="footer-top py-3">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="logo">
                <img src="@/assets/img/logo-200x34.png" alt="logo" />
              </div>
              <p class="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                sunt iure similique suscipit quasi. Et, recusandae.
                Voluptatibus, perferendis ab aperiam.
              </p>
              <div class="social">
                <font-awesome-icon
                  class="icon"
                  icon="fa-brands fa-facebook-f"
                />
                <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <font-awesome-icon
                  class="icon"
                  icon="fa-brands fa-linkedin-in"
                />
              </div>
            </div>
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
    color: $jumbo;
    text-align: center;
    .social {
      color: $socialIconColor /* ff414b */;
      .icon {
        margin: 0 0.25rem;
        padding: 0 0.25rem;
      }
    }
  }
}
</style>
