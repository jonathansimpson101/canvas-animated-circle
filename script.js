// Select the canvas from the DOM
const canvas = document.querySelector('canvas');

// Set the width and height of the canvas to be 100% of window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Tell the canvas that it will be rendering 2D objects
let c = canvas.getContext('2d');

// Create a rectangle
// c.fillStyle = 'red';
// c.fillRect(100, 100, 200, 200);

// Draw a line
// c.beginPath();
// c.moveTo(550, 600);
// c.moveTo(800, 600);
// c.strokeStyle = '#fa34a3';
// c.lineWidth = 1;
// c.stroke();

// // Draw a circle
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// // Create 100 circles in random postitions
// for (let i = 1; i < 101; i++) {
//   let x = Math.random()*window.innerWidth;
//   let y = Math.random()*window.innerHeight;

//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }

let x = Math.random()*window.innerWidth;
let y = Math.random()*window.innerHeight;
let rad = Math.random()*100;
let dx = Math.random()*10;
let dy = Math.random()*10;

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  c.beginPath();
  c.arc(x, y, rad, 0, Math.PI * 2, false);
  c.strokeStyle = 'black';
  c.stroke();

  if(x > window.innerWidth - rad || x < rad){
    dx = -dx
  }

  if(y > window.innerHeight - rad || y < rad){
    dy = -dy
  }

  x += dx;
  y += dy;

}

animate();

