<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello App!</h1>
      <p>
        <!-- Utiliza el componente router-link para la navegación. -->
        <!-- especifica el enlace pasando la propiedad `to`. -->
        <!-- <router-link> será renderizado por defecto como una etiqueta `<a>` -->
        <router-link to="/">Go to Home</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-link to="/login">Login</router-link>
      </p>
    <!-- El componente que coincida con la ruta será renderizado aquí -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
