/* Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings. */

function deleteWhiteSpaces (str: string): string {
    const wsRegex = /^\s+|\s+$/g;
    return str.replace(wsRegex, "");
}