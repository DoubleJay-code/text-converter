<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {

};
</script>

<style scoped>
.button {
  height: 40px;
  position: relative;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #777;
  border-radius: 30px;
  transition-duration: 700ms;
}

.button:hover {
  background-color: #22a6b3;
  box-shadow: 0px 0px 10px #000;
  top: -5px;
  color: #fff;
}

.button:active {
  background-color: #22a6b3;
  transition-duration: 300ms;
  top: 0;
  color: #fff;
}
</style>
