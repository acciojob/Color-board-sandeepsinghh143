//your JS code here. If required.
const container = document.querySelector('.container');

// Dynamically render 800 boxes
for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.classList.add('square');
  container.appendChild(box);
}

// Add event listeners to change color on hover
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'red';
  });
  square.addEventListener('mouseout', () => {
    setTimeout(() => {
      square.style.backgroundColor = 'white';
    }, 1000);
  });
});
