// Fonction permettant d'afficher ou de masquer un élément spécifique basé sur un type donné (1 ou 2).
function afficherContenu(type) {
    // Selon le type, on récupère l'élément à afficher ou masquer (ex1resultat ou ex1code)
    if (type === 1) {
        var contenu = document.getElementById('ex1resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex1code');
    }
    
    // Vérification de l'état d'affichage actuel (affiché ou masqué) et bascule l'état
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction qui fait la même chose que la fonction précédente, mais pour un autre type d'éléments (ex2resultat ou ex2code).
function afficherContenu2(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex2resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex2code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction qui affiche ou masque les éléments 'ex3resultat' ou 'ex3code' en fonction du type passé en paramètre.
function afficherContenu3(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex3resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex3code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction générique pour afficher ou masquer le contenu pour 'ex4resultat' ou 'ex4code' en fonction du type.
function afficherContenu4(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex4resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex4code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer le contenu pour 'ex5resultat' ou 'ex5code'.
function afficherContenu5(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex5resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex5code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex6resultat' ou 'ex6code' selon le type passé en paramètre.
function afficherContenu6(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex6resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex6code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex7resultat' ou 'ex7code' selon le type.
function afficherContenu7(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex7resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex7code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex8resultat' ou 'ex8code' en fonction du type passé.
function afficherContenu8(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex8resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex8code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction permettant d'afficher ou de masquer 'ex9resultat' ou 'ex9code' selon le type passé.
function afficherContenu9(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex9resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex9code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex10resultat' ou 'ex10code' selon le type spécifié.
function afficherContenu10(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex10resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex10code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction qui affiche ou masque 'ex11resultat' ou 'ex11code' en fonction du type passé en paramètre.
function afficherContenu11(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex11resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex11code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex12resultat' ou 'ex12code' selon le type spécifié.
function afficherContenu12(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex12resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex12code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex13resultat' ou 'ex13code' selon le type.
function afficherContenu13(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex13resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex13code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex14resultat' ou 'ex14code' selon le type.
function afficherContenu14(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex14resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex14code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction pour afficher ou masquer 'ex15resultat' ou 'ex15code' selon le type.
function afficherContenu15(type) {
    if (type === 1) {
        var contenu = document.getElementById('ex15resultat');
    } else if (type === 2) {
        var contenu = document.getElementById('ex15code');
    }
    if (contenu.style.display === "none") {
        contenu.style.display = "block"; // Affiche le contenu
    } else {
        contenu.style.display = "none"; // Masque le contenu
    }
}

// Fonction qui demande à l'utilisateur son âge et vérifie s'il est mineur ou majeur
function test_age(){
    let age = prompt("quelle est votre age ? ");
    if (age<18)
       {

            document.write("attention accés refusé, vous étes mineurs");
            document.body.style.background ="red";
       }
       else
       {
            document.write("ok, vous étes majeurs");
            document.body.style.background ="green";
       }
}

function additionner() {
    // Demande les deux nombres à l'utilisateur
    let num1 = parseFloat(prompt("Entrez le premier nombre :"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));

    // Vérifie si les saisies sont valides
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat").innerText = "Veuillez entrer des nombres valides.";
        return;
    }

    // Calcule la somme
    let somme = num1 + num2;

    // Affiche le résultat
    document.getElementById("resultat").innerText = "Résultat : " + somme;
}

function multiplier() {
    // Demande les deux nombres à l'utilisateur
    let num1 = parseFloat(prompt("Entrez le premier nombre :"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));

    // Vérifie si les saisies sont valides
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat1").innerText = "Veuillez entrer des nombres valides.";
        return;
    }

    // Calcule le produit
    let produit = num1 * num2;

    // Affiche le résultat
    document.getElementById("resultat1").innerText = "Résultat : " + produit;
}

function diviser() {
    // Demande les deux nombres à l'utilisateur
    let num1 = parseFloat(prompt("Entrez le premier nombre (dividende) :"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre (diviseur) :"));

    // Vérifie si les saisies sont valides
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat2").innerText = "Veuillez entrer des nombres valides.";
        return;
    }

    // Vérifie que le diviseur n'est pas zéro
    if (num2 === 0) {
        document.getElementById("resultat2").innerText = "La division par zéro est impossible.";
        return;
    }

    // Calcule le quotient
    let quotient = num1 / num2;

    // Affiche le résultat
    document.getElementById("resultat2").innerText = "Résultat : " + quotient;
}

function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function verifierPairImpair() {
    // Demande un nombre à l'utilisateur
    let nombre = parseInt(prompt("Entrez un nombre :"));

    // Vérifie si la saisie est un nombre valide
    if (isNaN(nombre)) {
        document.getElementById("resultat3").innerText = "Veuillez entrer un nombre valide.";
        return;
    }

    // Vérifie si le nombre est pair ou impair
    if (nombre % 2 === 0) {
        document.getElementById("resultat3").innerText = "Le nombre " + nombre + " est pair.";
    } else {
        document.getElementById("resultat3").innerText = "Le nombre " + nombre + " est impair.";
    }
}

function trouverMax() {
    // Demande trois nombres à l'utilisateur
    let num1 = parseFloat(prompt("Entrez le premier nombre :"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let num3 = parseFloat(prompt("Entrez le troisième nombre :"));

    // Vérifie si les saisies sont valides
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultat4").innerText = "Veuillez entrer trois nombres valides.";
        return;
    }

    // Trouve le plus grand nombre
    let max = Math.max(num1, num2, num3);

    // Affiche le résultat
    document.getElementById("resultat4").innerText = 
        "Le plus grand des nombres est : " + max;
}

function calculerMoyenne() {
    let total = 0; // Somme des nombres
    let count = 0; // Nombre de nombres saisis
    let continuer = true;

    while (continuer) {
        // Demande un nombre à l'utilisateur
        let input = prompt("Entrez un nombre (ou cliquez sur Annuler pour terminer) :");

        // Vérifie si l'utilisateur veut arrêter
        if (input === null) {
            continuer = false;
        } else {
            let nombre = parseFloat(input);

            // Vérifie si l'entrée est un nombre valide
            if (isNaN(nombre)) {
                alert("Veuillez entrer un nombre valide !");
            } else {
                total += nombre;
                count++;
            }
        }
    }

    // Vérifie si au moins un nombre a été saisi
    if (count > 0) {
        let moyenne = total / count; // Calcule la moyenne
        document.getElementById("resultat5").innerText = 
            "La moyenne des nombres est : " + moyenne.toFixed(2);
    } else {
        document.getElementById("resultat5").innerText = 
            "Aucun nombre n'a été saisi.";
    }
}

function devinerNombre() {
    // Génére un nombre aléatoire entre 1 et 100
    const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
    let tentative = 0;
    let trouve = false;

    alert("Un nombre entre 1 et 100 a été généré. Essayez de le deviner !");

    while (!trouve) {
        // Demande un nombre à l'utilisateur
        let saisie = prompt("Entrez votre estimation :");
        tentative++;

        // Vérifie si la saisie est un nombre
        if (isNaN(saisie)) {
            alert("Veuillez entrer un nombre valide.");
            continue;
        }

        // Convertir la saisie en entier
        let nombre = parseInt(saisie);

        // Vérifie si la saisie correspond au nombre généré
        if (nombre === nombreAleatoire) {
            alert(`🎉 Félicitations ! Vous avez trouvé le nombre ${nombreAleatoire} en ${tentative} tentatives.`);
            trouve = true;
        } else if (nombre < nombreAleatoire) {
            alert("C'est plus !");
        } else {
            alert("C'est moins !");
        }
    }
}

function inverserChaine() {
    let chaine = prompt("Entrez une chaîne de caractères :");
    let chaineInversee = chaine.split("").reverse().join("");
    alert(`La chaîne inversée est : ${chaineInversee}`);
}

function trouverMin() {
    let num1 = parseFloat(prompt("Entrez le premier nombre :"));
    let num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let num3 = parseFloat(prompt("Entrez le troisième nombre :"));

    let min = Math.min(num1, num2, num3);
    alert(`Le plus petit nombre est : ${min}`);
}

function analyserNombres() {
    // Demande les trois nombres
    const num1 = parseFloat(prompt("✨ Entrez le premier nombre :"));
    const num2 = parseFloat(prompt("✨ Entrez le deuxième nombre :"));
    const num3 = parseFloat(prompt("✨ Entrez le troisième nombre :"));

    // Vérifie si les entrées sont valides
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("❌ Erreur : veuillez entrer uniquement des nombres valides. 🚫");
        return; // Arrête la fonction en cas d'erreur
    }

    // Calcule le maximum, la somme et la moyenne
    const max = Math.max(num1, num2, num3);
    const sum = num1 + num2 + num3;
    const average = sum / 3;

    // Affiche les résultats dans une alerte
    alert(
        `🎉 Résultats :
        - 🌟 Le plus grand nombre est : ${max}
        - ➕ La somme des nombres est : ${sum}
        - 📊 La moyenne est : ${average.toFixed(2)}`
    );
}

function nombreAleatoire() {
    // Demande les limites
    const min = parseInt(prompt("🔢 Entrez la valeur minimale :"));
    const max = parseInt(prompt("🔢 Entrez la valeur maximale :"));

    // Vérifie les entrées
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("❌ Erreur : veuillez entrer deux nombres valides avec min < max.");
        return;
    }

    // Génére un nombre aléatoire entre min et max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Affiche le résultat
    alert(`🎲 Nombre aléatoire généré entre ${min} et ${max} : ${randomNumber}`);
}

function calculCarreCube() {
    const num = parseFloat(prompt("💡 Entrez un nombre :"));

    if (isNaN(num)) {
        alert("❌ Oups ! Ce n'est pas un nombre valide. 🚫");
        return;
    }

    const square = num ** 2; // Calcul du carré
    const cube = num ** 3;   // Calcul du cube

    alert(`📐 Résultats :
    - Carré de ${num} : ${square}
    - Cube de ${num} : ${cube}`);
}

function afficherPoints() {
    // Demande combien de points afficher
    const nombre = parseInt(prompt("🔢 Combien de points voulez-vous afficher ?"));

    // Vérifie si l'entrée est valide
    if (isNaN(nombre) || nombre <= 0) {
        alert("❌ Veuillez entrer un nombre valide supérieur à 0.");
        return;
    }

    // Générer les points
    let resultat = "";
    for (let i = 0; i < nombre; i++) {
        resultat += "• "; // Point stylisé (ou remplace par ⭐ pour des étoiles)
    }

    // Afficher le résultat
    alert(`Voici vos ${nombre} points :\n\n${resultat}`);
}