
<template>
  <div class="content">
    <div class="container-fluid">
      <b-row>
        <h1 class="ml-4">Redeemable Avatars</h1>
      </b-row>
      <b-row class="mt-3"  >
        <b-col md="3" v-for="(avatar, index) in avatars" :key="index">
          <card-avatars v-bind:name=avatar.name v-bind:img=avatar.img v-bind:coins=avatar.coins ></card-avatars>
        </b-col>
      </b-row>
    </div>
  </div>

</template>
<script>

import CardAvatars from "@/components/Page/Avatares/CardAvatarsComponent"

export default {
  components: {CardAvatars},
  comments:{
    CardAvatars,
  },

  data() {
    return {
      avatars:[
        {
          "name" : "Capitan Time",
          "coins" : "1,000,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Little Frank",
          "coins" : "1,000,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Jack O'Lantern",
          "coins" : "1,000,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Sam the Witch",
          "coins" : "1,000,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Reed Heel",
          "coins" : "30,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Giraffey",
          "coins" : "50,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Teddy",
          "coins" : "60,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
        {
          "name" : "Mr.Moustache",
          "coins" : "10,000",
          "img" : "https://res.cloudinary.com/indysigner/image/upload/v1598092174/ads/Q1PROD_HTML5_Consid-Amzn_BWebsites.jpg"
        },
      ]
   }
  }
}
</script>
