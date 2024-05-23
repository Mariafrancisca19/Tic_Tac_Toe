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
