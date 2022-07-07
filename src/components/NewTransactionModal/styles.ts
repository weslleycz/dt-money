import Style from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Conteiner = Style.form`

  h2{
    color: var(--text-title);
    font-size:1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border:1px solid #d7d7d7;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;
    

    &::placeholder{
        color: var(--texte-body);
    }
    & + input {
        margin-top: 1rem;
      }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    &:hover{
        filter:brightness(0.9)
    }
  }
`;


export const TransactionTypeContainer = Style.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const RadioBox = Style.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background: ${({ isActive, activeColor }) => isActive
    ? transparentize(0.9, colors[activeColor])
    : 'transparent'};
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;