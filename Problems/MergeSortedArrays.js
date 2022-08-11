function mergeSortedArrays(arr1, arr2) {
    let idx1 = 0
    let idx2 = 0
    let sorted = []
    while(true) {
        if(idx1 == arr1.length){
            while(idx2 < arr2.length){
                sorted.push(arr2[idx2]);
                idx2++;
            }
            break;
        } else if(idx2 == arr2.length){
            while(idx1 < arr1.length){
                sorted.push(arr1[idx1]);
                idx1++;
            }
            break;
        }

        if (arr1[idx1] < arr2[idx2]) {
            sorted.push(arr1[idx1]);
            idx1++;
        } else {
            sorted.push(arr2[idx2]);
            idx2++;
        }
    }
    return sorted;
}



console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
