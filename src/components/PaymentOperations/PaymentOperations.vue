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
        <td>{{ payment.source_id }}</td>
        <td>{{ payment.status_id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    payments: {
      type: Array,
      required: true,
    },
  },
  mutations: {
    setFilterQuery(state, filterQuery) {
      state.filterQuery = filterQuery;
    },
    setDateQuery(state, dateQuery) {
      state.dateQuery = dateQuery;
    },
  },
};
</script>

<style></style>
