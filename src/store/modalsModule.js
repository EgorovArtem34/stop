import axios from "axios";
import { createQueryParams } from "../utils/createQueryParams";
import { urls } from "../utils/apiUrls";

export const paymentsModule = {
  state: () => ({
    isModalShow: false,
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
  namespaced: true,
};
