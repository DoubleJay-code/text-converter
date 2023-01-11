<template>
  <NavBar />
  <TextConv />
  <!-- <ExchangeRates /> -->
</template>

<script lang="ts">
/* import ExchangeRates from './components/ExchangeRates.vue'; */
import NavBar from './components/NavBar.vue';
import TextConv from './components/TextConv.vue';

export default {
  data() {
    return {};
  },
  components: { NavBar, TextConv },
  /* mounted() {
    this.$store.actions.getCryptoRates();
  }, */
};
</script>

<style lang="scss">

</style>
