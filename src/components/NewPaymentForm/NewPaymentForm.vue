<template>
  <form class="form" @submit.prevent="submitData">
    <label class="form__label">
      Клиент
      <input
        required
        name="client"
        type="text"
        placeholder="Введите ФИО"
        v-model.trim="client"
      />
    </label>

    <label class="form__label">
      Договор №
      <input
        required
        name="contract"
        type="number"
        placeholder="Введите номер договора"
        v-model.number="contract"
      />
    </label>

    <label class="form__label">
      Тип оплаты
      <select
        v-model="selectSource"
        @change="changeOption"
        placeholder="не выбрано"
      >
        <option v-for="source in sources" :key="source.id" :value="source.id">
          {{ source.title }}
        </option>
      </select>
    </label>

    <label class="form__label form__label_date">
      Дата оплаты
      <VueDatePicker
        v-model="date"
        locale="ru"
        cancelText="отменить"
        selectText="выбрать"
        placeholder="выберите дату"
        :mode="'date'"
        :enable-time-picker="false"
      />
    </label>

    <label class="form__label">
      Сумма оплаты
      <input
        required
        name="amount"
        type="number"
        placeholder="Введите сумму"
        v-model.number="amount"
      />
    </label>

    <label class="form__label">
      Статус оплаты
      <select
        v-model="selectStatus"
        @change="changeOption"
        placeholder="не выбрано"
      >
        <option v-for="status in [1, 2, 3]" :key="status" :value="status">
          {{ status }}
        </option>
      </select>
    </label>
    <div class="btns">
      <button
        type="button"
        class="btn btn-secondary"
        v-on:click="$emit('closeModal')"
      >
        Отменить
      </button>
      <button class="btn btn-primary">Добавить оплату</button>
    </div>
  </form>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import { mapState, mapMutations, mapActions } from "vuex";
import MyButton from "../ui/MyButton/MyButton.vue";
import { formatDate } from "../../utils/formatDate";

export default {
  components: { MyButton, VueDatePicker },
  data() {
    return {
      client: "",
      contract: null,
      date: null,
      selectSource: "",
      selectStatus: null,
      amount: null,
    };
  },
  methods: {
    ...mapMutations({
      addPayment: "payments/addPayment",
      resetDateQuery: "payments/resetDateQuery",
      resetFilterQuery: "payments/resetFilterQuery",
    }),
    ...mapActions({
      fetchPayments: "payments/fetchPayments",
    }),
    submitData() {
      const newPayment = {
        // id: new Date(),
        client: this.client,
        contract: this.contract,
        type_id: 1,
        date: formatDate(new Date()),
        summ: this.amount,
        source_id: this.selectSource,
        status_id: this.selectStatus,
      };
      // this.resetDateQuery();
      // this.resetFilterQuery();
      console.log(newPayment, "отправить запрос на сервер put");
      this.$emit("closeModal");
    },
  },
  computed: {
    ...mapState({
      sources: (state) => state.sources.sources,
    }),
  },
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 5px;
    margin-left: 5px;
  }
}
.form__label {
  &::before {
    content: "*";
    color: red;
    margin-right: 1px;
  }
}
.form__label_date {
  display: flex;
}
.btns {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dee2e6;
  padding-top: 10px;
}
</style>
