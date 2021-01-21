export const moneySeparator = (money) => {
  return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
};
