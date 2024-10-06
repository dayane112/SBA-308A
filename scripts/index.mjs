import { catStyle } from './functions.mjs';

const catFactsBtn = document.getElementById('catFactsBtn');
const catFacts = document.getElementById('catFacts');


catFactsBtn.addEventListener("click", newFacts);

async function newFacts() {

    const res = await fetch(`https://meowfacts.herokuapp.com/`);

    const catData = await res.json();
    const catFact = catData.data[0];

    catFacts.textContent = catFact;

}

newFacts();
catStyle();



