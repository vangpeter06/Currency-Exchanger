import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';



function getElements(response, USDollar, InputCurrency) {
  // const USDollar = $('#USNumber').val();
  // const InputCurrency = $('#currency').val();
  if (response["conversion_rates"][InputCurrency] === undefined) {
    $('.showErrors').text(`The Currency You selected is not available`);
  } else if (response.result === "success") {
  
    // $('.showExchange').text(`${(response.conversion_rates.EUR * USDollar).toFixed(2)} Euro`);

    $('.showExchange').text(`The exchange for Euro is ${(response.conversion_rates.EUR * USDollar).toFixed(2)} Euro`);
    $('.showExchange').text(`The exchange for Japanese Yen is ${(response.conversion_rates.JPY * USDollar).toFixed(2)} Yen`);
    $('.showExchange').text(`The exchange for Mexico Peso is ${(response.conversion_rates.MXN * USDollar).toFixed(2)} Peso`);
    $('.showExchange').text(`The exchange for Thai Baht is ${(response.conversion_rates.THB * USDollar).toFixed(2)} Baht`);
    $('.showExchange').text(`The exchange for China Yuan is ${(response.conversion_rates.CNY * USDollar).toFixed(2)} Yuan`);
  } else {
    $('.showError').text(`There was a error: ${response}`);
  }
}

function clearFields() {
  $('.showExchange').text("");
  $('.showError').text("");
}
async function makeApiCall() {
  const response = await CurrencyService.currencyExchange();
  getElements(response, USDollar, InputCurrency);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    const USDollar = $('#USNumber').val();
    const InputCurrency = $('#currency').val();
    clearFields;
    makeApiCall(response, USDollar, InputCurrency);
  });
});






