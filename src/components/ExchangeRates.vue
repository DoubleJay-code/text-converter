<template>
  <div class="currency-selector">
    <label for="base-currency">
      Выберете основную валюту:
      <select
        @change="store.commit('updateSelectedСurrency', $event.target)"
        id="base-currency">
        <option
          v-for="fiat of store.state.totalPair[0]"
          :key="fiat"
          :value="fiat"
          >
          {{ fiat }}
        </option>
      </select>
    </label>
    <h2
      v-for="crypto of store.state.totalPair[1]"
      :key="crypto"
      >
      {{ `1 ${crypto} = ${store.state.cryptoRates[crypto + store.state.selectedСurrency]}` }}
    </h2>
</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
/* function returnRates(crypto: string) {
  return crypto;
} */

</script>

<style lang="scss" scoped>
.currency-selector {
  width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  background-color: #22a7b3b0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(111, 109, 109, 0.3);
}
label {
  color: white;
  align-self: end;
  font-size: 16px;
  margin-bottom: 20px;
  select {
    margin-left: 30px;
    padding: 6px 20px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
  }
}
h2 {
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
