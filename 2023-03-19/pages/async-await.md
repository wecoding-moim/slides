# async, await example

```javascript
function timer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

timer(1000)
  .then(time => {
  console.log('time:' + time);
  return timer(time + 1000);
})
  .then(time => {
    console.log('time:' + time);
    return timer(time + 1000);
  })
  .then(time => {
    console.log('time:' + time);
    console.log('end');
  })
```

---

# async, await example

```javascript
const run = async () => {
  console.log('start')
  let time = await timer(1000);
  console.log('time:' + time)

  time = await timer(time + 1000);
  console.log('time:' + time)

  time = await timer(time + 1000);
  console.log('time:' + time)
  console.log('end')
}

console.log('parent start')
run()
console.log('parent end')
```
