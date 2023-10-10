function updateName() {
    var name = document.getElementById('Cardholder_Nam').value;   // get input value
    document.getElementById('updatedName').textContent = name;   // update text
}
function updateNumber() {
    var number = document.getElementById('Card_num').value;   // get input value
    document.getElementById('updatedNumber').textContent = number;   // update text
}
function updateDate() {
    var number_month = document.getElementById('CardDate_month').value;   
    var number_year = document.getElementById('CardDate_year').value; 
    document.getElementById('updatedDate').textContent = number_month + "/" + number_year;   
}
function updateCVC() {
    var number = document.getElementById('Card_cvc').value;   // get input value
    document.getElementById('updatedCVC').textContent = number;   // update text
}

function formatCardNumber(inputValue) {
    const digitsOnly = inputValue.replace(/\D/g, '');
  
    const formattedValue = digitsOnly.match(/.{1,4}/g);
  
    const updatedNumber = document.getElementById("updatedNumber");
    updatedNumber.textContent = formattedValue ? formattedValue.join(' ') : '';
  
    document.querySelector(".card-num-error").textContent = "";
  }

  function validateForm(event) {
    event.preventDefault();
  
    var name = document.getElementById('Cardholder_Nam');
    var cardNumber = document.getElementById('Card_num');
    var expMonth = document.getElementById('CardDate_month');
    var expYear = document.getElementById('CardDate_year');
    var cvc = document.getElementById('Card_cvc');
  
    if (name.value.trim() === '') {
      document.querySelector('.card-name-error').textContent = 'Name cannot be blank';
    } else {
      document.querySelector('.card-name-error').textContent = '';
    }
  
    if (cardNumber.value.trim() === '' || cardNumber.value.length !== 16) {
      document.querySelector('.card-num-error').textContent = 'Card number must be 16 digits';
    } else {
      document.querySelector('.card-num-error').textContent = '';
    }
  
    if (expMonth.value.trim() === '' || expMonth.value < 1 || expMonth.value > 12) {
      document.querySelector('.exp-month-error').textContent = 'Expiry month must be between 1 and 12';
    } else {
      document.querySelector('.exp-month-error').textContent = '';
    }
  
    if (expYear.value.trim() === '' || expYear.value < 0 || expYear.value > 99) {
      document.querySelector('.exp-year-error').textContent = 'Expiry year must be between 0 and 99';
    } else {
      document.querySelector('.exp-year-error').textContent = '';
    }
  
    if (cvc.value.trim() === '' || cvc.value < 0 || cvc.value > 999) {
      document.querySelector('.cvc-error').textContent = 'CVC must be between 0 and 999';
    } else {
      document.querySelector('.cvc-error').textContent = '';
    }
  }
  