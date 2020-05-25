class Shape
{
  constructor(name, renderer)
  {
    this.name = name;
    this.renderer = renderer;
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super('triangle', renderer.triangle);
    this.renderer = renderer.triangle;
  }

  toString() {
    return this.renderer;
  }
}

class Square extends Shape
{
  constructor(renderer)
  {
    super('square', renderer.square);
    this.renderer = renderer.square;
  }

  toString() {
    return this.renderer;
  }
}
//
// class VectorSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as lines`;
//   }
// }
//
// class RasterSquare extends Square
// {
//   toString()
//   {
//     return `Drawing square as pixels`;
//   }
// }

// imagine VectorTriangle and RasterTriangle are here too


class VectorRenderer {

  get square() {
    return `Drawing square as lines`;
  }
  get triangle() {
    return `Drawing triangle as lines`;
  }
}

class RasterRenderer {

  get square() {
    return `Drawing square as pixels`;
  }
  get triangle() {
    return `Drawing triangle as pixels`;
  }
}
