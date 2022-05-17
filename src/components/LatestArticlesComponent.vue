<template>
  <div class="latest-articles py-6">
    <div class="container">
      <div class="top">
        <h4>Latest articles</h4>
        <div class="all">
          <a href="#">
            Read all articles
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </a>
        </div>
      </div>
      <div class="row row-sm">
        <CardArticle
          :article="article"
          v-for="(article, index) in articles"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardArticle from "@/components/CardArticleComponent.vue";
export default {
  name: "LatestArticlesComponent",
  components: {
    CardArticle,
  },
  data() {
    return {
      articles: [
        {
          title: "The best protein shake",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "protein",
        },
        {
          title: "Ultimate cardio workout",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "workout",
        },
        {
          title: "New juices available now",
          author: "admin",
          date: "Novembre 16th, 2019",
          category: "Gym",
          class: "juices",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.latest-articles {
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    h4 {
      font-size: 1.5rem;
    }
    .all .fa-chevron-right {
      font-size: 0.75rem;
    }
  }
}
</style>