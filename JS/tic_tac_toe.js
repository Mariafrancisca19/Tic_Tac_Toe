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
if (element.innerHTML=="") {
  
  element.innerHTML="❌"
  if(!victoria() && !empate()){
  juegoAleatorio()
  }else if(victoria()){}
  else if(empate()){}         
}

}))



/*maquina , jugador 2*/
function juegoAleatorio() {
  let casillasVacias = arreglo.filter(texto=>texto.innerHTML=="")
  let numRandom = Math.floor(Math.random() * casillasVacias.length)
    casillasVacias[numRandom].innerHTML="⭕"
    
}


//guardar el ganador
let ganador

//posiciones ganadoras
let quienGano
function victoria(){
  // Todas las posibles posiciones ganadoras
  const posicionGanadoras=[
      [0,1,2], //ESTO SON FILAS 
      [3,4,5],
      [6,7,8], // HASTA AQUI
      [0,3,6], // ESTO SON COLUMNAS
      [1,4,7],
      [2,5,8], // HASTA AQUI
      [0,4,8], // Diagonales
      [2,4,6] // Diagonales
  ]
  // Un for para ir recorriendo cada posible ganador, en caso de haber uno devulve true 
  for (let combinaciones of posicionGanadoras) {
    [a,b,c] = combinaciones
    if (arreglo[a].innerHTML && arreglo[a].innerHTML == arreglo[b].innerHTML && arreglo[a].innerHTML==arreglo[c].innerHTML) {
      quienGano=arreglo[a].innerHTML
      console.log(quienGano);
      alert("FELICIDADES HAS GANADO 🥇")
      return true
    }  
  }
  return false
}


/*EMPATE*/

function empate() {
  let nadieGano = arreglo.filter(nadieGano=>nadieGano.innerHTML==="")
if (nadieGano.length==0) {
  alert ("EMPATE")
  return true
}
return false
}


/*programacion del boton reiniciar la partida*/

let reiniciar = document.getElementById("again")   /*boton reiniciar*/

reiniciar.addEventListener("click",function () {
  location.reload()
})

 /*sonido al perder x*/



