<template>
  <div class="offers">
    <div class="row row-sm">
      <CardOffer :offer="offer" v-for="(offer, index) in offers" :key="index" />
    </div>
  </div>
  <!-- /.offers -->
</template>

<script>
import CardOffer from "@/components/CardOfferComponent.vue";
export default {
  name: "OfferListComponent",
  components: {
    CardOffer,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.offers {
  margin-bottom: -20rem;
}
@media screen and (max-width: 768px) {
  .offers {
    margin-bottom: -110rem;
  }
}

@media screen and (max-width: 500px) {
  .jumbotron {
    .offers {
      margin-bottom: -57rem;
    }
  }
}
</style>