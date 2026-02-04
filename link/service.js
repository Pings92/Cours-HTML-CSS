// function direBonjour(){
//     alert("Hello World");
// }

// alert(document.getElementById('prenom').value)

document.getElementsByTagName

document.getElementById("dreamButton").onclick = function direBonjour(){
    alert("Hello World");
}

// calculatrice
document.getElementById("mon-bouton").onclick = function addition(){
let monPremierNombre = parseInt(document.getElementById('premier-nombre').value);
let monDeuxiemeNombre = parseInt(document.getElementById('deuxieme-nombre').value);
sumNumbers = monPremierNombre + monDeuxiemeNombre;
document.getElementById('resultat').value = sumNumbers;
alert(sumNumbers)
// alert(parseInt(document.getElementById('premier-nombre').value) + parseInt(document.getElementById('deuxieme-nombre').value));
// document.getElementById('resultat').value = parseInt(document.getElementById('premier-nombre').value) + parseInt(document.getElementById('deuxieme-nombre').value)
// document.getElementById('resultat').value = "3"
}

// Exo 10 -------
// let hide = document.getElementById('second');
second.classList.remove('hidden');

// EXO 10 Part2
// document.getElementById('showSpoilerButton').onclik = 
function showHide(){
    let displayHide = document.getElementsByClassName('spoiler');
    for (let i = 0 ; i < displayHide.length ; i++){
        setTimeout(function (index) {
            displayHide[i].classList.add('hidden');
        }, i * 300 , i); //quoi faire (masquer) puis quand le faire (à chaque index)
        // set time ou permet de dire quoi faire et quand => 
        // i*300 => sup un index toutes les 300 ms
    }
}
// EXO 10 Part3
//paragraphe 1
let surbrillance = document.getElementById('premierBis');
surbrillance.style.backgroundColor = 'yellow';
//paragraphe 2 seulement au click
function testSurbri(){
    surbrillanceDeux = document.getElementById('secondBis')
    surbrillanceDeux.style.backgroundColor= 'green'
}
// surbrillanceDeux = document.getElementById('secondBis')
// surbrillanceDeux.onclick = surbrillanceDeux.style.backgroundColor('green')
// document.getElementById('secondBis').onclick = surbrillanceDeux.style.backgroundColor ='green'
// surbrillanceDeux[0].onclick = surbrillanceDeux.style.backgroundColor ='green'

//Code de Louis Exo Bonus
    // Code sans paramètres
// let paragraphes = document.getElementsByTagName('p');
// for(let i = 0; i < paragraphes.length; i++){
//     paragraphes[i].addEventListener('click', function() {
//         if (this.style.backgroundColor === 'yellow'){
//             this.style.backgroundColor = ""
//         } else {
//             this.style.backgroundColor = 'yellow'
//         }
//     })
// }
    //Code avec paramètres
    function colorSwipe(paragraphe){
        if (paragraphe.style.backgroundColor === 'yellow'){
            paragraphe.style.backgroundColor = ""
        } else {
            paragraphe.style.backgroundColor ="yellow"
        }
    }