const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    let done = array.length - 1;
    let tmp = 0;
    while (done != 0){
        for (let i=0; i<done; i++){
            if (array[i] > array[i+1]){
                tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
            }
        }
        done--;
    }
}

bubbleSort(numbers);
console.log(numbers);