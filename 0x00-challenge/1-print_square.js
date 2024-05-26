#!/usr/bin/env node
/*
    Print a square with the character #

    The size of the square must be the first argument 
    of the program.
*/
if (process.argv.length !== 3) {
    process.stderr.write("Invalid usage: exactly one argument required\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2], 10);

if (isNaN(size) || !Number.isInteger(size) || size <= 0) {
    process.stderr.write("Invalid size: size must be a positive integer\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    console.log("#".repeat(size));
}
