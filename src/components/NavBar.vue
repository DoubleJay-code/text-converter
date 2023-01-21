<template>
  <nav class="navbar">
    <div class="wrapper">
      <MyButton :refs="'/'">Текстовый конвертер</MyButton>
      <MyButton :refs="'/rates'">Актуальный Курс</MyButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MyButton from './UI/MyButoon.vue';
</script>

<style scoped>
.navbar {
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.wrapper {
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
