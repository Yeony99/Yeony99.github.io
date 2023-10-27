---
title: "[JS 자료구조 & 알고리즘 (2)] 자바스크립트 숫자"
date: "2023-10-27"
category: "tech"
slug: "/tech/js-algorithm-2"
# img: "https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png"
tags: 
 - "Book"
---

도서 **자바스크립트로 하는 자료 구조와 알고리즘**을 읽으며 정리하는 글 시리즈.   
2장은 var, let 등 변수 선언의 호이스팅과 TDZ와 관련된 내용이라 3장을 이어서 정리한다.

## 자바스크립트의 숫자 체계

자바스크립트로 고도의 수학적 연산이 필요한 작업을 한 적이 별로 없는 듯 하다. 적당히 `Math.round()` 나 `toFixed()` 처리 정도? 자바스크립트가 어떠한 숫자 체계를 가지고 있는지 이 파트를 통해 알 수 있었다.

자바스크립트는 **64비트 부동소수점** 표현을 사용한다. 

64개의 자리를 가지고 있다는 의미다. 각각의 자리는 세 가지 부분으로 나뉜다.   
부호 비트(63번째 비트)가 1이면 해당 수는 음수다. 다음 11개 비트(62번째에서 52번째 비트)는 지수 값 e를 나타낸다. 그리고 나머지 52비트가 소수 값을 나타낸다.

여기서 자바스크립트의 부동소수점 체계가 반올림 오류를 일으킬 수 있다.

```javascript
console.log(0.1 + 0.2 === 0.3) // false
```

놀랍게도 `0.1 + 0.2 === 0.3` 비교 결과는 `false`다.  

파이썬에서도 한 번 실행해봤다.

```python
print(1/10 + 2/10) # 0.30000000000000004
print(0.1 + 0.2 == 0.3) # False
```

확실히 이상한 결과가 나온다. 이렇게 나오는 이유는 이진 표기법으로 십진수를 표현할 때, 무한 개의 수가 필요한 경우가 많기 때문이다. 
`0.1`을 계산하려 할 때 `1/10` 나눗셈은 끝나지 않고 계속 진행되고, 소수 부분이 무한정 생기게 된다. 


## 자바스크립트 숫자 객체

이런 문제들을 해결할 수 있도록 자바스크립트에는 내장 `Number` 객체 속성들이 있다.

### 정수 반올림

* Math.floor : 가장 가까운 정수로 내림
* Math.round : 가장 가까운 정수로 반올림
* Math.ceil : 가장 가까운 정수로 올림

### Number.EPSILON

**EPSILON**은 그리스어의 알파벳으로  ϵ 또는 ε로 나타낸다. 수학에서는 보통 epslion을 적은 양이나 무한대로 갔을 때 0으로 취급될 수 있는 용어를 나타낼 때 사용한다고 한다.

자바스크립트에서도 `Number.EPSILON`을 제공한다. [MDN Number EPSILON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON#testing_equality)의 예제를 살펴보자.

```javascript
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true

```

"floating point numbers should never be compared with `===`". 소수점을 가지는 숫자들을 비교할 때 `===` 연산자를 사용하지 말고, 두 숫자 사이가 충분하게 가까울 경우 동일한 것으로 간주하는 것이다.   

`Number.EPSILON`을 사용하면 이런 오류를 어느정도 커버할 수 있다.   


다만 10³이 넘어가는 경우에는 적합하지 않다고 한다.


### Number.MAX_SAFE_INTEGER

가장 큰 정수를 반환한다. 가장 크기 때문에 정수를 더한 값으로 비교해도 모두 같은 값으로 인식한다.


```javascript
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER // true
```

다만 부동소수점과 함께 사용하면 에러가 발생한다.

```javascript
Number.MAX_SAFE_INTEGER + 0.1 === Number.MAX_SAFE_INTEGER // false
```


### Number.MAX_VALUE

가장 큰 부동소수점을 반환한다. `Number.MAX_SAFE_INTEGER`와는 달리 부동소수점에서도 잘 동작한다.

### Number.MIN_SAFE_INTEGER

가장 작은 음의 정수를 반환한다. 부동소수점과 함께 사용하면 마찬가지로 에러가 발생한다.


### Number.MIN_VALUE

가장 작은 부동소수점을 반환한다. **가장 작은 부동소수점** 이기 때문에 음수가 아니다. 0에 가장 가까운 부동소수점이기 때문에, 아래와 같이 동작할 수 있다.

```javascript
Number.MIN_VALUE - 1 == -1 // true
```

`0 - 1 == -1` 의 결과가 true 인 것과 마찬가지로 동작한다.


### 무한

양의 무한대 `Infinity`와 음의 무한대 `-Infinity`가 있다. 

`Number.MAX_SAFE_INTEGER`보다 큰 유일한 수가 `Infinity`이고, 마찬가지로 `Number.MIN_SAFE_INTEGER`보다 작은 유일한 수가 `-Infinity`다. 


### 랜덤

`Math.random()` 은 0과 1사이의 부동소수점을 무작위로 반환한다. 