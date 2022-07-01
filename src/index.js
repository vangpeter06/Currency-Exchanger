import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currencyService';



function getElements(response) {
  let dollar = $('#USNumber').val();
  let inputCurrency = $('#currency').val();
  let currencyArray = [];
  console.log(response.conversion_rates);


  /** test */
  //for (currencyRate of response.conversion_rates) {
  //if(inputCurrency == )
  //}
//
  /** end test */
 
  if (response["conversion_rates"][inputCurrency] === undefined) { 
    ('.showErrors').text(`The Currency You selected is not available`);
    for (let i = 0; i < response.conversion_rates.length; i++) {
    currencyArray.push(response.conversion_rates);
    console.log(response.conversion_rates)
    } 
    console.log(currencyArray);

    $('.showExchange').text(`The exchange for Euro is ${(response.conversion_rates.EUR * dollar).toFixed(2)} Euro`);
    $('.showExchange').text(`The exchange for Japanese Yen is ${(response.conversion_rates.JPY * dollar).toFixed(2)} Yen`);
    $('.showExchange').text(`The exchange for Mexico Peso is ${(response.conversion_rates.MXN * dollar).toFixed(2)} Peso`);
    $('.showExchange').text(`The exchange for Thai Baht is ${(response.conversion_rates.THB * dollar).toFixed(2)} Baht`);
    $('.showExchange').text(`The exchange for China Yuan is ${(response.conversion_rates.CNY * dollar).toFixed(2)} Yuan`);
    
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
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    // let dollar = $('#USNumber').val();
    // const inputCurrency = $('#currency').val();
    clearFields;
    makeApiCall();
  });
});






