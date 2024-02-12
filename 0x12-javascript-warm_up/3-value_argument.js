#!/usr/bin/node

/*
     A script that prints argument passed to it:
     If no arguments are passed to the script, print "No argument"
*/
if (process.argv[2]) {
   console.log(process.argv[2]);
} else {
  console.log('No argument');
}
