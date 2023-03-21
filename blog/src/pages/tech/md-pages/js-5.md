---
title: "쫌만알자! (5) - 자바스크립트 자료형"
date: "2022-08-24"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-js-data-type"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "쫌만알자"
hide: true
---

## 자료형이란?

자바스크립트는 [동적언어](https://yeonydevlog.tistory.com/40)입니다. 이 말은 런타임 시에 타입이 정해진다는 의미입니다. 간단하게만 알아보겠습니다.

### 컴파일 타임 & 런 타임

#### 컴파일타임(Compile time)이란?
> The compile time is the time from when the program is first loaded until the program is parsed. [참고 : MDN](https://developer.mozilla.org/en-US/docs/Glossary/Compile_time)
* Syntax Error (문법 에러), File Reference Error (파일 참조 에러), 타입 체크 에러 등
* 컴파일러가 컴파일 타임 에러를 발생시키고, 보통 문제가 발생한 소스코드 라인을 알려줍니다.


#### 런타임(Run time)이란?
* 컴파일 과정을 마친 프로그램이 **실행되는 특정한 때**를 의미합니다.
* Null 참조 오류, 메모리 부족 오류, n/0 (0으로 나누는 연산) 오류 등
* 런타임 에러는 프로그램이 실행 중이지만, 의도치 않게 발생하는 에러입니다.


### 자바스크립트는 동적 타입
[MDN](https://developer.mozilla.org/ko/)의 설명을 참고하겠습니다. MDN은 웹 표준 등에 관련된 정보를 문서화한 사이트입니다. 앞으로 쫌만알자 시리즈에 많이 등장할 예정이니 꼭 참고해주세요. <br/>  
자바스크립트는 느슨한 타입(loosely typed)의 동적(dynamic) 언어입니다. **자바스크립트의 변수는 어떤 특정 타입과 연결되지 않으며,** 모든 타입의 값으로 할당(및 재할당)이 가능합니다. 다시 말해 자료형의 구분은 있지만, 변수의 형(type)을 미리 정하지 않는다는 말입니다.   

다른 개발 언어의 경우는 자료형을 명시하고 코드를 작성합니다. Java를 예시로 들어볼까요?

```java
int num = 0; // integer: 정수 타입
String str = "Hello World!"; // string: 문자열 타입
```

이렇게 자료형을 먼저 명시합니다. 반면 자바스크립트의 경우에는 자료형을 적지 않습니다.

```javascript
var num = 10;
var str = 'Hello World!';
```
변수 할당은 다음 글에서 알아보겠습니다.
여기서는 자바스크립트는 느슨하게 작동되는 동적 언어라는 것만 알고 넘어갑시다.

<hr/>

### JavaScript의 Type!
본격적으로 자료형을 알아보죠.

자바스크립트의 타입은 원시 타입<span style="font-size: 0.7rem">(primitive type)</span>과 객체 타입<span style="font-size: 0.7rem">(object/reference type)</span>으로 나뉩니다.   

* 원시 타입
    * [Number 타입](#number-타입)
    * [String 타입](#string-타입)
    * [Boolean 타입](#boolean-타입)
    * [Undefined 타입](#undefined-타입)
    * [Null 타입](#null-타입)
    * [Symbol 타입](#symbol-타입)
    * [BigInt 타입](#bigint-타입)
* [객체 타입](#객체-타입)

자바스크립트는 타입을 명시하지 않는 동적언어인데 왜 자료형을 알아야 할까요?   
자료형에 따라 변수가 차지하는 메모리 공간의 크기도 다르고, 엔진이 해석하는 방식도 달라지기 때문입니다.

각각의 자료형을 살펴봅시다.
<hr/>

#### Number 타입
숫자는 Number와 BigInt 두 가지의 내장 숫자 타입이 있습니다. BigInt는 뒤에서 살펴보구요. Number타입부터 알아봅니다.   

다른 프로그래밍 언어(C, Java 등)은 정수(ex. -1, 0, 1)와 실수(ex. 3.14, 0.15)를 구분해 int, float, double 등 다양한 숫자 타입을 제공합니다.   

하지만 자바스크립트는 Number로 정수와 실수 모두를 취급합니다.   

Number타입은 정수이건 실수이건 **모두 실수로 처리**합니다. 이것을 부동소수점 형식이라고 합니다. 정확한 이름을 굳이 외울 필요는 없습니다. 정수만을 따로 표현하기 위한 자료형이 없고 모두 실수로 처리한다는 것만 기억하면 됩니다.   

```javascript
// 모두 숫자 타입
var integer = 10;
var double = 10.123456;
var float = -10.3;
```


```javascript
console.log(1 === 1.0) // true
```
만약 정수와 실수를 구별해 관리했다면 false가 return 됐을겁니다.

실수와 정수 외에도 숫자 타입은 3가지의 특별한 값도 취급합니다.   

* Infinity : 양의 무한대
* -Infinity : 음의 무한대
* NaN : Not a Number, 산술 연산 불가능

```javascript
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(10 * 'abcd'); // NaN 
```

자바스크립트는 대소문자를 구별하므로 **NaN**을 작성할 때에는 꼭 주의하도록 합시다.

<hr/>

#### String 타입

문자열 타입입니다. String 타입은 말 그대로 텍스트 데이터를 나타낼 때 사용합니다. 16비트 유니코드 문자(UTF-16)으로 구성된 집합으로, 대부분의 언어를 표현할 수 있습니다.   

자바스크립트에서 문자열을 표현하는 3가지 방법이 있습니다.
```javascript
var string;

string = '작은 따옴표 문자열';
string = "큰 따옴표 문자열";
string = `백틱 문자열`;
```

가장 보편적으로 사용하는 방식은 **작은 따옴표(' ')** 방식입니다.    

만약 작은 따옴표나 큰 따옴표를 문자열 내에서 직접 보이게 하고 싶으면 이렇게 작성합니다.

```javascript
string = "큰 따옴표 속 '작은 따옴표'";
string = '작은 따옴표 속 "큰 따옴표"';
```

가장 바깥의 따옴표 속 즉, 문자열 속에 있는 따옴표는 문자로 취급됩니다.

조금 낯설 수 있는 것이 **백틱(`)** 일텐데요. 백틱은 **템플릿 리터럴**이라고 하는 문자열 표기법에 이용됩니다.   
```javascript
var name = 'Yeony';

var template = `Hi, I'm ${name}!` // Hi, I'm Yeony!
```
이렇게 문자열 안에 변수를 집어넣는 템플릿을 만들 수 있습니다. 유용하죠?  

<hr/>


#### Boolean 타입

Boolean 타입은 논리적 참/거짓을 나타내며, **true** 혹은 **false**로 두 가지의 값만 가질 수 있습니다.   
Boolean 타입은 이후 조건문을 배우며 자세히 알아봅시다.

<hr/>

#### Undefined 타입

undefined 타입은 undefined가 유일합니다.   

```javascript
var variable;
console.log(variable) // undefined
```
이렇게 variable에 아무것도 값을 주지 않으면 variable은 어떤 타입과 값을 가질까요?   
정답은 undefined 타입의 undefined 값을 가진다! 입니다.   

**var 키워드**로 변수를 선언만 한 경우 자바스크립트 엔진이 암묵적으로 undefined를 할당해버립니다. undefined의 의미를 생각해보면 "개발자가 변수에 값을 할당해주지 않았다!" 라는 것입니다  

다시 말해 undefined가 반환된다면 개발자가 <u>초기화하지 않은 변수</u>라고 바라볼 수 있습니다.   
만약 변수에 값이 없다는 것을 명시하고 싶다면 **null**을 할당하도록 합시다.

```javascript
var variable = null;
```

#### Null 타입

null 타입의 값 또한 null이 유일합니다.    

앞서 말했다시피 null은 어떤 값이 의도적으로 비어있다는 것을 보여줍니다.


#### Symbol 타입

Symbol 타입은 ES6<span style="font-size: 0.7rem;">(ECMA2015, 15년도에 개정된 JS)</span>에 추가된 타입입니다.   

Symbol은 다른 값과 중복되지 않는 유일무이한 값입니다. 꼭 겹치지 않아야 하는 유일한 Key를 만들어야 할 때 유용하게 사용할 수 있습니다. 

```javascript
var key = Symbol('key'); // Symbol 함수를 호출해 할당

var obj = {}; // 객체 생성

// 객체에 접근할 수 있는 유일무이한 key값을 생성
obj[key] = 'value';

console.log(obj[key]); // value
console.log(obj) // { Symbol(key): "value" }
```

#### BigInt 타입

앞서 Number 타입을 봤는데요. BigInt는 Number와는 다르게 조금 특별한 숫자를 취급합니다.   
Number가 정수, 실수를 표현할 수 있다면 BigInt는 이름대로 아주 큰 숫자를 다루는 타입입니다.   

여기서 <u>아주 큰 숫자 </u>는 얼마일까요?   
당연하겠지만 Number 타입으로 다루지 못하는 범위의 숫자입니다.   

```javascript
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
```

Number 타입으로 나타낼 수 있는 가장 큰 숫자(안전 한계)를 log로 출력해보았습니다.   

BigInt는 숫자 뒤에 **n**을 붙이면 BigInt로 치환됩니다.

```javascript
let num = Number.MAX_SAFE_INTEGER; //  9007199254740991
num = BigInt(num);

console.log(num); // 9007199254740991n


const x = 2n ** 53n; // 9007199254740992n
const y = x + 1n; // 9007199254740993n
```

<hr/>

#### 객체 타입

객체 타입은 여기서 함께 적기에는 굉장히 분량이 길어집니다.    
자바스크립트는 기본적으로 객체 기반의 언어이기 때문에 **자바스크립트의 대부분이 객체**라 말해도 과언이 아닙니다. 앞서 살펴본 자료형 7가지 타입이 아닌 값은 **모두 객체**입니다.   
이후 객체를 좀더 자세히 알아보도록 하겠습니다.   

객체 타입이 궁금하다면 [객체란 무엇일까?](/tech/let-me-know-js-a-bit-js-object) 글을 참고해주세요.

다음 글에서는 변수에 대해 알아보겠습니다.
 
◾ [Node.js와 npm](/tech/let-me-know-js-a-bit-js-node-and-npm) 👈 이전 글 보기   
◾ [변수 사용하기](/tech/let-me-know-js-a-bit-js-variable) 👈 다음 글 보기   