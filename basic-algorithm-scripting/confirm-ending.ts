/* Check if a string (first argument, str) ends with the given target string (second argument, target).*/

function confirmEnding(str, target) {
    const newStr = str.substring(str.length - target.length);
    return newStr === target;
}