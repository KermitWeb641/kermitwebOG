//Seperate file for the clock drag and drop code so animation.js isn't too long
function enableClockDrag() {
  let clockElement = document.querySelector('.retro-clock');
  let isDragging = false;
  let offsetX, offsetY;

  clockElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - clockElement.offsetLeft;
    offsetY = e.clientY - clockElement.offsetTop;
    clockElement.style.cursor = 'grabbing'; // Change cursor during drag
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    clockElement.style.left = e.clientX - offsetX + 'px';
    clockElement.style.top = e.clientY - offsetY + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    clockElement.style.cursor = 'grab'; // Reset cursor after drag
  });
}
enableClockDrag()