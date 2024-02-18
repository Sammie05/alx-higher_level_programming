#!/usr/bin/node

/*
    Write a script that prints 3 lines: but by using an array of string and a loop
    The first line: "C is fun"
    The second line: "Python is cool"
    The third line: "Jvascript is Amazing"
*/
const texts = [
	  'C is fun',
	  'Python is cool',
	  'JavaScript is amazing'
];

for (let i = 0; i < texts.length; i++) {
	  console.log(texts[i]);
}
