import { catStyle } from './functions.mjs';
import { clearBtnColor } from './clear.mjs';

const catFactsBtn = document.getElementById('catFactsBtn');
const catFacts = document.getElementById('catFacts');


catStyle();
clearBtnColor();

catFactsBtn.addEventListener("click", newFacts);

async function newFacts() {

    const res = await fetch(`https://meowfacts.herokuapp.com/`);

    const catData = await res.json();
    const catFact = catData.data[0];

    catFacts.textContent = catFact;
}

newFacts();


const API_KEY =
"live_3tm6wGYgWRibyHMgEMod66VwmSA89WGslpWnjuCMLVR2XqCl2D7mZhbwnT6nd7Zq";

const random = document.getElementById('random');
random.addEventListener("click", getRandom);

async function getRandom() {

    const res = await fetch(`https://api.thecatapi.com/v1/images/search?${API_KEY}`);
    const cats = await res.json();

    const url = cats[0].url;
    random.src = url;
}

getRandom();



const dogAPI_KEY = "live_Deylhs5WaFb8i4FuZMtyhvaC14U3aClvwyIp5NgLLc1cnv7r7gYRUoZdlRPDKllJ";


const dogRandom = document.getElementById('dogRandom');
dogRandom.addEventListener("click", getRandomDog);

async function getRandomDog() {

    const responds = await fetch(`https://api.thedogapi.com/v1/images/search?${dogAPI_KEY}`);
    const dogs = await responds.json();

    const url = dogs[0].url;
    dogRandom.src = url;
}

getRandomDog();








    // Object.keys(breedTypes).forEach((breedType) => {
    //     console.log(breedType);
    //   let options = document.createElement("option");
    //   options.value = breedType.id;
    
    //   options.textContent = breedType.name;
    //   dogSearch.appendChild(options).value.toLowerCase();
    // })
    // console.log(dogSearch);