function clock  () {
     
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let amPm = document.getElementById('amPm');
    
    let h = new Date().getHours().toString().padStart(2, '0');
    let m = new Date().getMinutes().toString().padStart(2, '0');
    let s = new Date().getSeconds().toString().padStart(2, '0');
    let am = 'AM';

    if (h > 12) {
        // h = h - 12;
        am = 'PM';
    }

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    // amPm.innerHTML = am;
}

let interval = setInterval(clock, 1000);