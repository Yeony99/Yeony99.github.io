---
title: "[Flutter] Layout Widget 정리"
date: "2022-09-16"
category: "tech"
slug: "/tech/flutter-layout-widget"
# img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "스터디 Flutter"
---

<!--
📍 어떤 Layout Widget들이 있고, 어떤 역할인지 빠르게 익힌다.

📍 code lab을 공부하며 직접 배운 내용을 적용해본다. -->

Flutter에서는 모든 것이 위젯입니다. Layout도 위젯을 통해 구성할 수 있습니다.

Flutter 레이아웃 위젯은 2가지 유형이 있습니다.

- Single-child layout
- Multi-child layout

## Single-child layout

먼저 Signle-child layout은 이름에서 알 수 있듯이, 하나의 자식(하위) 위젯만 가질 수 있습니다.

플러터의 위젯은 정말 많기 때문에 일부 필수적인 위젯만 알아보도록 하겠습니다.

### Container

`Container`는 크기(height, width), 배경색, 위치 지정 등의 옵션을 제공하는 위젯입니다.

```dart
Container(
  height: 200.0,
  width: double.infinity, // 스크린에 맞춰 확장
  padding: cosnt Edgeinsets.all(7.0),
  color: Colors.red,
  child: Center(
    //...
  ),
),
```

### Padding

`Padding`은 자식 위젯에 패딩을 추가합니다.

padding은 여백을 의미하는데요. 테두리를 기준으로 컨텐츠 안쪽의 여백을 의미합니다.

![Flutter Padding](https://user-images.githubusercontent.com/76241233/190837580-e3d14f06-6d2b-4faa-8f7f-61a79434fb99.png)

```dart
Padding(
  padding: EdgeInsets.all(10.0),
  child: Container(
    //...
  ),
),
```

### Center

`Center`는 이름 그대로 자식 위젯을 가운데에 위치시킬 수 있는 위젯입니다.

```dart
Center(
  child: //...
),
```

### Align

`Align`은 자식 위젯의 위치를 세밀하게 지정할 수 있습니다.

```dart
Align(
  alignment: Alignment.bottomCenter,
  child: const Container(
    //...
  ),
),
```

- Alignment.topLeft
- Alignment.topCenter
- Alignment.topRight
- Alignment.bottomLeft
- Alignment.bottomCenter
- Alignment.bottomRight
- Alignment.center
- Alignment.centerLeft
- Alignment.centerRight
- Alignment(x, y)
  ![Aligment coordinate](https://user-images.githubusercontent.com/76241233/190838139-0a0828c1-8e49-4678-a8e9-4795dbdc38fe.png)

마지막 Alignment를 사용해 x, y 좌표를 기준으로 값을 입력하면 해당 위치에 자식 위젯이 자리잡습니다. 다만 이름이 명확한(상수로 취급되는) 다른 속성들을 사용하는 걸 권장한다고 합니다.

### SizedBox

`SizedBox`는 height, width를 지정할 수 있는 위젯입니다.

만약 부모 위젯이 SideBox위젯의 크기를 제한하는 위젯이거나, 다른 SizedBox일 경우에는 자식 SizedBox위젯의 height, width값이 무시됩니다.

```dart
SizedBox(
  height: 300.0,
  width: 300.0,
  child: const Container(
    //...
  ),
),
```

### AspectRatio

`AspectRatio`는 16:9와 같은 비율을 지정할 수 있게 하는 위젯입니다.

정확한 크기와는 관계없이 지정된 비율(종횡비)로 자식 위젯의 비율을 유지합니다.

```dart
AspectRatio(
  aspectRatio: 16 / 9,
  child: const Container(
    //...
  ),
),
```

### Baseline

`Baseline`은 자식 기준선에 따라 자식의 위치를 지정하는 위젯입니다.

```dart
Center(
  child: const Container(
    height: 200,
    width: 200,
    color: Colors.blue,
    child: Baseline(
      baseline: 20.0, // 기준선 범위 지정
      baselineType: TextBaseline.alphabetic,
      child: const Container(
        height: 50,
        width: 50,
        color: Colors.red,
      ),
    ),
  ),
),
```

![Flutter Baseline](https://user-images.githubusercontent.com/76241233/190838738-4da461be-319f-4d74-bc4d-0c74f01e1bab.png)

baseline 속성을 20.0으로 주니 부모 위젯의 상위부터 20까지 가상의 기준선이 그어진 겁니다. 그 기준선 위부터 자식 위젯이 위치하게 됩니다. 위 이미지에서는 자식 위젯이 남은 부모위젯의 공간(20.0)보다 높이(50.0)가 길죠? 따라서 부모 위젯을 벗어나는 모양으로 그려진 겁니다.

### ConstrainedBox

`ConstrainedBox`는 자식에 추가적인 제약사항을 거는 위젯입니다.

```dart
ConstrainedBox(
  constraints: const BoxConstraints.expand(),
  child: const Container(
    //...
  ),
),
```

<br>

---

## Multi-child layout

Multi-child layout은 자식 위젯을 여러 개 가질 수 있습니다.

### Row

`Row` 위젯은 자식 위젯들을 수평 배열로 표시합니다.

`Expaneded`로 감싸면 차지할 수 있는 가로 공간을 꽉 채우도록 확장됩니다.

```dart
Row(
  children: const <Widget>[
    Expanded(
      child: Text('Hi', textAlign: TextAlign.center),
    ),
    Expanded(
      child: Text('Hi2', textAlign: TextAlign.center),
    ),
  ],
)
```

### Column

`Column` 위젯은 자식 위젯들을 수직 배열로 표시합니다.

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  mainAxisSize: MainAxisSize.min,
  children: <Widget>[
    const Text('HI'),
    const Text('HI2'),
    const Text('HI3'),
    const Text('HI4'),
    //...
  ],
)
```

만약 수직 정렬된 위젯들을 스크린 범위를 넘어 스크롤하고 싶으면 `ListView`를 사용해야 합니다. 기본적으로 Column은 사용할 수 있는 공간을 넘은 자식 위젯들을 오류로 간주합니다.

### ListView

`ListView`는 가장 흔하게 사용되는 **스크롤** 위젯입니다. 스크롤되는 방향으로 자식을 차례로 나열합니다.

```dart
ListView(
  padding: const EdgeInsets.all(5),
  // scrollDirection: Axis.horizontal, // 수평 정렬
  children: <Widget>[
    Container(
      height: 50,
      color: Colors.black[600],
      child: const Center(child: Text('A')),
    ),
    Container(
      height: 50,
      color: Colors.black[500],
      child: const Center(child: Text('B')),
    ),
    Container(
      height: 50,
      color: Colors.black[100],
      child: const Center(child: Text('C')),
    ),
  ],
),
```

### Stack

`Stack` 위젯은 자식 위젯들을 겹치게 할 때 유용하게 사용됩니다.

```dart
Stack(
  children: <Widget>[
    Container(
      width: 100,
      height: 100,
      color: Colors.red,
    ),
    Container(
      width: 90,
      height: 90,
      color: Colors.green,
    ),
    Container(
      width: 80,
      height: 80,
      color: Colors.blue,
    ),
  ],
),
```

이름 그대로 **스택**구조처럼, 선입후출 방식으로 위젯이 표현됩니다.  
가장 마지막에 있는 파란색 위젯이 가장 앞에 위치합니다.

◾ [[Flutter] Widget 다루기](/tech/flutter-what-is-widget) 👈 이전 글 보기   
◾ [[Flutter] Text Widget 사용하기](/tech/flutter-text-widget) 👈 다음 글 보기
