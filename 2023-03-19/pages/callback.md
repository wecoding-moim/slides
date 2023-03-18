# callback example 1

### code

```javascript
const hello = () => {
  return "hello";
}

const say = (arg) {
  console.log(arg());
}

say(hello)
```

<br>

### output

```sh
hello
```

---

# callback example 2


### code

```javascript
console.log("1");
setTimeout(() => {
  console.log("2")
}, 1000)
console.log("3");
```

<br>

### output

```sh
1
3
2
```

---

# callback example 3

## Array filter

<br>

### code

```javascript
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const newWords = words.filter(element => element.length > 6);
console.log("newWords : ", newWords)
```

### output

```sh
newWords :  [ 'exuberant', 'destruction', 'present' ]
```

---

# callback example 4

## Array map

```javascript
const arr = [1,4,9,16]
const oddNumber = arr.map(element => {
  if (element % 2 != 0) {
    return element
  } else {
    return
  }
}).filter(number => Boolean(number))
```

<br>

### output
```sh
[ 1, 9 ]
```