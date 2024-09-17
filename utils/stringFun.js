const isStartWithSpace = (str) => str.startsWith(" ");

const isEndsWithSpace = (str) => str.endsWith(" ");

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export { capitalize, isEndsWithSpace, isStartWithSpace };
