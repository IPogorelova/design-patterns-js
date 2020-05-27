class SingleValue
{
  constructor(value)
  {
    this.value = value;
  }

  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this,
        done: returned++
      })
    }
  }
}

class ManyValues
{
  // ensure there's a push(value) method
  constructor() {
    this.value = [];
  }

  push(number) {
    this.value.push(number);
  }
}

let sum = function(containers)
{
  let res = 0;
  for (let item = 0; item < containers.length; item++) {
    console.log('array length: ', containers[item].length)
    if (!containers[item].length) {
      console.log('containers[item].value: ', containers[item].value)
      res += parseInt(containers[item].value);
      console.log('res simple: ', res)
    } else {
      for (let number = 0; number < containers[item].value.length; number++) {
        console.log('containers[item].value: ', parseInt(containers[item].value))
        res += parseInt(containers[item].value[number]);
      }
      console.log('res complicated: ', res)
    }
  }

  return res;
};

let sv = new SingleValue(11);
let mv = new ManyValues();

mv.push(22);
mv.push(33);

console.log('sum: ', sum(sv, mv))
