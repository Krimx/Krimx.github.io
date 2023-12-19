function getTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    updatehands(hours, minutes, seconds);
}

function updatehands(hours, minutes, seconds) {
    const secondAngle = ((seconds + 2) / 60 * 360) - 90;
    const minuteAngle = ((minutes) / 60 * 360) - 90;
    const hourAngle = ((hours % 12) / 12 * 360) -90;

    const secondHand = document.getElementById("secondHand");
    const minuteHand = document.getElementById("minuteHand");

    secondHand.style.transform = "translate(50%, 0) rotate(" + secondAngle + "deg)"
    minuteHand.style.transform = "translate(50%, 0) rotate(" + minuteAngle + "deg)"
    hourHand.style.transform = "translate(50%, 0) rotate(" + hourAngle + "deg)"
}

function beginClock() {
    setInterval(function() {
        getTime();
    }, 50);
}