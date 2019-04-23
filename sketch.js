const paths = [];
let color;
let weight;
var fixed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

let wasMousePressed = false;

function draw() {
  noFill();

  if (mouseIsPressed) {
    if (!wasMousePressed) {
      paths.push([]);
    }

    const point = {
      x: mouseX,
      y: mouseY,
      color: color.value,
      weight: weight.value
    };
    paths[paths.length - 1].push(point);
  }
  wasMousePressed = mouseIsPressed;

  paths.forEach(path => {
    beginShape();
    path.forEach(point => {
      stroke(point.color);
      strokeWeight(point.weight);
      vertex(point.x, point.y);
    });
    endShape();
  });
}

window.onload = function() {
  color = document.getElementById('color');
  weight = document.getElementById('weight');
  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
  });

  fixed = document.getElementById('defaultCanvas0');

  fixed.addEventListener('touchmove', function(e) {

    e.preventDefault();

  }, false);

}
