let btnFacture = document.getElementById("btnFacture");
let formulaire = document.getElementById("formulaire");
let closeForm = document.getElementById("closeForm");
let addFacture = document.getElementById("addFacture");

let table = document.getElementById("tableFactures");

let btnParam = document.getElementById("btnParam");
let paramSection = document.getElementById("parametres");

let btnSave = document.getElementById("btnSave");

let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");


btnFacture.onclick = function(){
formulaire.style.display = "block";
}

closeForm.onclick = function(){
formulaire.style.display = "none";
}


addFacture.onclick = function(){

let client = document.getElementById("client").value;
let projet = document.getElementById("projet").value;
let montant = document.getElementById("montant").value;
let date = document.getElementById("date").value;

let row = table.insertRow();

row.insertCell(0).innerHTML = client;
row.insertCell(1).innerHTML = projet;
row.insertCell(2).innerHTML = montant + " €";
row.insertCell(3).innerHTML = date;
row.insertCell(4).innerHTML = "En attente";

formulaire.style.display = "none";
}


btnParam.onclick = function(){

if(paramSection.style.display === "block"){
paramSection.style.display = "none";
}else{
paramSection.style.display = "block";
}

}


btnSave.onclick = function(){

let entreprise = document.getElementById("entreprise").value;
let devise = document.getElementById("devise").value;

localStorage.setItem("entreprise", entreprise);
localStorage.setItem("devise", devise);

document.getElementById("nomEntreprise").innerText = entreprise;

alert("Paramètres sauvegardés");

}


loginBtn.onclick = function(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "admin@fairpay.com" && password === "1234"){

localStorage.setItem("login", "true");

alert("Connexion réussie");

}else{

alert("Identifiants incorrects");

}

}


logoutBtn.onclick = function(){

localStorage.removeItem("login");
alert("Déconnecté");

}


window.onload = function(){

let entreprise = localStorage.getItem("entreprise");

if(entreprise){
document.getElementById("entreprise").value = entreprise;
document.getElementById("nomEntreprise").innerText = entreprise;
}

}
