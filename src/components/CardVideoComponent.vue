<template>
  <div class="col-4 col-sm-6 col-xs">
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
</template>

<script>
import PlayButton from "@/components/PlayButtonComponent.vue";
export default {
  name: "CardVideoComponent",
  props: {
    video: Object,
  },
  components: {
    PlayButton,
  },
};
</script>

<style lang="scss" scoped>
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
</style>