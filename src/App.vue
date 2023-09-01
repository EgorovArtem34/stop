<template>
  <div class="container">
    <h3 class="title">Список платежей</h3>
    <MyButton
      @click="this.showModal"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Добавить платеж
    </MyButton>
    <PaymentFilters />
    <Loader v-if="isLoading" />
    <PaymentOperations :payments="payments" v-else-if="payments.length > 0" />
    <p v-else-if="fetchErr">fetchErr</p>
    <p v-else>Платежей нет</p>
  </div>
  <AddNewPayment
    v-if="isModalShow"
    :isModalShow="isModalShow"
    @closeModal="closeModal"
  />
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import MyButton from "./components/ui/MyButton/MyButton.vue";
import PaymentFilters from "./components/PaymentFilters/PaymentFilters.vue";
import PaymentOperations from "./components/PaymentOperations/PaymentOperations.vue";
import Loader from "./components/Loader/Loader.vue";
import AddNewPayment from "./components/modals/AddNewPayment/AddNewPayment.vue";

export default {
  components: {
    MyButton,
    PaymentFilters,
    PaymentOperations,
    Loader,
    AddNewPayment,
  },
  data() {
    return {
      isModalShow: false,
    };
  },
  methods: {
    ...mapActions({
      fetchPayments: "payments/fetchPayments",
      fetchSources: "sources/fetchSources",
    }),
    showModal() {
      this.isModalShow = true;
    },
    closeModal() {
      this.isModalShow = false;
    },
  },
  computed: {
    ...mapState({
      payments: (state) => state.payments.payments,
      dateQuery: (state) => state.payments.dateQuery,
      isLoading: (state) => state.payments.isLoading,
      fetchErr: (state) => state.payments.fetchErr,
    }),
    ...mapGetters({
      sortedPayments: "payments/sortedPayments",
    }),
  },
  mounted() {
    this.fetchSources();
    this.fetchPayments();
  },
};
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 15px;
}
</style>
