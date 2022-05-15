<template>
  <div class="action">
    <a href="#">
      <font-awesome-icon icon="fa-solid fa-play" />
    </a>
  </div>
</template>

<script>
export default {
  name: "PlayButtonComponent",
};
</script>

<style lang="scss" scoped>
.action .fa-play {
  color: $primaryColor;
  aspect-ratio: 1/1;
  padding: 1.5rem;
  background-color: $lightestColor;
  border-radius: 50%;
}
</style>