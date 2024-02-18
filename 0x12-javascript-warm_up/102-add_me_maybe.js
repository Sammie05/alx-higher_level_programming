#!/usr/bin/node

/*
     a function that increments and calls a function.

     The function must be visible from outside
     Prototype: function (number, theFunction)
*/
exports.addMeMaybe = function (x, theFunction) {
  const incrementNumber = x + 1;
  theFunction(incrementNumber);
};
