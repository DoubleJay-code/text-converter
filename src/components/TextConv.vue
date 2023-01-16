<template>
  <div class="text-conv">
    <h2 class="text-conv__title">Доступные валюты: USD, RUB, EUR, KZT<br>
      Доступная крипта: BTC, ETH, TON, QMALL
    </h2>
    <label for="conv">
      <input
        class="text-conv__input"
        :value="store.state.inputValue"
        @input="store.commit('updateInputValue', $event.target)"
        placeholder="15 USD in QMALL"
        type="text"
        id="conv" />
    </label>
    <h2>{{ store.state.convertResult}}</h2>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onUpdated } from 'vue';

const store = useStore();

onUpdated((): void => {
  store.commit('setCryptoResult');
});
</script>

<style lang="scss" scoped>
.text-conv {
  width: 400px;
  min-height: 200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #22a7b3b0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(111, 109, 109, 0.3);
  .text-conv__title {
    font-size: 16px;
    margin-bottom: 15px;
  }
  .text-conv__input {
    display: block;
    margin-bottom: 15px;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    border: 2px solid #bdbdbd;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    &:focus {
      border: 2px solid #3f51b5;
    }
  }
}
</style>
