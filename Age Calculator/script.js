var dayText = document.getElementById("dayText");
var monthText = document.getElementById("monthText");
var yearText = document.getElementById("yearText");

calculate = () => {
    var day = document.getElementById("DAY");
    var month = document.getElementById("MONTH");
    var year = document.getElementById("YEAR");

    var date = new Date();
    let dob = month.value + " " + day.value + ", " + year.value;
    var birthDate = new Date(dob);
    
    if (+day.value, +month.value, +year.value == "" || +day.value > 31 || +month.value > 12 || +year.value > date.getFullYear()) {
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
        let noOfDays = Math.floor(time);
        time = time / 30.417;
        let noOfMonths = Math.floor(time);
        time = time / 12;
        let noOfYears = Math.floor(time);
        dayText.innerText = noOfDays - Math.floor((noOfMonths*30.417)-(noOfYears/4));
        monthText.innerText = noOfMonths - (noOfYears*12);
        yearText.innerText = noOfYears;
    }
}
