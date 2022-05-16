<template>
  <div id="app">
    <SiteHeader />
    <main>
      <section class="jumbotron">
        <div class="container">
          <div class="row py-4">
            <div class="col-8">
              <div class="take-control">
                <h5>Certified fitness professional</h5>
                <h1>Take control of your health</h1>
                <SeparatorLg />
                <p class="text">
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus dolor sit amet.
                </p>
                <div class="btn-actions">
                  <a href="#" class="btn btn-primary">
                    <font-awesome-icon
                      class="icon"
                      icon="fa-brands fa-youtube"
                    />
                    Visit my YouTube channel
                  </a>
                  <a href="#" class="btn btn-outline"
                    >Buy Avada today
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
              <!-- /.take-control -->
            </div>
            <div class="col-4 d-flex justify-content-center align-item-center">
              <PlayButton />
            </div>
          </div>
          <div class="offers">
            <div class="row g-2">
              <div class="col-4" v-for="(offer, index) in offers" :key="index">
                <div class="card" :class="offer.class">
                  <div class="offer-details">
                    <SeparatorSm />
                    <h3 class="title">{{ offer.title }}</h3>
                    <p class="text">{{ offer.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.offers -->
        </div>
      </section>
      <!-- /.jumbotron -->
      <div class="quote">
        <p class="text">
          "How You respond to the challenge in the second half will determine
          what you become after the game, whether you are a winner or a loser."
        </p>
        <SeparatorLg />
        <div class="user">
          <img src="@/assets/img/avatar-1-2x.jpg" alt="" />
          <span class="username">Brad Johnson</span>
          <span class="location"></span>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import SiteFooter from "@/components/SiteFooterComponent.vue";
/* to put in SiteMainComponent */
import PlayButton from "@/components/PlayButtonComponent.vue";
import SeparatorLg from "@/components/SeparatorLgComponent.vue";
import SeparatorSm from "@/components/SeparatorSmComponent.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
    PlayButton,
    SeparatorLg,
    SeparatorSm,
  },
  data() {
    return {
      offers: [
        {
          title: "Crossfit workout",
          text: "Push your limits",
          class: "workout",
        },
        {
          title: "New gym apparel",
          text: "Look good, feel good",
          class: "apparel",
        },
        {
          title: "Team training",
          text: "Find a partner",
          class: "team",
        },
      ],
    };
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
  .take-control {
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
  }
  .card {
    position: relative;
    height: 100%;
    min-height: 400px;
    background-size: cover;
    border-radius: 0.25rem;
    border-bottom-right-radius: 2rem;
    transition: all 250ms linear;
    &:hover {
      transform: scale(1.1);
    }
    &.workout {
      background: linear-gradient(to top, #060606c7 5%, transparent 100%),
        url("@/assets/img/service6-2x.jpg");
      background-size: cover;
    }
    &.apparel {
      background: linear-gradient(to top, #060606c7 5%, transparent 100%),
        url("@/assets/img/box1-2x.jpg");
      background-size: cover;
    }
    &.team {
      background: linear-gradient(to top, #060606c7 5%, transparent 100%),
        url("@/assets/img/box3-2x.jpg");
      background-size: cover;
    }
  }
  .offer-details {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: $lightestColor;
    h3 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }
    .text {
      color: $new;
    }
  }
}
.quote {
  text-align: center;
}
</style>
