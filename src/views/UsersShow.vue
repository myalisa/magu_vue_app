<template>
  <div class="user">
    <h1>{{ message }}</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-10 offset-md-1">
            <h2>Your Magu Cannabis Collection</h2>
            <p>Based off of your indicated symptoms, these are the best strains we recommend to balance the endocannabinoid system in your body. The THC and CBD percentages should be noted in case the exact strain name is not available at your local dispensary, but your local budtender can look at your list, and find a similar strain for you.</p>
          </div>
          <div class="col-sm-12 col-md-10 offset-md-1">
            <div class="portfolio grid-2">
              <figure>
                <img src="images/portfolio/1.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
             <!--  <figure>
                <img src="images/portfolio/2.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/3.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/4.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/1.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/2.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/3.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure>
              <figure>
                <img src="images/portfolio/4.jpg" alt="">
                <figcaption>
                  <h2>Portfolio Item</h2>
                  <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                </figcaption>
              </figure> -->
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {},
  methods: {
    symptomResult: function() {
      var currentSymptom = parseInt(this.$route.params.id);
        if (currentSymptom === 12) {
          axios
            .get("/api/user/" + this.$route.params.id)
            .then(response => {
              this.user = response.data;
              next() 
            });
          }
      }
    }
  
};
</script>



