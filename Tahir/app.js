var counterValue = document.querySelector(".counterOutput");
const counterHandler = (counterType) => {
  if (counterType === "INC") {
    counterValue.innerHTML = +counterValue.innerHTML + 1;
  } else if (counterType === "DEC") {
    counterValue.innerHTML > 0
      ? (counterValue.innerHTML = +counterValue.innerHTML - 1)
      : (counterValue.innerHTML = 0);
  }
};
