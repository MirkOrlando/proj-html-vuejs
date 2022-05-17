<template>
  <div class="col-3 col-md-6 col-xs">
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
</template>

<script>
import SeparatorSmPrimary from "./SeparatorSmPrimaryComponent.vue";
export default {
  name: "CardPartnerComponent",
  props: {
    partner: Object,
  },
  components: {
    SeparatorSmPrimary,
  },
};
</script>

<style lang="scss" scoped>
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
</style>