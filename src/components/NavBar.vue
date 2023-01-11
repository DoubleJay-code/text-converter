<template>
  <nav class="navbar">
    <div class="wrapper">
      <MyButton>Текстовый конвертер</MyButton>
      <MyButton>Актуальный Курс</MyButton>
    </div>
  </nav>
</template>

<script lang="ts">
import MyButton from './UI/MyButoon.vue';

export default {
  data() {
    return {};
  },
  components: {
    MyButton,
  },
};
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
