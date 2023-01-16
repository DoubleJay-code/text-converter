import { createStore } from 'vuex';

/* interface Rates {
  BTC: object,
  ETH: object,
  TON: object,
  QMALL: object,
} */

type Currency = 'USD' | 'RUB' | 'EUR' | 'KZT';

interface CryptoCurrency {
  BTC: {
    [currency in Currency]: number;
  },
  ETH: {
    [currency in Currency]: number;
  },
  TON: {
    [currency in Currency]: number;
  },
  QMALL: {
    [currency in Currency]: number;
  },
}

export default createStore({
  state: {
    inputValue: '' as string,
    cryptoRates: {} as CryptoCurrency,
    convertResult: '' as string,
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
    setCryptoResult(state) {
      if (state.inputValue.length >= 12) {
        /* const inputArray = state.inputValue.split(' '); */
        state.convertResult = `${state.inputValue} = ${state.cryptoRates}`;
      } else {
        state.convertResult = '';
      }
    },
  },
  actions: {
    getCryptoRates({ commit }) {
      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,QMALL,TON&tsyms=USD,RUB,EUR,KZT')
        .then((data) => data.json())
        .then((json) => {
          commit('updateCryptoRates', json);
        });
    },
  },
  /*   modules: {
    }, */
});
