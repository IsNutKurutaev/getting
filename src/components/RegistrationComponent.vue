<template>
  <div class="container">
    <transition>
      <div class="alert alert-warning" v-if="error">
        {{ error.error.code }}<br>
        {{ error.error.message }}<br>
        {{ error.error.errors }}
      </div>
    </transition>
    <transition>
      <div class="alert alert-primary" v-if="success">Congrats user registrated</div>
    </transition>
    <form method="post" class="d-flex flex-column align-items-center gap-2">
      <div class="input-group">
        <span class="input-group-text">Name</span>
        <input type="text" class="form-control" placeholder="first name" v-model="name">
        <input type="text" class="form-control" placeholder="last name" v-model="lastname">
        <input type="text" class="form-control" placeholder="patronymic" v-model="patronymic">
      </div>
      <div class="d-flex flex-column gap-1">
        <input type="text" class="form-control" placeholder="login" v-model="login">
        <input type="password" class="form-control" placeholder="password" v-model="password">
        <select class="form-select" id="roles" v-model="role_id">
          <option selected>Role</option>
          <option value="1">Admin</option>
          <option value="2">Waiter</option>
          <option value="3">Cook</option>
        </select>
      </div>
      <input type="submit" class="btn btn-dark" @click.prevent="registerHandle">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistrationComponent",
  data() {
    return {
      name: '',
      lastname: '',
      patronymic: '',
      login: '',
      password: '',
      role_id: '',
      error: null,
      success: false,
    }
  },
  methods: {
    async registerHandle() {
      this.error = null;
      this.success = false;
      await axios.post('http://localhost/api-tort/user', {
        name: this.name,
        surname: this.lastname,
        patronymic: this.patronymic,
        role_id: this.role_id,
        login: this.login,
        password: this.password,
      })
          .then(() => this.success = true)
          .catch((e) => this.error = e.response.data);
          }
    }
  }
</script>

<style scoped>

</style>