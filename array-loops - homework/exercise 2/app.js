console.log("it works");


const numbersArray = [122, 451, 116, 38, 19]

function takeArray() {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

console.log("This is the sum of all nubmers", takeArray());

// Ako moze da mi ja pishete na email bonusot od ovaa zadaca kako e.