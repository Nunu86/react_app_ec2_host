let angle = 0; // Initialize angle variable
function rotateText() {
  const rotate = document.getElementById("textRotate");
  if (rotate) {
    angle = (angle + 2) % 360; // Increase angle, keep within 0-359
    rotate.style.transform = `rotate(${angle}deg)`;
  }
}
setInterval(rotateText, 20);
