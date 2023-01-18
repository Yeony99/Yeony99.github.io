---
title: "자바스크립트 이벤트 전파"
date: "2023-01-18"
category: "tech"
slug: "/tech/javascript-event"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "JS"
---

## event

event는 흔히 *어떤 이벤트가 있었다* 라고 말할 때와 마찬가지로, 무언가가 일어났다는 신호다. 

**DOM**에서 사용되는 이벤트는 종류가 다양한데, 여기서는 간단하게 `click` 이벤트 하나로 말해보고자 한다.

### DOM event API

모든 DOM 노드는 이벤트를 전달할 수 있다. 이런 이벤트에 반응하려면, 이벤트를 트리거한 DOM 요소에 **event handler**를 연결해야 한다. `button`에 `click` 이벤트를 트리거하기까지의 과정은 이러하다.

1. `button` 렌더링
2. `button`을 click
3. `click` 이벤트 전달
4. `click` 이벤트 캡쳐
5. `click` 이벤트 반응 - 버블링

이벤트가 DOM 트리 상에서 흐르는 것을 이벤트 전파(event propagation)라고 한다.

---

### DOM event LifeCycle

이벤트 전파 과정을 이해하기 위해서 DOM 이벤트의 lifecycle을 살펴봤다.

버튼을 `click`했을 때의 과정은 이렇게 진행된다.

1. 캡쳐 단계: 이벤트가 html에서 목표 요소(=트리거 된 요소)로 이동한다.
2. 목표 단계: 이벤트가 목표 요소에 도달한다.
3. 버블 단계: 이벤트가 목표 요소에서 html로 이동한다.

![이벤트 전파](https://user-images.githubusercontent.com/76241233/213095265-3c312441-6efb-4679-8866-6e94b5297970.png)

`button`이 target이기 때문에 DOM tree를 따라 해당 타깃까지 내려간 후, 이벤트가 버블링되어 다시 최상단까지 DOM tree를 타고 올라온다. 
이런 현상이 발생하는 이유는, 이벤트는 window, document, html ... target element 이런 식으로 부모와 자식 관계를 유지하기 때문이다. 

button의 부모가 div라면 button을 클릭할 때 div도 함께 클릭되는 것이다.

아래의 모던 JavaScript 튜토리얼의 예시를 보면, form > div > p 태그 순서대로 DOM tree가 있다.   
**p**를 클릭해보면 `this`는 *form*이고, `target`은 *p* 인 것을 확인할 수 있다. 이벤트가 걸린 곳은 form이기에 this는 항상 form이고, target은 form의 자손 혹은 본인이 될 수 있다.

<iframe width="100%" height="210px" src="https://ko.javascript.info/article/bubbling-and-capturing/bubble-target/"></iframe>

* **event.target** : 실제 이벤트가 실행되는 요소.
* **this** : '현재' 요소. 이벤트 핸들러가 할당된 요소.

#### Event Bubbling

이렇듯 한 요소에 이벤트가 발생하면, 
1. 해당 요소에 이벤트 핸들러가 작동하고
2. 부모 요소의 이벤트 핸들러가 작동하고
3. 해당 부모 요소의 부모 ...
4. 최상단 조상 노드의 이벤트 핸들러 작동

이렇게 작동하게 된다. 이 현상을 이벤트 버블링이라고 한다. 

#### Event Capturing

여기서 `capture`는 MDN의 문서를 참고하면 이해하기 쉽다.

[MDN - EventTarget.addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener) 를 보면, `addEventListener`의 3번째 매개변수가 **useCapture** 인 것을 볼 수 있다.

Event Bubbling과는 반대 순서로 이뤄지는 개념으로, 조상 Node에서 자식 순으로 이벤트가 `Capture`된다. 

![event-capturing-bubbling](https://user-images.githubusercontent.com/76241233/213103759-2e5858fd-4382-4e8d-b965-46290380e2de.gif)


#### 이벤트 전파를 막는 방법

target element에서 발생한 이벤트가 부모, 조상 노드까지 영향을 끼치게 된다. 이벤트를 컨트롤 할 때 이런 현상을 방지하는 것도 필요하다.

```javascript
...
event.stopPropagation();
...
```

`event.stopPropagation()` 메소드를 사용해 원하는 곳에서 이벤트 전파를 차단할 수 있다.

버블링 시에는 타깃에서만 이벤트가 발생되게 하고, 캡처링 시에는 타깃 기준으로 최상단에서만 이벤트가 발생하게 한다.


## 참고

https://ko.javascript.info/events   
도서 <모던 자바스크립트 Deep Dive>