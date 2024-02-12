#!/usr/bin/node

//   A script that prints two arguments
//   passed to it, in the following format: "is "

const arg1 = process.argv[2] || 'undefined';
const arg2 = process.argv[3] || 'undefined';

if (process.argv[2] && process.argv[3]) {
   console.log('${process.argv[2]} is ${process.argv[3]}');
} else {
  console.log('${arg1} is ${arg2}');
}
