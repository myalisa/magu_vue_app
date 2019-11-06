<template>
    <div class="container user">
      <div class="row">
        <div class="col-sm-12 col-md-10 offset-md-1">
          <h2>{{ user.name }}</h2>
          <h2>Your Magu Cannabis Collection</h2>
          <p>Based off of your indicated symptoms, these are the best strains we recommend to balance the endocannabinoid system in your body. The THC and CBD percentages should be noted in case the exact strain name is not available at your local dispensary, but your local budtender can look at your list, and find a similar strain for you.</p>
        </div>
        <div class="col-sm-12 col-md-10 offset-md-1">
          <div class="portfolio grid-2 row">
            <div class="col-lg-6" v-for="strain in user.strains_by_symptoms">
              
              <img v-bind:src="strain.image_url" alt="">
              <div>
                <h2>{{ strain.name }}</h2>
                <p>THC Percentage: {{ strain.thc_percentage }}%</p>
                <p>CBD Percentage: {{ strain.cbd_percentage }}%</p>
                
                <router-link v-bind:to="'/strains/' + strain.id">Description</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>

<script>
  var axios = require("axios");
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
          console.log("it worked")
          axios
            .get("/api/users/" + this.$route.params.id)
            .then(response => {
              this.user = response.data;
            });

          },
  methods: {
    }
  
};
</script>



