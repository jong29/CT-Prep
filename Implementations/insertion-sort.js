const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i=1; i<array.length; i++) {
    for (let j=0; j<i; j++) {
        if (array[j]>array[i]) {
            let tmp = array[i];
            array.splice(i, 1);
            array.splice(j, 0, tmp);
        }
    }
  }
}

insertionSort(numbers);
console.log(numbers);