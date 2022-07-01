export default class CurrencyService {
  static currencyExchange() {
    return fetch('https://v6.exchangerate-api.com/v6/6497ae9f0e059b9771e1c0f1/latest/USD')
    .then(Response => {
      if (!response.ok){
        throw Error("ERROR");
      }
      return response.json();
    })
    .catch( error => {
      return error.message;
    })
  }
}