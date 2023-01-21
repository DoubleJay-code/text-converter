<template>
  <NavBar />
  <router-view>
  </router-view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import NavBar from './components/NavBar.vue';

const store = useStore();

onMounted(() => {
  store.dispatch('getCryptoRates');
});

</script>

<style lang="scss">

</style>
