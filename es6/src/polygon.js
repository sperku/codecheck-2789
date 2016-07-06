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
  constructor(height) {
    super(height);
    this.width = this.height;
    this.name = "Square";
  }

  get area() { return this.height * this.width;}
}

export class Circle {
   constructor(height) { 
23     super(height); 
24     this.height *= 2;
       this.width = this.height;
25     this.name = "Square"; 
26   } 
27 
 
28   get area() { return this.height/2 * this.width/2 * Math.PI;} 
29 } 

}


