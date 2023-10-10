function updateName() {
    var name = document.getElementById('Cardholder_Nam').value;   // get input value
    document.getElementById('updatedName').textContent = name;   // update text
}
function updateNumber() {
    var number = document.getElementById('Card_num').value;   // get input value
    document.getElementById('updatedNumber').textContent = number;   // update text
}
function updateDateMonth() {
    var number = document.getElementById('CardDate_month').value;   // get input value
    document.getElementById('updatedDateMonth').textContent = number;   // update text
}
function updateDateYear() {
    var number = document.getElementById('CardDate_year').value;   // get input value
    document.getElementById('updatedDateYear').textContent = number;   // update text
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

    const cardName = document.getElementById("Cardholder_Nam").value.trim();
    const cardNumber = document.getElementById("Card_num").value.trim();
    const expMonth = document.getElementById("CardDate_month").value.trim();
    const expYear = document.getElementById("CardDate_year").value.trim();
    const cvc = document.getElementById("Card_cvc").value.trim();

    // Clear previous error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });

    const cardNumberRegex = /^\d{16}$/;
    const expMonthRegex = /^(0[1-9]|1[0-2])$/;
    const expYearRegex = /^\d{2}$/;

    if (cardName === "") {
        document.querySelector("#card-name-error").textContent = "Cardholder Name can't be blank.";
    }
    if (!cardNumberRegex.test(cardNumber)) {
        document.querySelector("#card-num-error").textContent = "Invalid Card Number format.";
    }
    if (!expMonthRegex.test(expMonth) || !expYearRegex.test(expYear)) {
        document.querySelector("#exp-month-error").textContent = "Invalid Expiration Date format.";
    }
    if (cvc === "") {
        document.querySelector("#cvc-error").textContent = "CVC can't be blank.";
    }

    // If all fields are filled and in the correct format, you can proceed with form submission or other actions
    if (
        cardName !== "" &&
        cardNumberRegex.test(cardNumber) &&
        expMonthRegex.test(expMonth) &&
        expYearRegex.test(expYear) &&
        cvc !== ""
    ) {
        // Perform form submission or other actions here
        alert("Form submitted successfully!");
    }
}
