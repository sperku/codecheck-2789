//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Polygon {
  constructor(height, 1) {
    super(height);
	this.width = this.height;
    this.name = "Square";
  }

  get area() { return this.height * this.width;}
}

export class Circle {
  
}


