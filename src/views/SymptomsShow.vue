<template>



<div class="container symptoms-show">
  <section class="mb-5">
    <h1>{{ symptom.name }}</h1>
    <br>
    <div class="form-group">
      <label class="checkbox-inline" v-on:click="nextSymptom()"><input type="checkbox" value="1" checked> Yes</label> 
      <br>
      <br>

      <label class="checkbox-inline" v-on:click="nextSymptom()"><input type="checkbox" value="2"> No</label> 
    </div>


    <h5>Go to next symptom</h5>
    <nav class="text-center">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link aria-label="Previous" class="page-link" to="/symptoms/:id"><span aria-hidden="true">«</span></router-link>
        </li>
        <li class="active page-item">
          <router-link class="page-link" to="/symptoms/1">1</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/2">2</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/3">3</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/4">4</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/5">5</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/6">6</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/7">7</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/8">8</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/9">9</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/10">10</router-link>
        </li>
        <li class="page-item">
          <router-link class="page-link" to="/symptoms/11">11</router-link>
        </li>
        <li class="page-item">
          <router-link aria-label="Next" class="page-link" to="/symptoms/:id"><span aria-hidden="true">»</span></router-link>
        </li>
      </ul>
    </nav>
  </section>
</div>
</template>

<script>
  var axios = require('axios');
  export default {
    data: function() {
      return {
        symptom: {}
      };
    },
    beforeRouteUpdate (to, from, next) {
      axios
        .get("/api/symptoms/" + to.params.id)
        .then(response => {
          this.symptom = response.data;
          next() 
        });

    },
    created: function() {
      axios
        .get("/api/symptoms/" + this.$route.params.id)
        .then(response => {
          this.symptom = response.data;
        });

    },
    
    methods: {

    nextSymptom: function() {
      axios
      .post("/api/user_symptoms")
      .then(response => {
        this.$router.push("/symptoms/" + currentSymptom);
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
      var currentSymptom = parseInt(this.$route.params.id);
      currentSymptom++;
      this.$router.push("/symptoms/" + currentSymptom);
    }
    }
  };




</script>
<style></style>
