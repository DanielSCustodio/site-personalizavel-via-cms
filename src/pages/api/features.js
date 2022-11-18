import data from './dataFeatures.json';

export const getFeature = () => {
  return data;
};

export default (req, res) => {
  const data = getFeature();
  res.json(data);
};
