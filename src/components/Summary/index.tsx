import { Conteiner } from "./styles";
import entradasImg from "../../assets/entradas.svg";
import saídasImg from "../../assets/saídas.svg";
import totalImg from "../../assets/total.svg";

export const Summary = () => {
  return (
    <>
      <Conteiner>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradasImg} alt="Entradas" />
          </header>
          <strong>R$ 1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={saídasImg} alt="Entradas" />
          </header>
          <strong>R$ -500,00</strong>
        </div>

        <div className="highlignt-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Entradas" />
          </header>
          <strong>R$ 500,00</strong>
        </div>
      </Conteiner>
    </>
  );
};
