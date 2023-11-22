/*
1- Crea una web con bootstrap y js, 
que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio 
que el usuario deberá adivinar, la interfaz 
del usuario debe tener además un input para
ingresar un número y un botón enviar, al presionar 
el botón enviar mostrar en un alert si el usuario 
adivino o no el número mágico, si no lo adivino 
indicarle con un alert si el numero que ingreso 
es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar 
un mensaje indicando al usuario que adivino el numero.
*/

let d = document;
let btnStart = d.querySelector('.btnStart')


let randomNumber = (number) => {
    return Math.floor(Math.random() * number)
}

let startGame = (random) => {
    let showDiv = d.getElementById('showDom')
    let inputUser = d.querySelector('.inputUser')
    let sendBtn = d.querySelector('.sendBtn')

    showDiv.classList.remove('showBlock')

    sendBtn.addEventListener('click',(e) => {
        console.log(random)
        if(random === parseInt(inputUser.value)){
            alert('Adivinaste!!')
        }else{
            if(parseInt(inputUser.value) <= random){
                alert('El numero tiene que ser mas mayor!!')
            }else{
                alert('EL numero tiene que ser un poco menos')
            }
        }
    })

}

d.addEventListener('click',(e)=>{
    if(e.target === btnStart){
        let random = randomNumber(5)
        console.log(random)
        startGame(random)
    }
})


