const generateRandomNumber = (numberOfDigits) => {
  let str = "";
  for (let i = 0; i < numberOfDigits; i++) {
    str += Math.floor(Math.random() * 10).toString();
  }
  return str;
};
export default generateRandomNumber;
