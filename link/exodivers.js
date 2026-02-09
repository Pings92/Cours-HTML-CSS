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

  const openModal = document.getElementById('openModal');
  const modale = document.getElementById('modale');
  const closeCross = document.querySelector('.closeCross');

  openModal.addEventListener("click", () => {
    modale.style.display = 'block';
});

closeCross.addEventListener("click", () => {
      modale.style.display = 'none';
});

window.addEventListener("click", (event) => {
  if (event.target === modale) {
    modale.style.display = 'none';
  }
});

// ---------------- EXERCICE 4

class maCalculatrice{
    constructor(listeDeNombre){
        this.numberList = listeDeNombre;
    }
    ajouter(){
        let total = 0;
        for (let nombre of this.numberList) {
            total += nombre;
        }
        return total;
    }
    afficher(){
        const resultat = this.ajouter() 
        console.log(resultat);
    }
}

let maListe = [0,4,7,8]; //C'est une instance
const resultNumber = new maCalculatrice(maListe) ;
resultNumber.afficher();

let testt = [6,2,9,2,0,2] //C'est une instance
const resultNumber2 = new maCalculatrice(testt) ;
resultNumber2.afficher();

//---------------- EXERCICE 5
// on aura deux classe arme et sort , avec plusieur parametre soit plusieur sort et plusieur arme
class weapon{
    constructor(knife, sword, hammer, wateringCan, fishingRod){
    // constructor(weaponList){
            this.knife = knife;
            this.sword = sword;
            this.hammer = hammer;
            this.wateringCan = wateringCan;
            this.fishingRod = fishingRod;
        }
    showWeapon(){
        let arme1 = this.knife
        console.log(arme1);
        }
    }

    // let test = ("Kunai acéré" , "Epée de feu", "Marteau de Thor", "Arrosoir Doré", "Attrape Truite")
    let mesArmes = new weapon("Kunai acéré" , "Epée de feu", "Marteau de Thor", "Arrosoir Doré", "Attrape Truite" )
    // let mesArmes = new weapon(test)
    mesArmes.showWeapon();

class spell{
    constructor(summon, ice, fire){
            this.summon = summon;
            this.ice = ice;
            this.fire = fire;
        }
    showSpell(){
        let summonSpell = this.summon;
        console.log(summonSpell);
        }
    }
    let mesSorts = new spell("Yojimbo");
    mesSorts.showSpell();


    // EXERCICE 6
    class personnage {
        constructor(nom, health, strenght, titre){
            this.nom = nom;
            this.health = health;
            this.strenght = strenght;
            this.titre = titre;
        }
        showCaracter(){
            console.log(`Nom: ${this.nom}`);
            console.log(`Santé: ${this.health} PV`);
            console.log(`Attaque: ${this.strenght}`);
            console.log(`Titre: ${this.titre}`);
        }
        }

    class thief extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }            
    }

    class monk extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }
        showCaracterStat(){
            super.showCaracter();
            console.log (`Caractéristique Bonus: ${this.bonusStat}`)
      }
    }

    class redMage extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }            
    }

    class shovelKnight extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }            
    }            
    
    let personnagePrincipal = new monk("Jean", "1000", "120", "moine", "High PV / High Def")
    personnagePrincipal.showCaracterStat();
