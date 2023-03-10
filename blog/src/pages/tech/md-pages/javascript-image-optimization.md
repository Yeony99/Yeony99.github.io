---
title: "대량의 이미지 로딩 최적화하기 (Image Preload)"
date: "2023-03-10"
category: "tech"
slug: "/tech/javascript-image-optimization"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "JS"
---

## 배경

회사에서 프로젝트 중, 이미지를 빠르게 넘겨 동영상처럼 보이게끔 하는 처리가 필요했다. 

이미지는 API를 통해 여러 정보와 함께 json에 담겨 object[] 형태로 받고, 객체 key 'fileUrl'로 img 하나를 요청하는 방식이다. 
나는 처음 이 기획을 url을 **바꿔치기** 하는 방식으로 처리를 했었다.

selected를 images의 index로 설정한 후 `setInterval`로 700ms에 한 번씩 selected의 index를 하나씩 늘리며 이미지를 하나씩 요청했다.

```jsx
// vue
<div :style="`background-image: url(${URL}${images[selected]})`">

</div>
```

```javascript
let isPlay = true;
let selected = 0;

//...

const interval = setInterval(() => {
  if(isPlay) {
    selected++
  } else {
    clearInterval(interval)
    isPlay = false;
  }
})
```

### 문제점

이 방식에는 큰 문제점이 있었다. 700ms의 속도로 하나당 약 1MB 크기의 이미지를 n백개 가량 요청하며 바꿔치기하다보니, 이미지를 받아오는 속도가 조금이라도 느려지면 화면이 깜빡거리거나 아예 이미지가 보이지 않고 넘어가는 경우가 발생했다. 

### 해결법 찾기

해결할 수 있는 방법을 찾아봤다. 대략 3가지 정도로 보였다.

1. 이미지를 등록할 때 썸네일 이미지도 저장해 적은 용량의 img를 로딩한다.
2. 이미지 캐싱
3. img preload를 한다.

캐싱은 한다쳐도 처음 로딩할 때는 어김없이 깜빡임 현상이 있을 것이고, 적합하지 않다고 판단했다.

따라서 3번을 우선 적용한 후, 빠르게 돌려야 하는 img 개수가 더 늘어나면 썸네일 이미지 처리를 하는 것으로 결정했다.


## Image Preload

이미지 Preload하는 방법은 간단하고, 대부분의 최신 브라우저에서 작동한다. 

```javascript
// preload할 img 배열
let images = [];

const resultArr = // API 호출, return object[]
//...

function preload() {
  for(let i = 0; i < resultArr.length; i++) {
    images[i] = new Image();
    images[i].src = resultArr[i].fileUrl;
  }
}
```

API 호출해 받은 `resultArr` 배열만큼 for반복 돌리며, `new Image()`를 생성해 `images` 배열에 담았다. 

개발자 도구의 Network 탭에 들어가 이미지들이 제대로 로드됐는지 확인한다.

![개발자도구 Network 탭](https://user-images.githubusercontent.com/76241233/224227023-f05150ae-24eb-456c-9efa-2c07d48f7453.png)

## 참고하면 좋은 사이트

[기상청](https://www.weather.go.kr/w/image/synthesis.do)이 참고하기 좋은 사이트다.

위 사이트에서 재생 버튼을 누르면 개발자 도구 Network 탭에 아래와 같이 이미지가 한번에 preload 되는 것을 확인할 수 있다.

![기상청 참고](https://user-images.githubusercontent.com/76241233/224228503-7d8aaf2e-7735-4461-8b15-3284ac995e13.gif)
