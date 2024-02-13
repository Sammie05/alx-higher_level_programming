#!/usr/bin/node

// a script that importsa dictionary of occurrences by
// user id and computes a dictionary of user ids by occurrence.
const { dict } = require('./tests/101-data');

function invertDictionary (original) {
  const inverted = {};
  for (const userId in original) {
     const occurrences = original[userId];

     if (!(occurrences in inverted)) {
       inverted[occurrences] = [];
     }

      inverted[occurrences].push(userId);
    }

    return inverted;
}

const invertedDict = invertDictionary(dict);

console.log(invertedDict);
