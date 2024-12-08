function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var X=prompt("Combien de ligne?");
    document.write("<table border=2px width=30%");
    for(let i=0; i<=X-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>");
    }
    Document.write("</table>")
}

function cdc() {
    var chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLowerCase() + "<br>");
    document.write("La chaine contient " + chaine.length + " caractères.<br>");
    document.write("La première lettre est " + chaine.substr(0, 1) + ".<br>");
}

function seconnecter(){
    var login = prompt("Donnez votre nom d'utilisateur");
    var password = prompt("Entrez votre mot de passe");
    if (login == "admin" && password == "admin") 
      {document.write("Bienvenue : " + login);}
    else {
      alert("Accès refusé");
    }
}

function seconnecter2()
{window.location.href="identification.html"}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login == "admin" && password == "admin")
    {window.location.href="yes.html"}
    else {window.location.href="non.html"}
}

function annuler(){window.location.href="tp7.html"}

function seconnecter3(){
    i =0;
    do{
        var login=prompt("Donner votre nom d'utilisateur");
        var password=prompt("Entrer votre mot de passe");
        if (login=="admin" && password == "admin")
        {document.write("Bienvenue :"+login);break;}
        else {
            alert("accés refusé");i+=1;
        }
    }
    while(i<3)
    if (i==3) {alert("Délai dépassé")}
}

function ligne()
{window.location.href="ajout.html"}

function ajouterLigne() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if (a === "" || b === "") {
        alert("Un ou deux champs sont vides");
    } else if (Number(b) < 10 || Number(b) > 20) {
        alert("Âge invalide");
    } else {
        var table = document.getElementById("myTable");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = a;
        cell2.innerHTML = b;
    }
}

function bonus() {
    let ttc = 0;
    let continuer = "oui";

    while (continuer !== "non") {
        let article = prompt("Donnez un article");
        let prix = parseFloat(prompt("Le prix"));
        let quantite = parseInt(prompt("La quantité"), 10);
        let totalArticle = prix * quantite;

        if (quantite === 1) {
            alert(`Votre ${article} coûtera ${totalArticle}€`);
        } else {
            alert(`Vos ${article}s coûteront ${totalArticle}€`);
        }

        document.write(`Article : ${article}<br>`);
        document.write(`Prix : ${prix}€<br>`);
        document.write(`Quantité : ${quantite}<br>`);
        document.write(`Total : ${totalArticle}€<br><br>`);

        ttc += totalArticle;

        continuer = prompt("Continuer ? (oui/non)");
    }

    document.write(`Prix TTC : ${ttc}€`);
}