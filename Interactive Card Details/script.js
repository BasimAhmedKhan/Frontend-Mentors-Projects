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

// Buttons fn's

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

let arr = document.querySelectorAll("input");
let p = document.querySelectorAll("p");

submit = () => {
    if (arr[0].value=="" || arr[1].value=="" || arr[2].value=="" || arr[3].value=="" || arr[4].value=="") {
        arr.forEach((e, i) => {
            if (e.value == "") {
                e.classList.add("errorBorder");
                p[i].innerText = "can't be blank";
                p[i].classList.add("visible");
            }
        });
    }
    else if (mm.value.length !== 2 || yy.value.length !== 2) {
        yy.classList.add("errorBorder");
        mm.classList.add("errorBorder");
        p[2].classList.add("visible");
        p[2].innerText = "Wrong Format";
    }
    else if (cardNumber.value.length !== 16) {
        cardNumber.classList.add("errorBorder");
        p[1].classList.add("visible");
        p[1].innerText = "Wrong Format";
    }
    else if (cvcNo.value.length !== 3) {
        cardNumber.classList.add("errorBorder");
        p[3].classList.add("visible");
        p[3].innerText = "Wrong Format";
    }
    else {
        formBody.classList.toggle("display");
        completeState.classList.toggle("display");
    }
}

confirmed = () => {
    formBody.reset();
    cardHolderName.innerText = "JOHN DOE";
    accNo.innerText = "0000 0000 0000 0000";
    cardDate.innerText = "00/00";
    cvc.innerText = "000";
    arr.forEach(e => {
        if (e.value == "") {
            e.classList.remove("errorBorder");
        }
    });
    p.forEach(e => {
        e.innerText = "Wrong format";
        e.classList.remove("visible");
    });
    formBody.classList.toggle("display");
    completeState.classList.toggle("display");
}