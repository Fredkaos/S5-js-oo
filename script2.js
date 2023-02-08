function afficher() {
    let panier = sessionStorage.getItem("Panier");
    paragraphe = document.createElement('p');
    paragraphe.innerText = JSON.parse(panier);
    document.getElementById("resultat").append(paragraphe);
}