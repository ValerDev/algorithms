// O(n)

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if(item === array[i]){
            return i
        }
    }
    return -1
}

