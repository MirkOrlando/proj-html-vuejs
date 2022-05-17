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
        <CardVideo
          :video="video"
          v-for="(video, index) in videos"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardVideo from "@/components/CardVideoComponent.vue";
export default {
  name: "FeaturedPlaylistComponent",
  components: {
    CardVideo,
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
}
</style>