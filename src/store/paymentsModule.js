export const paymentsModule = {
  state: () => ({
    payments: x,
    filterQuery: null,
    dateQuery: null,
  }),
  getters: {
    sortedPayments(state) {
      return [...state.payments].filter(
        (payment) => payment.date === dateQuery
      );
    },
  },
  mutations: {
    setDateQuery(state, dateQuery) {
      state.dateQuery = dateQuery;
    },
    setFilterQuery(state, filterQuery) {
      state.filterQuery = filterQuery;
    },
    resetDateQuery(state) {
      state.dateQuery = null;
    },
    resetFilterQuery(state) {
      state.filterQuery = null;
    },
    setLoading(state, value) {
      state.isPostsLoading = value;
    },
  },
  actions: {},
  namespaced: true,
};
