<template>
  <div id="app">
    <header>
        <div class="container d-none d-sm-block logo">
          <router-link to="/"><img class="img-fluid" src="/images/Logo.png" alt="Logo"></router-link>
        </div>
        <div class="container my-2 my-md-4">
          <nav class="navbar navbar-expand-sm navbar-light">
          
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse justify-content-sm-center" id="main-navbar">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Basics <span class="dropdown-toggle"></span></a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link class="dropdown-item" to="/login">Login</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/logout">Logout</router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item dropdown-toggle" to="/symptoms">Treatment </router-link>
                    </li>
                    <li>
                      <router-link class="dropdown-item dropdown-toggle" to="/strains">Strains</router-link>
                    </li>

                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Medicate <span class="dropdown-toggle"></span></a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link class="dropdown-item" to="/symptoms/1">Symptom Checker</router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/about">Magu Story</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <router-view></router-view>
      
    <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="divider"></div>
              <div class="text-center">
                <router-link to="/"><img class="img-fluid" src="/images/Logo.png" alt="Logo"></router-link>
              </div>
            </div>
          </div>
          <div class="row">
            
            <div class="col-sm-3">
              <p>© Magu </p>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
