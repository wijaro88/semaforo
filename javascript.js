// const semaforoImg = document.querySelector('#semaforo-img');
let color = 'ROJO';

setInterval(() => {
  if (color === 'ROJO') {
    color = 'AMARILLO';
    alert('El semáforo cambió a AMARILLO');
  } else if (color === 'AMARILLO') {
    color = 'VERDE';
    alert('El semáforo cambió a VERDE');
  } else {
    color = 'ROJO';
    alert('El semáforo cambió a ROJO');
  }
  
  console.log(color);
  semaforoImg.src = "img/" + color + ".png";
}, 3500);
// --------------------------------------------------------
// let COLORES = ['ROJO', 'AMARILLO', 'VERDE'];
// const semaforoImg = document.querySelector('#semaforo-img');

// (function cambiarColor() {
//   const color = COLORES.pop();
//   console.log(color);
//   COLORES.unshift(color);
//   semaforoImg.src = "img/" + color + ".png";
//   setTimeout(cambiarColor, 3500);
// })();