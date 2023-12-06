
//Highest Rank Number in an Array

function highestRank (arr): number {
    const amountNumbersObj = arr.reduce((acc, num) => {
        acc[num] = acc[num] ? acc[num] + 1 : 1;
        return acc;
    }, {});


    return Number(Object.keys(amountNumbersObj).reduce((previousValue: string, currentValue: string): string => {
        return amountNumbersObj[previousValue] > amountNumbersObj[currentValue] ? previousValue : currentValue;
    }));
}