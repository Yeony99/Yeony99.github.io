---
title: "쫌만알자! (8) - 자바스크립트 예약어 모음"
date: "2022-09-14"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-js-reserved-words"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "쫌만알자"
---

## 예약어란?

예약어(Reserved Words)란 자바스크립트 엔진이 **이 단어는 이 뜻으로만 해석하겠다**라고 정해놓은 단어입니다.

예약어는 변수(상수), 함수, 클래스 등 식별자 네이밍 시에 사용할 수 없습니다.

이런 예약어는 자바스크립트 코드 어디서든 식별자로 사용할 수 없는 경우도 있고, 상황에 따라 예약어로 취급되는 단어도 있습니다.

## 예약어 목록

예약어에는 지난 글에서 살펴봤던 키워드인 var, const도 포함됩니다.
`let` 키워드는 엄격모드에서만 예약어로 취급됩니다.

<!-- 예약어 분류하기 -->

### 반복 관련 예약어

- for
  - 반복 (loop)를 수행할 문
- break
  - 문
  - 반복문, switch문, label문의 수행을 중지하고 다음 프로그램으로 넘어가게 함
- do ... while
  - 반복문
  - 조건이 true가 될 때까지 반복을 수행
  - do 블록 속 코드는 무조건 한 번 이상 실행
- switch ~ case
  - 특정 표현식을 평가해 case절과 일치하는 명령을 수행
- continue
  - 반복되는 loop 속에서 현재 반복에서의 명령을 종료하고 다음 반복으로 넘겨 반복 루프 실행

### 조건 관련 예약어

- if ... else
  - 지정된 조건이 truthy 인 경우 실행
  - 조건이 falsy 라면 다른 조건절 속 코드 실행
- true
- false

### 클래스 및 함수 관련 예약어

- class
  - 선언
  - 프로토타입 기반으로 상속
- super
  - 키워드
  - 객체 리터럴 혹은 클래스의 [[Prototype]] 속성에 액세스, 슈퍼 클래스(==부모 클래스)의 생성자 호출 시 사용
- extends
  - 다른 클래스의 자식 클래스(==서브 클래스)를 생성하기 위해 사용
  - 클래스 선언, 클래스 표현식에 사용
- function

  - 선언
  -

- new
- void
- catch
- throw

### 객체 관련 예약어

- instanceof
  - 연산자
  - prototype 생성자 속성이 객체의 프로토타입 체인에 있는지 확인(true/false)
- delete
  - 연산자
  - 객체에서 특정 속성을 제거 (key로 접근)
- in
  - 지정된 속성이 특정 객체(혹은 프로토타입)에 있는지 확인(true/false)

### 내보내기 / 불러오기 예약어

- export
- import
- default

### 엄격모드(strict mode) 시 예약어

- implements
- interface
- package
- private
- protected
- public

### 그 외

- finally
- null
- static
- this
- void
- with
- yield

---

## 특별한 의미를 가지는 식별자

여기서는 예약어는 아니지만, 특정한 코드 맥락에서 특별한 의미를 가지는 단어들을 알아봅니다.

- arguments (엄격모드에서 식별자로 사용 불가)
- async
- await : async 함수 바디와 함께 있을 때만 예약어
- eval (엄격모드에서 식별자로 사용 불가)
- get
- set
