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

//EXERCICE II Feu tricolore
function trafficLight(){
    let feuRouge = document.getElementById('redlight');
    if (document.getElementById('redlight').getAttribute('background-color'))
}