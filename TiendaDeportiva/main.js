 //logo nombre y barra

 

  //carrusel con 3 playeras y balon 



  //foto de reloj de lado izquierdo

const pelota = document.getElementById("pelota");

let escala = 0.08;

function animar(){



  if(escala < 5){
    escala += 0.05;   // velocidad de crecimiento
    pelota.style.transform = `scale(${escala})`;
    requestAnimationFrame(animar);
  }
}

animar();

 //los tres layout de las playeras 




  //carusel de refencias 

 

  //contacto y pie de pagina -->
// Accedemos a los elementos del archivo html
const form = document.getElementById("form");
const correoIpt = document.getElementById("correoIpt");
const feedbackAlert = document.getElementById("feedbackAlert");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Agregamos un evento para cuando se haga click en el botón
form.addEventListener ("submit", (e) => {
  e.preventDefault();

  const correo = correoIpt.value;

  if (!regex.test(correo)) {
    feedbackAlert.style.display = "block";
    return;
  }
  
  feedbackAlert.style.display = "none";
  alert("Gracias por suscribirte");
  form.reset();
});

correoIpt.addEventListener("input", () => {
  feedbackAlert.style.display = "none";
});

