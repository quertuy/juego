var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar, puntos, contadorPuntos, intentos;

window.onload = init;


function init(){

  contadorPuntos = 0
  intentos = 0;
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  puntos = document.getElementById("points");
  
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  console.log("dibujado")
  return cara;
}


function jugar(){
  
  let suerte1 = tirardado(dado1);
  let suerte2 = tirardado(dado2);
  let suerte3 = suerte1 + suerte2;

  
  intentos = intentos + 1;
  
  console.log("suerte 1: " + suerte1);
  console.log("Suerte 2: " + suerte2);
  
  if(intentos == 1 && (suerte3 == 7 || suerte3 == 11))
  {

    setTimeout(() => {
    alert("Ganaste la partida");

    }, 100)

    intentos = 0
  } 
  
  if(intentos = 1 && (suerte3 == 2 || suerte3 == 3 || suerte3 == 12 )){
    
    setTimeout(() => {
      alert("Loooser perdiste la partida");
  
      }, 100)
    
    intentos = 0
  }
  
  if(intentos > 1 && suerte3 == 7){
    
    setTimeout(() => {
      alert("Loooser perdiste la partida");
  
      }, 100)
  }
  
  if(intentos > 0 && (suerte3 == 4 || suerte3 == 5 || suerte3 == 6 || suerte3 == 8 || suerte3 == 9 || suerte3 == 10 )){

    setTimeout(() => {
      alert("Obtuviste un punto");
  
      }, 100)

    intentos = intentos + 1;
    
    contadorPuntos = contadorPuntos + 1
  }

  
  puntos.innerHTML = "PUNTOS: " + contadorPuntos

}
