#!/usr/bin/node

/*
    A script that prints the addition of 2 integers.

    prototype: function add(a, b)
    The first argument (num1) is the first integer
    The second argument (num2) is the second integer
*/

const add = (a, b) => a + b;

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

if (!isNaN(num1) && !isNaN(num2)) {
   const result = add(num1, num2);
   console.log('${result}');
} else {
  console.log('NaN');
}
