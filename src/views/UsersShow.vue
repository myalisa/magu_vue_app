<template>
    <div class="container user">
      <div class="row">
        
        <div class="col-sm-12 col-md-10 offset-md-1">
          <h1>Welcome, {{ user.name }}</h1>
          
        
          <br>
          <!-- <h4>Your Magu Cannabis Collection</h4>  -->
          <p><strong>Based off of your symptoms,</strong> these are the best strains we recommend to balance the endocannabinoid system in your body. Note the THC and CBD percentages indicated in case the exact strain is not available at your local dispensary. Your local budtender can look at your list and find a similar strain for you.</p>
          <br>
          
        </div>
          <div class="portfolio grid-2 row">
            <div class="col-lg-3" v-for="strain in user.strains_by_symptoms">
              
              <img v-bind:src="strain.image_url" alt="">
              <div class="tab-item">
                <router-link v-bind:to="'/strains/' + strain.id"><button type="button" class="btn btn-custom btn-md btn-block">{{ strain.name }}</button></router-link>
                <br>

              </div>
            </div>
          </div>
        </div>
        
          <img src="/images/merakilabbe.jpg">
          <br>
          
            <router-link to="/"><button type="button" class="btn btn-custom btn-sm">Home</button></router-link>
          
        
      </div>
    </div>
</template>

<style>
  
    .router-link {
      color: grey;
      display: block;
    }
      
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
            .get("/api/users/current")
            .then(response => {
              this.user = response.data;
            })
            .catch(error => {
              this.$router.push("/login");
            });

          },
  methods: {
    }
  
};
</script>



