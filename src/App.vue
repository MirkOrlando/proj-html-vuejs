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
            <div class="col-4 p-relative">
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
        <div class="wrapper">
          <p class="text">
            "How You respond to the challenge in the second half
            <br />
            will determine what you become after the game,
            <br />
            whether you are a winner or a loser."
          </p>
          <SeparatorLg />
          <div class="user">
            <div class="userpic">
              <img src="@/assets/img/avatar-1-2x.jpg" alt="" />
            </div>
            <span class="username">Brad Johnson</span>
            <span class="location">Los Angeles</span>
          </div>
        </div>
      </div>
      <!-- /.quote -->
      <section class="videos">
        <!-- add .container-lg -->
        <div class="row">
          <div class="col-6">
            <div class="video p-relative">
              <img src="@/assets/img/service15-2x.jpg" alt="" />
              <PlayButton />
            </div>
          </div>
          <div class="col-6">
            <div class="wrapper">
              <h4>Tune up your workouts</h4>
              <h2>The best health & fitness advice online</h2>
              <div class="youtube-channel">
                <div class="pic">
                  <img src="@/assets/img/yt_channel_pic.jpg" alt="" />
                </div>
                <div class="details">
                  <div class="name">ThemeFusion</div>
                  <div class="badge">
                    <div class="brand">
                      <font-awesome-icon icon="fa-brands fa-youtube" /> YouTube
                    </div>
                    <div class="subscribers">999+</div>
                  </div>
                </div>
              </div>
              <p class="text">
                Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper
                maurid, venenatis, leo integer sit pellentesque.
              </p>
              <div class="action">
                <a href="#" class="btn btn-alert">
                  <font-awesome-icon icon="fa-brands fa-youtube" /> Visit my
                  YouTube channel
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-playlist py-4">
          <div class="container">
            <div class="top">
              <h4>Featured playlist</h4>
              <div class="all">
                View all videos
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
              </div>
            </div>
            <div class="row g-2">
              <div class="col-4" v-for="(video, index) in videos" :key="index">
                <div class="card">
                  <div class="card-video p-relative">
                    <img :src="video.src" alt="" />
                    <PlayButton />
                  </div>
                </div>
                <div class="card-details">
                  <h5>{{ video.title }}</h5>
                  <p class="card-text">{{ video.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.videos -->
      <section class="mailing-list">
        <div class="container">
          <div class="row py-4">
            <div class="col-8">
              <div class="wrapper">
                <h5>Join our mailing list today</h5>
                <h2>Insider offers & flash sales in your inbox every week.</h2>
                <SeparatorLg />
                <div class="action">
                  <input type="text" placeholder="Insert your email...*" />
                  <a href="#" class="btn btn-primary">Subscribe</a>
                </div>
                <p class="text">
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.mailing-list -->
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
      videos: [
        {
          title: "Thighs & glute workout",
          text: "Increase your mobility",
          src: require("@/assets/img/video2-2x.jpg"),
        },
        {
          title: "Lift, firm & perk up",
          text: "Feel young again",
          src: require("@/assets/img/video7-2x.jpg"),
        },
        {
          title: "Slim & trim your waist",
          text: "Shed thos extra pounds",
          src: require("@/assets/img/video9-2x.jpg"),
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
    margin-bottom: -20rem;
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
  color: $lightestColor;
  background: linear-gradient(160deg, #0219eb, #d4000c);
  padding: 6rem 0;
  .wrapper {
    margin-top: 20rem;
    margin-bottom: 3rem;
  }
  .text {
    font-size: 2rem;
  }
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: -1rem;
    .userpic {
      width: 50px;
      &,
      img {
        border-radius: 50%;
      }
    }
    .location {
      color: #d9aec8;
    }
  }
}
.videos {
  .video {
    margin-top: -3rem;
    &,
    img {
      border-bottom-right-radius: 2rem;
    }
    img {
      filter: brightness(0.9);
      object-fit: cover;
      object-position: center;
    }
  }
  .wrapper {
    padding: 6rem;
    h4 {
      color: $primaryColor;
      margin-bottom: 2.5rem;
    }
    h2 {
      font-size: 2.5rem;
      margin: 2rem 0;
    }
    .youtube-channel {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 2rem 0;
      color: $jumbo;
      font-size: 0.75rem;
      .pic {
        &,
        img {
          border-radius: 50%;
        }
      }
      .name {
        margin-bottom: 0.5rem;
      }
      .badge {
        display: flex;
        .brand {
          color: $lightestColor;
          background-color: $youtubeBrandColor;
        }
        .subscribers {
          border: 1px solid $jumbo;
        }
        .brand,
        .subscribers {
          display: flex;
          align-items: center;
          padding: 0.25rem;
        }
      }
    }
    .text {
      color: $jumbo;
      margin: 2rem 0;
    }
    .action {
      margin-top: 3rem;
    }
  }
  .featured-playlist {
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 0;
      h4 {
        font-size: 1.5rem;
      }
      .all .fa-chevron-right {
        font-size: 0.75rem;
      }
    }
    .card {
      .card-video,
      img {
        border-bottom-right-radius: 2rem;
      }
    }
    .card-details {
      text-align: center;
      margin-top: 1.5rem;
      h5 {
        font-size: 1rem;
        margin: 0.5rem 0;
      }
      .card-text {
        color: $primaryColor;
        font-size: 0.75rem;
      }
    }
  }
}
</style>
