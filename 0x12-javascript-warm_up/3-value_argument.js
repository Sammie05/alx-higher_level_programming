#!/usr/bin/node

/*
     A script that prints argument passed to it:
     If no arguments are passed to the script, print "No argument"
*/
const arg0 = process.argv[2];

console.log(arg0 !== undefined ? arg0 : 'No argument');
