import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';



function getElements(response) {
  const USDollar = $('#USNumber').val();
  if (response.conversion_rates) {
    $('.showExchange').text(`The exchange for Euro is ${response.conversion_rates.EUR * USDollar}`)
  } else {
    $('.showError').text(`There was a error: ${response}`)
  }
}

async function makeApiCall() {
  const response = await CurrencyService.currencyExchange();
  getElements(response)
}

$(document).ready(function() {
  $('#exchange').click(function() {
  
    makeApiCall();
  });
});






