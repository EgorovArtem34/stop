<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.btn {
  padding: 5px 65px;
  border-radius: 5px;
  color: white;
  background-color: var(--blue, #007fff);

  &:hover,
  &:focus {
    background-color: var(--light-blue, #71b1f2);
  }
}
</style>
