import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';



function getElements(response) {
  const USDollar = $('#USNumber').val();
  if (response.conversion_rates) {
    $('.showExchange').text(`The exchange for Euro is ${(response.conversion_rates.EUR * USDollar).toFixed(2)} Euro`);
    $('.showExchange').text(`The exchange for Japanese Yen is ${(response.conversion_rates.JPY * USDollar).toFixed(2)} Yen`);
    $('.showExchange').text(`The exchange for Mexico Peso is ${(response.conversion_rates.MXN * USDollar).toFixed(2)} Peso`);
    $('.showExchange').text(`The exchange for Thai Baht is ${(response.conversion_rates.THB * USDollar).toFixed(2)} Baht`);
    $('.showExchange').text(`The exchange for China Yuan is ${(response.conversion_rates.CNY * USDollar).toFixed(2)} Yuan`);
  } else {
    $('.showError').text(`There was a error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await CurrencyService.currencyExchange();
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    makeApiCall();
  });
});






