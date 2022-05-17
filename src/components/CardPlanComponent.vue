<template>
  <div class="col-4 col-md-6 col-xs">
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
</template>

<script>
export default {
  name: "CardPlanComponent",
  props: {
    plan: Object,
  },
};
</script>

<style lang="scss" scoped>
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
</style>