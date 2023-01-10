const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    let pivot = Math.floor((left+right)/2);
    let pval = array[pivot];
    let tmp = array[left];
    array[left] = array[pivot];
    array[pivot] = tmp;
    left++;

    while(left <= right) {
        if(array[left] <= pval) {
            left++;
        }
        if(array[right] > pval) {
            right--;
        }
    }

    return quickSort(array, left, right);
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);