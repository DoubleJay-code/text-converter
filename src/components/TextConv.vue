<template>
  <div class="text-conv">
    <label for="conv">
      <input :value="$store.state.inputValue" type="text" id="conv" />
    </label>
    <h2>{{}} ff</h2>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.text-conv {
  width: 400px;
  min-height: 200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #22a7b3b0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(111, 109, 109, 0.3);
}

input {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  outline: none;
}

input:focus {
  border: 2px solid #3f51b5;
}
</style>

<!-- @input="$emit('chandeIn', $event.target)" -->
