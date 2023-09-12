
// setInterval(function(){
// //
// },1000);

// or

// var count = 0;
// var inerval;
// function timer() {
//     count++;
//     document.write(count + "" + '<br>');
//     console.log(count);
// }
// var inerval = setInterval(timer, 5000);
// setTimeout(() => {
//     clearInterval(inerval)
// }, 10000);


    //Stop Watch 
    var hour = 0;
    var min = 0;
    var sec = 0;
    var milsec = 0;
    var interval;

    var hourHeading = document.getElementById('hour');
    var minHeading = document.getElementById('min');
    var secHeading = document.getElementById('sec');
    var milsecHeading = document.getElementById('milsec');

    function startTimer() {
        milsec++;
        milsecHeading.innerHTML = milsec;
        if (milsec >= 100) {
            sec++;
            secHeading.innerHTML = sec;
            milsec = 0;
        }
        else if (sec >= 60) {
            min++;
            minHeading.innerHTML = min;
            sec = 0
        }
        else if (min >= 60) {
            hour++;
            hourHeading.innerHTML = hour;
            min = 0
        }
    }
    // setInterval(startTimer, 10);

    //start
    function start() {
        interval = setInterval(startTimer, 10);
    }
    //pause
    function pause() {
        clearInterval(interval);
    }
    // reset timer 
    function reset() {
        hour = 0;
        min = 0;
        sec = 0;
        milsec = 0;
        hourHeading.innerHTML = hour;
        minHeading.innerHTML = min;
        secHeading.innerHTML = sec;
        milsecHeading.innerHTML = milsec;
        pause();
    }