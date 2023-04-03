
const FECHAACTUAL = new Date();

const dia = FECHAACTUAL.getDate(); 
const mes = FECHAACTUAL.getMonth() + 1;
const anio = FECHAACTUAL.getFullYear();
const hora = FECHAACTUAL.getHours();
const min = FECHAACTUAL.getMinutes();
const seg = FECHAACTUAL.getSeconds();

const OPCIONESFECHA = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const DIASEMANA = FECHAACTUAL.toLocaleDateString(undefined, OPCIONESFECHA);

//const FECHAACTUALTEXT = `${dia}/${mes}/${anio} ${hora}:${min}:${seg}`;
const FECHAACTUALTEXT = `${DIASEMANA} ${hora}:${min}:${seg}`;

console.log(FECHAACTUALTEXT);



function mostrarFecha() {
alert(FECHAACTUALTEXT);
console.log(FECHAACTUALTEXT);
}

function showAlert() {
    alert(FECHAACTUALTEXT);
    console.log(FECHAACTUALTEXT); 
  }
  // --------------------------------- CONTADOR EN REVERSA:

var now = new Date();

// Obtén la fecha del último día del año actual
var endOfYear = new Date(now.getFullYear(), 11, 31);

// Calcula la diferencia en milisegundos
var timeDiff = endOfYear.getTime() - now.getTime();

// Convierte la diferencia en días, horas, minutos y segundos
var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

// Actualiza el HTML de la etiqueta div con los valores calculados cada segundo
setInterval(function() {
 document.getElementById("tiemporestante").innerHTML = days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos";
  
  // Actualiza la diferencia de tiempo cada segundo
  timeDiff -= 1000;
  days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
}, 1000);

console.log(seconds);