<template>
  <div class="filters">
    <label>
      Дата платежа
      <VueDatePicker
        v-model="date"
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
        v-model="selectSource"
        @change="changeOption"
        class="form-select"
        aria-label="выбор источника платежей"
      >
        <option selected>Все платежи</option>
        <option value="1">Касса</option>
        <option value="2">Карта</option>
      </select>
    </label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { formatDate } from "../../utils/formattDate.js";

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      selectSource: null,
    };
  },
  methods: {
    ...mapMutations({
      setDateQuery: "payments/setDateQuery",
      resetDateQuery: "payments/resetDateQuery",
    }),
    handleDate(modelData) {
      if (!modelData) {
        this.resetDateQuery();
        return null;
      }
      const formattedDate = formatDate(modelData);
      this.setDateQuery(formattedDate);
    },
    changeOption({ target }) {
      const value = target.value;
      console.log(value);
    },
  },
};
</script>
