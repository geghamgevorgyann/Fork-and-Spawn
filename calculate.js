const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const number = parseInt(process.argv[2], 10);
if (isNaN(number)) {
    console.error('Invalid number');
    process.exit(1);
}

console.log(factorial(number));
