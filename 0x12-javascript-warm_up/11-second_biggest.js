#!/usr/bin/node

/*   A script that searches the second biggest integer in the list of arguments.
     You can assume all arguments can be converted to integer
     if no argument passed, print 0
     if the number of arguments is 1, print 0

*/
const FindSecondlargest = (...nums) => {
  if (nums.length < 2) {
    return 0;
}
