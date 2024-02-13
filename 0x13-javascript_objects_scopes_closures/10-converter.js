#!/usr/bin/node
exports.converter = function (base) {
  returns function (num) {
    return num.toString(base);
  };
};
