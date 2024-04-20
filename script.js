const counterDisplay = document.getElementById('counter');
const errorDisplay = document.getElementById('error');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const clearButton = document.getElementById('clear');

let count = 0;

function updateCounter() {
  counterDisplay.textContent = `Your Current Count is : ${count}`;
  if (count === 0) {
    clearButton.style.display = 'none';
    errorDisplay.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
  }
}

function showError(message) {
  errorDisplay.textContent = message;
  errorDisplay.style.display = 'block';
}

incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
    clearError();
  });
  
  function clearError() {
    errorDisplay.textContent = '';
    errorDisplay.style.display = 'none';
  }  

decrementButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  } else {
    showError('Error: Cannot go below 0');
  }
});

clearButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
