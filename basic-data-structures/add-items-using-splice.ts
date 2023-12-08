/* Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon'
and 'BlanchedAlmond' in their respective places */

function replaceTwoElementsFromBeginning<T>(arr: Array<T>, newElements: Array<T>): Array<T> {
    arr.splice(0, 2, ...newElements)
    return arr;
}