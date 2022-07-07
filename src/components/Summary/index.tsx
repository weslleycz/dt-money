import { Conteiner } from "./styles";
import entradasImg from "../../assets/entradas.svg";
import saídasImg from "../../assets/saídas.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactionsContext";

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <>
      <Conteiner>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradasImg} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposit)}
          </strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={saídasImg} alt="Saídas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.withdraw)}
          </strong>
        </div>

        <div className="highlignt-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </strong>
        </div>
      </Conteiner>
    </>
  );
};

