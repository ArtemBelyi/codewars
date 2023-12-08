/* Modify the function, using pop() and shift(), to remove the first and last elements of the argument array,
and assign the removed elements to their corresponding variables, so that the returned array contains their values */

function removeLastAndFirstElements<T>(elements: Array<T>): Array<T> {
    return [elements.shift(), elements.pop()];
}