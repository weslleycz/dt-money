import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { CreateTransaction } from "../services/createTransaction";
import { useIndexedDB } from "react-indexed-db";

type transactionsProps = {
  title: string;
  amount: number;
  type: string;
  category: string;
  data: string;
  id: string;
};

type transactionProviderProps = {
  children: ReactNode;
};

type TransactionInput= {
  title: string;
  amount: number;
  type: string;
  category: string;
};

type TransactionContextData= {
  transactions: transactionsProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export const TransactionsProvider = ({children}:transactionProviderProps) => {
  const { getAll } = useIndexedDB("transactions");

  const [transactions, setTransaction] = useState<transactionsProps[]>([]);

  useEffect(() => {
    getAll().then((transaction: any) => {
      setTransaction(transaction);
    });
  }, [transactions]);

  const createTransaction = async (transaction:TransactionInput) => {
    CreateTransaction(transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions,createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
}