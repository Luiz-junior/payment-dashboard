import { makeAutoObservable } from "mobx";

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
};

class TransactionStore {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTransactions(transactions: Transaction[]) {
    this.transactions = transactions;
    this.filteredTransactions = transactions;
  }

  filterTransactions(startDate: string, endDate: string) {
    try {
      const filtered = this.transactions.filter((transaction) => {
        const date = new Date(transaction.date);

        return (
          (!startDate || new Date(startDate) <= date) &&
          (!endDate || new Date(endDate) >= date)
        );
      });
      this.filteredTransactions = filtered;
    } catch (e) {
      this.error = "Failed to filter transactions";
    }
  }

  clearError() {
    this.error = null;
  }
}

export const transactionStore = new TransactionStore();
