# 백준 페어 프로그래밍

- 규칙

2인 1조로 진행

드라이버, 네비게이터 역할 나누어서 진행

5분마다 드라이버, 네비게이터 역할 변경

--- 

# 백준 입력 받는 방법 (Node.js)

```javascript
// 한줄 입력 받을때
const input = fs.readFileSync('/dev/stdin').toString().trim()

// 공백으로 구분된 한 줄 입력 받을 때
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

// 여러줄 입력 받을 때
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// 첫번째 줄에 자연수 n 을 입력받고, 그 다음줄부터 한줄에 하나의 값을 받을 때
const [n, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

```

---

# 백준 문제

- 문제 1 단어 뒤집기

  - https://www.acmicpc.net/problem/9093

- 문제 2 카트라이더 드리프트

  - https://www.acmicpc.net/problem/27522

- 문제 3 알람 시계

  - https://www.acmicpc.net/problem/2884

- 문제 4 주사위 네개

  - https://www.acmicpc.net/problem/2484
