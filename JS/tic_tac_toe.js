let casilla1= document.getElementById("cero")
let casilla2= document.getElementById("uno")
let casilla3= document.getElementById("dos")
let casilla4= document.getElementById("tres")
let casilla5= document.getElementById("cuatro")
let casilla6= document.getElementById("cinco")
let casilla7= document.getElementById("seis")
let casilla8= document.getElementById("siete")
let casilla9= document.getElementById("ocho") 
/*jugador uno*/
let arreglo=[casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8,casilla9]

arreglo.forEach(element => element.addEventListener("click",function(){
    element.innerHTML="❌"
    juegoAleatorio()             
}))


/* posiciones ganadoras*/
 
const victoria= ()=>{
    const posicionGanadora=

        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]




}




/*maquina , jugador 2*/
function juegoAleatorio() {
  let casillasVacias = arreglo.filter(texto=>texto.innerHTML=="")
  let numRandom = Math.floor(Math.random() * casillasVacias.length)
    casillasVacias[numRandom].innerHTML="⭕"
}

/*programacion de los botones de inicio , reiniciar la partida*/
let iniciar=document.getElementById("inicio")    /*boton iniciar*/
let reiniciar=document.getElementById("again")   /*boton reiniciar*/


iniciar.addEventListener("click", function (e) {
  e.preventDefault
})


reiniciar.addEventListener("click",function (e) {
  e.preventDefault
})






















//let cuadrados = document.querySelectorAll(".cuadro"); /*contenedor de todos las casillas*/
//let turn="❌"
//let finJuego=false


//cuadrados.forEach(e =>{
  //  e.innerHTML=" "
    //e.addEventListener("click",()=> {
      //  if (!finJuego && e.innerHTML ==="") {
        //  e.innerHTML = turn;  
    //    }
   // })
    

 //})



/*const espaciosVacios = boxArray.filter(box => box.innerHTML === "");
    const randomIndex = Math.floor(Math.random() * espaciosVacios.length);
    espaciosVacios[randomIndex].innerHTML = "⭕";*/



/*let flag=false
                      profe
while (!flag)
  while(flag ==false)

    */




// let iniciar=document.getElementById("inicio")  /*boton iniciar*/
// let volverajugar=document.getElementById("again")   /*reiniciar*/

// let cuadrados = document.querySelectorAll(".cuadro"); /*contenedor de todos las casillas*/
// const x = '❌'
// const o = '⭕'
// let turno = 'jugador1'

// cuadrados.forEach((cuadros,i)=>{
//     cuadros.addEventListener('click', () => {
//         //console.log(cuadros,i)
//     cuadros.innerText = turno === 'jugador1'? x : o;
//     turno = turno === 'jugador1'? 'pancha': 'jugador1';
//     console.log(cuadros)
        

//     })
// })


// inicio.addEventListener("click", function (e) {
//     e.preventDefault
// })
// again.addEventListener("click",function (e) {
//     e.preventDefault
// })


// function chequeo(a,b,c) {

//     if (cuadro[a].innerHTML.length&&cuadro[a].innerHTML==cuadro[b].innerHTML&&cuadro[b].innerHTML==cuadro[c].innerHTML ) {
//         alert("winner")
//     }
    
// }


