const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i=0; i<array.length; i++) {
        let lid = i;
        for (let j=i; j<array.length; j++) {
            if (array[j] < array[lid]) {
                lid = j;
            }
        }
        let tmp = array[i];
        array[i] = array[lid];
        array[lid] = tmp;
    }
}
selectionSort(numbers);
console.log(numbers);