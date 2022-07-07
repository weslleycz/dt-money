import moment from "moment";

export const dataGet = () => {
  let date = moment(new Date()).format("DD/MM/YYYY");
  return date;
};
