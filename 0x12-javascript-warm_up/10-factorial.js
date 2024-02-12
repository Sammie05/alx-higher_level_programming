#!/usr/bin/node

/*
    A script that computes and prints a factorial.

    prototype: function factorial(n)
    The first argument is an integer used for computing the factorial
    Factorial of NaN is 1
    */

const factorial = (n) => {
  if (isNaN(n)) {
    return 1;
  }
  
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
