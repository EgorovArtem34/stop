import { createStore } from "vuex";
import { paymentsModule } from "./paymentsModule";
import { sourceModule } from "./sourcePayments";

export default createStore({
  modules: {
    payments: paymentsModule,
    sources: sourceModule,
  },
});
