function compteur(){

    time = new Date ();
    document.getElementById('seconds').innerText = time.getSeconds();
    document.getElementById('minutes').innerText = time.getMinutes();
    document.getElementById('hours').innerText = time.getHours();

    clockSeconds = document.getElementById('seconds').innerText;
    clockMinutes = document.getElementById('minutes').innerText;
    clockHours = document.getElementById('hours').innerText;

        clockSeconds++;
        if (clockSeconds >= 60){
            clockSeconds = 0;
            clockMinutes ++;
        }
        if (clockMinutes >= 60){
            clockMinutes = 0;
            clockHours ++;
        }
        document.getElementById('seconds').textContent = clockSeconds;
        document.getElementById('minutes').textContent = clockMinutes;
        document.getElementById('hours').textContent = clockHours;
        console.log(clockSeconds)
    }

setInterval(compteur 1000);
// setInterval(compteur),1000; a vérifier

compteur();
// console.log(compteur)

// function clockClock() {
//   const date = new Date();
//   document.getElementById("triche").innerHTML = date.toLocaleTimeString();
//   setTimeout(function() {clockClock()}, 1000);
// }