<template>
  <NavBar />
  <TextConv />
  <!-- <ExchangeRates /> -->
  <h1>{{ store.state.cryptoRates }}</h1>
</template>

<script lang="ts" setup>
/* import ExchangeRates from './components/ExchangeRates.vue'; */
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import NavBar from './components/NavBar.vue';
import TextConv from './components/TextConv.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getCryptoRates');
});

</script>

<style lang="scss">

</style>
