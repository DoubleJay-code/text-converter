import { createStore } from 'vuex';

interface CurrencyPairExchangeInfo {
  BTC(BTC: string): CurrencyPairExchangeInfo;
  exchangeRate: number;
}
interface CurrencyPairExchangeCollection {
  [currency: string]: CurrencyPairExchangeInfo;
}

export default createStore({
  state: {
    inputValue: '' as string,
    cryptoRates: {} as CurrencyPairExchangeCollection,
    selectedСurrency: 'USD' as string,
    totalPair: [] as string[][],
    convertResult: '' as string,
  },
  getters: {},
  mutations: {
    updateInputValue(state, event: HTMLInputElement) {
      state.inputValue = event.value;
    },
    updateSelectedСurrency(state, event: HTMLSelectElement) {
      state.selectedСurrency = event.value;
    },
    updateCryptoRates(state, data) {
      state.cryptoRates = data;
    },
    updateTotalPair(state, data) {
      state.totalPair = data;
    },
    setCryptoResult(state) {
      if (state.inputValue.length >= 12) {
        const inputArray = state.inputValue.toLocaleUpperCase().split(' ');
        const price: number = Number(inputArray[0]) / Number(state.cryptoRates[inputArray[3] + inputArray[1]]);
        if (price) {
          state.convertResult = `${state.inputValue} = ${price.toFixed(7)}`;
        } else {
          state.convertResult = 'Неправильно набрана строка или такой пары не существует';
        }
      } else {
        state.convertResult = '';
      }
    },
  },
  actions: {
    getCryptoRates({ commit }) {
      fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,QMALL,TON&tsyms=USD,RUB,EUR,KZT')
        .then((data) => data.json())
        .then((json: CurrencyPairExchangeInfo) => {
          const majorСurrencies = [
            Object.keys(json.BTC),
            Object.keys(json),
          ];
          commit('updateTotalPair', majorСurrencies);
          const finalOneLayer = Object.fromEntries(
            Object.entries(json)
              .flatMap(([currency1, values]) => Object.entries(values)
                .map(([currency2, value]) => [currency1 + currency2, value])),
          );
          commit('updateCryptoRates', finalOneLayer);
        });
    },
  },
});
