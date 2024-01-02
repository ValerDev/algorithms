// O(logN/2)
const a = [1, 2, 5, 6, 10, 11, 12, 13, 14, 17, 111, 537, 568, 687, 789, 8654, 9163];

const binarySearch = (array, item) => {
    let start = 0;
    let middle;
    let end = array.length;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        middle = Math.floor((end + start) / 2)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (array[middle] > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position
}

const recursionBinarySearch = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2);
    if (item === array[middle]) {
        return middle
    }

    if (array[middle] > item) {
        return recursionBinarySearch(array, item, start, middle - 1)
    } else {
        return recursionBinarySearch(array, item, middle + 1, end)
    }
}


console.log(binarySearch(a, 86555554));