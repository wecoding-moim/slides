# Promise

![](/images/Promise/1.png)


A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.


---

# fetch example 1

- https://developer.mozilla.org/en-US/docs/Web/API/fetch

<br>

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
  .then(response => response.json() )
  .then(response => console.log(response) )

const awaitFetch = async (url) => {
  const response = await fetch(url)
  const jsonResponse = await response.json()
  return jsonResponse
}

const result = awaitFetch(url).then(response => {
  console.log(response)
})
```

---

# fetch example 2 

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts'

const fetched = fetch(url)

fetched.then(response => {
  console.log("response : ",  response)
})

fetched.catch(reason => {
  console.log("reason : ", reason)
})
```

---

### Micro Task Queue

### ![](/images/micro-task-queue.gif)

---

### Micro Task Queue example

```javascript
console.log('sync start')

setTimeout(() => {
  console.log('callback 1')
}, 0)

Promise.resolve()
  .then(() => {
    console.log('promise 1')
  })
  .then(() => {
    console.log('promise 2')
  })

console.log('sync end')
```



