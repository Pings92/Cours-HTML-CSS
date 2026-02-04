clockSeconds = parseInt(document.getElementById('seconds').value);
clockMinutes = document.getElementById('minutes').value;
clockHours = document.getElementById('hours').value;

clockSeconds = '0';
clockMinutes = '0';
clockHours = '0';

function compteur (){
    clockSeconds++;
    if (clockSeconds > 60){
        clockSeconds = 0;
        clockMinutes ++;
    }
    if (clockMinutes > 60){
        clockMinutes = 0;
        clockHours ++;
    }
}