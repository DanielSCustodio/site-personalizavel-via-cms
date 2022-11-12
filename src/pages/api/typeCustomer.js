import data from './dataTypeCustomer.json';

export const getData = () => {
  return data;
};

export default (req, res) => {
  const data = getData();
  res.json(data);
};
