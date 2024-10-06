import { catStyle } from './functions.mjs';

const catFactsBtn = document.getElementById('catFactsBtn');
const catFacts = document.getElementById('catFacts');

catStyle();

catFactsBtn.addEventListener("click", newFacts);

async function newFacts() {

    const res = await fetch(`https://meowfacts.herokuapp.com/`);

    const catData = await res.json();
    const catFact = catData.data[0];

    catFacts.textContent = catFact;
}

newFacts();








// imgElement.src = dogSprite
//     imgElement.style.display = "block";
//     console.log(data)




// const API_KEY = '96b4e841-aadd-460e-bbc6-631debc5d067';

// //async and await
// searchBtn()
// async function searchBtn() {

//     try {
        


//         const response = await fetch(`curl -XGET https://api.harvardartmuseums.org/object?apikey=${API_KEY}`, { headers: { "x-api-key": API_KEY } })
//         if (!response.ok) {
//             throw new Error("Could not retrieve resource");
//         }
//         const data =  await response.json();
//         console.log(data)

//         const imgOfTheDay = data.url;
//         const imgElement = document.getElementById("mainPg");

//         imgElement.src = imgOfTheDay;
//         imgElement.style.display="block";

//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// //Fetch practice
// fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not retrieve resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));






// let dogSearch = document.getElementById('dogSearch');

// const imgElement = document.getElementById('dogSprite');

// const API_KEY = "live_Deylhs5WaFb8i4FuZMtyhvaC14U3aClvwyIp5NgLLc1cnv7r7gYRUoZdlRPDKllJ";


// (async function dogAPI() {
//     let res = await fetch(`https://api.thedogapi.com/v1/breeds`)
    
//     let array = await res.json();
//     console.log(array)
//     let breedTypes = array.message;
//     console.log(breedTypes);

//     breeds.forEach((breed) => {
//       let options = document.createElement("option");
//       options.value = breed.id;
//       options.textContent = breed.name;
//       breedSelect.appendChild(options);
//     })
//     // console.log(dogSearch);
  
// })()

// async function searchBtn(e) {

//     const breedID = dogSearch.value;
//     let res = await fetch(`https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=${breedID}&api_key=${API_KEY}`);

//     const data = await res.json();
//     const dogSprite = data[0].url;

//     imgElement.src = dogSprite
//     imgElement.style.display = "block";
//     console.log(data)

// }
// document.getElementById('searchBtn').addEventListener('click', searchBtn);


// const API_KEY = "live_Deylhs5WaFb8i4FuZMtyhvaC14U3aClvwyIp5NgLLc1cnv7r7gYRUoZdlRPDKllJ";

// (async function initialLoad() {
//     let res = await fetch(`https://api.thedogapi.com/v1/breeds`, { headers: { "x-api-key": API_KEY } })
//     let breedTypes = await res.json()
//     console.log(breedTypes);

//     breedTypes.forEach((breedType) => {
//       let options = document.createElement("option");
//       options.value = breedType.id;
    
//       options.textContent = breedType.name;
//       dogSearch.appendChild(options);
//     })
//     console.log(dogSearch);
  
//   })()

// async function searchBtn() {

//     const breedID = e.target.value;
//     let res = await fetch(`https://api.thedogapi.com/v1/breeds`);

//     const data = await res.json();
//     const dogSprite = data.sprites.font_default;

//     imgElement.src = dogSprite
//     imgElement.style.display = "block";
//     console.log(data)

// }

    // Object.keys(breedTypes).forEach((breedType) => {
    //     console.log(breedType);
    //   let options = document.createElement("option");
    //   options.value = breedType.id;
    
    //   options.textContent = breedType.name;
    //   dogSearch.appendChild(options).value.toLowerCase();
    // })
    // console.log(dogSearch);