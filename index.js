function Point(x,y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}


function Side(length) {
  this.length = length;
}

function Shape(){
}
Shape.prototype = Object.create(Point.prototype);

Shape.prototype.constructor = Shape

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x,y);
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
}
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return(this.radius*2);
}
Circle.prototype.area = function() {
  return(Math.PI * this.radius^2);
}
Circle.prototype.circumference = function() {
  return(2 * Math.PI * this.radius);
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function(){
  var result = 0;
  for(var i=0;i< this.sides.length; i++) {
    result += this.sides[i].length;
  }
  return result;
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}


function Quadrilateral(l1, l2, l3, l4) {
  Polygon.call(this, [new Side(l1), new Side(l2), new Side(l3), new Side(l4)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function() {
  return this.width * this.height;
}

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square


Square.prototype.listProperties = function() {
  var properties = "";
  for (var property in this) {
    if(this.hasOwnProperty(property)) {
      properties += "this." + property + " = " + this[property] + "\n";
    }
  }
  return(properties);
}

function Triangle(l1, l2, l3) {
  Polygon.call(this, [new Side(l1), new Side(l2), new Side(l3)])
}

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
