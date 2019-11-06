<template>
    <div class="container">
      <div class="row portfolio-item">
        <div class="col-md-8">
          <div class="col-lg-6">
            <div>
            </div>
          </div>
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper"><img src="images/portfolio/item-1.jpg" alt="" class="swiper-slide"> <img src="images/portfolio/item-2.jpg" alt="" class="swiper-slide"> <img src="images/portfolio/item-3.jpg" alt="" class="swiper-slide"> <img src="images/portfolio/item-4.jpg" alt="" class="swiper-slide"></div><!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide" style="background-image:url(images/portfolio/item-1.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(images/portfolio/item-2.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(images/portfolio/item-3.jpg)"></div>
              <div class="swiper-slide" style="background-image:url(images/portfolio/item-4.jpg)"></div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <article class="content">
            <h1>{{ strain.name }}</h1>
            <p class="text-justify">{{ strain.description }}</p>
            <img v-bind:src="strain.image_url" alt="">
            <p class="text-center social"><a href="#"><i class="fab fa-facebook social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-twitter social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-instagram social-icon" aria-hidden="true"></i></a></p>
          </article>
        </div>
      </div>
      <div class="row content">
        <div class="col-sm-12 col-md-8">
          <h2>Portfolio item details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non imperdiet ante. Nam luctus nulla ac justo euismod bibendum. Maecenas vel libero dapibus, accumsan sem eu, viverra nisi. Nunc lectus justo, pulvinar vel libero ac, aliquam malesuada orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ut leo et arcu condimentum maximus. Nulla facilisi.</p>
          <h4>Ingredients</h4>
          <ul>
            <li>400 g dried linguine</li>
            <li>olive oil</li>
            <li>350 g tomato passata</li>
            <li>5 tablespoons baby capers</li>
            <li>1 lemon</li>
            <li>Parmesan cheese</li>
          </ul>
          <h4>Method</h4>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non imperdiet ante. Nam luctus nulla ac justo euismod bibendum. Maecenas vel libero dapibus, accumsan sem eu, viverra nisi.</li>
            <li>Nam iaculis sapien a dolor pellentesque, vitae tristique quam cursus. Aenean quis mauris accumsan purus aliquet lobortis. Sed diam ante, fermentum et fermentum id, consequat et odio. Praesent sed nibh tristique, fringilla elit volutpat, venenatis orci.</li>
            <li>Pellentesque vel pulvinar orci. Donec lacinia, mauris non egestas tempor, dolor velit gravida orci, in vestibulum urna arcu eget purus. Aliquam erat volutpat.</li>
          </ol>
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