<template>
  <div>
    <v-row justify="center" class="mx-2" v-for="(data, key) in item" :key="key">
      <v-card max-width="800" class="mb-12">
        <v-img height="250" :src="data.urlToImage"></v-img>
        <v-card-title>{{ data.title }}</v-card-title>
        <v-card-text>
          <p>
            {{ data.description }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-row no-gutters>
            <v-col cols="2">
              <v-btn rounded color="black" style="color: white"
                >TechCruch</v-btn
              >
            </v-col>
            <v-col cols="6" class="ml-12">
              <v-row style="max-width: 300px" justify="center">
                <v-col class="ma-0 px-0">
                  <img
                    src="https://play-lh.googleusercontent.com/8Vw-7MAm558750a4M55fiOlUf7lP2cYnFuqSWynrygIiyEEiQQDa_xxHKYOX83L0UD2T"
                    style="max-width: 30px"
                  />
                </v-col>
                <v-col class="ma-0 px-0">
                  <img
                    src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                    style="max-width: 30px"
                  />
                </v-col>
                <v-col class="ma-0 px-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    style="max-width: 30px"
                  />
                </v-col>
                <v-col class="ma-0 px-0">
                  <img
                    src="https://mmc.tirto.id/image/2018/10/09/google-plus-wikipedia_ratio-16x9.jpg"
                    style="max-width: 30px"
                  />
                </v-col>
                <v-col class="ma-0 px-0">
                  <img
                    src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                    style="max-width: 30px"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="3">
              <v-btn color="primary">Read More</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CardNews",
  props: {
    item: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    console.log(this.item, "cek item");
  },
};
</script>
