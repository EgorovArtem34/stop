<template>
  <div class="filters">
    <label>
      Дата платежа
      <VueDatePicker
        v-model="dateQuery"
        @update:model-value="handleDate"
        locale="ru"
        cancelText="отменить"
        selectText="выбрать"
        placeholder="выберите дату"
        :mode="'date'"
        :enable-time-picker="false"
      />
    </label>

    <label>
      Источник платежа
      <select
        v-model="filterQuery"
        @change="changeOption"
        class="form-select"
        aria-label="выбор источника платежей"
      >
        <option value="">Все платежи</option>
        <option v-for="source in sources" :key="source.id" :value="source.id">
          {{ source.title }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { formatDate } from "../../utils/formatDate.js";

export default {
  components: { VueDatePicker },
  methods: {
    ...mapMutations({
      setDateQuery: "payments/setDateQuery",
      resetDateQuery: "payments/resetDateQuery",
      setFilterQuery: "payments/setFilterQuery",
    }),
    ...mapActions({
      fetchPayments: "payments/fetchPayments",
    }),
    handleDate(modelData) {
      if (!modelData) {
        this.resetDateQuery();
      } else {
        const formattedDate = formatDate(modelData);
        this.setDateQuery(formattedDate);
      }
      // this.fetchPayments();
    },
    changeOption({ target }) {
      const value = target.value;
      this.setFilterQuery(value);
      // this.fetchPayments();
    },
  },
  computed: {
    ...mapState({
      filterQuery: (state) => state.payments.filterQuery,
      dateQuery: (state) => state.payments.dateQuery,
      sources: (state) => state.sources.sources,
    }),
  },
  watch: {
    dateQuery() {
      this.fetchPayments();
    },
    filterQuery() {
      this.fetchPayments();
    },
  },
};
</script>

<style scoped lang="scss">
.filters {
  display: flex;
  gap: 15px;
  margin: 10px 0 10px;
}
</style>
