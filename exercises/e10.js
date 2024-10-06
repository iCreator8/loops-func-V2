// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const result = []; // Initialize an empty array to store names that contain the specified letter

  for (let i = 0; i < array.length; i++) {
    const account = array[i];

    // Check if the account holder's name contains the specified letter (case-insensitive)
    if (account.name.toLowerCase().includes(letter.toLowerCase())) {
      result.push(account.name); // Add the name to the result array
    }
  }

  return result; // Return the array of names containing the specified letter
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
