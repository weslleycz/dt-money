import { v4 as uuidv4 } from "uuid";
import { useIndexedDB } from "react-indexed-db";
import { dataGet } from "../utils/dataGet";

type createTransactionProps = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

export const CreateTransaction = ({
  title,
  amount,
  category,
  type,
}: createTransactionProps) => {
  const { add } = useIndexedDB("transactions");
  add({ title, amount, type, category, data: dataGet(), id: uuidv4() }).then(
    (event) => {
      console.log("Ok");
    },
    (error) => {
      throw new Error('Oooops!');
    }
  );
  return "ok"
 
};
