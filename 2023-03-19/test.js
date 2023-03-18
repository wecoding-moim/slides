function timer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

// timer(1000)
//   .then(time => { 
//   console.log('time:' + time);
//   return timer(time + 1000);
// })
//   .then(time => {
//     console.log('time:' + time);
//     return timer(time + 1000);
//   })
//   .then(time => {
//     console.log('time:' + time);
//     console.log('end');
//   })

//const run = async () => {
//  console.log('start')
//  let time = await timer(1000);
//  console.log('time:' + time)
//
//  time = await timer(time + 1000);
//  console.log('time:' + time)
//
//  time = await timer(time + 1000);
//  console.log('time:' + time)
//  console.log('end')
//}
//
// console.log('parent start')
// run()
// console.log('parent end')

// function myTimer(time, callback) {
//   setTimeout(time, 1000)  
// }

// const newWords = words.filter(callback);
// console.log(newWords)

// const newWords = words.filter(element =>  element.length > 6;)
// const test = words.filter((element) => element.length > 6)
// console.log(test);

const arr = [1,4,9,16]
const oddNumber = arr.map(element => {
  if (element % 2 != 0) {
    return element
  } else {
    return
  }
}).filter(number => Boolean(number))

console.log(oddNumber)
