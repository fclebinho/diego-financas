export default {
  fetchAll({ commit, dispatch }, filter) {
    dispatch('toggeLoading');
    this.$axios.$get('financeiro', {
      params: {
        ...filter
      }
    })
      .then(response => commit('SET_TRANSACTIONS', response))
      .finally(() => dispatch('toggeLoading'));
  },
  toggeLoading({ commit }) {
    commit('SET_LOADING');
  }
}
