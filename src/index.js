import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';

function getElements(response, dollar, currencyCode) {
  console.log(response);
  if (response["conversion_rates"] === undefined) { 
    $('.showErrors').text(`There was a error: ${response}`);
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