<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавление нового платежа</h5>
          <MyButton
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </MyButton>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Добавить оплату</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            отменить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../../ui/MyButton/MyButton.vue";

export default { components: { MyButton } };
</script>

<style lang="scss"></style>
