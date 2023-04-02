class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return "Person sum(): " + (this.first + this.second);
  }
}

class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

const kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "Person sum() modified: " + (this.first + this.second);
};

const lee = new PersonPlus("lee", 10, 20);

console.log(lee.avg());
