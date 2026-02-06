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

