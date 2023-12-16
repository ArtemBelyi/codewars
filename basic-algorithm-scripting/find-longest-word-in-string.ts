/* Return the length of the longest word in the provided sentence. */

function findLongestWordLength(str) {
    const strList = str.split(" ");
    return strList.reduce((a, b) => a.length > b.length ? a : b).length;
}
