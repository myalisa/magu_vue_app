<template>
    <div class="container">
       <img v-bind:src="strain.image_url" alt=""><img v-bind:src="strain.image_url" alt=""><img v-bind:src="strain.image_url" alt="">

        <div class="row content">
        <br>
        <br>
        <blockquote>
        <p>{{ strain.effects }}</p>
          
        </blockquote>
          <div class="col-sm-8 col-md-12">
             <h1>{{ strain.name }}</h1>
          <br>
          <article>
          <p>{{ strain.description }}</p>
        </article>
        <br> 
          
          <h2>THC Percentage: {{ strain.thc_percentage }}%<br>CBD Percentage: {{ strain.cbd_percentage }}%</h2>     
        </div>
      </div>
      
        <div class="col-12"> 
        <img src="/images/merakilabbe.jpg"><br>
          
        <router-link to="/users/current"><button type="button" class="btn btn-custom btn-md">Back</button></router-link> 
  
        </div>
    
    </div>
      
</template>

<script>
  var axios = require('axios');
  export default {
    data: function() {
      return {
        strain: {
          name: "",
          category_id: "",
          thc_percentage: "",
          cbd_percentage: "",
          description: "",
          effects: "",
          image_url: ""
        }
      };
    },
    created: function() {
      axios
        .get("/api/strains/" + this.$route.params.id)
        .then(response => {
          this.strain = response.data;
        });
    },
    methods: {}
  };

</script>
<style>

</style>