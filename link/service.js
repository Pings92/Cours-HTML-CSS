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

document.getElementById("resultBox").value =