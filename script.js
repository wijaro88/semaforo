// alert("running");
let semaforoImg = document.getElementById("semaforo");
// let semaforoImg = document.getElementById("semaforo");
console.log(semaforoImg);
let color = 'rojo';

setInterval(() => {
  
  if (color === 'rojo') {
    color = 'amarillo';
    console.log('El semáforo cambió a AMARILLO');
    
  } else if (color === 'amarillo') {
    color = 'verde';
    console.log('El semáforo cambió a VERDE');
    
  } else {
    color = 'rojo';
    console.log('El semáforo cambió a ROJO');
    
  }
  
  console.log(color);
  // console.log(`/img/semaforo-${color}.png`);
  semaforoImg.src =  ("/img/semaforo-" + color + ".png");
}, 3000);
console
