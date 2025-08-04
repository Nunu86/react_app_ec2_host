/**
 * @jest-environment jsdom
 */

// Set up DOM for the test
beforeEach(() => {
  document.body.innerHTML = `<h1 id="textRotate">Hello World</h1>`;
});

let angle = 0;
function rotateText() {
  const rotate = document.getElementById("textRotate");
  if (rotate) {
    angle = (angle + 2) % 360;
    rotate.style.transform = `rotate(${angle}deg)`;
  }
}

test("rotateText rotates the element", () => {
  rotateText();
  const rotate = document.getElementById("textRotate");
  expect(rotate.style.transform).toBe("rotate(2deg)");

  rotateText();
  expect(rotate.style.transform).toBe("rotate(4deg)");
});
