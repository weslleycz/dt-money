import Modal from "react-modal";
import { Conteiner, TransactionTypeContainer, RadioBox } from "./styles";
import fecharImg from "../../assets/fechar.svg";
import entradasImg from "../../assets/entradas.svg";
import saídasImg from "../../assets/saídas.svg";
import { CreateTransaction } from "../../services/createTransaction";
import { FormEvent, useState } from "react";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      type,
      title,
      amount,
      category,
    };

    try {
      CreateTransaction(data);
      onRequestClose();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        onRequestClose={onRequestClose}
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={fecharImg} alt="Botão de fechar" />
        </button>

        <Conteiner onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input
            placeholder="Título"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            name="title"
          ></input>

          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={({ target }) => setAmout(Number(target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={entradasImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
              activeColor="red"
            >
              <img src={saídasImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
            onChange={({ target }) => setCategory(target.value)}
            value={category}
          ></input>
          <button type="submit">Cadastrar</button>
        </Conteiner>
      </Modal>
    </>
  );
};
