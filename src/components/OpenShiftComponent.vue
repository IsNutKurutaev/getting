<template>
  <div>
    <transition v-if="response != null">
      <div class="alert">
        {{ response }}
      </div>
    </transition>
    <form class="input-group" method="get">
      <input type="number" placeholder="Open" class="form-control" v-model="shift_id">
      <input type="submit" class="form-control btn btn-dark" @click.prevent="openShift">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OpenShiftComponent",
  data() {
    return {
      shift_id: null,
      token: localStorage.token ?? null,
      response: null,
    }
  },
  methods: {
    async openShift() {
      await axios.get('http://localhost/api-tort/work-shift/' + this.shift_id + '/open', {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
          .then(() => this.response = 'Open!')
          .catch(e => this.response = (e.response.data.error.code + " " + e.response.data.error.message))
    }
  }
}
</script>

<style scoped>

</style>