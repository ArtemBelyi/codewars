const copyMachine = (arr, num) => {
    const newArray = [];
    for (let i = 0; i < num; i++) {
        newArray.push(arr)
    }

    return newArray;
};


/* The function is supposed to return a new array made up of num copies of arr.
 We have done most of the work for you, but it doesn't work quite right yet.
 Modify the function using spread syntax so that it works correctly
 (hint: another method we have already covered might come in handy here!) */