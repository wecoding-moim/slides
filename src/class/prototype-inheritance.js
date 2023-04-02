var superObj = { superVal: "super" };
var subObj = { subVal: "sub" };

subObj.__proto__ = superObj;
console.log(subObj.superVal);
subObj.superVal = "sub";
console.log(subObj.superVal);

debugger;
function bar() {
  console.log("bar");
}

function foo() {
  bar();
  console.log("foo");
}

foo();

console.log("here");
