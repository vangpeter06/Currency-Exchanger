import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';

function getElements(response, dollar, currencyCode) {
  if (response["conversion_rates"][currencyCode] === undefined) { 
    $('.showErrors').text(`The Currency You selected is not available`);
  } else if (response.result === "success") {
    $(".showExchange").text(`${dollar} USD = ${(response["conversion_rates"][currencyCode]*[dollar]).toFixed(2)} ${currencyCode}`);  
  } else {
    $('.showError').text(`There was a error: ${response}`);
  }
}

function clearFields() {
  $('.showExchange').text("");
  $('.showError').text("");
}
async function makeApiCall(dollar, currencyCode) {
  const response = await CurrencyService.currencyExchange();
  getElements(response, dollar, currencyCode);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let dollar = $('#USNumber').val();
    const inputCurrency = $('#currency').val();
    let currencyCode = inputCurrency.substring(0,3);
    clearFields;
    makeApiCall(dollar, currencyCode);
    $("#output").show();
  });
});






