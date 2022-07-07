import Modal from "react-modal";
import { Conteiner } from "./styles";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {

  const handleSubmit = () => {
    console.log(12344);
  }

  return (
    <>
      <Modal isOpen={isOpen} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}>
        <Conteiner onSubmit={handleSubmit}>
          <h2>Cadastrar transação</h2>
          <input placeholder="Título"
          name="title"
          ></input>
          <input placeholder="Preço" type="number"></input>
          <input placeholder="Categoria"></input>
          <button type="submit">Cadastrar</button>
        </Conteiner>
      </Modal>
    </>
  );
};
