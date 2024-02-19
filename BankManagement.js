class Account {
  constructor(accountId, accountHolderName) {
    this.accountId = accountId;
    this.accountHolderName = accountHolderName;
    this.balance = 0.0;
  }

  getAccountId() {
    return this.accountId;
  }

  getAccountHolderName() {
    return this.accountHolderName;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      amount + " deposited successfully. New balance: " + this.balance
    );
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(
        amount + " withdrawn successfully. New balance: " + this.balance
      );
    }
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getAccountBalance(accountId) {
    for (let account of this.accounts) {
      if (account.getAccountId() === accountId) {
        return account.getBalance();
      }
    }
    return -1;
  }

  transferMoney(sourceAccountId, destinationAccountId, amount) {
    for (let account of this.accounts) {
      if (account.getAccountId() === sourceAccountId) {
        account.withdraw(amount);
      }
      if (account.getAccountId() === destinationAccountId) {
        account.deposit(amount);
      }
    }
  }
}

class BankManagement {
  static main() {
    let bank = new Bank();

    let account1 = new Account(123, "Alice");
    let account2 = new Account(456, "Bob");

    bank.addAccount(account1);
    bank.addAccount(account2);

    account1.deposit(1000);
    account2.deposit(500);

    account1.withdraw(200);
    account2.withdraw(100);

    bank.transferMoney(123, 456, 300);

    console.log("Account 123 balance: " + bank.getAccountBalance(123));
    console.log("Account 456 balance: " + bank.getAccountBalance(456));
  }
}

BankManagement.main();
