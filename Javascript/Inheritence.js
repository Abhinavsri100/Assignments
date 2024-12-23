/** @format */

//parent class shape
class Shape {
  constructor(color) {
    this.color = color;
  }
  area() {
    console.log("Implemented in base class");
  }
  c() {
    console.log(`the color of this shape in ${this.color}`);
  }
}

//child class inherits shape class 
class Rectangle extends Shape {
  constructor(l, b, h, color) {
    super(color);
    this.length = l;
    this.breadth = b;
    this.height = h;
  }
  area() {
    return this.breadth * this.height * this.length;
  }
}
const r = new Rectangle(10, 20, 30, "red");
console.log(r.area());
r.c();
