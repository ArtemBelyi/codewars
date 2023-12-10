/* Modify the function, using a for loop, to return a filtered version of the passed
array such that any array nested within arr containing elem has been removed */

type ElementsType<T> = Array<Array<T>>;

function filteredArray<T>(arr: ElementsType<T>, elem: T): ElementsType<T> {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].indexOf(elem) < 0) {
            newArr.push(arr[i]);
        }
    }

    // Only change code above this line
    return newArr;
}