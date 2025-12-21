
// dark mode
const darkMode =()=>{

    document.body.classList.toggle('dark')
    
}

let btnDrk = document.querySelector('#d_switch')
btnDrk.addEventListener('click',darkMode)

// dark mode end script

// llamada a la Api 

// Creamos un divCard y dentro, pintamos el resto de datos
 // Para ello, con un bucle for, cada elemento es una divcard que tiene dentro nom e img 


url = `https://rickandmortyapi.com/api/character/`

fetch(url)
    .then( response => response.json())
    .then( data => {


        // divcard por cada personaje
        data.results.forEach(element => {
            
        
        let divCard = document.createElement('div')
        divCard.classList.add('card')

        divCard.innerHTML =`
        <h1> ${element.name} </h1>
       
        <img src="${element.image}" />
        
        `
    document.getElementById('cards').appendChild(divCard)

            });
    })
    .catch(error => {console.log(error)})








