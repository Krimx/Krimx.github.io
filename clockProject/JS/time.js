function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    updateText(hours, minutes, seconds, day, month, year);
}
function updateText(hours, minutes, seconds, day, month, year) {
    const hoursText = document.getElementById("hours");
    const minutesText = document.getElementById("minutes");
    const secondsText = document.getElementById("seconds");
    const periodText = document.getElementById("period");
    const dayText = document.getElementById("day");
    const monthText = document.getElementById("month");
    const yearText = document.getElementById("year");

    hoursText.innerHTML = Math.round((hours % 24));
    minutesText.innerHTML = Math.round((minutes % 60));
    secondsText.innerHTML = Math.round((seconds % 60));

    periodText.innerHTML = getPeriod(hours);

    dayText.innerHTML = day;
    monthText.innerHTML = getMonthString(month);
    yearText.innerHTML = year;


    console.log("Passed");
}

function getMonthString(month) {
    var toOut = "";

    if (month == 1) toOut = "January";
    if (month == 2) toOut = "February";
    if (month == 3) toOut = "March";
    if (month == 4) toOut = "April";
    if (month == 5) toOut = "May";
    if (month == 6) toOut = "June";
    if (month == 7) toOut = "July";
    if (month == 8) toOut = "August";
    if (month == 9) toOut = "September";
    if (month == 10) toOut = "October";
    if (month == 11) toOut = "November";
    if (month == 12) toOut = "December";

    return toOut;
}

function getPeriod(hours) {
    var toOut = "";
    if (Math.round(hours) - 12 >= 0) toOut = "PM";
    else toOut = "AM";
    return toOut;
}

function runClock() {
    setInterval(function() {
        getTime();
    }, 100);
}