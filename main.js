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
