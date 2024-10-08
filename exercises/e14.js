
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
let accountsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    
    // Calculate the sum of deposits
    let totalDeposits = account.deposits ? account.deposits.reduce((sum, deposit) => sum + deposit, 0) : 0;

    // Calculate the sum of withdrawals
    let totalWithdrawals = account.withdrawals ? account.withdrawals.reduce((sum, withdrawal) => sum + withdrawal, 0) : 0;

    // Calculate the expected balance
    let expectedBalance = totalDeposits - totalWithdrawals;

    // Compare with the actual balance
    if (account.balance !== expectedBalance) {
      accountsWithWrongBalance.push(account);
    }
  }

  return accountsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
