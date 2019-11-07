<template>
    <div class="container">
      
      <div class="row content">
        <div class="col-sm-8 col-md-12">
          <h1>{{ strain.name }}</h1>
          <br>
          <p>{{ strain.description }}</p>
          <br>
          <!-- <img v-bind:src="strain.image_url" alt=""> -->
          <img
        <h4>Effects of {{ strain.name }}</h4>
        <br>
        <ul>
          <li><h5>{{ strain.effects }}</h5></li>
        </ul>
          
          
          <h4>Chemical Makeup</h4>
          
          {{ strain.thc_percentage }}
          {{ strain.cbd_percentage }}
            
          
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>Recent works</h3>
          <div class="portfolio grid-4">

                <figure class="animateOnScroll" data-animation="fadeIn">
                  <img src="images/portfolio/1.jpg" alt="">
                  <figcaption>
                    <h2>Portfolio Item</h2>
                    <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                  </figcaption>
                </figure>
            
          </div>
        </div>
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