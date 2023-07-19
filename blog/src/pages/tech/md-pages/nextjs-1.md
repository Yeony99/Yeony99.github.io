---
title: "Nextjs window is not defined"
date: "2023-06-29"
category: "tech"
slug: "/tech/nextjs-1"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "Nextjs"
---

## 발생 원인

Nextjs는 기본적으로 SSR이라, Node.js에서 사용할 수 없는 `window`, `document` 등의 객체에 접근할 수 없다.

페이지를 처음 렌더링 하는 과정에서 해당 객체들이 전역 객체로 존재하지 않기 때문이다. 따라서 not defined 오류가 발생한다.


## reference error 해결

### useEffect Hook

`useEffect` 훅은 컴포넌트가 마운트된 후 (=렌더링 된 후)에 호출된다. 따라서 반드시 클라이언트 단에서 실행되어야 하는 경우에 사용할 수 있다.

```jsx
useEffect(() => {
  // window or document 객체에 접근
}, [])
```

이렇게 하면 Next.js는 컴포넌트가 return 하는 마크업을 **렌더링 후**, 해당 컴포넌트가 **마운트되면** 클라이언트에서 호출, 실행할 수 있게 한다.

`useEffect`와 `useState`를 함께 써서 처리도 가능하다. 확실하게 브라우저에서만 렌더링된다.

```jsx
//...
function UseEffectPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        // ...
      )}
    </div>
  )
}
//...
```

### typeof window

`window` 객체가 존재하는지를 flag로 처리해 조건부 렌더링한다.

```jsx
const [isWindow, setIsWindow] = typeof window === "undefined" ? "server" : "client";
```

### next/dynamic

Next.js 에서 제공하는 동적 컴포넌트 로딩을 사용할 수 있다.


```jsx
import dynamic from 'next/dynamic';

const onlyBrowser = dynamic(
  () => import ("@/component/browser"),
  {ssr: false}
);

//...
```

위 코드는 컴포넌트를 **동적 임포트** 한다. `ssr: false` 옵션을 명시함으로써 클라이언트단에서만 코드를 실행하는 것이다.
리액트 하이드레이션이 끝난 후에 해당 컴포넌트를 사용할 수 있다.


## Reference
[Nextjs: Lazy Loading](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)   
도서 &lt;실전에서 바로 쓰는 Next.js&gt;