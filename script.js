let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


let digitalHour = document.getElementById('hours');
let digitalMin = document.getElementById('minutes');
let digitalSec = document.getElementById('seconds');
let digitalAmPm = document.getElementById('ampm');
let digitalDay = document.getElementById('digital-day');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getDay();

    let hRotation = 30 * (hh % 12) + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // for the digital clock system
   

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12; // this change the 24 hrs system in to 12 hrs system
    hh = hh ? hh : 12; // The hour '0' should be '12'
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    digitalHour.textContent = hh;
    digitalMin.textContent = mm;
    digitalSec.textContent = ss;
    digitalAmPm.textContent = ampm;
    digitalDay.textContent = days[day]; //this shows the day

}
setInterval(displayTime, 1000);