var dayText = document.getElementById("dayText");
var monthText = document.getElementById("monthText");
var yearText = document.getElementById("yearText");
var monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

calculate = () => {
    var day = document.getElementById("DAY");
    var month = document.getElementById("MONTH");
    var year = document.getElementById("YEAR");

    var date = new Date();
    var birthDate = new Date("April 29, 2002");
    
    if (+day.value, +month.value, +year.value == "" || +day.value <= 31 || +month.value <= 12 || +year.value <= date.getFullYear()) {
        document.querySelectorAll(".errorMsg").forEach(e =>{
            e.classList.add("display");
        });
        document.querySelectorAll(".errorClass").forEach(e => {
            e.classList.add("error");
        });
    }
    else {
        var time = date.getTime() - birthDate.getTime();
        time = time / (1000 * 60 * 60 * 24);
        dayText.innerText = Math.floor(time - (date.getTime() / (1000 * 60 * 60 * 24)));
        time = time / 30.417;
        monthText.innerText = Math.floor(time - (date.getTime() / (1000 * 60 * 60 * 24 * 30.417)));
        time = time / 12;
        yearText.innerText = Math.floor(time);
    }
}
