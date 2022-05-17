<template>
  <div class="partners">
    <div class="container">
      <div class="row row-md">
        <CardPartner
          :partner="partner"
          v-for="(partner, index) in partners"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardPartner from "@/components/CardPartnerComponent.vue";
export default {
  name: "PartnersComponent",
  components: {
    CardPartner,
  },
  data() {
    return {
      partners: [
        {
          src: require("@/assets/img/sponsor-1-2x-200x103.png"),
          text: "Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.",
          action: "Visit Yoga Studio",
        },
        {
          src: require("@/assets/img/sponsor-2-2x-200x103.png"),
          text: "Feugiat etiam dui mauris pharetra mayrus sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.",
          action: "Join Fitness Center",
        },
        {
          src: require("@/assets/img/sponsor-3-2x-200x103.png"),
          text: "Nist at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Lugula in habitant et saggitis imperdiet.",
          action: "Learn about FC",
        },
        {
          src: require("@/assets/img/sponsor-4-2x-200x103.png"),
          text: "Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend",
          action: "Visit Power Gym",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.partners {
  padding: 6rem 0;
}
</style>