import { createStore } from 'vuex';

export default createStore({
  state: {
    inputValue: '' as string,
    cryptoRates: {},
  },
  getters: {
  },
  mutations: {
    updateInputValue(state, event: HTMLInputElement) {
      state.inputValue = event.value;
    },
    updateCryptoRates(state, data) {
      state.cryptoRates = data;
    },
  },
  actions: {
    getCryptoRates({ commit }) {
      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,QMALL,TON&tsyms=USD,RUB,EUR,KZT').then((data) => data.json()).then((json) => {
        commit('updateCryptoRates', json);
      });
    },
  },
  /*   modules: {
    }, */
});
