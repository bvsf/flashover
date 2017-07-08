<template>
    <form>
      <fieldset>
        <legend>
          <h2>Log In</h2>
          <p>Log in to your account to get some great quotes.</p>
        </legend>
        <div v-if="error">
          <p>{{ error }}</p>
        </div>
        <p>
          <input type="text" v-model="credenciales.usuario" placeholder="Usuario">
        </p>
        <p>
          <input type="password" v-model="credenciales.password" placeholder="">
        </p>
        <p>{{ password_error}}</p>
        
        <button v-on:click="login">Login</button>
      </fieldset>
    </form>
</template>

<script>
  const API_URL = 'http://localhost:8000/'
  const LOGIN_URL = API_URL + 'rest-auth/login/'

  export default {
    name: 'login',

    data () {
      return {
        credenciales: {
          usuario: '',
          password: ''
        },
        error: '',
        password_error: ''
      }
    },

    methods: {
      user: {
        authenticated: false
      },
  
      login () {
        var credenciales = {
          username: this.credenciales.usuario,
          password: this.credenciales.password
        }
        this.error = ''
        this.password_error = ''

        // console.log(LOGIN_URL)
        // console.log(credenciales)

        this.$http.post(LOGIN_URL, credenciales).then(response => {
          // console.log('exito')
          // console.log(JSON.parse(response.bodyText))

          var data = JSON.parse(response.bodyText)

          localStorage.setItem('access_token', data.token)

          this.user.authenticated = true

        // Redirect to a specified route
        // if(redirect) {
        //   router.go(redirect)
        // }
        }, response => {
          // console.log('error')
          // console.log(JSON.parse(response.bodyText))

          var data = JSON.parse(response.bodyText)

          for (var k in data) {
            if (k === 'password') {
              this.password_error = data.password[0]
            } else {
              this.error = data[k][0]
            }
          }
        })
      }
    }
  }
</script>
