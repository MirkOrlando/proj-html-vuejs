<template>
  <div id="app">
    <SiteHeader />
    <main>
      <section class="jumbotron">
        <div class="container">
          <div class="row py-4">
            <div class="col-8">
              <h5>Certified fitness professional</h5>
              <h1>Take control of your health</h1>
              <div class="separator">
                <font-awesome-icon icon="fa-solid fa-chevron-up" />
                <font-awesome-icon icon="fa-solid fa-chevron-up" />
                <font-awesome-icon icon="fa-solid fa-chevron-up" />
              </div>
              <p class="text">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus dolor sit amet.
              </p>
              <div class="btn-actions">
                <a href="#" class="btn btn-primary">
                  <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
                  Visit my YouTube channel
                </a>
                <a href="#" class="btn btn-outline"
                  >Buy Avada today
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center align-item-center">
              <div class="action">
                <a href="#">
                  <font-awesome-icon icon="fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
  background: linear-gradient(to right, #060606, #060606 45%, transparent 76%),
    url(@/assets/img/slider82x-scaled.jpg);
  background-size: auto, cover;
  background-position: top right;
  background-repeat: no-repeat;
  h5 {
    color: #ff3b3e;
    font-size: 1.25rem;
    font-weight: 400;
  }
  h1 {
    color: $lightestColor;
    font-size: 3.5rem;
    font-weight: 400;
    margin: 1rem 0;
  }
  .separator {
    color: $new;
    margin: 2rem 0;
  }
  .text {
    color: $jumbo;
    margin: 2rem 0;
  }
  .btn-actions {
    padding: 1rem 0;
    .btn:first-child {
      margin-right: 1rem;
    }
  }
  .action .fa-play {
    color: $primaryColor;
    aspect-ratio: 1/1;
    padding: 1.5rem;
    background-color: $lightestColor;
    border-radius: 50%;
  }
}
</style>
