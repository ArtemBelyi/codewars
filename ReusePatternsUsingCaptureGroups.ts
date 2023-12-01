/* Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.*/

function isRepeatThreeStr (str: string): boolean {
    let reRegex = /(\d+) \1 \1/;
    return  reRegex.test(str);
}