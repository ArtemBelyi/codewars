/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. */


function largestOfFour(arr) {
    return arr.reduce((acc, element) => {
        const largestNumber = element.reduce((a, b) => a > b ? a : b)
        acc.push(largestNumber);
        return acc;
    }, [])
}