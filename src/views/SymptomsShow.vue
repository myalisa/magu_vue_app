<template>



<div class="container symptoms-show">
  <section class="mb-5">
    <h1>Do you experience {{ symptom.name }}?</h1>
    <br>
    <br>
    <div class="col-sm-4">
      <ul>
        <li>{{ symptom.treatment }}</li>
        
      </ul>
    </div>


    <div class="form-group">
      <button type="button" class="btn btn-default btn-lg" v-on:click="yesSymptom()"><input type="submit" value="Yes"></button>
      <br>
      <br>
      <button type="button" class="btn btn-default btn-lg" v-on:click="noSymptom()"><input type="submit" value="No"></button>
    </div>
    <br>
    <br>


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
      yesSymptom: function() {
        var clientParams = {
          symptom_id: this.symptom.id
        };

      axios
      .post("/api/user_symptoms", clientParams)
      .then(response => {
        var currentSymptom = parseInt(this.$route.params.id);
        currentSymptom++;
        this.$router.push("/symptoms/" + currentSymptom);
      })
      .catch(error => {
        console.log(error.response.data);
        this.errors = error.response.data.errors;
      });
    },

    noSymptom: function() {
        
          var currentSymptom = parseInt(this.$route.params.id);
          currentSymptom++;
          if (currentSymptom === 12) {
            this.$router.push("/users/current")
          } else {
            this.$router.push("/symptoms/" + currentSymptom);
          }
        },
    },


};
</script>
<style></style>
