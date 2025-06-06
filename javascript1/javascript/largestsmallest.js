let arr=[1,3,7,8,4,2];
    let largest = arr[0];
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
console.log("Largest",largest);
console.log("smallest",smallest);
