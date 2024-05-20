/*let casilla1= document.getElementById("uno")
let casilla2= document.getElementById("dos")
let casilla3= document.getElementById("tres")
let casilla4= document.getElementById("cuatro")
let casilla5= document.getElementById("cinco")
let casilla6= document.getElementById("seis")
let casilla7= document.getElementById("siete")
let casilla8= document.getElementById("ocho")
let casilla9= document.getElementById("nueve")*/
 
let iniciar=document.getElementById("inicio")  /*boton iniciar*/
let volverajugar=document.getElementById("again")   /*reiniciar*/

let cuadrados = document.querySelectorAll(".cuadro"); /*contenedor de todos las casillas*/
const x = '❌'
const o = '⭕'
let turno = 'jugador1'

cuadrados.forEach((cuadros,i)=>{
    cuadros.addEventListener('click', () => {
        //console.log(cuadros,i)
    cuadros.innerText = turno === 'jugador1'? x : o;
    turno = turno === 'jugador1'? 'pancha': 'jugador1';
    console.log(cuadros)
        

    })
})


inicio.addEventListener("click", function (e) {
    e.preventDefault
})
again.addEventListener("click",function (e) {
    e.preventDefault
})


function chequeo(a,b,c) {

    if (cuadro[a].innerHTML.length&&cuadro[a].innerHTML==cuadro[b].innerHTML&&cuadro[b].innerHTML==cuadro[c].innerHTML ) {
        alert("winner")
    }
    
}


