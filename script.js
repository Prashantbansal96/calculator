// Get the input field and all buttons
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      // Clear the input field
      input.value = '';
    } else if (buttonText === '=') {
      // Evaluate the expression and update the input field with the result
      try {
        const result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = 'Error';
      }
    } else {
      // Append the clicked button's text content to the input field
      input.value += buttonText;
    }
  });
});