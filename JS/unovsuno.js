let again = document.getElementById("again")
let cuadricula = document.getElementById("cuadricula")
let cuadros = cuadricula.children   

let turnoActual=document.getElementById("turno")

/*limpair*/
again.addEventListener("click",function () {
    limpiar(cuadros)
})


for (const cuadro of cuadros) {
    cuadro.addEventListener("click",function () {
        cuadro.innerHTML= turnoActual.innerHTML
        turno.innerHTML=siquienteTurno()

    })
    
}

function siquienteTurno() {
    let turnoSiguiente=turno.innerHTML

var resultado
 
if (turnoSiguiente=="⭕") {
    resultado="❌"

} else{
resultado ="⭕"

}

return resultado

}


function limpiar (elementos) {
    for (let index = 0; index < elementos.length; index++) {  /* igual que el for of*/
        const elemento = elementos[index];
        elemento.innerHTML=""
    }
}
