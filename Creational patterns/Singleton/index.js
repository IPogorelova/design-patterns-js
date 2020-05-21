class SingletonTester
{
  static isSingleton(generator)
  {
    let obj = generator();
    let obj2 = generator();

    return (obj === obj2)
  }
}