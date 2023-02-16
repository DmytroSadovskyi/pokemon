
const typrColor = {
bug: "#26de81",
dragon: "#ffeaa7", 
electric: "#fed330", 
fairy: "#FF0069" ,
fighting: "#30336b",
fire: "#f0932b", 
flying: "#8lecec",
grass: "#00b894",
ground: "#EFB549", 
ghost: "#a55eea",
ice: "#7469ff",
normal: "#95afco",
 poison: "#6c5ce7",
psychic: "#a29bfe",
rock: "#2d3436",
water: "#0199FF",
}
const url = 'https://pokeapi.co/api/v2/pokemon/';
const card = document.querySelector('.card');
const btn = document.querySelector('.generate');



const getPokemonData = () => {

    const id = Math.floor(Math.random() * 150) + 1
    const finalUrl = url + id;
    fetch(finalUrl).then(response => response.json()).then((data) => generateCard(data))

};

const generateCard = (data) => {


    
    card.innerHTML =

        ` <p class="hp"><span>HP</span> ${data.stats[0].base_stat}</p>
            <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name} image">
            <h1 class="pokemon-name">${data.name}</h1>
            <div class="types">
            
            </div>
            <div class="stats">
                <div>
                    <h2>${data.stats[1].base_stat}</h2>
                    <p>Attack</p>
                </div>
                <div>
                    <h2>${data.stats[2].base_stat}</h2>
                    <p>Defense</p>
                </div>
                <div>
                    <h2>${data.stats[5].base_stat}</h2>
                    <p>Speed</p>
                </div> `;
    appendTypes(data.types);
  
}

const appendTypes = (types) => {
    types.forEach((item) => {
 
        const span = document.createElement('span')
        span.textContent = item.type.name;
        document.querySelector('.types').appendChild(span);



    })
}
    

btn.addEventListener('click', getPokemonData);
window.addEventListener('load', getPokemonData)