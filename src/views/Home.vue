<template>
  <div class="home">
    <section>
      <div class="swiper-container">
        <div class="parallax-bg" style="background-image:url('/images/Home-Page.jpeg')" data-swiper-parallax="-15%"></div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-caption">
              <div class="title" data-swiper-parallax="-100" data-animation="fadeInDownBig">
                Magu 
              </div>
              <div class="subtitle" data-swiper-parallax="-200" data-animation="fadeIn">
                 Cannabis Consultant for Women
              </div>
              <div class="text" data-swiper-parallax="-300" data-animation="fadeInUpBig">
                <router-link href="card.html" class="btn btn-custom btn-lg" to="/symptoms/1">Get Started</router-link>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-caption">
              <div class="title" data-swiper-parallax="-100" data-animation="fadeInDownBig">
                Balance
              </div>
              <div class="subtitle" data-swiper-parallax="-200" data-animation="fadeIn">
                for the female body and mind 
              </div>
              <div class="text" data-swiper-parallax="-300" data-animation="fadeInUpBig">
                <router-link href="card.html" class="btn btn-custom btn-lg" to="/symptoms/1">Discover Strains</router-link>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-caption">
              <div class="title" data-swiper-parallax="-100" data-animation="fadeInDownBig">
                Stop Stressin'
              </div>
              <div class="subtitle" data-swiper-parallax="-200" data-animation="fadeIn">
                The most effective CBD-heavy, THC-heavy, and 1:1 ratio strains
              </div>
              <div class="text" data-swiper-parallax="-300" data-animation="fadeInUpBig">
                <router-link href="card.html" class="btn btn-custom btn-lg" to="/symptoms/1">Treat Yourself</router-link>
              </div>
            </div>
          </div>
        </div><!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div><!-- Add Navigation -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
      </div>
    </section>
    
      <section class="my-2 my-md-5">
          <div class="container">
            <div class="row">
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6 section-content animatedParent animateOnce"><img src="images/LeafGirl.jpg" class="img-fluid animated fadeIn" alt=""></div>
              <div class="col-sm-12 col-md-6 section-content">
                <h3>No Flower is the Same</h3>
                <br>
                <p>We have developed a system identifying the two main active chemicals in cannabis (THC & CBD) to analyze your unique symptoms, and give you the ultimate collection of strains that will provide balanced releif without any negative psychological effects. Not enough women know how to use cannabis to maintain a healthy balance of the endocannabinoid system (ECS) to treat common symptoms of menstruation. Yes, THC can help you feel relaxed and ease muscle cramping, but with fluctuating hormones throught the mentrual cycle, it also has the potential to worsen hormonal anxiety. Some strains that are ideal for treating physical discomfort and pain, can leave you feeling sluggish and unprodcutive. We found strains with the optimal chemical makeup to treat your symptoms, and leave you feeling re-charged and uplifted. </p>
                <p><strong>Knowing Your Body</strong> The Magu system organizes strains by category based on their chemical makeup. These categories are CBD-Heavy, THC-Heavy, and 1:1 Ratio Strains</p>
                <router-link to="/about">&nbsp;<button type="button" class="btn btn-primary btn-lg btn-block">More</button></router-link>
              </div>
            </div>
          </div>
        </section>
        
        <section class="my-2 my-md-5">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3>Read More About Cannabis & Women's Health</h3>
                <br>
                <div class="portfolio grid-4">
                  <figure class="animateOnScroll" data-animation="fadeIn">
                    <img src="/images/SunglassesGirl.jpg" alt="">
                    <figcaption>
                      <h2>Cannabis & Your Period</h2>
                      <p>The best benefits of using CBD for your period</p><a href="https://www.foriawellness.com/blogs/learn/natural-pain-relief-cramps-cbd-thc">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="animateOnScroll" data-animation="fadeIn">
                    <img src="/images/pink-bud.jpg" alt="">
                    <figcaption>
                      <h2>PMS</h2>
                      <p>How can cannabis help with premenstrual syndrome?</p><a href="https://goop.com/wellness/sexual-health/can-cannabis-help-with-pms/">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="animateOnScroll" data-animation="fadeIn">
                    <img src="/images/twogirls.jpg" alt="">
                    <figcaption>
                      <h2>Portfolio Item</h2>
                      <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                    </figcaption>
                  </figure>
                  <figure class="animateOnScroll" data-animation="fadeIn">
                    <img src="/images/rollup.jpg" alt="">
                    <figcaption>
                      <h2>Portfolio Item</h2>
                      <p>Dis-moi ce que tu manges, je te dirai ce que tu es</p><a href="portfolio-item.html">View more</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
  methods: {},
  mounted: function () {

        const plugin = document.createElement("script");
        plugin.setAttribute(
          "src",
          "javascript/swiper.jquery.min.js",
          // "javascript/script.js"
        );
        plugin.async = true;
        document.head.appendChild(plugin);

        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          parallax: true,
          speed: 600,
          autoplay: 2500,
          onSlideChangeStart: (function (swiper) {
            var active = swiper.slides[swiper.activeIndex];
            var animated = $(active).find('*[data-animation]');
            $.each(animated, function (key, value) {
              $(value).addClass($(value).data('animation'));
              $(value).addClass('animated');
            });
          })
        });
      }
  
};


</script>