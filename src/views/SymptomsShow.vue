<template>


<div class="container symptoms-show">
  <section class="mb-5">
   
    <h1>Do you experience {{ symptom.name }}?</h1>
    <br>
    <br>
    
    
    <div class="col-md-24">
      <!-- <ul> -->
        <img src="/images/icon.png">  
        <br>
        <br>
        <p><img src="/images/click.png">Select for next symptom</p>
    </div>
    <div class="col-md-8">
      <button type="button" class="btn btn-default btn-lg" v-on:click="yesSymptom()"><input type="submit" value="Yes"></button>

      <br>
      <br>
      <br>
      <button type="button" class="btn btn-default btn-lg" v-on:click="noSymptom()"><input type="submit" value="No"></button>
    </div>
        
      
   <!--  </div> -->
    <br>
    



    <nav class="text-center">
      <br>
      <br>
      <br>
    
  
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link aria-label="Previous" class="page-link" to="/symptoms/:id"><span aria-hidden="true">«</span></router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 1 }" class="page-item">
          <router-link class="page-link" to="/symptoms/1">1</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 2 }" class="page-item">
          <router-link class="page-link" to="/symptoms/2">2</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 3 }" class="page-item">
          <router-link class="page-link" to="/symptoms/3">3</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 4 }" class="page-item">
          <router-link class="page-link" to="/symptoms/4">4</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 5 }" class="page-item">
          <router-link class="page-link" to="/symptoms/5">5</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 6 }" class="page-item">
          <router-link class="page-link" to="/symptoms/6">6</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 7 }" class="page-item">
          <router-link class="page-link" to="/symptoms/7">7</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 8 }" class="page-item">
          <router-link class="page-link" to="/symptoms/8">8</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 9 }" class="page-item">
          <router-link class="page-link" to="/symptoms/9">9</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 10 }" class="page-item">
          <router-link class="page-link" to="/symptoms/10">10</router-link>
        </li>
        <li v-bind:class="{ active: $route.params.id == 11 }" class="page-item">
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
        symptom: {},
        isActive: true
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

      axios
        .get("/api/users/current")
        .then(response => {})
        .catch(error => {
          this.$router.push("/login");
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
        if (currentSymptom === 12) {
            this.$router.push("/users/current")
          } else {
            this.$router.push("/symptoms/" + currentSymptom);
          }
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
<style>

.col-md-24 {
  position: absolute;
  top: 300px;
  right: 300px;
  padding-right: 100px;
}

.col-md-8 {
  padding-left: 100px;
}


  .active {
    color: grey;
  background-color: grey;
  }
</style>
