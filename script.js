
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Frida Sofía Gómez Ortiz')
  .pauseFor(1000)
  .deleteAll(23)
  .typeString('<strong> Me gusta: </strong> Leer')
  .pauseFor(400)
  .deleteChars(4)
  .typeString( 'Dormir')
  .pauseFor(400)
  .deleteChars(6)
  .typeString(' La música')
  .pauseFor(400)
  .deleteChars(9)
  .typeString(' Trabajar')
  .pauseFor(2000)
  .start();