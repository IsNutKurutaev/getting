import {reactive} from "vue";

let store = reactive({
  state: {
    token: localStorage.token ?? null,
  },
  setToken(newToken) {
      this.token = newToken;
      localStorage.setItem('token', this.token);
  },
  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }
});
export default store;
