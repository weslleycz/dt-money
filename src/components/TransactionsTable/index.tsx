import { useEffect, useState } from "react";
import { useIndexedDB } from "react-indexed-db";
import { Conteiner } from "./styles";

export const TransactionsTable = () => {
  type transactionsProps = {
    title: string;
    amount: number;
    type: string;
    category: string;
    data: string;
    id: string;
  };

  const { getAll } = useIndexedDB("transactions");

  const [transactions, setTransaction] = useState<transactionsProps[]>([]);

  useEffect(() => {
    getAll().then((transaction: any) => {
      setTransaction(transaction);
    });
  }, []);

  return (
    <Conteiner>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
};
