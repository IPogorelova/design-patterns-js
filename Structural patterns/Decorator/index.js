class Bird
{
  constructor(age=0)
  {
    this.age = age;
  }

  fly()
  {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard
{
  constructor(age=0)
  {
    this.age = age;
  }

  crawl()
  {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon extends Bird
{
  constructor(age=0)
  {
    super(age);
  }

  crawl() {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}