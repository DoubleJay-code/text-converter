<template>
  <NavBar />
  <TextConv />
  <!-- <ExchangeRates /> -->
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import NavBar from './components/NavBar.vue';
/* import ExchangeRates from './components/ExchangeRates.vue'; */
import TextConv from './components/TextConv.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getCryptoRates');
});

</script>

<style lang="scss">

</style>
