---
title: "리액트 네이티브 모노레포 프로젝트 구축하기"
date: "2022-10-10"
category: "tech"
slug: "/tech/react-native-with-monorepo"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "React/RN"
---
## 들어가며
React와 React Native를 공부하며 웹과 앱 간에 소스를 공유할 수 있으면 좋겠다는 생각이 들었습니다.
flutter web도 고려사항에 있었지만, 고민 끝에 React와 RN으로 노선을 정했습니다.

* 언어의 숙련도
* 플랫폼에 관계없는 동일한 사용자 경험 제공

이 두 가지를 고려했습니다.

요구사항이 추가될 수 있기 때문에, 언젠가 네이티브 코드 연동이 필요하지 않을까 싶어 expo는 고려하지 않았습니다.
<br/>

---

## Yarn workspace 모노레포 설정하기

모바일과 웹 소스를 각각의 레포지토리로 만드는 멀티 레포도 괜찮을 것 같지만, 장기적으로 생각했을 때 하나의 레포지토리로 여러 패키지를 관리하는 것이 부담이 덜할 것이라 판단했습니다. 

웹과 앱에서 동일한 사용자 경험을 주고 싶기도 했구요. <br/>

### yarn workspace

yarn에서는 root 경로의 package.json 파일이 하위 폴더의 package.json에 정의된 dependencies를 `yarn install`로 한번에 설치할 수 있게 하는 [workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/) 설정이 가능합니다.

구성할 프로젝트 구조는 아래와 같습니다.

```bash
<root>/
└─ packages/
    ├── app/
    │   ├── src/
    │   └── package.json
    # Android/iOS app configuration files and native code
    ├── mobile/
    │   ├── android/
    │   ├── ios/
    │   ├── app.json
    │   ├── babel.config.js
    │   ├── index.js
    │   ├── metro.config.js
    │   └── package.json
    # Windows app configuration files and native code
    └── web/
        ├── public/
        ├── src/
        ├── carco.config.js
        └── package.json
└─ package.json
```
<br/>

### yarn 설치

node가 설치되어 있다면 npm으로 설치합니다.

```bash
$ npm install -g yarn
```

node가 설치되어 있지 않다면 node부터 설치합니다.

그 외에도 homebrew, chocolatey 등을 이용해 설치할 수 있습니다.

설치 완료 후 확인합니다.

```bash
$ yarn --version
```

<br/>

### 프로젝트 생성

원하는 프로젝트명으로 폴더를 하나 생성합니다. 저는 `react-native-monorepo`로 설정하였습니다. 여기가 프로젝트의 루트 디렉토리입니다.

```bash
$ yarn init -y
```

위 명령어로 package.json을 생성해줍니다. 생성된 package.json을 수정해봅시다.

```json
// 루트 package.json
{
  "name": "react-native-monorepo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  // 추가
  "workspaces": { 
    "packages": [
      "packages/*"
    ],
    "nohoist": ["**/react", "**/react-dom"]
  }
}
```

workspaces 속 packages에는 yarn workspace에서 관리할 패키지 경로를 입력합니다.   
`nohoist`는 루트 프로젝트 디렉토리가 아닌, 각 패키지 디렉토리에 설치되어야 한다고 yarn에 알려줍니다.

그 후 packages 디렉토리를 생성합니다.

pacakges 폴더로 `cd packages` 한 뒤 각각의 프로젝트를 생성해봅시다.

### app 패키지 생성

공유될 React Native 코드를 담을 `app` 디렉토리를 생성해봅시다.

```bash
$ mkdir packages/app && cd packages/app
```

app 디렉토리의 루트에서 **package.json**을 추가하고 아래와 같이 작성합니다.


```json
// app의 package.json
{
  "name": "@react-native-monorepo/app",
  "version": "0.0.0",
  "private": true,
  "main": "src",
  "peerDependencies": {
    "react": "*",
    "react-native": "*"
  }
}
```
<br/>

<div style="background-color: #eee; border-radius: 1rem; font-size: 0.9rem; padding: 1rem">
  <h6>❗ peerDependencies 란?</h6>
  실제로 app 패키지 내부에서 import하지는 않지만, 패키지에 의존하는 각각의 앱들이 라이브러리 버전을 제공합니다.<br/>
  app 패키지의 `peerDependencies`는 이후 생성할 mobile, web 앱으로부터 각각의 버전을 받게 됩니다.
</div>

`src/index.js`에 앱을 만들어봅시다.

```jsx
// react-native-monorepo/packages/app/src/index.js

import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function App() {
  return (
    <View>
     <Text style={styles.text}>Hello from React Native! </Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{Platform.OS}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});

export default App;
```

yarn workspace 덕분에 `@react-native-monorepo/app`을 다른 작업 공간에서도 사용할 수 있습니다.

* `@react-native-monorepo/app`으로 dependencies에 표시
* `import App from "@react-native-monorepo/app";`


### mobile 코드 생성

React Native를 사용할 수 있게 되었으니 `packages/mobile`에 Android 와 iOS 네이티브 코드를 작성할 수 있도록 프로젝트를 생성해봅시다.

```bash
# window
$ cd packages && npx react-native init MyApp && move MyApp mobile

# macOS
$ cd packages && npx react-native init MyApp && mv MyApp mobile
```

package.json에 패키지 이름을 바꾸고, `@react-native-monorepo/app` 종속성을 추가합니다.

```json
// packages/mobile/package.json
{
  // 이름 수정
  "name": "@react-native-monorepo/mobile",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    // 종속성 추가
    "@react-native-monorepo/app": "*",
    "react": "18.1.0",
    "react-native": "0.70.2"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9",
    "@babel/runtime": "^7.12.5",
    "@react-native-community/eslint-config": "^2.0.0",
    "babel-jest": "^26.6.3",
    "eslint": "^7.32.0",
    "jest": "^26.6.3",
    "metro-react-native-babel-preset": "0.72.3",
    "react-test-renderer": "18.1.0"
  },
  "jest": {
    "preset": "react-native"
  }
}
```

React Native에서 제공하는 앱 템플릿 대신, `@react-native-monorepo/app`을 사용하도록 `packages/mobile/index.js`을 수정합니다.

```jsx
import {AppRegistry} from 'react-native';
import App from '@react-native-monorepo/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

그리고 네이티브 코드를 실행해보기 전 nohoist에 react-native를 명시해야 제대로 실행됩니다.

```json
// react-native-monorepo/package.json
{
  "name": "react-native-monorepo",
  "version": "1.0.0",
  "private": "true",
  "main": "index.js",
  "license": "MIT",
  "workspaces": { 
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "**/react",
      "**/react-dom",
      "**/react-native",
      "**/react-native/**"
    ]
  }
}

```

또한 workspace는 `"private": true`일 때만 작동하므로 private 옵션을 추가합니다.

nohoist는 수정할 때마다 `yarn reset && yarn`명령어로 프로젝트 루트에서 실행해야 종속성을 다시 설치합니다.

아직 문제는 있습니다. 다른 디렉토리에 있는 걸 사용하려면 monorepo tool이 필요합니다.

```bash
# react-native-monorepo/packages/mobile
$ yarn add -D react-native-monorepo-tools
```

metro 구성을 업데이트 합니다.

```javascript
// react-native-monorepo/packages/mobile/metro.config.js
const exclusionList = require("metro-config/src/defaults/exclusionList");
const { getMetroTools, getMetroAndroidAssetsResolutionFix } = require("react-native-monorepo-tools");

const monorepoMetroTools = getMetroTools();

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

module.exports = {
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  server: {
    // ...and to the server middleware.
    enhanceMiddleware: (middleware) => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },
  // Add additional Yarn workspace package roots to the module map.
  // This allows importing importing from all the project's packages.
  watchFolders: monorepoMetroTools.watchFolders,
  resolver: {
    // Ensure we resolve nohoist libraries from this directory.
    blockList: exclusionList(monorepoMetroTools.blockList),
    extraNodeModules: monorepoMetroTools.extraNodeModules,
  },
};
```

### 루트에 스크립트 추가

루트에서 각각의 프로젝트를 실행할 수 있도록 스크립트를 작성해보겠습니다.

```json
// react-native-monorepo/package.json
"scripts": {
  "android:metro": "yarn workspace @react-native-monorepo/mobile start",
  "android:start": "yarn workspace @react-native-monorepo/mobile android",
  "android:studio": "yarn workspace @react-native-monorepo/mobile studio",
  "ios:metro": "yarn workspace @react-native-monorepo/mobile start",
  "ios:start": "yarn workspace @react-native-monorepo/mobile ios",
  "ios:xcode": "yarn workspace @react-native-monorepo/mobile xcode"
},
```

에뮬레이터가 설치되어 있으면 잘 작동하는 걸 확인할 수 있습니다.


### web 코드 생성

웹에서 react-native를 사용하기 위해 react-native-web을 적극적으로 사용합니다.

여기서는 CRA로 리액트 앱을 생성합니다.

먼저 루트의 package.json에 nohoist를 수정합니다.

```json
"nohoist": [
  "**/react",
  "**/react-dom",
  "**/react-native",
  "**/react-native/**",
  "**/react-native-web"
]
```

그리고 packages 디렉토리에서 CRA로 프로젝트를 생성합니다.

```bash
$ npx create-react-app my-app && mv my-app web
```

패키지 이름을 변경합니다.

```json
// react-native-monorepo/packages/web/package.json
"name": "@react-native-monorepo/web",
```

react-native-web을 설치합니다.

```bash
$ cd web && yarn add react-native-web
```

웹 프로젝트 내에서 React Native 앱을 사용하기 위해 `src/index.js`를 수정합니다.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "@react-native-monorepo/app"; // 수정

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

CRA는 yarn workspace를 지원하지 않습니다. 따라서 외부 패키지를 가져올 수 있도록 craco를 설치합니다.

```bash
$ yarn add -D @craco/craco react-native-monorepo-tools
```

그리고 `packages/web`에 `craco.config.js` 파일을 생성합니다.

```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const absolutePath = path.join(__dirname, '../core');

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePath];
      }
      return webpackConfig;
    },
  },
};
```

그리고 `web/package.json`에서 script를 craco로 시작할 수 있도록 변경합니다.

```json
{
  "name": "@react-native-monorepo/web",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "craco start", // 수정
    "build": "craco build", // 수정
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

마지막으로 프로젝트 루트에 있는 package.json의 scripts를 수정해줍니다.


```json
 "scripts": {
    "android:metro": "yarn workspace @react-native-monorepo/mobile start",
    "android:start": "yarn workspace @react-native-monorepo/mobile android",
    "android:studio": "yarn workspace @react-native-monorepo/mobile studio",
    "ios:metro": "yarn workspace @react-native-monorepo/mobile start",
    "ios:start": "yarn workspace @react-native-monorepo/mobile ios",
    "ios:xcode": "yarn workspace @react-native-monorepo/mobile xcode",
    "web:start": "yarn workspace @@react-native-monorepo/web start", // 추가
    "web:build": "yarn workspace @@react-native-monorepo/web build" // 추가
  }
```

`yarn web:start`를 통해 실행할 수 있습니다.