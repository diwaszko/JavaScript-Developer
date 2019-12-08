"use strict";
// Circle
// radius: number
// interace CopyShape {
//     copy(): Shape;
// }f
class Circle {
    constructor(radius = 0) {
        this.shapeName = "Circle";
        this.radius = radius;
    }
    calcArea() {
        // return Math.PI * this.radius * this.radius; // 1 sposob
        return Math.PI * Math.pow(this.radius, 2); // 2 sposob - pow to power, czyli do potęgi
        // kolo PI * r2
        // prostokat w * h
        // trojkat 0.5 * a * b
    }
}
// częściej Circle2 sie to stosuje
// class Circle2 {
//     constructor(
//         private radius: number = 0
//     ) { }
// }
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.shapeName = "Rectangle";
        this.height = height ? this.height : width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.shapeName = "Triangle";
    }
    calcArea() {
        return this.a * this.b * this.c; // ???
    }
}
class Square extends Rectangle {
    constructor(size) {
        super(size);
        this.shapeName = "Square";
    }
}
// class Circle {
//     private radius: number;
//     constructor(radius: number = 0) {
//         this.radius = radius;
//     }
//     getCircle() {
//         return this.circle
//     }
// }
let circle = new Circle(20);
console.log(circle, circle.calcArea());
// let circle2 = new Circle2(33);
// console.log(circle2);
let rectangle = new Rectangle(31, 3);
console.log(rectangle, rectangle.calcArea());
let triangle = new Triangle(31, 3, 44);
console.log(triangle, triangle.calcArea());
let square = new Square(4);
console.log(square, square.calcArea());
//# sourceMappingURL=shapes.js.map