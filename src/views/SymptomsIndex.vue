<template>
  <div class="container">
    <div class="row portfolio-item">
      <div class="col-md-8">
        <br>
        <img src="/images/Treatment-Main.jpg">
      </div>
      <div class="col-md-4">
        <article class="content">
          <h1>Treatments by Symptom</h1>
          <p class="text-justify">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit.</strong> Vestibulum maximus nunc et velit semper, at pellentesque ex semper. Morbi enim massa, porta ut elementum ut, gravida interdum lacus. Etiam enim justo, semper sed scelerisque id, tristique at risus.</p>
          <p class="text-center social"><a href="#"><i class="fab fa-facebook social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-twitter social-icon" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-instagram social-icon" aria-hidden="true"></i></a></p>
        </article>
      </div>
    </div>
    <div class="row content">
      <div class="col-sm-10 col-md-8">
      <h2>PMS</h2>
      <p>To combat the change in hormones, it is suggested to exercise more often, eat more fruits, vegetables, and whole grains, and to sleep well. A strain with high levels of CBD not only relieves feelings of anxiousness and anxiety, but also serves as a natural sleep aid to assure your body is getting enough time to recover from stress</p>
        
        
      </div>
    </div>
    
  </div>

  
</template>

<style>
</style>

<script>
    var axios = require('axios');
    export default {
      data: function() {
        return {
          symptoms: []
        };
      },
      created: function() {
        axios
          .get("/api/symptoms")
          .then(response => {
            this.symptoms = response.data;
          });
      },
      methods: {}
    };
</script>