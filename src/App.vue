<template>
  <div id="app">
    <div id="nav">
      <img src = "./assets/subwaylogo.png">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap');

body {
  margin: 0;
}

h1 {
  font-size: 1.6rem;
  font-family: Nunito;
  font-weight: 700;
  color: #333;
  margin: 0 !important;
}

h3 {
  font-size: 1rem;
  margin:0 !important;
}

h4 {
  font-size: 1.1rem;
  margin: 0 !important;
}

p {
  margin: 0 !important;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

#nav {
  padding: 0 24px;
  height: 60px;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  border-bottom: 1px solid #ebebeb;
  text-align: left;
  z-index: 1000;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  img {
    height: 28px;
    margin-top: 16px;
  }
}

@media screen and (max-width: 768px) {
  #nav {
    height: 50px;

    img {
      height: 22px;
      position: relative;
      left: -4px;
    }
  }

}
</style>
