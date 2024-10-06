// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
let leastBalanceAccount = null;

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    
    // Check if the account has a positive balance
    if (account.balance > 0) {
      // If no leastBalanceAccount is set or current account's balance is less than the stored one
      if (leastBalanceAccount === null || account.balance < leastBalanceAccount.balance) {
        leastBalanceAccount = account;
      }
    }
  }

  // If we found a valid account, return it in an array; otherwise, return an empty array
  if (leastBalanceAccount) {
    return [leastBalanceAccount];
  } else {
    return [];
  }
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function