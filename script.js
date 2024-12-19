// Create the function to return a promise that resolves with the array after 3 seconds
function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Initial array
    }, 3000);
  });
}

// Function to update the text content of the #output element
function updateOutput(text) {
  const output = document.getElementById('output');
  output.textContent = text; // Update the content of the #output div
}

// Start the manipulation chain
manipulateData()
  .then((array) => {
    // Step 1: Filter out odd numbers and display the result after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        updateOutput(evenNumbers.join(', ')); // Show even numbers
        resolve(evenNumbers); // Pass the filtered even numbers to the next promise
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Step 2: Multiply even numbers by 2 and display the result after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        updateOutput(multipliedNumbers.join(', ')); // Show the multiplied numbers
        resolve(multipliedNumbers); // Final resolved array (though unused)
      }, 2000);
    });
  })
  .catch((error) => {
    console.error('Error:', error); // Error handling
  });
