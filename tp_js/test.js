function test_age(){
    let age = prompt("quelle est votre age ? ");
    if (age<18)
       {

            Document.write("attention accés refusé, vous étes mineurs");
            document.body.style.background ="red";
       }
       else
       {
            document.write("ok, vous étes majeurs");
            document.body.style.background ="green";
       }
}






function test_couleur() {
     let couleur = prompt("donner une couleur")
     if (couleur == "rouge") {
          document.body.style.background ="red";
     }
     else if (couleur == "bleu") {
          document.body.style.background ="blue";
     }
     else if (couleur == "vert") {
          document.body.style.background ="green";
     }
     else{
          document.write("couleur non comprise");
     }

}






function affichage(){
     let prenom = prompt("saisir votre prenom");
     let nom = prompt("saisir votre nom");
     document.write ("<div style='background-color: grey; border:5px solid blue; width:400px; heigth:300px; margin:auto; font-size:2em;'>");
     document.write ("bonjour     "+ prenom + "   " + nom);
     document.write ("</div>");
}




function calcul_moyenne() {
     var n1 = prompt("donner la premiére note :");
     var n2 = prompt("donner la deuxiéme note :");
     var n3 = prompt("donner la troisiéme note :");

     var somme = Number(n1) + Number(n2)  + Number(n3);

     document.write("voici la somme : " + somme + "<br>");
     var moyenne = somme/3;
     let moyenneformatee = moyenne.toFixed(2);

     document.write("voici la moyenne : " + moyenneformatee+ "<br>");

     if (moyenne<10)
          document.write("refusé");

     else if (moyenne<14)
          document.write("Passable");

     else if(moyenne>14)
          document.write("Admis bien");


     
}