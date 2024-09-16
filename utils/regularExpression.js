// Check if there are any digits in the string
const hasDigit = (str) => /\d/.test(str);

// Check if there are any special characters in the string
const hasSpecialChar = (str) => /[!@#\$%\^\&*\)\(+=._-]/.test(str);

const isValidNumber = (str) => /^[1-9][0-9]*$/.test(str);

export { hasDigit, hasSpecialChar, isValidNumber };
