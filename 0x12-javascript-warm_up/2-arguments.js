#!/usr/bin/node

/*
     A script that prints a message depending of the number if arguments passed.
     if no arguments are passed to the script, print "No argument".
     Otherwise, print "Arguments found"
*/

const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
