// String related functions for reuse purpose

const isStartWithSpace = (str) => str.startsWith(" ");

const isEndsWithSpace = (str) => str.endsWith(" ");

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const lowerCase = (str) => str.toLowerCase();

export { capitalize, isEndsWithSpace, isStartWithSpace, lowerCase };
