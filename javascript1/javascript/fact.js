function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(4));

function palindrome(str) {
  str = str.toLowerCase(); 
  let reversedStr = str.split('').reverse().join(''); 
  return str === reversedStr; 
}
console.log(palindrome("madam"));


function sort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let array=[1,5,3,4,6,4];
console.log(sort(array));



