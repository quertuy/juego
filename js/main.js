var posiciones = [0, -160, -320, -481, -642, -803];
let dado1, dado2, boton_tirar, puntos, contadorPuntos, intentos, cerrar,  abrir, abierto, instrucciones, abrircreditos, cerrarcreditos, abiertocreditos, creditos;

window.onload = init;


function init() {

  contadorPuntos = 0
  intentos = 0;
  abierto = false;
  abiertocreditos = false;
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  puntos = document.getElementById("points");
  cerrar = document.getElementById("cerrar");
  abrir = document.getElementById("abrir");
  instrucciones = document.getElementById("instrucciones");
  cerrarcreditos = document.getElementById("cerrarcreditos");
  abrircreditos = document.getElementById("abrircreditos");
  creditos = document.getElementById("creditos");

  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click", jugar);
  cerrar.addEventListener("click", instruccionesCambio);
  abrir.addEventListener("click", instruccionesCambio);
  cerrarcreditos.addEventListener("click", creditosCambio);
  abrircreditos.addEventListener("click", creditosCambio);

 
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref) {
  var cara = Math.floor(Math.random() * 6) + 1;
  ref.style.backgroundPosition = posiciones[cara - 1] + "px";
  console.log("dibujado")
  return cara;
}

function instruccionesCambio() {
  abierto = !abierto;

  if(abierto == false)
  {

    instrucciones.setAttribute("class", "activo");
  }else{
    instrucciones.setAttribute("class", "instrucciones");

  }

}

function creditosCambio() {
  abiertocreditos = !abiertocreditos;

  if(abiertocreditos == false)
  {

    creditos.setAttribute("class", "activo");
  }else{
    creditos.setAttribute("class", "creditos");

  }

}

function jugar() {

  let suerte1 = tirardado(dado1);
  let suerte2 = tirardado(dado2);
  let suerte3 = suerte1 + suerte2;

  intentos++;

  console.log("intentos", intentos)
  console.log("suerte 1: " + suerte1);
  console.log("Suerte 2: " + suerte2);

  if (intentos == 1 && (suerte3 == 7 || suerte3 == 11)) {

    setTimeout(() => {
      alert("Ganaste la partida");
      
    }, 50)
    intentos = 0

  }

  else if (intentos == 1 && (suerte3 == 2 || suerte3 == 3 || suerte3 == 12)) {

    setTimeout(() => {
      alert("Loooser perdiste la partida");
      
    }, 50)

    intentos = 0

  }
  else if (intentos == 1 && (suerte3 == 4 || suerte3 == 5 || suerte3 == 6 || suerte3 == 8 || suerte3 == 9 || suerte3 == 10)) {

    setTimeout(() => {
      alert("Obtuviste un punto");

    }, 50)

    contadorPuntos = suerte3
  }

  else if (intentos > 1 && suerte3 == 7) {

    setTimeout(() => {
      alert("Loooser perdiste la partida");

    }, 50)

    intentos = 0
  }
  else if(intentos > 1 && suerte3 == contadorPuntos)
  {
    
    setTimeout(() => {
      alert("Ganaste la aprtida");
    }, 100)

    intentos = 0
    contadorPuntos = 0
  }

  puntos.innerHTML = "NUMERO A SACAR: " + `<strong> ${contadorPuntos} </strong>`

}
