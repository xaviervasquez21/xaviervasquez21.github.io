let particulas = []; // Array para almacenar las partículas activas.

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");
  noStroke();
}

function draw() {
  background(0, 200, 180); // Fondo turquesa que cubre todo el canvas

  // Efecto "spray" en los bordes izquierdo y derecho
  /*for (let i = 0; i < 5; i++) {
    fill(random(200, 255), random(100, 200), random(100, 200), 100);

    // Posición en los bordes izquierdo y derecho
    let x = random() < 0.5 ? random(0, 50) : random(width - 50, width);
    let y = random(height);

    ellipse(x, y, random(10, 50));
  }*/

  // Crear una nueva partícula en la posición actual del mouse y agregarla al array.
  particulas.push(new Particula(mouseX, mouseY));

  // Actualizar y dibujar cada partícula, manteniendo solo las que están vivas.
  particulas = particulas.filter((p) => {
    p.update();
    p.display();
    return p.estaViva;
  });

  // Líneas en movimiento solo en los bordes izquierdo y derecho
  stroke(255, 100);
  strokeWeight(2);

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
