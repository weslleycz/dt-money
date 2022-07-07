import logoImg from "../../assets/logo.svg";
import { Container, Conatent } from "./styles";

type HeaderProps = {
  onOpenNewTranslationModal: () => void;
};

export const Header = ({onOpenNewTranslationModal}:HeaderProps) => {
  return (
    <Container>
      <Conatent>
        <img alt="dt maney" src={logoImg} />
        <button type="button" onClick={onOpenNewTranslationModal}>
          Nova Transação
        </button>
      </Conatent>
    </Container>
  );
};
