var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;

window.onload = init;

function init(){
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  return cara;
}

function jugar(){
 let suerte1 = tirardado(dado1);
 let suerte2 = tirardado(dado2);
 let suerte3 = suerte1 + suerte2

  

  console.log("suerte 1: "+suerte1);
  console.log("Suerte 2: "+suerte2);

  if(suerte3 == 7 || suerte3 == 11)
  {

  alert("Ganaste la partida");
  
  }
}