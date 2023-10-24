---
title: "[JS 자료구조 & 알고리즘 (1)] 빅오 표기법"
date: "2023-10-24"
category: "tech"
slug: "/tech/js-algorithm"
# img: "https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png"
tags: 
 - "Book"
---

도서 **자바스크립트로 하는 자료 구조와 알고리즘**을 읽으며 정리하는 글 시리즈.

## 빅오 표기법

빅오 표기법은 알고리즘 실행에 있어 가장 **최악의 경우**인 복잡도를 측정한다.

`O(n)` 에서 "n"은 입력의 개수를 나타낸다.

![Big O Complexity Chart](https://github.com/Yeony99/Yeony99/assets/76241233/095b8af4-9e6d-46f6-bf66-cffe375f9087)
<span style="font-size: 13px">이미지 출처: https://www.freecodecamp.org/news/all-you-need-to-know-about-big-o-notation-to-crack-your-next-coding-interview-9d575e7eec4/ <span>

### O(1)

O(1)은 입력의 개수와 무관하다. 따라서 **상수 시간**이라고 부른다.

```javascript
const arr = ['apple', 'banana'];

console.log(arr[0]); 
```

배열의 인덱스, 객체의 key 등으로 접근하는 경우가 O(1) 알고리즘의 예시가 될 수 있다.


### O(n), O(n²), O(n³)

O(n)은 일차시간이다. 입력 개수와 동일하게 실행된다.   


O(n²)은 이차시간이다. 입력의 개수의 제곱으로 실행된다.

```javascript
function foo(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// n이 3일 때, n의 제곱만큼 반복. (3 * 3)
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2
```

마찬가지로 O(n³)은 삼차시간이다. 입력 개수의 세제곱으로 실행된다.


### O(log₂n)

로그 시간 복잡도를 나타낸다.

```javascript
function foo(n) {
    for(let i = 1; i < n; i = i*2) {
        console.log(i)
    }
}

```

예시는 2의 제곱부터 n제곱 까지의 항목을 출력한다.

위 경우에는 2의 제곱 값들을 입력하면 2의 n제곱 만큼 출력된다. (2의 제곱 사이에 있는 값을 입력하면 당연하게도 float 값 결과가 나온다.)

로그 시간 복잡도는 입력 값이 커질 수록 효율이 증가한다.
<br />

## 빅오 표기법 규칙

알고리즘 분석의 목표는 복잡도를 계산해 효율성을 이해하는 것이다. 이를 계산할 때의 유용한 규칙이 있다.

### 계수 법칙

상수를 제거한다. 입력 크기와 연관되지 않는 상수를 무시한다.

O(n)과 O(2n)은 n이 무한대로 향해 갈수록 별 차이가 없다. 임의의 상수 k가 붙는 경우도 마찬가지다. O(n)과 O(n + k)는 차이가 없는 것으로 본다.

따라서 모두 O(n)으로 표기할 수 있다.


### 합의 법칙

O(n)과 O(n)을 더하면 O(2n)이 된다. 하지만 이는 계수법칙에 의해 O(n)으로 귀결된다.


### 곱의 법칙

O(n)과 O(n)을 곱해보자. `n * n`은 n의 제곱이 된다. 따라서 O(n²)이다.    
O(2n)과 O(n)인 경우도, O(2n²)이지만 계수법칙에 의해 O(n²)으로 나타낸다.


### 다항 법칙 (빅오의 k제곱)

다항 법칙은 다항 시간 복잡도가 동일한 다항 차수를 지닌 빅오 표기법을 지님을 나타낸다.    
이게 무슨 의미냐면, k차 반복되면 O(n^k) 가 된다는 것이다.

```javascript
function foo(k) {
    let count = 0;
    for(let i = 0; i < k * k; i++) {
        count += 1;
    }
    return count;
}
```

위의 예는 k차번 반복된다. k * k 이기 때문에 입력 값의 제곱수를 반환한다. 따라서 O(n²)이다.

```javascript
function foo(k) {
    let count = 0;
    for(let i = 0; i < k * k * k; i++) {
        count += 1;
    }
    return count;
}
```

위의 예는 k * k * k 로 세제곱이다. O(n³)으로 나타낸다.

