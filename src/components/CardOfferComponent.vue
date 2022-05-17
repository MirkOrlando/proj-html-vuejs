<template>
  <div class="col-4 col-sm">
    <div class="card" :class="offer.class">
      <div class="offer-details">
        <SeparatorSm />
        <h3 class="title">{{ offer.title }}</h3>
        <p class="text">{{ offer.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SeparatorSm from "@/components/SeparatorSmComponent.vue";

export default {
  name: "CardOfferComponent",
  props: {
    offer: Object,
  },
  components: {
    SeparatorSm,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: 0.25rem;
  border-bottom-right-radius: 2rem;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.05);
  }
  &.workout {
    background: linear-gradient(to top, #060606c7 5%, transparent 100%),
      url("@/assets/img/service6-2x.jpg");
    background-size: cover;
    background-position: center;
  }
  &.apparel {
    background: linear-gradient(to top, #060606c7 5%, transparent 100%),
      url("@/assets/img/box1-2x.jpg");
    background-size: cover;
    background-position: center;
  }
  &.team {
    background: linear-gradient(to top, #060606c7 5%, transparent 100%),
      url("@/assets/img/box3-2x.jpg");
    background-size: cover;
    background-position: center;
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

@media screen and (max-width: 768px) {
  .card {
    min-height: 600px;
    &.workout {
      background-position: top;
    }
    &.apparel {
      background-position: top;
    }
    &.team {
      background-position: top;
    }
  }
}

@media screen and (max-width: 500px) {
  .jumbotron {
    .offers {
      .card {
        min-height: 300px;
        &.workout {
          background-position: top;
        }
        &.apparel {
          background-position: top;
        }
        &.team {
          background-position: top;
        }
      }
    }
  }
}
</style>