<template>
  <div class="container d-flex flex-column align-items-center">
    <transition>
      <div class="alert alert-warning" v-if="error">
        {{ error.code }}<br>
        {{ error.message }}<br>
        {{ error?.errors }}
      </div>
    </transition>
    <transition>
      <div class="alert alert-primary" v-if="success">Congrats you`re login in</div>
    </transition>
    <form method="post">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="login" v-model="login">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="password" v-model="password">
      </div>
      <input type="submit" class="btn btn-dark" @click.prevent="loginHandle">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'loginComponent',
  data() {
    return {
      login: '',
      password: '',
      error: null,
      success: false,
      token: localStorage.token ?? null,
    }
  },
  watch: {
    token(newVal) {
      return localStorage.token = newVal;
    }
  },
  mounted() {
    if (this.token) {
      this.success = true;
    }
  },
  methods: {
    async loginHandle() {
      this.error = null;
      this.success = false;
      await axios.post('http://localhost/api-tort/login', {
        login: this.login,
        password: this.password,
      })
          .then((e) => { this.success = true; this.token = e.data.data.user_token.split('|')[1]})
          .catch((e) => {console.log(e); this.error = e.response.data.error});
    }
  }
}
</script>

<style scoped>

</style>
