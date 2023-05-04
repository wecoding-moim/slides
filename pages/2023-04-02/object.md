# 오늘 할 것

- 클래스 문법
- Varbel, EC2 로 리액트 앱 배포
- 백준

---

# 객체

```javascript
Math.random(); // method

var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: (val) => {
    return Math.floor(val);
  },
};

console.log("MyMath.PI: ", MyMath.PI);
console.log("MyMath.random(): ", MyMath.random());
console.log("MyMath.floor(3.9): ", MyMath.floor(3.9));
```

---

# this

```javascript
var lee = {
  name: "lee",
  first: 10,
  second: 20,
  sum: (f, s) => {
    return f + s;
  },
};

console.log(lee.sum(lee.first, lee.second));
```

---

# this

## lee, kim 객체에 third property 추가 하고 sum() 함수 변경

```javascript
var lee = {
  name: "lee",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

console.log("lee.sum(): ", lee.sum());
```