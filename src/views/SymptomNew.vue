<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      errors: [],
      newSymptomName: "",

    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var clientParams = {
       
      };
      axios
        .post("/api/symptoms", clientParams)
        .then(response => {
          this.$router.push("/symptoms/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>