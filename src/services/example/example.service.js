export default () => {
  const example = {};

  example.get = async id => {
    return `This is given id ${id}`;
  };

  example.save = async customer => {
    return customer;
  };

  return example;
};
