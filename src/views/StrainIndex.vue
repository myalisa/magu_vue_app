




<style>
img {
  width: 250px;
}
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      strains: []
    };
  },
  created: function() {
    axios
      .get("/api/strains")
      .then(response => {
        this.strains = response.data;
      });
  },
  methods: {}
};
</script>