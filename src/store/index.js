import { createStore } from "vuex";
import { paymentsModule } from "./paymentsModule";

export default createStore({
  modules: {
    payments: paymentsModule,
  },
});
