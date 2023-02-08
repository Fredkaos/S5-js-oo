class fruits {
    constructor(item, prix, qte = 0, sousTotal = 0) {
        this.item = item;
        this.prix = prix;
        this.qte = qte;
        this.sousTotal = sousTotal;
    }
    toString() {
        return this.item + " " + this.prix;
    }
}
class Panier {
    constructor(peches, poires, pommes) {
        this.peches = peches;
        this.poires = poires;
        this.pommes = pommes;
    }
    toString() {
        return this.peches + "\n" + this.poires + "\n" + this.pommes;
    }
}
function Creerfruit() {
    peches = new fruits('peches', 10)
    poires = new fruits('poires', 12)
    pommes = new fruits('pommes', 11)
}
function ajout(choix) {
    if (choix === 'peches')
    {
        qte = document.getElementById("nbPeches").value;
        _prix = peches.prix;
        total = "totalpeches";
    }
    else if (choix === 'poires')
    {
        qte = document.getElementById("nbPoires").value;
        _prix = poires.prix;
        total = "totalpoires";
    }
    else
    {
        qte = document.getElementById("nbPommes").value;
        _prix = pommes.prix;
        total = "totalpommes";
    }
    let prix =  qte * _prix;
    document.getElementById(total).innerText = prix.toFixed(2) + "$";
    peches.sousTotal = parseInt(document.getElementById("totalpeches").innerText);
    poires.sousTotal = parseInt(document.getElementById("totalpoires").innerText);
    pommes.sousTotal = parseInt(document.getElementById("totalpommes").innerText);
    document.getElementById("total").innerText = (peches.sousTotal + poires.sousTotal + pommes.sousTotal).toFixed(2) + "$";

    let total1 = parseInt(document.getElementById("total").innerText);
    if (total1 < 20)
    {
        document.getElementById("erreur_mdp").setAttribute("class", "center error");
    }
    else
    {
        document.getElementById("erreur_mdp").setAttribute("class", "center invisible error");
    }
}
function envoyer() {
    let monPanier = new Panier(peches, poires, pommes)
    sessionStorage.setItem("Panier", monPanier)
    return true;
}
function afficher() {
    let panier = sessionStorage.getItem("Panier");
    paragraphe = document.createElement('p');
    paragraphe.innerText = JSON.parse(JSON.stringify(Panier));
    document.getElementById("resultat").append(paragraphe);
}