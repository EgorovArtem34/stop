<template>
  <div ref="modal" class="modal fade d-block show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавление нового платежа</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            v-on:click="$emit('closeModal')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <NewPaymentForm @closeModal="$emit('closeModal')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../../ui/MyButton/MyButton.vue";
import NewPaymentForm from "../../NewPaymentForm/NewPaymentForm.vue";

export default {
  props: {
    isModalShow: Boolean,
  },
  watch: {
    isModalShow: {
      handler(newVal) {
        this.active = newVal;
        const body = document.querySelector("body");
        this.isModalShow
          ? body.classList.add("modal-open")
          : body.classList.remove("modal-open");
      },
      immediate: true,
      deep: true,
    },
  },
  beforeUnmount() {
    const body = document.querySelector("body");
    body.classList.remove("modal-open");
  },
  components: { MyButton, NewPaymentForm },
};
</script>

<style scoped lang="scss">
.modal {
  background: rgba(0, 0, 0, 0.16);
}
</style>
