---
title: "쫌만알자! (7) - 변수 명명 규칙"
date: "2022-09-07"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-js-variable-naming"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "쫌만알자"
---

## 변수 이름짓기(명명 규칙, Naming)란?

변수, 상수, 함수 이름들을 **식별자**라고 합니다. 

자바스크립트로 코딩할 때는 식별자들의 명명규칙을 지켜서 코딩하는 것이 좋습니다. 마치 글을 작성할 때 톤앤매너를 맞추는 것과 비슷한 맥락입니다. 

변수명만으로도 어떤 역할을 하는 변수인지 알 수 있는 경우도 많구요, 코드의 통일성, 가독성 또한 높여줍니다.   

앞서 알아본 자료형 분류와 변수/상수 구분에 따라 네이밍 규칙을 알아보겠습니다.


## 변수 명명 규칙

자바스크립트의 변수는 **문자**로 선언해야 합니다.

이 문자에는 알파벳과 UTF-8 언어, $, _ (언더바)가 포함됩니다. 문자 뒤에 붙는 숫자는 허용되나, 숫자로 시작하는 변수는 에러가 발생합니다.

### 관습적인 문자 사용

```javascript
let one = 1;
let 1 = 1; // X 

let $email = document.getElementById('email');
let $router;

let _localVariable = 'test';
```

반드시 그런 것은 아니지만, `$`는 jQuery의 영향으로 DOM(Document Objejct Model, html의 객체 모델)에 접근하는 경우에 많이 사용합니다. 경우에 따라 전역 변수나 public한 변수 앞에 붙이기도 합니다.   

`_` (언더바, underscore)는 보통 특정 범위 내에서만 사용, 실행되는 변수나 메소드 앞에 붙여 사용합니다.    


`$`나 `_`를 붙이는 것은 전적으로 자유고, 그저 관습적으로 사용하는 것뿐입니다. 변수에 뭐가 붙었는지에 따라 자바스크립트 엔진이 제어하는 경우는 없습니다.   



### 카멜 케이스 (lowerCamelCase)

자바스크립트에서 가장 흔하게 적용되는 명명 규칙입니다.   

**카멜**이라는 단어에서 알아챈 분들도 계실겁니다. 카멜 케이스는 낙타 모습처럼 굴곡이 있는 형태로 변수의 이름을 작성하는 규칙입니다.   

```javascript
let userName = 'Yeony';
let totalScore = 30;
```

보통 변수를 선언할 때 그냥 **name**이나 **score**보다는 해당 변수를 명확하기 위해 수식(꾸며주는 말)단어를 덧붙여줍니다. 그냥 **name**이라고만 하면 사용자명인지, 제품명인지, 별명인지 알 길이 없기 때문이죠. 여러 단어를 조합해서 만드는 것이 좋습니다.

카멜 케이스로 변수명을 지을 때에는 단어와 단어가 구분될 때 2번째 단어부터 처음을 대문자(Uppercase)로 적어줍니다.


### Boolean 형 

```javascript
let isSuccess = false; 

// 동작이 성공적으로 수행된 후
...

isSuccess = true;

// 이후 동작
```

Boolean 형은 보통 `is-`로 시작하는 변수명으로 작성합니다. 마치 질문하는 것 같죠?   
is - success? > No 라면 false를 할당하고, Yes라면 true를 할당하는 방식입니다.


### String 형

```javascript
let name1 = 'Nayeon';
let name2 = 'Kim';
```

위와 같이 숫자를 변수 뒤에 붙일 수 있습니다. 하지만 숫자로 표기하기 보다는 각각 변수의 특징을 선언해주는 것이 좋습니다.

```javascript
let firstName = 'Nayeon';
let surName = 'Kim';
```


## 상수 명명 규칙

상수는 **변하지 않는** 값을 저장할 때 사용합니다. 따라서 다른 변수와는 확실히 구분되도록 대개 대문자로 작성합니다.   

### 대문자 (UPPERCASE)
```javascript
const TAX = 10.27; 
```


### 대문자 + 스네이크 케이스 (UPPER_SNAKE_CASE)

여러 단어를 조합해 만들 때는 대문자와 스네이크 케이스를 조합해 사용합니다.   
뱀이 꾸물거리는 것 같은 모양이라 이런 이름이 붙었습니다.

```javascript
let mathScore = 78;
let engScore = 48;
const FINAL_SCORE = mathScore + engScore;
```

함수 식별자의 명명규칙은 함수가 뭔지 안 이후에 살펴보겠습니다.

다음 글에서는 자바스크립트의 예약어에 대해 알아보겠습니다.

◾ [자바스크립트 자료형](/tech/let-me-know-js-a-bit-js-data-type)  👈 이전 글 보기   
<!-- ◾ [브라우저 JavaScript 개발환경](/tech/let-me-know-js-a-bit-setting-devtool/) 👈 다음 글 보기    -->`