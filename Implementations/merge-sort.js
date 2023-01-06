const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const left = array.slice(0, Math.floor(array.length/2));
  const right = array.slice(Math.floor(array.length/2));

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// my implementation
function merge(left, right){
    const merged = []
    while (left.length != 0 && right.length != 0){
        if (left[0] <= right[0]){
            merged.push(left[0]);
            left.shift();
        } else {
            merged.push(right[0]);
            right.shift();
        }
    }
    if (left.length) {
        while(left.length) {
            merged.push(left[0]);
            left.shift();
        }
    } else {
        while(right.length) {
            merged.push(right[0]);
            right.shift();
        }
    }
    return merged;
}

// sol implementation (using counter for indexing)
function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && 
        rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex]);
        leftIndex++;
    } else{
        result.push(right[rightIndex]);
        rightIndex++
    }
    }  
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);