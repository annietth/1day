const button = document.querySelector('.button');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

button.addEventListener('click', (e) => {
    e.preventDefault();

    for(i = 1; i < toutesLesQuestions.length; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
})

function verifFunc(tabResultats) {

    for(let a = 0; a < toutesLesQuestions.length; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    console.log(verifTableau);
    verifTableau = [];
}