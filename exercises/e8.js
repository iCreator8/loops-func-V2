
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

 export function getClientWithGreatestBalance(array) {
  // Your code goes here...
let greatestBalanceAccount = null;

  for (let i = 0; i < array.length; i++) {
    const account = array[i];

    // Check if the account is the first one or has a greater balance than the current greatestBalanceAccount
    if (greatestBalanceAccount === null || account.balance > greatestBalanceAccount.balance) {
      greatestBalanceAccount = account;
    }
  }

  // If we found a valid account, return it in an array; otherwise, return an empty array
  if (greatestBalanceAccount) {
    return [greatestBalanceAccount];
  } else {
    return [];
  }
}
 
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
