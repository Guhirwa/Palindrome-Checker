// Function to check if the given text is a palindrome
const isPalindrome = (text) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the cleaned text
    const reversedText = cleanedText.split('').reverse().join('');
    // Check if the cleaned text is the same as the reversed text
    return cleanedText === reversedText;
  };
  
  // Function to handle the check button click event
  const checkPalindrome = () => {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const userInput = inputElement.value.trim();
    const resultText = document.getElementById('result-text');
    // Check if the input is empty
    if (userInput === '') {
      alert('Please input a value');
      return;
    }
  
    // Check if the input is a palindrome and update the result div
    if (isPalindrome(userInput)) {
      resultElement.innerText = `${userInput} is a palindrome`;
      resultText.innerText = resultElement.textContent; 
    } else {
      resultElement.innerText = `${userInput} is not a palindrome`;
      resultText.innerText = resultElement.textContent;
    }
  };
  
  // Add event listener to the check button
  document.getElementById('check-btn').addEventListener('click', checkPalindrome);