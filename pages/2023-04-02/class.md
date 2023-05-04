# Date class

```javascript
let d1 = new Date("2023-03-27");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth() + 1);
```

---

# ES6 이전 class

```javascript
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

const kim = new Person("kim", 10, 10, 10);
const lee = new Person("lee", 10, 20, 30);

console.log("kim.sum(): ", kim.sum());
console.log("lee.sum(): ", lee.sum());
```

---

# ES6 이후 class

```javascript
class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }

  say() {
    console.log(`my name is ${this.name}`);
  }
}

const kim = new Person("kim", 10, 20, 30);
const lee = new Person("lee", 1, 2, 3);

console.log("kim", kim);
console.log("lee: ", lee);

kim.say();
lee.say();
```

---

# prototype (원형)

```javascript
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

const kim = new Person("kim", 10, 20, 30);
kim.sum = function () {
  return "modified: " + (this.first + this.second);
};

const lee = new Person("lee", 10, 10, 10);

lee.sum = function () {
  return "modified: " + (this.first + this.second);
};

console.log("kim.sum(): ", kim.sum());
console.log("lee.sum(): ", lee.sum());
```

---

# prototype example 2

- prototype 사용 이유 : 생성자가 호출 될때 마다 함수가 메모리에 할당되지 않음 따라서
  메모리 효율이 더 좋다.

```javascript
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

const kim = new Person("kim", 10, 20, 30);
const lee = new Person("lee", 10, 10, 10);

console.log("kim.sum(): ", kim.sum());
console.log("lee.sum(): ", lee.sum());
```

---

# prototype example 3

sum method 호출시 객체에 sum 있으면 sum 호출
없으면 prototype 에서 sum method 조회

```javascript
function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

const kim = new Person("kim", 10, 20, 30);
const lee = new Person("lee", 10, 10, 10);

console.log("kim.sum(): ", kim.sum());
console.log("lee.sum(): ", lee.sum());
```

---

# class 문법

- 객체를 찍어내는 설계도 class
- javascript 의 표준 ECMA Script 6 버전 에서 추가된 기능
- ECMA Script 6 이전 버전에서는 동작하지 않는다.

<br>

- ES6 브라우저 호환성 확인

[caniuse.com](https://caniuse.com)

- javascript compiler, transpiler

[babeljs.io](https://babeljs.io)

---

# constructor

```javascript
class Person {
  constructor() {
    console.log("Person Constructor");
  }
}

const kim = new Person();
```

---

# method

- 같은 클래스 내의 인스턴스가 공유하는 함수

```javascript
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

const kim = new Person("kim", 10, 20);
const lee = new Person("lee", 10, 20);

console.log(kim.sum());
console.log(lee.sum());
```

---

# method example 2

- 특정 인스턴스의 method 만 변경하고 싶을 때. ( 화살표 함수로는 제대로 기능하지
  않음)

```javascript
const kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "Person sum() modified: " + (this.first + this.second);
};
```

---

# 상속 (Inheritance)

- 클래스 형태는 유지하면서 method 를 추가해야 할 때
- 내가 만든 함수가 아닐때 (라이브러리)
- 코드 중복을 없앨 수 있음.

```javascript
class PersonPlus {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return "Person sum(): " + (this.first + this.second);
  }

  avg() {
    return (this.first + this.second) / 2;
  }
}
```

---

# 상속 example 2

```javascript
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
```

---

# 상속 example 3

## super

```javascript
class PersonPlus extends Person {
  constructor(name, first, second, thrid) {
    super(name, frist, second);
    this.third = third;
  }

  sum() {
    return super.sum() + this.third;
  }
}
```

- super 의 두가지 용법
- super() -> 부모 클래스의 생성자(constructor) 함수 호출
- super -> 부모 클래스를 지칭

---

# object inheritance (객체 상속)

<img src="/public/images/2023-04-02/class/object_inheritance.png" style="max-height: 450px;">

---

# 객체 상속 example

- **proto** 프로퍼티로 객체의 상속 구현 가능.

```javascript
var superObj = { superVal: "super" }; // 부모 객체
var subObj = { subVal: "sub" }; // 자식 객체

subObj.__proto__ = superObj; // 상속

console.log(subObj.subVal);
```

---

# 객체 상속 Object.create()

```javascript
const superObj = { superVal: "super" };

const subObj = Object.create(superObj);
subObj.subval = "sub";

console.log("subObj.superVal : ", subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal: ", superObj.superVal);
```

---

# References

- https://www.youtube.com/watch?v=_DLhUBWsRtw (드림코딩)

<br>

- https://www.youtube.com/playlist?list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3 (생활코딩)