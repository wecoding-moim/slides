const superObj = { superVal: "super" };

const subObj = Object.create(superObj);
subObj.subval = "sub";

console.log("subObj.superVal : ", subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal: ", superObj.superVal);
