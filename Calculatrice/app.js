const premier = document.querySelector(".first");
const deuxieme = document.querySelector(".second");
const calculer = document.querySelector(".resultat");
const operationSelect = document.getElementById("operation");

// Écouteur d'événement sur le bouton résultat
calculer.addEventListener("click", calcule);

function calcule(e) {
  e.preventDefault();

  // Récupération des valeurs des champs input
  var un = parseFloat(premier.value);
  var deux = parseFloat(deuxieme.value);
  var result;

  // Récupération de l'opération sélectionnée dans le select
  var operation = operationSelect.value;
  
  switch (operation) {
    case "plus":
      result = un + deux;
      break;
    case "moins":
      result = un - deux;
      break;
    case "fois":
      result = un * deux;
      break;
    case "diviser":
      result = un / deux;
      break;
    default:
      result = "Opération invalide";
  }

  // Affichage du résultat dans l'élément resultat
  document.getElementById("resultats").innerText = result;
}
