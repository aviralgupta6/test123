const generateRandomNumber = (numberOfDigits) => {
  let str = "";
  for (let i = 0; i < numberOfDigits; i++) {
    str += Math.floor(Math.random() * 10).toString();
  }
  // const ran = Math.floor(Math.random() * 10);
  return str;
};
export default generateRandomNumber;
