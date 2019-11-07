<template>
  <div class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <img src="/images/Treatments2.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="container contact">
      <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
          <div class="row">
            <div class="col-sm-4 col-xs-12">
              <address>
                <strong>Magu Cannabis Consultant</strong><br>
                215 W Ohio St.<br>
                Chicago, IL 60654
              </address>
              <address>
                + 1 708 256 7538<br>
                
              </address>
              <address>
                e-mail: <a href="#">joe@example.com</a>
              </address>
              <p class="social"><a href="#"><i class="fab fa-facebook social-icon-small" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-twitter social-icon-small" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-instagram social-icon-small" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-dribbble social-icon-small" aria-hidden="true"></i></a> <a href="#"><i class="fab fa-youtube social-icon-small" aria-hidden="true"></i></a></p>
            </div>
            <div class="col-sm-8">
              <form name="contact_form" id="contact_form" method="post" class="form-horizontal">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10 animated-form-control">
                    <input type="text" name="name" class="text form-control" id="Form_Form_name" required="required" aria-required="true">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">E-mail</label>
                  <div class="col-sm-10 animated-form-control">
                    <input type="email" name="email" class="form-control" required="required">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Message</label>
                  <div class="col-sm-10 animated-form-control">
                    <textarea name="message" class="textarea form-control" required="required" rows="5" cols="20"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <br>
                  <div class="col-12">
                    <button id="submit_btn" class="btn btn-primary float-right">Send</button>
                  </div>
                </div>
              </form>
            </div>
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