<template>
  <div class="bookmark" v-if="scrollpx > 800">
    <a href="#site-header">
      <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </a>
  </div>
</template>

<script>
export default {
  name: "BookMarkComponent",
  data() {
    return {
      scrollpx: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.bookmark {
  position: fixed;
  bottom: 0;
  right: 4rem;
  width: 40px;
  height: 25px;
  background-color: #2f2f2f;
  color: $lightestColor;
  z-index: 90;
  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>