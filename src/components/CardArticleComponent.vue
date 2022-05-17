<template>
  <div class="col-4 col-sm-6 col-xs">
    <div class="card">
      <div class="card-image p-relative" :class="article.class">
        <div class="card-image-helper"></div>
      </div>
      <div class="card-details">
        <h5>{{ article.title }}</h5>
        <p class="card-text">
          By <strong>{{ article.author }}</strong> | {{ article.date }} |
          <strong>{{ article.category }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardArticleComponent",
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
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
      background-position: center;
      background-repeat: no-repeat;
    }
    &.workout {
      min-height: 250px;
      background-image: url("@/assets/img/blog1-2x-800x515.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    &.juices {
      min-height: 250px;
      background-image: url("@/assets/img/blog3-2x-800x515.jpg");
      background-size: cover;
      background-position: center;
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
      font-size: 0.85rem;
    }
  }
}
</style>