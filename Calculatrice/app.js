const info = document.querySelector(".calculatrices");
const afficheur = document.querySelector("#afficheur");
const boutons = document.querySelectorAll('input[type="button"]');

function val(resultat){
    afficheur.value = afficheur.value + resultat;
}

    function calcule(){
    if (afficheur.value == "") {
        info.innerHTML = "Entrez un calcul";
    } else {
        try {

            let expression = afficheur.value.replace(/√/g, 'sqrt(');
            
            // Compter le nombre de parenthèses ouvrantes et fermantes
            let openParentheses = (expression.match(/\(/g) || []).length;
            let closeParentheses = (expression.match(/\)/g) || []).length;

            for (let i = 0; i < openParentheses - closeParentheses; i++) {
                expression += ')';
            }
            info.innerHTML = "";
            afficheur.value = math.evaluate(expression);     
        } catch (error) {
            info.innerHTML = `Erreur: ${error.message}`;
        }
    }
    }