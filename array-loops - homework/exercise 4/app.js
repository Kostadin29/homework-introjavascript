console.log("it works");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function calculateNumbers(array, type) {
  const result = [];

  for (let num of array ) {
    if ((type === "even") && (num % 2 === 0)) result.push(num);
    if ((type === "odd") && (num % 2 !== 0)) result.push(num);
  }

  return result;
}

console.log("This is odd numbers", calculateNumbers(numbers, "odd" ));
console.log("This is even numbers", calculateNumbers(numbers, "even" ));