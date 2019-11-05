<template>
  <div class="logout">
    
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>Logout</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  }
};

</script>