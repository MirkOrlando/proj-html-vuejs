<template>
  <main>
    <BookMark />
    <!-- ./BookMark -->
    <Badges />
    <!-- ./Badges -->
    <section class="jumbotron">
      <div class="container">
        <div class="row py-4">
          <div class="col-7 col-md">
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
                  <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
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
          <div class="col-5 p-relative d-md-none">
            <PlayButton />
          </div>
        </div>
        <OfferList />
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
      <div class="row">
        <div class="col-6 d-md-none">
          <div class="video p-relative">
            <img src="@/assets/img/service15-2x.jpg" alt="" />
            <PlayButton />
          </div>
        </div>
        <div class="col-6 col-md">
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
      <FeaturedPlaylist />
    </section>
    <!-- /.videos -->
    <section class="mailing-list">
      <div class="container">
        <div class="row py-6">
          <div class="col-7 col-md">
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
                lectus dolor sit amet, consectetur adipiscing elit sed portittor
                lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.mailing-list -->
    <Plans />
    <!-- /.plans -->
    <LatestArticles />
    <!-- /.latest-articles -->
    <div class="jumbo-quote">
      <div class="wrapper">
        <p class="text-quote">
          "I've failed over and over again in my
          <br />
          life. And that is why I succeed
        </p>
        <SeparatorLg />
        <p class="text">
          Arcu auctor gravida niisl, conque sit nisi tincidunt eget proin. In
          lacinia lacus donec sed massa
          <br />
          in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
        </p>
        <div class="action">
          <a href="#" class="btn btn-primary"
            >Buy Avada today
            <font-awesome-icon icon="fa-solid fa-chevron-right"
          /></a>
        </div>
      </div>
    </div>
    <!-- /.jumbo-quote -->
    <Partners />
    <!-- /.partners -->
    <section class="jumbo-workout">
      <div class="playaction">
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-play" />
        </a>
      </div>
      <h2>Crossfit workout of the day</h2>
      <div class="day">November 15th,2019</div>
      <div class="action">
        <a href="#">
          Viev all videos <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </a>
      </div>
    </section>
    <!-- /.jumbo-workout -->
  </main>
</template>

<script>
/* to put in SiteMainComponent */
import BookMark from "@/components/BookMarkComponent.vue";
import Badges from "@/components/BadgesComponent.vue";
import SeparatorLg from "@/components/SeparatorLgComponent.vue";
import PlayButton from "@/components/PlayButtonComponent.vue";
import OfferList from "@/components/OfferListComponent.vue";
import FeaturedPlaylist from "@/components/FeaturedPlaylistComponent.vue";
import Plans from "@/components/PlansComponent.vue";
import LatestArticles from "@/components/LatestArticlesComponent.vue";
import Partners from "@/components/PartnersComponent.vue";

export default {
  name: "SiteMainComponent",
  components: {
    BookMark,
    Badges,
    PlayButton,
    SeparatorLg,
    OfferList,
    FeaturedPlaylist,
    Plans,
    LatestArticles,
    Partners,
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  background: linear-gradient(to right, #060606, #060606 45%, transparent 76%),
    url(@/assets/img/slider82x-scaled.jpg);
  background-size: auto, cover;
  background-position: top right 25%;
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
    padding: 4rem;
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
}
.mailing-list {
  background: linear-gradient(to right, #060606, #060606 45%, transparent 76%),
    url(@/assets/img/banner1-2x.jpg);
  background-size: auto, cover;
  background-position: top right;
  background-repeat: no-repeat;
  h5 {
    color: #ff3b3e;
    font-size: 1.25rem;
  }
  h2 {
    color: $lightestColor;
    font-size: 3rem;
    font-weight: 400;
    margin: 1rem 0;
  }
  .action {
    margin: 2rem 0;
    input {
      width: calc(70% - 1rem);
      padding: 0.75rem;
      margin-right: 1rem;
      border-radius: 2rem;
    }
    .btn {
      display: inline-block;
      text-align: center;
      width: 30%;
    }
  }
  .text {
    color: $jumbo;
  }
}
.jumbo-quote {
  background: linear-gradient(to top, #000211f0 5%, transparent 100%),
    url("@/assets/img/banner2-2x.jpg");
  background-size: cover;
  background-position: center;
  color: $lightestColor;
  text-align: center;
  padding: 10rem 0;
  .wrapper {
    .text-quote {
      font-size: 2rem;
    }
    .text {
      margin: 2rem 0;
    }
    .action {
      margin-top: 3rem;
    }
  }
}
.jumbo-workout {
  color: $lightestColor;
  background: linear-gradient(
      160deg,
      rgba(0, 0, 255, 0.4),
      rgba(0, 0, 255, 0.4),
      rgba(255, 0, 0, 0.4)
    ),
    url(@/assets/img/banner14-2x.jpg);
  filter: brightness(70%) saturate(80%) contrast(130%) opacity(95%);
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 10rem 0;
  .playaction .fa-play {
    color: $primaryColor;
    aspect-ratio: 1/1;
    padding: 1.5rem;
    background-color: $lightestColor;
    border-radius: 50%;
    &:hover {
      color: $liteAlertColor;
    }
  }
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  .day {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: $new;
  }
}

@media screen and (max-width: 768px) {
  .jumbotron {
    background-size: auto;
    background-position: right 35% top;
    .take-control {
      .text {
        color: #b4b4b4;
      }
    }
  }
  .quote {
    .wrapper {
      margin-top: 110rem;
    }
  }
  .videos {
    .wrapper {
      padding: 4rem 1rem;
    }
  }
}

@media screen and (max-width: 500px) {
  .quote {
    .wrapper {
      margin-top: 57rem;
    }
  }
}

@media screen and (max-width: 430px) {
  .jumbotron {
    .take-control {
      h5 {
        font-size: 1rem;
      }
      h1 {
        font-size: 3rem;
      }
      .btn-actions {
        padding: unset;
        .btn:first-child {
          margin-right: unset;
        }
        .btn {
          display: block;
          text-align: center;
          margin: 1rem;
        }
      }
    }
  }
  .mailing-list {
    h5 {
      font-size: 1rem;
    }
    h2 {
      color: $lightestColor;
      font-size: 2.5rem;
      font-weight: 400;
      margin: 1rem 0;
    }
    .action {
      margin: 0;
      input,
      .btn {
        display: block;
        width: 100%;
        margin: 1rem 0;
      }
    }
    .text {
      color: $jumbo;
    }
  }
}
</style>