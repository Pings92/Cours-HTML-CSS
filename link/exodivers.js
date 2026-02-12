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

let test = [6,2,9,2,0,2] //C'est une instance
const resultNumber2 = new maCalculatrice(test) ;
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
        showCaracterSecondMethod(){
            console.log(`Nom: ${this.nom}\nSanté: ${this.health}\nAttaque: ${this.strenght}\nTitre: ${this.titre}`)      }
        }

    class thief extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }            
        showCaracterStat(){
            super.showCaracter();
            console.log (`Caractéristique Bonus: ${this.bonusStat}`)
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
        showCaracterStat(){
            super.showCaracter();
            console.log (`Caractéristique Bonus: ${this.bonusStat}`)
      }            
    }

    class shovelKnight extends personnage{
        constructor(nom, health, strenght, titre, bonusStat){
            super (nom, health, strenght, titre);
            this.bonusStat = bonusStat;
        }            
        showCaracterStat(){
            super.showCaracterSecondMethod();
            console.log (`Caractéristique Bonus: ${this.bonusStat}`)
      }
    }            

    let personnagePrincipal = new thief("Djidane", "1000", "120", "Voleur", "High luck")
    personnagePrincipal.showCaracterStat();

    let personnageSecondaire = new shovelKnight("Sean", "1000", "120", "Shovel Knight", "Stunt ennemy")
    personnageSecondaire.showCaracterStat();    

    let personnageTerciaire = new redMage ("Elliot", "1000", "120", "Mage Rouge", "Master Dark & White Magic")
    personnageTerciaire.showCaracterStat();  

    let personnageQuarter = new monk("Aerith", "1000", "120", "Moine", "High PV / High Def")
    personnageQuarter.showCaracterStat();

    console.table(personnageTerciaire)

    console.log({
        nom: personnagePrincipal.nom,
        class: personnagePrincipal.titre,
    })

    // EXERCICE TERNAIRE
 // Exo 1 => bon
    let age = 25
    let acces = age >= 18 ? "Autorisé" : "Refusé"

    // Exo 2 Bon
    prenom = prompt("Quelle est votre prénom?");
    let verif = prenom =! "" ? prenom : "Aucun prénom saisi";
    console.log (verif);

    // Exo 3 Bon
    nbr = prompt ("Rentrez un nombre: ");
    pairImpair = nbr%2 == 0? "Pair": "Impair"
    console.log (pairImpair)

    // Exo 4 Bon
    nbrUser = prompt("Donnez une note entre 0 et 20 : ")
    grade = nbrUser >=16 ? "Excellent" : nbrUser >= 12 ? "Bien" : nbrUser >= 10 ? "Moyen" : "insuffisant";
    console.log(grade); 

    // Exo 5
    tableau = [-6, 45, 32, -72, 0, -23, 39];
    const positifNegatif = tableau.map((x) => x > 0 ? "+" : x < 0 ? "-" : "0" );
    console.log(positifNegatif);
    // map parcours le tableau et crée un nouveau tableau
    
    // ------------- Debut pas bon
    // for (i = 0; i <= tableau.length; i++){
    //     positifNegatif = tableau[i] > 0 ? tableau.map("+") :tableau[i] < 0 ? tableau.map("-") : tableau.map(0);
    // }
    // console.log(positifNegatif);
    // positifNegatif = tableau.map > 0 ? tableau.map("+") :tableau[i] < 0 ? tableau.map("-") : tableau.map(0);
    // console.log(positifNegatif);

    // const array = [1, 4, 9, 16];
    // const mapped = tableau.map((x) => x > 0 ? "+" : x < 0 ? "-" : "0" ) : tableau[i] < 0 ? tableau.map((x) => "-") : tableau.map ((x) => 0); 
    // console.log(mapped);

    // for (const element of tableau) {
    //     array.forEach(tableau.map()=> {
    //         console.log(element)
    //     });
    //     tableau.map> 0 ? tableau.map((x) => "+") : tableau[i] < 0 ? tableau.map((x) => "-") : tableau.map ((x) => 0); 
    // }
    // -------- FIN PAS BON

// -------------------- EXERCICE TERNAIRE => Filtrer  EXERCICE 6 BON
 
    tableau = [-6, 30, 45, 32, -72, 0, -23, 39];
    tableauPair = tableau.filter((x) =>  x%2 == false);
    console.log(tableauPair);

    // Tentative pas bonne
    // let tableauFiltrer=[];
    // for (i = 0; i <= tableau.length; i++){
    //     tableauFiltrer = tableau[i]%2 == 0 ? tableauFiltrer.push(tableau[i]) : "";
    //     console.log(tableauFiltrer);
    // }
    // tableauFiltrer = tableau.filter((x) => tableau[x]%2 == 0 ? "pair" : "impair" );
    // console.log(tableauFiltrer);

    // fin tentative pas bonne

// ----------- Exercice 7 BON

    tableau = ["papepipopu", "babe", "caceci", "dad", "crabe", "tatetito", "melon", "fa", "gageg", "lalelilolu"];    
    motLong = tableau.filter((motDuTableau) => motDuTableau.length == 5 ? true:false);
    console.log(motLong);

// -------------- EXERCICE 8 bon
let personnes = [
    {nom : "Alice", age: 22}
    {nom : "Marc", age: 65}
    {nom : "Adrien", age: 15}
    {nom : "Harris", age: 38}
];
majeures = personnes.filter(personneVise => personneVise.age >= 18 ? true : false)
console.log(majeures)

// exercice 9 REDUCE bon

    tableau = [-6, 30, 45, 32, -72, 0, -23, 39];
    valeurInitiale = 0;
    let sommeTotale = tableau.reduce( (accumulateur, currentValue) => accumulateur + currentValue, valeurInitiale,
);

console.log(sommeTotale)

// exercice 10 REDUCE bon
    tableau = [3, 4, 2, 4];
    valeurInitiale = 1;
    let produitTotal = tableau.reduce( (accumulateur, currentValue) => accumulateur * currentValue, valeurInitiale,
);
    console.log(produitTotal)

 // EXERCICE 11
    // tentative pas bonne
    //  tableau = ['k', 'a', 'y', 'a', 'k'];
    // motUser = prompt("Rentrez un mot")
    // motUser = motUser.split("")
    // console.log(motUser)
    // valeurInitiale = 0;
    // let nbrVoyelle = motUser.reduce( (accumulateur, currentValue) => currentValue == "a" || currentValue == "e" ||currentValue == "i" ||currentValue == "o" ||currentValue == "u" ||currentValue == "y"? accumulateur++ : console.log("capte pas"), valeurInitiale); 
    // console.log(nbrVoyelle)
    // // fin tentative 11 pas bon

    //exo 11 bon
    motUser = prompt("Rentrez un mot")
    const voyelles = "aeiouy"
    let nbrVoyelle = motUser.split("").reduce((compteur, lettre) => voyelles.includes(lettre) ? compteur + 1 : compteur, 0); 
    //includes prend chaque caractère de la variable indépendemment (chaque lettre de la variable séparement)
    console.log(nbrVoyelle)
    // fin exo 11 bon