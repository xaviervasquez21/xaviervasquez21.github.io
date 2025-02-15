class Particula {
  constructor(_x, _y) {
    this.posx = _x; // Posición inicial en X.
    this.posy = _y; // Posición inicial en Y.
    this.estaViva = true; // La partícula comienza "viva".
    this.tVida = round(random(20, 100)); // Tiempo de vida aleatorio entre 20 y 100 fotogramas.
    this.tamano = random(10, 25); // Tamaño inicial de la partícula.

    // Definir colores de inicio y fin para el fuego, más naturales y terrosos.
    this.colorInicial = color(255, 165, 0); // Amarillo-oro, como fuego tenue.
    this.colorFinal = color(139, 69, 19); // Marrón, como el carbón o la madera quemada.
  }

  update() {
    this.tVida -= 1; // Reducir el tiempo de vida en cada fotograma.
    if (this.tVida <= 0) {
      this.estaViva = false; // Marcar la partícula como "muerta" si su tiempo de vida se acaba.
      return;
    }

    if (this.posy < this.tamano / 2) {
      this.estaViva = false;
      return;
    }

    // Movimiento hacia arriba para simular que el fuego sube.
    this.posy -= random(1, 2); // Movimiento vertical suave y lento.
    this.posx += random(-1, 1); // Movimiento horizontal errático pero controlado.

    // Reducir ligeramente el tamaño para que parezca que la partícula se desvanece.
    this.tamano *= 0.95; // Disminuye de manera proporcional.
  }

  display() {
    // Usar lerpColor para interpolar entre los colores según la vida restante.
    let colorInterpolado = lerpColor(
      this.colorInicial,
      this.colorFinal,
      map(this.tVida, 0, 100, 1, 0)
    );

    // Establecer el color interpolado con opacidad basada en el tiempo de vida restante.
    let alpha = map(this.tVida, 0, 100, 50, 255); // Transparencia entre 50 y 255.
    fill(
      red(colorInterpolado),
      green(colorInterpolado),
      blue(colorInterpolado),
      alpha
    );

    noStroke(); // Sin borde para darle una apariencia suave.

    // Dibujar la partícula en su posición actual con el tamaño y opacidad asignados.
    ellipse(this.posx, this.posy, this.tamano, this.tamano);
  }
}
