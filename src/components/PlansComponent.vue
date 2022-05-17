<template>
  <section class="plans">
    <div class="container">
      <div class="row row-md">
        <CardPlan :plan="plan" v-for="(plan, index) in plans" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import CardPlan from "@/components/CardPlanComponent.vue";
export default {
  name: "PlansComponent",
  components: {
    CardPlan,
  },
  data() {
    return {
      plans: [
        {
          icon: "fa-regular fa-clock",
          title: "Team training",
          subtitle: "Find a partner",
          text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla asipiscing. Nils sit fames amet senectus eget sed duis vehicula. Tristique.",
          action: "Find a partner",
        },
        {
          icon: "fa-solid fa-dumbbell",
          title: "Crossfit workout",
          subtitle: "Push your limits",
          text: "Vestibulum, curabitur eu sem nibh ultrices sit nulla asipiscing. Nils sit fames amet senectus eget sed duis vehicula. Tristique.",
          action: "Learn about Crossfit",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Weight loss plan",
          subtitle: "Shed those pounds",
          text: "At laoreet senectus volutpat diam vel sed sed amet pellentesque. Lobortis ut aliquam risus purus. A tellus ut etiam.",
          action: "Schedule a workout",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.plans {
  background-color: $darkestColor;
  padding: 6rem 0;
}
</style>