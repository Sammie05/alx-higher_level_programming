#!/usr/bin/node
class Rectangle {
  constructor (w,h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.width = h;
     }
   }
   print () {
     for (let i = 0; i < this.height; i++) {
       console.log('X'.repeat(this.width));
     }
   }
}
module.exports = Rectangle;
