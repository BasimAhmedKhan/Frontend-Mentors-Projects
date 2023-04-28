let cardName = document.getElementById("cardName");
let cardNumber = document.getElementById("cardNumber");
let mm = document.getElementById("mm");
let yy = document.getElementById("yy");
let cardHolderName = document.getElementById("cardHolderName");
let cardDate = document.getElementById("cardDate");
let accNo = document.getElementById("accNo");
let cvcNo = document.getElementById("cvcNo");
let cvc = document.getElementById("cvc");
let formBody = document.getElementById("formBody");
let completeState = document.getElementById("completeState");

nameInput = () => {
    cardHolderName.innerText = cardName.value;
}

accInput = () => {
    accNo.innerText = cardNumber.value;
}

dateInput = () => {
    cardDate.innerText = mm.value + "/" + yy.value;
}

cvcInput = () => {
    cvc.innerText = cvcNo.value;
}

submit = () => {
    formBody.classList.toggle("display");
    completeState.classList.toggle("display");
}