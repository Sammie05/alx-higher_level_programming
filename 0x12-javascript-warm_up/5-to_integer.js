#!/usr/bin/node

/*
    A script that prints My number: <first argument converted in integer
    if the first argument can be converted to an integer

    If the argument can't be converted to an integer, print "Not a number
*/

const num = Number.parseInt(process.argv[2]);

console.log(Number.isNaN(num) ? 'Not a number' : 'My number: ' + num);
