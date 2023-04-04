<template>
  <div>
    <transition v-if="response != null">
      <div class="alert">
        {{ response }}
      </div>
    </transition>
    <form class="d-flex input-group" method="post">
      <input type="datetime-local" class="form-control" placeholder="start" v-model="start">
      <input type="datetime-local" placeholder="end" class="form-control" v-model="end">
      <input type="submit" class="form-control" @click.prevent="createShift">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateWorkshift",
  data() {
    return {
      start: '',
      end: '',
      token: localStorage.token ?? null,
      response: null,
    }
  },
  methods: {
    async createShift() {
      await axios.post('http://localhost/api-tort/work-shift', {
        start: this.start,
        end: this.end,
      }, {
        headers: {'Authorization': 'Bearer ' + this.token}
      })
          .then(() => this.response = 'Created!')
          .catch(e => this.response = (e.response.data.error.code + " " + e.response.data.error.message)
          )
    }
  }
}
</script>

<style scoped>

</style>