export const searchByName = (arrey, query) => {
  return arrey.filter(el =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchByNumber = (arrey, query) => {
  return arrey.filter(el => el.number.includes(query));
};

const isNumber = value => {
  return !isNaN(parseFloat(value) && isFinite(value));
};

export const search = (arrey, query) => {
  return isNumber ? searchByNumber(arrey, query) : searchByName(arrey, query);
};
