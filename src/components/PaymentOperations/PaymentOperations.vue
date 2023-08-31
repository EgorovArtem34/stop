<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Клиент</th>
        <th scope="col">Договор №</th>
        <th scope="col">Тип платежа</th>
        <th scope="col">Дата</th>
        <th scope="col">Сумма (руб)</th>
        <th scope="col">Источник платежа</th>
        <th scope="col">Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="payment in payments" :key="payment.id">
        <td>{{ payment.client }}</td>
        <td>{{ payment.contract }}</td>
        <td>{{ payment.id }}</td>
        <td>{{ payment.date }}</td>
        <td>{{ payment.summ }}</td>
        <td>{{ getSourceById(payment.source_id) }}</td>
        <td>{{ payment.status_id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    payments: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      sources: (state) => state.sources.sources,
    }),
    ...mapGetters({
      getSourceById: "sources/getSourceById",
    }),
  },
};
</script>

<style></style>
