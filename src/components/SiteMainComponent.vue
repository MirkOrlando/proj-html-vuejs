<template>
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
                <div class="card-details">
                  <h5>{{ video.title }}</h5>
                  <p class="card-text">{{ video.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.videos -->
    <section class="mailing-list">
      <div class="container">
        <div class="row py-6">
          <div class="col-7">
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
    <section class="plans">
      <div class="container">
        <div class="row g-3">
          <div class="col-4" v-for="(plan, index) in plans" :key="index">
            <div class="card">
              <div class="card-icon">
                <font-awesome-icon :icon="plan.icon" />
              </div>
              <div class="card-title">
                <h3 class="title">{{ plan.title }}</h3>
                <h4 class="subtitle">{{ plan.subtitle }}</h4>
              </div>
              <div class="card-body">
                <p>{{ plan.text }}</p>
              </div>
              <div class="card-action">
                <a href="#">
                  {{ plan.action }}
                  <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.plans -->
    <div class="latest-articles py-6">
      <div class="container">
        <div class="top">
          <h4>Latest articles</h4>
          <div class="all">
            <a href="#">
              Read all articles
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </a>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-4" v-for="(article, index) in articles" :key="index">
            <div class="card">
              <div class="card-image p-relative" :class="article.class">
                <div class="card-image-helper"></div>
              </div>
              <div class="card-details">
                <h5>{{ article.title }}</h5>
                <p class="card-text">
                  By <strong>{{ article.author }}</strong> |
                  {{ article.date }} | <strong>{{ article.category }}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div class="partners">
      <div class="container">
        <div class="row">
          <div class="col-3" v-for="(partner, index) in partners" :key="index">
            <div class="card">
              <div class="card-image">
                <img :src="partner.src" alt="" />
              </div>
              <SeparatorSmPrimary />
              <div class="card-text">
                <p>{{ partner.text }}</p>
              </div>
              <div class="action">
                <a href="#">
                  {{ partner.action }}
                  <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import PlayButton from "@/components/PlayButtonComponent.vue";
import SeparatorLg from "@/components/SeparatorLgComponent.vue";
import SeparatorSm from "@/components/SeparatorSmComponent.vue";
import SeparatorSmPrimary from "@/components/SeparatorSmPrimaryComponent.vue";

export default {
  name: "SiteMainComponent",
  components: {
    PlayButton,
    SeparatorLg,
    SeparatorSm,
    SeparatorSmPrimary,
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
      plans: [
        {
          icon: "fa-regular fa-clock",
          title: "Team training",
          subtitle: "Find a partner",
          text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla asipiscing. Nils sit fames amet senectus eget sed duis vehicula. Tristique.",
          action: "Find a partner",
        },
        {
          icon: "fa-solid fa-dumbbell",
          title: "Crossfit workout",
          subtitle: "Push your limits",
          text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla asipiscing. Nils sit fames amet senectus eget sed duis vehicula. Tristique.",
          action: "Learn about Crossfit",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Weight loss plan",
          subtitle: "Shed those pounds",
          text: "At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
          action: "Schedule a workout",
        },
      ],
      articles: [
        {
          title: "The best protein shake",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "protein",
        },
        {
          title: "Ultimate cardio workout",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "workout",
        },
        {
          title: "New juices available now",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "juices",
        },
      ],
      partners: [
        {
          src: require("@/assets/img/sponsor-1-2x-200x103.png"),
          text: "Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.",
          action: "Visit Yoga Studio",
        },
        {
          src: require("@/assets/img/sponsor-2-2x-200x103.png"),
          text: "Feugiat etiam dui mauris pharetra mayrus sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.",
          action: "Join Fitness Center",
        },
        {
          src: require("@/assets/img/sponsor-3-2x-200x103.png"),
          text: "Nist at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Lugula in habitant et saggitis imperdiet.",
          action: "Learn about FC",
        },
        {
          src: require("@/assets/img/sponsor-4-2x-200x103.png"),
          text: "Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend",
          action: "Visit Power Gym",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
      transform: scale(1.05);
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
      padding: 1rem;
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
.plans {
  background-color: $darkestColor;
  padding: 6rem 0;
  .card {
    height: 100%;
    padding: 4rem 3rem;
    border: 2px solid #3240c1;
    color: $lightestColor;
    text-align: center;
    transition: all 250ms linear;
    &:hover {
      transform: scale(1.05);
    }
    .card-icon {
      font-size: 4rem;
    }
    .card-title {
      margin: 2rem 0;
      .subtitle {
        color: $new;
        margin: 0.5rem 0;
      }
    }
    .card-body {
      color: $jumbo;
      margin: 2rem 0;
      line-height: 1.5rem;
    }
  }
}
.latest-articles {
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
    /* background: linear-gradient(to top, #4154fe8f 5%, transparent 100%) */
    transition: all 250ms linear;

    .card-image {
      transition: all 250ms linear;
      .card-image-helper {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to top, #4154fe8f 5%, transparent 100%);
        opacity: 0;
        transition: all 250ms linear;
      }
      &.protein {
        min-height: 250px;
        background-image: url("@/assets/img/blog4-2x-800x515.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        transition: all 250ms linear;
      }
      &.workout {
        min-height: 250px;
        background-image: url("@/assets/img/blog1-2x-800x515.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
      &.juices {
        min-height: 250px;
        background-image: url("@/assets/img/blog3-2x-800x515.jpg");
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    &:hover .card-image-helper {
      opacity: 1;
    }
    .card-details {
      padding: 1.5rem 1rem;
      h5 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      .card-text {
        color: $jumbo;
        font-size: 0.75rem;
      }
    }
  }
}
.jumbo-quote {
  background: linear-gradient(to top, #000211f0 5%, transparent 100%),
    url("@/assets/img/banner2-2x.jpg");
  background-size: cover;
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
.partners {
  padding: 6rem 0;
  .card {
    text-align: center;
    padding: 1rem;
    .card-image {
      margin-bottom: 1rem;
    }
    .card-text {
      margin: 1rem 0;
      color: $jumbo;
      line-height: 1.5rem;
    }
    .action {
      font-weight: bold;
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
    url(http://localhost:8080/img/banner14-2x.d58b9b75.jpg);
  filter: brightness(70%) saturate(80%) contrast(130%) opacity(95%);
  background-size: cover;
  text-align: center;
  padding: 10rem 0;
  .playaction .fa-play {
    color: $primaryColor;
    aspect-ratio: 1/1;
    padding: 1.5rem;
    background-color: $lightestColor;
    border-radius: 50%;
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
</style>