<template>
  <div class="container">
    <h3 class="title">Список платежей</h3>
    {{ dateQuery }}
    <MyButton>Добавить платеж</MyButton>
    <PaymentFilters />
    <PaymentOperations :payments="payments" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import MyButton from "./components/ui/MyButton/MyButton.vue";
import PaymentFilters from "./components/PaymentFilters/PaymentFilters.vue";
import PaymentOperations from "./components/PaymentOperations/PaymentOperations.vue";

export default {
  components: {
    MyButton,
    PaymentFilters,
    PaymentOperations,
  },
  methods: {
    ...mapMutations({
      setFilterQuery: "payments/setFilterQuery",
      setDateQuery: "payments/setDateQuery",
    }),
  },
  computed: {
    ...mapState({
      payments: (state) => state.payments.payments,
      dateQuery: (state) => state.payments.dateQuery,
    }),
    ...mapGetters({
      sortedPayments: "payments/sortedPayments",
    }),
  },
};
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 15px;
}
</style>
