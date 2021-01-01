$(document).ready(function () {
    //count down

    var deadline = new Date("aug 18, 2021 15:37:25").getTime();

    var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    // if (String(days).length == 3) {
    //   document.getElementById("day").innerHTML = days;
    // } else if (String(days).length == 2) {
    //   document.getElementById("day").innerHTML = ("0" + days).slice(-3);
    // } else {
    //   document.getElementById("day").innerHTML = ("00" + days).slice(-3);
    // }
    console.log(String(days).length);
    document.getElementById("day").innerHTML = ("0" + days).slice(-2);
    document.getElementById("hour").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minute").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("second").innerHTML = ("0" + seconds).slice(-2);
    if (t < 0) {
        clearInterval(x);
        document.getElementById("finish").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("minute").innerHTML = "0";
        document.getElementById("second").innerHTML = "0";
    }
    }, 1000);
});
