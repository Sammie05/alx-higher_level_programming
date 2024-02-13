#!/usr/bin/node

// a script that concats 2 files.

let srcA = process.argv[2];
let srcB = process.argv[3];
let dest = process.argv[4];
let fs = require('fs');
let srcTextA = fs.readFileSync(srcA);
let srcTextB = fs.readFileSync(srcB);
fs.writeFileSync(dest, srcTextA + srcTextB);
