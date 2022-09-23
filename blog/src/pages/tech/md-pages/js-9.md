---
title: "쫌만알자! (9) - 값, 식, 문"
date: "2022-09-21"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-js-value-expression-statement"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "쫌만알자"
---

## 값, 식, 문

**값을 할당한다** 라는 말을 이전 글에서 자주 사용했습니다.

값은 무엇일까요? 자바스크립트 뿐 아니라 값은 프로그래밍 전반에서 사용하는 용어입니다.

값(value)과 식(expression), 문(statement)의 차이에 대해서 알아봅시다.

### 값

먼저 값부터 알아봅니다.

값은 식(=표현식, expression)이 평가되고 생성된 결과**값**입니다.

```javascript
10 + 100 // 110
```

식이 평가되어 값이 생성되었습니다.

변수에 할당해 볼까요?

```javascript
let num = 10 + 100
```

`10 + 100`이라는 식이 평가되어 `110`이라는 값이 할당됩니다.

---

<br/>

### 표현식

표현식은 값으로 여겨지는 문(statement)입니다.

표현식이 평가되면 새로운 값을 만들거나 혹은 기존의 값을 참조합니다. 이런 연산과정을 **평가(evaluate)**라고 합니다.

```javascript
let valueNum = 10 // 선언/할당문
let expressionNum = 10 + 10 // 표현식, 선언/할당문

valueNum * 10 // 표현식
valueNum - 100 // 표현식

console.log(valueNum) // 10
console.log(expressionNum) // 20
```

위 `valueNum` 변수는 아무리 표현식을 작성한다 하더라도 값에 할당하지 않았기 때문에 여전히 처음 할당된 값인 `10`인 것을 볼 수 있습니다. 변수 식별자를 참조하는 것은 값을 생성하진 않지만 값을 평가하므로 `value * 10`은 표현식입니다.

반면 `expressionNum`은 **표현식이 평가된 결과**가 할당되어 `20`이라는 값이 반영되었습니다.

따라서 식이란, **값으로 평가될 수 있는 모든 문**입니다.

값으로 평가된다는 말을 다시 한 번 살펴봅시다.

```javascript
1 + 2 == 3 // true
```

좌항 `1+2`는 표현식인데, 값과 동등하다고 결과가 나옵니다. 표현식과 표현식이 평가된 결과(=값)은 **동치**입니다.

이 말은 값이 위치할 수 있는 곳에 표현식이 있을 수 있다는 뜻입니다.

---

<br/>

### 문

문은 기본적으로 어떤 태스크를 수행합니다. 프로그램 실행의 최소 단위죠. 무언가를 실행하라고 컴퓨터에게 지시하기 때문에 **명령문**이라고도 불립니다.

문들이 모여 프고그램이 되고, 이 문을 잘 작성하고 나열하는 것이 프로그래밍이 됩니다.

자바스크립트의 문은 앞서 살펴본 예약어에 나온 것들이 있습니다. 종류는 선언문, 할당문, 조건문, 반복문 등으로 구분할 수 있습니다.

다시 한번 살펴봅시다.

```javascript
// 선언문
let num

// 할당문
num = 100

// 함수 선언문
function foo() {}

// 조건문
if (num > 1) {
  console.log("1보다 큰 수!")
}

// 반복문
for (let i = 0; i < num; i++) {
  console.log(i)
}
```

이 외에도

- do ... while
- switch ~ case ... default
- debugger

이런 문들이 있습니다.

---

<br/>

## 문과 표현식의 구분

표현식과 문의 구분이 애매모호하다고 느끼셨을 수 있습니다.

```javascript
let num // 선언문. 값으로 평가될 수 없음

num = 1 + 1 // 값으로 표현되는 표현식이면서도 할당문
```

위 예제처럼 표현식이 문의 일부가 될 수도 있고, 표현식이 문 자체일 수도 있기 때문입니다.

그렇다면 어떻게 이 둘을 구분하면 좋을까요?

답은 간단합니다. **표현식은 값으로 평가**될 수 있다 하였죠? 변수에 할당해보면 됩니다.

```javascript
const alwaysTrue = true;
let foo = if(alwaysTrue) {console.log('HI')}; // Uncaught SyntaxError: Unexpected token 'if'
```

`if`는 문이기 때문에 변수에 할당할 수 없습니다.

에러 메시지를 보면 `Uncaught SyntaxError: Unexpected token 'if'` 라고 뜨는데요. 여기서 **token**이라는 게 문을 구성하는 최소단위 요소입니다.

`let score = 10 + 20`이라는 문에서는 `let`, `score`, `=`, `10`, `+`, `20`이 각각의 토큰입니다.

또 다른 예제를 살펴볼게요.

```javascript
// 선언문
let x

x = 100 // 할당문이자 표현식
```

`x = 100`은 표현식입니다. 하지만 할당되는 **값**이죠. 따라서 값처럼 사용할 수 있습니다.

심지어 이런 모습도 가능합니다.

```javascript
var x = (y = 10)

console.log(x) // 10
console.log(y) // 10
```

도대체 무슨 코드인가 싶죠? 이 코드는 아래코드의 축약형입니다.

```javascript
y = 10 // y는 글로벌 변수
var x = y
```

다만 변수를 이런 식으로 할당하는 건 글로벌 변수가 되는 등의 위험이 존재하고, 또한 읽기 쉬운 코드가 아니기에 추천하진 않습니다.

이 밖에도 **함수 표현식**이 있습니다. 함수는 함수 선언식과 함수 표현식으로 나뉘는데요.

```javascript
// 함수 선언식
function foo() {
  //...
}

// 함수 표현식
let bar = function () {
  //...
}
```

이 둘의 차이는 **호이스팅**입니다. 선언식은 호이스팅에 영향을 받지만, 표현식은 영향받지 않습니다.  
함수에 대해서는 이후에 좀더 자세히 살펴보도록 하겠습니다.

다음 글에서는 자바스크립트의 연산자에 대해 알아보도록 하겠습니다.

◾ [변수 명명 규칙](/tech/let-me-know-js-a-bit-js-variable-naming) 👈 이전 글 보기  
◾ [자바스크립트 연산자](/tech/let-me-know-js-a-bit-js-value-expression-statement) 👈 다음 글 보기
