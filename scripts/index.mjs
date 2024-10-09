import { catStyle } from './functions.mjs';
import { clearBtnColor } from './clear.mjs';

const catFactsBtn = document.getElementById('catFactsBtn');
const catFacts = document.getElementById('catFacts');


catStyle();
clearBtnColor();

catFactsBtn.addEventListener("click", newFacts);

async function newFacts() {

    try {
        const res = await fetch(`https://meowfacts.herokuapp.com/`);

        const catData = await res.json();
        const catFact = catData.data[0];

        catFacts.textContent = catFact;
    } catch (err) {
        console.error(err)
    }
}

newFacts();


const API_KEY =
"live_3tm6wGYgWRibyHMgEMod66VwmSA89WGslpWnjuCMLVR2XqCl2D7mZhbwnT6nd7Zq";

const random = document.getElementById('random');
random.addEventListener("click", getRandom);

async function getRandom() {

    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?${API_KEY}`);
        const cats = await res.json();

        const url = cats[0].url;
        random.src = url;
    } catch (err) {
        console.log(err)
    }
}

getRandom();



const dogAPI_KEY = "live_Deylhs5WaFb8i4FuZMtyhvaC14U3aClvwyIp5NgLLc1cnv7r7gYRUoZdlRPDKllJ";


const dogRandom = document.getElementById('dogRandom');
dogRandom.addEventListener("click", getRandomDog);

async function getRandomDog() {

    try {
        const responds = await fetch(`https://api.thedogapi.com/v1/images/search?${dogAPI_KEY}`);
        const dogs = await responds.json();

        const url = dogs[0].url;
        dogRandom.src = url;
    } catch (err) {
        console.log(err)
    }
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



let buttonColor = document.getElementById('buttonColor');
buttonColor.addEventListener('click', function(e) {
    e.preventDefault();
    buttonColor.style.color = 'white';
    buttonColor.style.backgroundColor = '#83a2c5';
});
