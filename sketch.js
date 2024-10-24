function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
  frameRate(1);
  
}

function draw() {
  background("#e7e4dd");
  fill("#b41e05");
  
  // dimensioni del rettangolo prese dall'immagine originale
  let rectWidth = 8;
  let rectHeight = 50;
  let numRows = 27; // numero di righe da quello che è l'immagine
  let numCols = 27; // numero di colonne da quello che è l'immagine
  let spacing = 58; // aggiunta della spaziatura che è la somma delle due dimensioni del rettangolo
  
  // mi serve calcolare la posizione iniziale per centrare il quadrato
  let startX = (width - (numCols - 1) * spacing - rectWidth) / 2;
  let startY = (height - (numRows - 1) * spacing - rectHeight) / 2;
  
  // Array degli angoli di rotazione possibili
  let angles = [0,15, 30, 45, 60, 75, 90, 120, 135, 150, 180];
  
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = startX + j * spacing;
      let y = startY + i * spacing;
      
      push(); // Salva lo stato corrente di trasformazione senza influenzare le successive
      translate(x + rectWidth/2, y + rectHeight/2); // Sposta l'origine al centro del rettangolo
      
      // seleziono un angolo casuale tra quelli che ho scelto 
      // lo devo convertire in radianti
      let randomAngle = random(angles);
      // comando per far ruotate il rettangolo in modo randomico
      rotate(radians(randomAngle));
      
      // Modifica: combina le modifiche precedenti con quelle nuove
      let adjustedHeight = rectHeight;
      let rectangleColor = "#b41e05"; // Colore di default

      // Aumenta l'altezza di 40 per i rettangoli nella metà destra
      if (x >= width / 2) {
        adjustedHeight = 90;
        rectangleColor = "#8e2210";
      }

      // Aumenta ulteriormente l'altezza di 80 e cambia il colore per i rettangoli in basso a destra
      if (x >= width / 2 && y >= height / 2) {
        adjustedHeight = 130;
        rectangleColor = "#6b110d";
      }

      // Nuovo: Aumenta l'altezza di 120 e cambia il colore per i rettangoli in basso a sinistra
      if (x < width / 2 && y >= height / 2) {
        adjustedHeight = 170;
        rectangleColor = "#4c2115"; // Colore dell'immagine originale
      }

      fill(rectangleColor);
      rect(-rectWidth/2, -adjustedHeight/2, rectWidth, adjustedHeight, 10);

      
      
      pop(); // Ripristina lo stato di trasformazione precedente
    }
  }
}
