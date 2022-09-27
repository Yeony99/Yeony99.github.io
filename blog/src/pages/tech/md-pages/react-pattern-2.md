---
title: "프록시 패턴"
date: "2022-09-22"
category: "tech"
slug: "/tech/react-pattern-proxy"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "Patterns"
---

## 프록시 패턴 (Proxy Pattern)

`proxy` 단어의 뜻은 **대리인**입니다.

![Proxy 단어 뜻 - 네이버 사전](https://user-images.githubusercontent.com/76241233/191401927-69d5773e-a6ef-467f-96b8-5aa3ee883097.png)

<div style="font-size: 0.7rem; text-align: end">출처 : 네이버 사전</div><br/>

Proxy 패턴은 실제 객체에 직접 접근하는 것이 아닌, 실 객체를 대리하는 객체인 Proxy 객체를 다루는 패턴입니다.

### Proxy 객체와 상호작용하기

먼저 객체를 만들고 그 객체의 Proxy 객체를 만들어봅시다.

```javascript
const person = {
  name: "yeony",
  age: 24,
  job: "frontend developer",
}

//Proxy 객체
const personProxy = new Proxy(person, {})
```

`Proxy`객체는 프록시 인스턴스 생성(new 키워드)으로 쉽게 만들 수 있습니다.

### Proxy 객체 살펴보기

`Proxy` 클래스의 구조를 살펴봅시다.

```javascript
new Proxy(target, handler)
```

`Proxy`의 첫 번째 매개변수는 프록시객체로 만들 타깃 객체입니다.  
두 번째 매개변수는 `핸들러`로, proxy의 행동을 정의합니다.

핸들러 객체에서 인터랙션 동작을 정의하고, 메소드를 추가할 수 있습니다.

가장 흔히 사용되는 메소드인 `get`과 `set` 메소드를 보겠습니다.

- get : 프로퍼티에 접근하려 할 때 실행
- set : 프로퍼티에 값을 수정하려 할 때 실행

```javascript
const person = {
  name: "yeony",
  age: 24,
  job: "frontend developer",
}

//Proxy 객체
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    obj[prop] = value
    return true
  },
})

personProxy.name = "Nayeon"
```

이렇게 되면 `personProxy`를 통해 `person`객체가 수정됩니다.

### 유효성 검사

이러한 프록시 패턴은 유효성 검사를 구현할 때 유용하게 사용할 수 있습니다.

```javascript
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    // 원본 person 객체에 key가 존재하지 않으면 접근할 수 없도록 방지
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      )
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`)
    }
  },
  set: (obj, prop, value) => {
    // 타입이나 제약을 추가하여 변경 시 안정성 보장
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`)
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`)
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
      obj[prop] = value
    }
  },
})
```

원본 객체에 존재하지 않는 key로 접근하거나, 예상하지 못한 타입의 값을 할당하려는 경우에 proxy객체를 통해 방지할 수 있습니다. 따라서 실수를 예방함으로써 **데이터의 안정성**을 관리할 수 있는 패턴이 됩니다.

### Reflect

자바스크립트에서는 [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 라는 빌트인 객체를 제공합니다.

`Reflect`는 중간에서 가로챌 수 있는 자바스크립트 작업에 대한 메소드를 제공합니다. 메소드 종류는 `Proxy`와 동일합니다. 단, 함수 객체가 아니라 생성자로 사용은 불가능합니다.

`Reflect`는 이렇게 사용합니다

```javascript
// Proxy
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${obj[prop]}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    obj[prop] = value
  },
})

// Reflect 사용
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    Reflect.set(obj, prop, value)
  },
})
```

`obj[prop] = value` 형태가 아니라, `Reflect.get(obj, prop)`, `Reflect.set(obj, prop, value)`의 형태로 작성할 수 있습니다.

## 결론

Proxy는 객체의 동작을 커스터마이징할 수 있는 유용한 기능입니다. 유효성 검사, formatting, 알림, 디버깅 등에 유용합니다.

핸들러 객체에서 Proxy를 과도하게 사용하면 성능이 저하될 수 있습니다.
