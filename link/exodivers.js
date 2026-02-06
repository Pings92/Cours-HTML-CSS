// // ------------------- Exercice javascript intermédiaire et révision
// // ------------------- EXERCICE 1
// function pairImpair(n){
//     if (n%2 === 0){
//         console.log(`${n} est un nombre pair`)
//     }
//     else{
//         console.log(`${n} est un nombre impair`)
//     }
// }
// pairImpair(7)
// // ------------------- EXERCICE 1 --- PAIR/IMPAIR en TERNARY
// function pairImpairTenaire(n){
//     let result = ( n%2 == 0) ? console.log("True") : console.log("False");
// }
// pairImpairTenaire(7);

// // ------------------- EXERCICE 1 --- PAIR/IMPAIR VERSION JERMEM 
// function pairImpairTernaireJerem(n){
//     return n %2 ===0;
// }
// console.log(pairImpairTernaireJerem(56));

// //--------------------- EXERCICE 2 - PALINDROME
// //  split separe le mot en caractère et les places dans un tableau
// //  reverse inverse les caractères de ce tableau
// //  et join les retire du tableau et les mets les uns à la suite des autres

// // }
// function palindrome(mot){
//     return mot === mot.split("").reverse().join(""); 
// }

// userWord = prompt("Rentrer un mot: ");

// if (palindrome(userWord) === true ){
//     alert(`${userWord} est un palindrome`)
// }
// else{
//     alert(`${userWord} n'est pas un palindrome`)
// }

// palindrome("kayak")

// // ------------------- EXERCIRCE 2 6 PALINDROME Version ternaire
// function palindrome(mot){
//     return mot === mot.split("").reverse().join(""); 
// }

// userWord = prompt("Rentrer un mot: ");
// let verification = (palindrome(userWord) === true) ? alert(`${userWord} est un palindrome`) : alert(`${userWord} n'est pas un palindrome`)

// palindrome("kayak")

//EXERCICE II Feu tricolore version Piérick initiale
function trafficLight(){

    let feuRouge = document.getElementById('redLight');
    let feuJaune = document.getElementById('orangeLight');
    let feuVert = document.getElementById('greenLight');

// feuRouge.getAttribute('backgroundColor') 

    if (feuRouge.style.backgroundColor == "") {
        feuRouge.style.backgroundColor = 'red';
        feuJaune.style.backgroundColor = 'white';
        feuVert.style.backgroundColor = 'white';
        console.log("Si valeur nulle")
    }

    else if (feuRouge.style.backgroundColor == 'red'){
        feuRouge.style.backgroundColor = 'white';
        feuJaune.style.backgroundColor = 'yellow';
        console.log("Cas lumière rouge")
    }else if (feuJaune.style.backgroundColor == 'yellow'){
        feuJaune.style.backgroundColor = 'white';
        feuVert.style.backgroundColor = "green";
        console.log("cas lumière jaune")
    } else if (feuVert.style.backgroundColor == 'green'){
        feuVert.style.backgroundColor = "white";
        feuRouge.style.backgroundColor = 'red';
        console.log("Cas lumière verte")
    }

    else{
        console.log("OHHHHHHH NON CA NE PASSE PAS") 
    }
}
    // setInterval(trafficLight, 2000); a decomenter pour activer

//--------- EXERCICE II Feu tricolore inspiration Léa => jouer sur l'opacité
// function feuTricolore{

//     let rouge = document.getElementById('lumiereRouge');
//     let jaune = document.getElementById('lumiereJaune');
//     let vert = document.getElementById('lumiereVert');

// }

// //--------- EXERCICE 3 Modale

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";

  // dans cette fonction modifier la classe de mon element avec l'id maModal pour mettre en display: block;
  // modifier la couleur du background en gris
  document.get
}