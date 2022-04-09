<template>
  <v-app>
    <nav-bar>
      <v-main>
        <card-news :item="listArticle" />
      </v-main>
    </nav-bar>
  </v-app>
</template>

<script>
import CardNews from "./components/CardNews.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { CardNews, NavBar },
  computed: {
    listArticle() {
      return this.$store.state.news.article;
    },
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchArticle");
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
