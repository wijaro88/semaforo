// alert("running");
let semaforoImg = document.getElementById("semaforo");
console.log(semaforoImg);
let color = 'rojo';

setInterval(() => {
  
  if (color === 'rojo') {
    color = 'verde';
  } else if (color === 'verde') {
    color = 'amarillo'; 
  } else {
    color = 'rojo';
  }
   semaforoImg.src =  ("/img/semaforo-" + color + ".png");
}, 3000);
console
