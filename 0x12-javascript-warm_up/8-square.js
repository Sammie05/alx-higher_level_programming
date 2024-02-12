#!/usr/bin/node

/*
    A script that prints a square

    If the first argument can't be converted to an integer, print "Missing size"
    you must use the character X to print the square
*/
const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

if (!isNaN(size)) {
   for (let i = 0; i < size; i++) {console.log('X'.represent(size)); }
}  else {
   console.log('Missing size');
}
