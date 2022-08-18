---
title: "쫌만알자! (4) - Node.js와 npm"
date: "2022-08-17"
category: "tech"
slug: "/tech/let-me-know-js-a-bit-js-node-and-npm"
img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "쫌만알자"
---
## Node.js 란?

앞서 <a href="/tech/let-me-know-js-a-bit-setting-devtool/" target="_blank">자바스크립트 개발 환경</a> 에서 언급했다시피, 자바스크립트 실행환경인 Node.js가 있습니다.    
Node.js와 npm을 통해 React, Vue, Angular, Lodash 같은 프레임워크(혹은 라이브러리)를 사용할 수 있게끔 하거나, Babel, Webpack 등의 도구를 사용할 수 있습니다.   

npm은 조금 생소하죠?    
npm(node package manager)은 자바스크립트 패지키 매니저입니다. Node.js에서 사용할 수 있는 모듈을 패키지화해, 패키지를 설치, 관리, 저장할 수 있는 CLI(command line interface)를 제공합니다.   

npm을 이용해 각종 오픈 소스 라이브러리 등을 설치하고 사용할 수 있습니다. 물론 직접 만들어 배포도 가능하구요.

### Node.js 설치

[Node.js](https://nodejs.org/ko/)에 접속해 봅시다.

Node.js 웹사이트에 접속하면 다운로드 버튼이 2가지가 있습니다.    
![Node.js 다운로드](https://user-images.githubusercontent.com/76241233/183798223-3e53dacc-68ae-4428-893e-4d20bcdfcea8.png)
좌측은 LTS 버전으로 안정된 지원을 보장하는 Long Term Support 버전의 Node.js 입니다. 반면 우측은 Current 버전으로 가장 최신 버전이지만, 지속적인 업데이트가 이뤄지는 버전인 만큼 안정적이지 않을 수도 있습니다.   

LTS 버전으로 설치해보겠습니다.   

좌측 LTS 다운로드 버튼을 클릭하면, 운영체제에 적합한 파일이 다운로드됩니다.   
Node.js를 설치하면 앞서 말한 **npm**도 함께 설치됩니다.   
다운로드된 파일을 눌러 설치해줍시다.


#### Node.js 설치 위치

* windows : C:\Program Files\nodejs\node.exe
* macOS : /usr/local/bin/node

Node.js는 위 디렉토리에 설치됩니다. (버전에 따라 달라질 수 있습니다.)

#### 설치 완료 확인

windows 사용자는 `Windows + R` 키를 누른 후 입력란에 cmd를 입력해 명령 프롬프트를 엽니다.
MacOS 사용자는 `Shift + Command ⌘ + U` 키를 눌러  터미널 창을 열어줍니다.

* Node.js 버전 확인

```
$ node -v
```

* npm 버전 확인

```
$ npm -v
```

<br/>
<hr/>

### Node.js REPL (Read Eval Print Loop)

크롬 개발자 도구에서 자바스크립트 코드를 실행할 수 있었듯이, Node.js 도 터미널을 통해 간단한 자바스크립트 코드를 실행할 수 있습니다.   

터미널(cmd)에 아래와 같이 명령어를 입력하면 REPL로 진입할 수 있습니다.

```
$ node

Welcome to Node.js v[버전]
Type ".help" for more information.

> 1 + 1
2
> Math.max(10, 20, 30)
30
```

REPL로 자바스크립트 파일을 실행할 수도 있습니다. (js 확장자 생략 가능)

```
> test.js
```

REPL을 종료할 때는 `ctrl + C`를 두 번 눌러주면 됩니다.

다음 글에서는 본격적으로 자바스크립트 문법을 알아보도록 하겠습니다.

◾ [VSCode로 간단하게 구축하는 JavaScript 개발환경](/tech/let-me-know-js-a-bit-setting-vscode/) 👈 이전 글 보기
<!-- ◾ [자바스크립트 자료형](/tech/let-me-know-js-a-bit-js-data-type) 👈 다음 글 보기 -->