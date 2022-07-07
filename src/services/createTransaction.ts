import { v4 as uuidv4 } from "uuid";
import { useIndexedDB } from "react-indexed-db";
import { dataGet } from "../utils/dataGet";

type createTransactionProps = {
  title: string;
  price: number;
  category: string;
};

export const CreateTransaction = ({
  title,
  price,
  category,
}: createTransactionProps) => {
  const { add } = useIndexedDB("transactions");

  add({ title, price, category, data: dataGet(), id: uuidv4() }).then(
    (event) => {
      console.log("Create");
    },
    (error) => {
      console.log(error);
    }
  );
};
