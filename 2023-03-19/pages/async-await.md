# async, await example 1

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

# async, await example 2

```javascript
const timer = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

const run = async () => {
  console.log('start')
  let time = await timer(1000);
  console.log('time:' + time)

  time = await timer(time + 1000);
  console.log('time:' + time)

  time = await timer(time + 1000);
  console.log('time:' + time)
  console.log('end')
  return time
}

const run2 = async () => {
  console.log('parent start')
  const time = await run()
  console.log('returned time : ', time)
  console.log('parent end')
}

console.log('parent parent start')
run2().then(() => {
  console.log('parent parent end')
})
```
