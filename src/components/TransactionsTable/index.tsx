import { useTransactions } from "../../hooks/useTransactionsContext";
import { Conteiner } from "./styles";

export const TransactionsTable = () => {
  const {transactions} = useTransactions();
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