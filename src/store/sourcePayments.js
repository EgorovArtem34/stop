import axios from "axios";
import { urls } from "../utils/apiUrls";

export const sourceModule = {
  state: () => ({
    sources: [],
    fetchErr: null,
    isLoading: false,
  }),
  mutations: {
    setSources(state, sources) {
      state.sources = sources;
    },
    setFetchErr(state, message) {
      state.fetchErr = message;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  getters: {
    getSourceById: (state) => (id) => {
      const foundSource = state.sources.find((source) => source.id === id);
      return foundSource?.title || "";
    },
  },
  actions: {
    async fetchSources({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(urls.sources);
        commit("setSources", response.data);
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
