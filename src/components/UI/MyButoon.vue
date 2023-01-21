<template>
      <router-link :to="{ path: `${props.refs}` }">
        <button class="button">
          <slot></slot>
        </button>
      </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  refs: String,
});

</script>

<style lang="scss" scoped>
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
  color: rgb(255, 255, 255);
}

.button:active {
  background-color: #22a6b3;
  transition-duration: 300ms;
  top: 0;
  color: #fff;
}
</style>
