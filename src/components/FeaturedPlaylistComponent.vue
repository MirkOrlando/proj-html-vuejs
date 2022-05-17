<template>
  <div class="featured-playlist py-4">
    <div class="container">
      <div class="top">
        <h4>Featured playlist</h4>
        <div class="all">
          View all videos
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
      </div>
      <div class="row row-sm">
        <div
          class="col-4 col-sm-6 col-xs"
          v-for="(video, index) in videos"
          :key="index"
        >
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
</template>

<script>
import PlayButton from "@/components/PlayButtonComponent.vue";
export default {
  name: "FeaturedPlaylistComponent",
  components: {
    PlayButton,
  },
  data() {
    return {
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

<style lang="scss" scoped>
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
        font-size: 1.25em;
        margin: 0.5rem 0;
      }
      .card-text {
        color: $primaryColor;
      }
    }
  }
}
</style>