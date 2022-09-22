---
title: "[Flutter] Constraints 이해하기"
date: "2022-09-23"
category: "tech"
slug: "/tech/flutter-understanding-constraints"
# img: "https://user-images.githubusercontent.com/76241233/189472910-3ae9b4a8-6fd6-484c-8e00-d07dab309b45.jpeg"
tags:
  - "Study Flutter"
---

## Constraints란?

어떤 프로그래밍이든 **제약조건**이 있습니다. 실생활에 지켜야 할 법이 있듯이 프로그래밍에서도 규칙을 지키도록 강제해놓은 것이죠.

Flutter도 마찬가지입니다. 일반적으로 많은 개발자가 가장 먼저 접하는 웹, `HTML`과는 다른 방식으로 움직이기 때문에 다른 Constraints를 가지고 있습니다.

<br/>

---

## Constraints go down. Sizes go up. Parent sets position.

Flutter의 레이아웃은 이 규칙을 따라 구성됩니다.

### 예시

1. 제약(constraints) 범위를 결정하는 것은 부모 위젯
2. 크기를 결정하는 것은 자식 위젯
3. 위치를 지정하는 것은 부모 위젯

이 제약은 **크기** 제약입니다. 크기는 `width`와 `height`의 최소/최대값입니다. 부모 위젯은 이런 크기 제약을 자식에게 넘기는 것입니다. 위젯의 위치를 결정하는 것은 결국 그 위젯이 아니라 위젯의 부모입니다.


`Container`위젯으로 예시를 들어보겠습니다.   

* 제약조건이 없음

```dart
Container(
  color: Colors.amber,
)
```


![Container no-constraints](https://user-images.githubusercontent.com/76241233/191666561-32625295-1853-43f1-b232-2602f0c69d22.png)

이렇게 꽉 찬 화면이 만들어집니다. 그럼 Container 위젯의 사이즈를 조정해볼까요?


```dart
Container(
  color: Colors.amber,
  height: 100,
  width: 100,
);
```

![Container no-constraints](https://user-images.githubusercontent.com/76241233/191666561-32625295-1853-43f1-b232-2602f0c69d22.png)

width와 height를 지정했음에도 변하는 건 없습니다.

그러면 자식 위젯을 가운데에 위치시키는 `Center` 위젯을 사용해 보겠습니다.

```dart
Center(
  child: Container(
    color: Colors.amber,
    height: 100,
    width: 100,
));
```

![Container with Center](https://user-images.githubusercontent.com/76241233/191667508-b884bd2e-9e91-4984-aef7-953d1acee3a7.png)

부모의 제약이 생기니 height와 width가 제대로 적용이 된 것을 볼 수 있습니다. 

여기서    
1.  `Center` 는 제약을 전체 범위로 주었고 
2. `Container` 는 스스로의 크기를 지정하였으며 
3. `Center` 가 자식인 `Container`의 위치를 지정했음을 볼 수 있습니다.

<br/>

---

## 결론

* 플러터는 크기 명시가 아닌 제약으로 레이아웃을 결정한다.

1. 제약(constraints) 범위를 결정하는 것은 부모 위젯
2. 크기를 결정하는 것은 자식 위젯
3. 위치를 지정하는 것은 부모 위젯

◾ [[Flutter] Text Widget 사용하기](/tech/flutter-text-widget) 👈 이전 글 보기