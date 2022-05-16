export default {
  SET_TRANSACTIONS(state, payload) {
    state.entries = payload;
  },
  SET_LOADING(state) {
    state.loading = !state.loading;
  }
}
