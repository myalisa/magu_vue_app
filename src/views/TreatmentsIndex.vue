<template>
  <div class="home">
    <div class="container">
      <div class="row portfolio-item">
        <div class="col-md-8">
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
            <h1>Portfolio Item</h1>
            <p class="text-justify">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Vestibulum maximus nunc et velit semper, at pellentesque ex semper. Morbi enim massa, porta ut elementum ut, gravida interdum lacus. Etiam enim justo, semper sed scelerisque id, tristique at risus.</p>
            <p class="text-center social"><a href="#"><i class="fab fa-facebook social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-twitter social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-instagram social-icon" aria-hidden="true"></i></a></p>
          </article>
        </div>
      </div>
      <div class="row content">
        <div class="col-sm-12 col-md-8">
          <button v-for="symptom in symptoms" class="btn btn-primary btn-lg block m-2" >{{ symptom.name }} {{ symptom.treatment}}</button>
          
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

  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {}
};
</script>