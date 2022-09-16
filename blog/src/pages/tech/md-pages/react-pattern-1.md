---
title: "리액트 패턴 - 싱글톤 패턴"
date: "2022-09-21"
category: "tech"
slug: "/tech/react-pattern-singleton"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "리액트 패턴"
---

## 시리즈를 시작하며...

[patterns](https://www.patterns.dev/)에 정리된 리액트 프로젝트 패턴을 공부하며 정리하는 글임을 알립니다.  
시리즈 내 모든 글의 출처는 위 사이트를 기반으로 합니다.

별도 참고 자료가 있을 시 해당 자료의 출처만 기재합니다.

## 디자인 패턴이란

디자인 패턴은 소프트웨어 개발 과정에서 발생하는 문제에 해결책을 제시하는 개념입니다. 구현을 직접적으로 제공하지는 않지만, 문제 상황을 최적화된 방법으로 해결할 수 있도록 돕는 컨셉입니다.

## 싱글톤 패턴 (Singleton Pattern)

싱글톤은 **단 한 번만 인스턴스화 가능**하며, **전역(globa)**에서 접근 가능한 클래스를 일컫습니다. <i>Singleton 인스턴스</i>는 앱 전역에서 공유되어, 앱 전역 상태관리에 적합합니다.

### 단 한 번만 인스턴스화 가능

이 말의 의미는 `new` 키워드로 인스턴스 생성을 여러 번 하지 못한다는 의미입니다.

일반적인 인스턴스 생성방법은 이렇습니다.

```javascript
let counter = 0

class Counter {
  getInstance() {
    return this
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

const counter1 = new Counter()
const counter2 = new Counter()

console.log(counter1.getInstance() === counter2.getInstance()) // false
```

이렇게 `new` 키워드로 생성한 인스턴스는 서로 같지 않음을 알 수 있습니다. 인스턴스가 다르다는 것은 같은 레퍼런스를 가지지 않는다는 의미입니다.

그렇다면 동일한 레퍼런스를 가지게 하려면 어떻게 하면 될까요? 여러 방법이 있습니다.

#### instance 변수 만들기

```javascript
let instance // instance 변수 선언
let counter = 0

class Counter {
  constructor() {
    if(instance) { // instance가 존재하면 에러 발생시키기
      throw new Error('인스턴스는 한 번만 만들 수 있습니다!')
    }
  }

  getInstance() {
    return this
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter())
// const counter2 = new Counter() // 에러 발생
```

`constructor` 생성자에 객체 초기화시 instance가 이미 있는지 여부를 확인합니다. 그리고 `Object.freeze`를 통해 객체를 수정할 수 없게 합니다.

인스턴스를 하나만 만들게 강제하는 방식에는 장단점이 있습니다.

* 장점
  * 메모리 공간 절약
* 단점
  * 자바스크립트 언어 자체의 한계점이 있다. 클래스 작성 없이도 객체를 만들 수 있기 때문
  * 일종의 오버 엔지니어링에 해당(JS에서 싱글톤은 안티패턴으로 취급됨)


위의 예제는 `class`로 객체를 생성해 컨트롤하였는데, 자바스크립트는 그냥 `const counter = {}` 라는 간단한 할당으로 객체 리터럴을 만들 수 있습니다. 따라서 위와 같은 패턴은 적합하지는 않습니다.



### 객체 리터럴 사용

```javascript
let count = 0;

const counter = {
  increment() {
    return ++count
  },

  decrement() {
    return --count
  }
};

Object.freeze(counter);
```

`class`로 인스턴스를 생성하는 것보다 훨씬 간편하다고 느껴집니다.


### 테스팅

◆ jest를 사용하는 테스팅

싱글톤 패턴으로 구현된 코드를 테스트하는 것은 조금 까다롭다고 합니다. 인스턴스를 한 번만 생성할 수 있기 때문에, 이 전 





<!-- ◾ [변수 명명 규칙](/tech/let-me-know-js-a-bit-js-variable-naming) 👈 이전 글 보기    -->
