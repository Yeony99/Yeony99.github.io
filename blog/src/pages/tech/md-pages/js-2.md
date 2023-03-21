---
title: "쫌만알자! (2) - 브라우저 JavaScript 개발환경"
date: "2022-08-03"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-setting-devtool/"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "쫌만알자"
hide: true
---

## 자바스크립트 개발 환경

자바스크립트는 
* 브라우저
* Node.js

이렇게 두 환경에서 실행할 수 있습니다.   

모든 브라우저(크롬, edge, firefox 등)은 자바스크립트를 해석하고 실행할 수 있는 Javascript 엔진을 내장하고 있습니다. 브라우저 뿐 아니라 Node.js라는 환경에서도 Javascript를 실행할 수 있습니다. Node.js는 이름부터 js가 들어가있죠?   


### 브라우저 vs Node.js 환경 비교

다만 브라우저에선 HTML과 CSS 그리고 자바스크립트를 렌더링해서 웹페이지를 보여주는 것에 초점이 있다면, Node.js 환경에선 브라우저가 아닌 외부에서 자바스크립트를 실행할 수 있도록 실행 배경을 만들어주는 것이 목적입니다.   
같은 자바스크립트 코드를 작성할 수 있지만 Node.js는 브라우저에 렌더링하는 용도가 아니기 때문에, DOM 조작은 불가능합니다. 

DOM은 이후 자세히 알아보겠지만, 간략히 말하자면 춤추는 빨간색 토마토를 자바스크립트가 춤추는 초록색 토마토로 만들 수 있게 접근하게 하는 Document Object Model입니다.   

DOM은 Document Object Model이기 때문에 Document인 HTML에서만 사용이 가능하니, Node.js 환경에선 DOM API는 제공하지 않는 것이죠.   

반면 Node.js 에서는 파일 생성과 수정이 가능한 파일 시스템을 제공합니다. 파일 시스템은 브라우저는 지원하지 않습니다. 왜냐구요? 브라우저를 통해 naver에 접근했다고 가정합시다. naver 홈페이지에 이미지 파일을 싹 토마토로 바꿔버리는 자바스크립트 코드를 입력하고 보냈습니다. 그러면 naver가 운영되는 서버 속 이미지 파일이 싹 다 토마토가 되어버릴 것입니다. 따라서 브라우저에서는 보안상의 이유로 파일시스템을 제공하지 않습니다.

대략적으로 이런 차이가 있다 정도만 알아두고 자바스크립트를 알아봅시다.

<hr/>

## 웹 브라우저 실행환경

우선 브라우저 환경에서 자바스크립트를 활용해봅시다.   
여러가지 브라우저가 있지만 여기서는 구글 chrome 브라우저를 사용하겠습니다. 크롬을 선택한 이유는 ECMAScript(표준화된 자바스크립트)를 준수하고, 시장 점유율이 가장 높기 때문입니다.   

만약 크롬 브라우저가 설치되어 있지 않다면 다음 웹사이트에서 설치 해주세요.

[크롬 웹 브라우저 다운로드](https://www.google.com/intl/ko_kr/chrome/)


### 개발자 도구

크롬이 제공하는 개발자 도구(DevTool)은 웹 개발에 있어 필수적입니다. 크롬을 설치했다면 기본으로 내장되어 있으니 별도의 설치나 확장 프로그램은 필요 없습니다.   

[구글 홈페이지](https://www.google.com/)에 들어가 개발자 도구를 열어보겠습니다.

윈도우 사용자는  **F12** 또는 **Ctrl + Shift + i**를 눌러주세요.   
맥OS 사용자는 **Command ⌘ + option ⌥ + i**를 눌러주세요.

우측 상단 **⋮** 아이콘을 클릭하면 콘솔창을 원하는 곳에 위치하게 할 수 있습니다. Dock side에서 편하게 사용할 수 있는 레이아웃을 선택하면 됩니다.   

편한 레이아웃을 선택했다면 개발자 도구의 기능을 알아봅시다.

* Elements : 렌더링된 웹페이지의 DOM, CSS를 확인, 임시 편집할 수 있습니다. 편집한 내용은 저장되지 않습니다.
* Console : 웹페이지의 에러를 확인하거나 자바스크립트에서 작성한 **console.log**
* Sources : 로딩된 웹페이지의 자바스크립트 코드를 디버깅할 수 있습니다.
* Network : 로딩된 웹페이지와 연관된 네트워크 request 정보 및 성능을 확인할 수 있습니다.
* Application : 웹 스토리지, 세션, 쿠키를 확인 및 관리할 수 있습니다.


Console 탭에 들어가봅시다.    

자바스크립트로 개발 시, 보통 받아오는 데이터 값 등을 **console.log**로 출력해 확인합니다.   

한번 출력해볼까요?   

**console.log('Hello World!')** 를 작성 후 엔터 키를 누르면 이렇게 `Hello World!`가 출력됩니다.


![개발자 도구 console.log 출력](https://user-images.githubusercontent.com/76241233/183029749-003920ed-e9fe-4490-a7dc-00fc1ad34d13.png)


여러 줄을 입력하고 싶을 때에는 **shift**키를 누른 상태에서 **Enter**키를 누르면 줄 바꿈이 됩니다.



이렇게 개발자 도구를 활용해 자바스크립트 코드를 작성해볼 수 있습니다.   

다음 글에서는 자바스크립트 코드 작성을 수월하게 도와주는 VSCode 설치법을 알아보겠습니다.


◾ [JavaScript에 대해!](/tech/let-me-know-js-a-bit-about-what-js-can-do/) 👈 이전 글 보기    
◾ [VSCode로 간단하게 구축하는 JavaScript 개발환경](/tech/let-me-know-js-a-bit-setting-vscode/) 👈 다음 글 보기