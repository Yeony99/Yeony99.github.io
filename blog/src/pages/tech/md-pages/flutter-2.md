---
title: "[Flutter] Widget 다루기"
date: "2022-09-10"
category: "tech"
slug: "/tech/flutter-what-is-widget"
img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "스터디 Flutter"
hide: true
---

## 모든 것이 Widget인 Flutter

**widget**이라고만 하면 인터페이스 요소 하나로 받아들일 수 있습니다.

ppt로 발표자료를 만들어 보신 적이 있다면 이해하기 쉽습니다.  
큰제목은 48포인트 글자 크기가 설정된 텍스트 상자에, 여러 이미지나 도형은 그룹화를 해 동일한 간격을 두고 배치하기도 합니다.  
메뉴라든가, 텍스트 상자 등 ppt를 만들 때 네모 상자를 그려 만드는 것들을 위젯이라고 볼 수 있죠.

플러터도 똑같습니다. 플러터에선 **모든 것이 위젯**이라 생각하면 됩니다.
ppt예시를 위에서 들었는데요. 플러터의 위젯도 비슷합니다.

플러터에서는 `Text`, `Container`, 가로 세로 정렬을 하는 `Row`, `Column` 등이 모두 **위젯**입니다.

---

<br/>

## Widget의 구분

플러터의 Widget은 2가지로 구분됩니다.

- State-full Widget
- Stateless Widget

별도의 해석이 없더라도 **상태**의 여부에 따라 위젯이 구분됨을 알 수 있습니다.

### 상태(state)란?

그러면 위젯의 상태란 무엇일까요?

[공식 docs](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html)에 따르면 **State**란,

1. 위젯이 빌드될 때 동기적으로 읽을 수 있는 정보
2. 위젯의 생명주기가 끝나기 전까지 변경될 수 있는 정보

이렇게 두 가지를 의미합니다. 결국은 어플리케이션에서 보여지는 모든 **동적인 데이터**를 뜻하죠.

예시를 들어보겠습니다.

- 어플 시작 화면의 어플 이름 표시 텍스트
- 로그인된 회원의 닉네임 표시 텍스트

어떤 게 동적인 데이터일까요? 후자라고 생각하셨죠?  
로그인된 사용자의 닉네임은 사용자에 따라서, 혹은 로그인 여부에 따라 보여지는 텍스트가 다를테니까요.

#### App State / Widget State

이런 데이터는 전역(global)/지역(local)로 나뉘어 관리할 수 있습니다.

- App state : 앱 전체에 걸쳐 사용되며, 여러 위젯에 반복되어 사용될 수 있는 상태 데이터
- Widget state : 특정 위젯 내에서만 사용되며, 공유나 반환할 필요가 없는 상태 데이터

이런 데이터 처리를 플러터에서는 `State-full Widget`과 `Stateless Widget`으로 구분해 작성하는 것입니다.

---

<br/>

### State-full Widget

State-full 위젯은 상태 변화를 감지하고, 변화가 있으면 다시 빌드하는 위젯입니다.

플러터 프로젝트를 처음 시작하면 볼 수 있는 Flutter Demo Home Page 코드를 보겠습니다.

```dart
// main.dart 파일

// 머티리얼 스타일 import
import 'package:flutter/material.dart';

// 앱 실행부
void main() {
  runApp(MyApp());
}

// StatelessWidget
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}


// StatefulWidget -- 1)
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}


// State 객체 -- 2)
class _MyHomePageState extends State<MyHomePage> {

  // 변수 선언 및 초기화
  int _counter = 0;

  // 카운터 증가함수
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }


  // 위젯 구현부
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        //...
    );
  }
}

```

위 코드에서 `MyHomePage` class가 `StatefulWidget`을 상속(extends)받은 것을 볼 수 있습니다.  
그리고 `_counter` 변수를 이용해 **State가 변화**할 때마다 다시 빌드합니다.

#### StatefulWidget의 구성

StatefulWidget은 2가지 클래스로 구성되어 있습니다.

- 변하는 부분
- 변하지 않는 부분

위 예시코드에서 1번과 2번으로 표시해 둔 곳이 그렇습니다.

```dart
// StatefulWidget -- 1)
class MyHomePage extends StatefulWidget {
  //...
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

// State 객체 -- 2)
class _MyHomePageState extends State<MyHomePage> {
  //...
}
```

플러터는 본래 React에서 영감을 받은 프레임워크인데요. React의 특징을 간단하게 말하면 **변화하는 부분만 교체한다**입니다.

다시 말해 플러터에서 `StatefulWidget`을 사용할 때, 변하는 부분과 변하지 않는 부분을 나누어 2개의 `class`를 작성하게 되는 것이죠.

### Stateless Widget

반대로 상태 Stateless Widget은 상태 변화에 반응하지 않고, 위젯의 라이프사이클 동안 정적인 상태를 유지합니다.

말 그대로 State가 없는 위젯이지만, 그렇다고 Data가 없는 것은 아닙니다. 정확히는 **변경될 데이터가 없다**고 이해할 수 있습니다.

StatelessWidget은 이렇게 작성합니다.

```dart
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo', // 정적 데이터
      theme: ThemeData(
        primarySwatch: Colors.blue, // 정적 데이터
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'), // 정적 데이터
    );
  }
}
```

변할 State가 없으니 변하지 않는 부분만 작성하면 됩니다.

---

<br/>

## 기본 Widget 정리

플러터에서는 모든 게 위젯입니다.

다만 자주 쓰이고 기본적인 위젯만 알아보도록 합시다.

참고 : [Basic Widget](https://docs.flutter.dev/development/ui/widgets/basics)

### Container

`Container` 위젯은 다른 자식 위젯들을 감쌀 수 있는(wrap) 위젯입니다.

Container위젯을 사용할 때 다음과 같은 옵션들을 정의할 수 있습니다.

- alignment : 정렬
- constraints : 최대최소 너비, 높이 등을 제약
- padding : 내용과 테두리 사이의 간격 지정
- color : 컨테이너의 색상 지정
- transform : 변화되는 모션 지정(화면 전환 효과)
- child: 자식 위젯

[Container Widget](https://api.flutter.dev/flutter/widgets/Container-class.html)

### Row & Column

`Row` 위젯은 **children** 프로퍼티에 지정된 자식 위젯들을 가로로 배열하는 위젯입니다.

플러터 공식문서에서는 자식 위젯이 여럿 있을 때 사용하는 것을 권장합니다.

- children : List<Widget>
- derection : 주축(Axis)으로 사용할 방향

[Row Widget](https://api.flutter.dev/flutter/widgets/Row-class.html)

`Row`와 `Column`이 상대되는 개념인 것을 이미 아셨으리라고 봅니다.

`Column` 위젯은 자식 위젯들을 수직으로 배열하는 위젯입니다.

[Column Widget](https://api.flutter.dev/flutter/widgets/Column-class.html)

### Text

`Text` 위젯은 말 그대로 문자를 표시하는 위젯입니다.

단일한 스타일의 텍스트 문자열을 보여주고, 레이아웃에 따라 여러 줄로 표시될 수도 있습니다.

- style : Text의 스타일 명시. 생략 시 DefaultTextStyle로 자동 지정
- textAlign : 정렬
- overflow: 레이아웃보다 문자열의 길이가 더 길 때 어떻게 처리할 지 명시

[Text Widget](https://api.flutter.dev/flutter/widgets/Text-class.html)

<!--
📍 Flutter의 핵심 Architecture를 이루는 Widget이 무엇이고, 어떤 구조로 앱을 구성하는지 이해한다.

📍 Flutter에서 Layout을 어떻게 만들어 나가는지 이해한다.

📍 Flutter의 기본적인 Layout Widget들의 사용법을 숙지하고 실습해본다. -->

◾ [[Flutter] Dart 기본 문법](/tech/flutter-dart-and-flutter) 👈 이전 글 보기  
◾ [[Flutter] Layout Widget 정리](/tech/flutter-layout-widget) 👈 다음 글 보기
