---
title: "[Flutter] Text Widget 사용하기"
date: "2022-09-22"
category: "tech"
slug: "/tech/flutter-text-widget"
# img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "스터디 Flutter"
---

<!-- 📍 텍스트에 대한 다양한 반응의 종류를 알고 이해한다.

📍 constraints의 의미를 알고 적절하게 사용한다.

📍 tutorial app을 만들어보며 배운 내용을 정리한다. -->

## Text Widget

Flutter에서 아주 흔하게 사용되는 위젯 중 하나가 `Text` 위젯입니다.

Text 위젯은 이름에서부터 알 수 있듯이 텍스트를 화면에 그리는 위젯입니다. 뿐만 아니라 텍스트에 style을 입힐 수도 있습니다.

### Text Widget 작성하기

기본적인 Text 위젯은 이렇게 작성할 수 있습니다.

```dart
const Text('Hello World!')
```

여기에 style을 입히고 싶다면 `style` 속성을 지정하면 됩니다.

```dart
Text(
  'Hello World!',
  style: TextStyle(fontSize: 20),
)
```

#### TextStyle class

Flutter에는 Text를 스타일링할 수 있는 `TextStyle` class가 존재합니다.

TextStyle class는 `immutable`하다고 설명하고 있는데요. 이 말은 사용할 때 명시한 값 외에는 런타임 시 변하게 할 수 없다는 의미입니다.

TextStyle 클래스를 통해 지정할 수 있는 속성은 아래 링크에서 확인할 수 있습니다.

[TextStyle class](https://api.flutter.dev/flutter/painting/TextStyle-class.html)

<br/>

---

### RichText Widget

`Text` 위젯은 하나의 문장을 작성할 수 있었는데요. 텍스트를 나누어 스타일링하고 싶거나 여러 개의 텍스트를 합쳐서 보여주고 싶다면 `RichText`를 사용하면 됩니다.

```dart
RichText(
  text: TextSpan(
    text: 'Hello ',
    style: DefaultTextStyle.of(context).style,
    children: const <TextSpan>[
      TextSpan(text: 'bold', style: TextStyle(fontWeight: FontWeight.bold)),
      TextSpan(text: ' world!'),
    ],
  ),
)
```

`RichText` 안에 들어가는 여러 개의 텍스트들은 `TextSpan`을 사용해 보여집니다.

◾ [[Flutter] Layout Widget 정리](/tech/flutter-layout-widget) 👈 이전 글 보기  
◾ [[Flutter] Constraints 이해하기](/tech/flutter-understanding-constraints) 👈 다음 글 보기
