var counterValue = document.querySelector(".counterOutput");
const increment = () => {
    counterValue.innerHTML = +counterValue.innerHTML + 1;
  }  

const decrement = () => {

    
        counterValue.innerHTML > 0
        ? (counterValue.innerHTML = +counterValue.innerHTML - 1)
        : (counterValue.innerHTML = 0);
    }