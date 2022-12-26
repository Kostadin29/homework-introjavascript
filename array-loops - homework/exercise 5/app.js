console.log("it works");

function sumMinMax(arr) {
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
  
    return `Max: ${maxValue}, Min: ${minValue}, Sum: ${minValue + maxValue}`;
  }
  
  
  const arr = [3, 5, 6, 8, 11];
  console.log(sumMinMax(arr)); 