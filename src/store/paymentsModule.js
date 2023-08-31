import axios from "axios";
import { createQueryParams } from "../utils/createQueryParams";
import { urls } from "../utils/apiUrls";

export const paymentsModule = {
  state: () => ({
    payments: [],
    filterQuery: null,
    dateQuery: "",
    fetchErr: null,
    isLoading: false,
  }),
  mutations: {
    setPayments(state, payments) {
      state.payments = payments;
    },
    setDateQuery(state, dateQuery) {
      state.dateQuery = dateQuery;
    },
    setFilterQuery(state, filterQuery) {
      state.filterQuery = filterQuery;
    },
    setFetchErr(state, message) {
      state.fetchErr = message;
    },
    resetDateQuery(state) {
      state.dateQuery = null;
    },
    resetFilterQuery(state) {
      state.filterQuery = null;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async fetchPayments({ state, commit }) {
      try {
        commit("setLoading", true);
        const queryParams = createQueryParams(
          state.dateQuery,
          state.filterQuery
        );
        const currentUrl = queryParams
          ? `${urls.payments}?${queryParams}`
          : urls.payments;
        console.log(currentUrl);
        const response = await axios.get(currentUrl);
        commit("setPayments", response.data);
        commit("setFetchErr", null);
      } catch (err) {
        commit("setFetchErr", err.message);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
