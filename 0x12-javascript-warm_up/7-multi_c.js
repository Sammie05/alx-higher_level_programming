#!/usr/bin/node

/*
    A script that prints x times "Cis fun"

    Where x is the first argument of the script
    If the first argument can't be converted to an integer,
    print "Missing number pf occurrences"
*/

const x = process.argv[2];
const num = parseInt(x);

if (!isNaN(num)) {
  for (let i = 0; i < num; i++) {console.log('C is fun');}
} else {
  console.log('Missing number of occurrences');
}
