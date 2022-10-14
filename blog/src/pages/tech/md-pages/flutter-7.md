---
title: "[Flutter] 다양한 버튼 사용하기"
date: "2022-10-07"
category: "tech"
slug: "/tech/flutter-use-several-buttons"
# img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "스터디 Flutter"
---
## Flutter Buttons 사용하기

플러터는 다양한 버튼을 위젯으로 제공합니다.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'MaterialApp',
      home: Scaffold(
          appBar: AppBar(
            title: Text('Flutter Buttons'),
            centerTitle: true,
          ),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                // Write your Buttons!
              ],
            ),
          )),
    );
  }
}
```

이 코드를 기본으로 두고 시작해봅시다. 
<br/><br/>

### TextButton 

TextButton은 이름 그대로 버튼으로 동작하는 텍스트입니다.    
테두리가 보이지 않아, 주의해서 배치해야합니다.

TextButton은 이렇게 구성됩니다.

```dart
const TextButton({
  Key? key,
  required void Function()? onPressed,
  void Function()? onLongPress,
  void Function(bool)? onHover,
  void Function(bool)? onFocusChange,
  ButtonStyle? style,
  FocusNode? focusNode,
  bool autofocus = false,
  Clip clipBehavior = Clip.none,
  required Widget child,
})
```

예시를 살펴봅시다.

```dart
 body: Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: <Widget>[
      TextButton(
        style: TextButton.styleFrom(
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: null,
        child: const Text('Disabled'),
      ),
      TextButton(
        style: TextButton.styleFrom(
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: () {},
        child: const Text('Click Me!'),
      ),
      TextButton(
        style: TextButton.styleFrom(
          backgroundColor: Colors.amber,
          primary: Colors.white,
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: () {},
        child: const Text('Set primary!'),
      ),
    ],
  ),
)
```

화면에는 이렇게 보여집니다.

![flutter TextButton](https://user-images.githubusercontent.com/76241233/194450721-5f36a597-550c-4f18-9a5e-1c25c712beef.png)

TextButton에서 글자색상을 변경할 경우에는 `TextButton.styleFrom`에서 primary 속성을 지정해 변경할 수 있습니다.


보다 자세한 색상 변경에 관해서는 [Changing Text Button Color in Flutter – The Right Way in 2022](https://www.flutterbeads.com/text-button-color-in-flutter/) 를 참고해주세요.

<br/>

### ElevatedButton

ElevatedButton은 오른쪽과 아래쪽으로 그림자가 생겨 버튼이 주변과 구분됩니다.

이렇게 구성됩니다.

```dart
const ElevatedButton({
  Key? key,
  required VoidCallback? onPressed,
  VoidCallback? onLongPress,
  ValueChanged<bool>? onHover,
  ValueChanged<bool>? onFocusChange,
  ButtonStyle? style,
  FocusNode? focusNode,
  bool autofocus = false,
  Clip clipBehavior = Clip.none,
  required Widget? child,
})
```

예제는 TextButton과 큰 차이가 없습니다. 다만 명확하게 border가 있어 구분됩니다.

```dart
 body: Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: <Widget>[
      ElevatedButton(
        style: TextButton.styleFrom(
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: null,
        child: const Text('Disabled'),
      ),
      ElevatedButton(
        style: TextButton.styleFrom(
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: () {},
        child: const Text('Click Me!'),
      ),
      ElevatedButton(
        style: ElevatedButton.styleFrom(
          primary: Colors.amber,
          textStyle: const TextStyle(fontSize: 20),
        ),
        onPressed: () {},
        child: const Text('Set primary!'),
      ),
    ],
  ),
)
```

`ElevatedButton.styleFfrom` 으로 스타일을 지정합니다. TextButton과 다르게 primary를 지정하면 배경색이 바뀝니다.

![Flutter ElevatedButton](https://user-images.githubusercontent.com/76241233/194460842-ba2965a7-3654-4b38-8f66-55846cdfb5b4.png)

<br/>

### OutlinedButton

이름 그대로 테두리가 있는 버튼입니다.

```dart
const OutlinedButton({
  Key? key,
  required VoidCallback? onPressed,
  VoidCallback? onLongPress,
  ValueChanged<bool>? onHover,
  ValueChanged<bool>? onFocusChange,
  ButtonStyle? style,
  FocusNode? focusNode,
  bool autofocus = false,
  Clip clipBehavior = Clip.none,
  required Widget child,
})
```

앞선 버튼들과 크게 다르지 않지만, 테두리 색상이 기본적으로 회색으로 지정되어 있습니다.
`side: BorderSide(widht: 2.0, color: Colors.amber)` 등으로 속성을 지정하면 테두리 색깔을 바꿀 수 있습니다.

```dart
 body: Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        OutlinedButton(
          style: OutlinedButton.styleFrom(
            textStyle: const TextStyle(fontSize: 20),
          ),
          onPressed: null,
          child: const Text('Disabled'),
        ),
        OutlinedButton(
          style: OutlinedButton.styleFrom(
            textStyle: const TextStyle(fontSize: 20),
          ),
          onPressed: () {},
          child: const Text('Click Me!'),
        ),
        OutlinedButton(
          style: OutlinedButton.styleFrom(
            primary: Colors.amber,
            // Border Style 변경
            side: BorderSide(width: 2.0, color: Colors.amber),
            textStyle: const TextStyle(fontSize: 20),
          ),
          onPressed: () {},
          child: const Text('Set primary!'),
        ),
      ],
    ),
  )
),
```

![Flutter OutlinedButton](https://user-images.githubusercontent.com/76241233/194468926-efe48563-af80-4709-bb37-aeb53d42a1f9.png)

<br/>

### IconButton

아이콘으로 버튼을 만들 수 있습니다.

```dart
const IconButton({
  Key? key,
  this.iconSize,
  this.visualDensity,
  this.padding = const EdgeInsets.all(8.0),
  this.alignment = Alignment.center,
  this.splashRadius,
  this.color,
  this.focusColor,
  this.hoverColor,
  this.highlightColor,
  this.splashColor,
  this.disabledColor,
  required this.onPressed,
  this.mouseCursor,
  this.focusNode,
  this.autofocus = false,
  this.tooltip,
  this.enableFeedback = true,
  this.constraints,
  required this.icon,
})
```

```dart
body: Center(
  child: Column(
    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    children: <Widget>[
      IconButton(
        icon: const Icon(Icons.arrow_back),
        onPressed: null,
      ),
      IconButton(
        icon: const Icon(Icons.arrow_forward),
        onPressed: () {},
      ),
      IconButton(
        icon: const Icon(Icons.alarm_add),
        onPressed: () {},
      ),
    ],
  ),
)
```

![Flutter IconButton](https://user-images.githubusercontent.com/76241233/194475945-2e87a65d-cf96-4875-825a-fe3462757f12.png)

<br/>

### FloatingActionButton

`FloatingActionButton`은 둥둥 떠있는 버튼입니다. 

이 버튼을 사용하기 위해서는 `Scaffold` 위젯에 `floatingActionButton` 속성을 추가해야 합니다.

```dart
Scaffold(
  floatingActionButton: FloatingActionButton(),
),
```

이렇게 아이콘을 지정할 수 있습니다.

```dart
floatingActionButton: FloatingActionButton(
  onPressed: () {},
  child: const Icon(Icons.thumb_up),
  backgroundColor: Colors.pink,
),
```

![Flutter FloatingActionButton](https://user-images.githubusercontent.com/76241233/194480681-d2b0b282-2867-47ae-bcd3-df9d74fffadb.png)

만약 버튼에 label을 넣고 싶다면, `FloatingActionButton.extended`를 이용해 작성합니다.

```dart
floatingActionButton: FloatingActionButton.extended(
  onPressed: () {},
  icon: Icon(Icons.thumb_up),
  label: Text('Thumb Up!'),
  backgroundColor: Colors.pink,
),
```

![Flutter FloatingActionButton extended](https://user-images.githubusercontent.com/76241233/194481144-024867c9-3ebd-4efb-8303-915475bad22c.png)

<br/>

### PopupMenuButton

이 버튼을 사용하려면 `Scaffold`의 `AppBar` 위젯에 actions 속성을 추가합니다.

```dart
Scaffold(
  appBar: AppBar(
    title: Text('Flutter Buttons'),
    centerTitle: true,
    actions: [
      PopupMenuButton(
          itemBuilder: (context) => [
                PopupMenuItem(
                  child: Text("First"),
                  value: 1,
                ),
                PopupMenuItem(
                  child: Text("Second"),
                  value: 2,
                )
              ])
    ],
  ),
)
```
<img src="https://user-images.githubusercontent.com/76241233/194481812-9aaa08f3-8760-4c9e-a3f2-97e10bde5867.png" alt="Flutter PopupMenuButton closed">
<img src="https://user-images.githubusercontent.com/76241233/194481750-70fc7ba9-7b99-4ebe-ac1b-0030b62c4f8e.png" alt="Flutter PopupMenuButton opened"> 


### DropdownButton

web의 select 기능을 하는 버튼입니다. Dropdown을 사용하기 위해서는 먼저 StatefulWidget으로 변경합니다.

```dart
DropdownButton({
  Key key, 
  @required List<DropdownMenuItem<T>> items, 
  DropdownButtonBuilder selectedItemBuilder, 
  T value, 
  Widget hint, 
  Widget disabledHint, 
  @required ValueChanged<T> onChanged, 
  VoidCallback onTap, 
  int elevation: 8, 
  TextStyle style, 
  Widget underline, 
  Widget icon, 
  Color iconDisabledColor, 
  Color iconEnabledColor, 
  double iconSize: 24.0, 
  bool isDense: false, 
  bool isExpanded: false, 
  double itemHeight: kMinInteractiveDimension,
  Color focusColor, 
  FocusNode focusNode, 
  bool autofocus: false, 
  Color dropdownColor
})
```

StatefulWidget으로 바꾸는 이유는 DropdownButton으로 선택된 값이라는 **상태 변화**가 있기 때문입니다.

Stateless에서도 DropdownButton을 그릴 수는 있지만, setState를 사용하지 못하기 때문에 의미가 없습니다.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'MaterialApp',
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
// Initial Selected Value
  String dropdownvalue = 'Item 1';

// List of items in our dropdown menu
  var items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Buttons'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            DropdownButton(
              // Initial Value
              value: dropdownvalue,

              // Down Arrow Icon
              icon: const Icon(Icons.keyboard_arrow_down),

              // Array list of items
              items: items.map((String items) {
                return DropdownMenuItem(
                  value: items,
                  child: Text(items),
                );
              }).toList(),
              // After selecting the desired option,it will
              // change button value to selected value
              onChanged: (String? newValue) {
                setState(() {
                  dropdownvalue = newValue!;
                });
              },
            ),
          ],
        ),
      ),
    );
  }
}
```

<br/>

---

## onPressed null or () {}

버튼에서는 `onPressed` 라는 클릭 이벤트를 정의할 수 있습니다. 

위의 예제에서는 onPressed를 `null`로 두는 경우와, `() {}` 로 두는 경우가 있었습니다.

* null : disabled
* () {} : 클릭시 실행될 함수를 정의하지 않은 것

이러한 차이가 있습니다.


◾ [[Flutter] 다양한 위젯 사용하기](/tech/flutter-use-several-widgets) 👈 이전 글 보기   
◾ [[Flutter] Form, Alert에 사용할 수 있는 플러터 컴포넌트](/tech/flutter-use-several-components) 👈 다음 글 보기

