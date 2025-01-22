let particulas = []; // Array para almacenar las partículas activas.

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");
  noStroke();
  cursor("none"); // Eliminar el cursor predeterminado
}

function draw() {
  background(34, 30, 20); // Fondo oscuro y terroso, como una caverna

  // Crear una nueva partícula en la posición actual del mouse y agregarla al array.
  particulas.push(new Particula(mouseX, mouseY));

  // Actualizar y dibujar cada partícula, manteniendo solo las que están vivas.
  particulas = particulas.filter((p) => {
    p.update();
    p.display();
    return p.estaViva;
  });

  // Líneas en movimiento solo en los bordes izquierdo y derecho para dar una sensación de profundidad.
  stroke(180, 120, 60, 100); // Color cálido de líneas de roca
  strokeWeight(8);

  for (let i = 0; i < height; i += 50) {
    // Líneas en el borde izquierdo
    line(0, i + (frameCount % 50), 50, i + 25 + (frameCount % 50));
    // Líneas en el borde derecho
    line(width - 50, i + (frameCount % 50), width, i + 25 + (frameCount % 50));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
