---
title: "Nextjs SEO 설정하기"
date: "2023-07-07"
category: "tech"
slug: "/tech/nextjs-2"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "Nextjs"
---
검색 엔진 최적화(SEO)를 Next.js에서 설정하는 방법을 정리한다.

Next.js에서는 메타데이터를 다룰 수 있게 내장 `head` 컴포넌트를 제공하고 있다.   

## next/head

```jsx
import Head from 'next/head'
 
function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}
 
export default IndexPage
```

주의해야 할 점이 있다. `title`, `meta` 등 `<Head></Head>` 안에 들어가게 할 태그들은 `Head` 바로 아래 children 요소로 넣거나, `<></>` Fragment 속에 넣어야 한다. 다른 태그 아래 넣게 되면 제대로 동작하지 않는다.

### _app과 _document

Next.js에는 페이지에 공통으로 적용할 내용을 작성할 수 있게 `_app`과 `_document` 를 제공한다.

`_app`은 서버 요청이 들어왔을 때 **가장 먼저 실행되는** 컴포넌트로, **공통 레이아웃**을 제작할 때 사용한다.

`_document`는 `_app` 다음으로 실행되고, 메타 태그나 `<body>` 태그 안에 들어갈 내용을 커스터마이징 할 때 사용한다.

#### _document 작성 시 주의

Nextjs에서는 `Head` 컴포넌트가 2개 있다. import 되는 경로의 차이가 있는데, 아래와 같다. 
* `next/head`의 Head : 오픈 그래프(OG), 메타 데이터를 정의할 때 사용
* `next/document`의 Head : 모든 페이지에 공통으로 사용되는 코드가 있을 때 사용

`_document`에 메타 태그를 작성할 경우, `next/document` 는 **서버 컴포넌트** 이기 때문에, 클라이언트 사이드와 관계 없는 태그만 넣어야 한다.

예를 들어, 화면마다 다른 `title` 을 넣게 되면   
![no document title](https://github.com/Yeony99/Yeony99/assets/76241233/7bcbfcdc-52e3-47d0-90e5-2789a3c85a2f)

이렇게 title 태그는 _document.js에 넣을 수 없다고 에러를 띄운다.


## React 환경에서의 SEO

위에 설명한 title, meta 태그들은 정적 페이지인 경우 문제가 생기지 않지만, 동적 페이지의 경우에는 SEO 처리가 어렵다. React가 기본적으로 CSR(Client Side Rendering)을 하기 때문이다.

CSR의 과정은 1. 브라우저가 서버가 전달하는 html 문서 수신 2. API 요청 3. 응답받은 데이터를 화면에 프린트 순으로 이뤄진다.   
title에 동적 페이지의 제목을 달고 싶은데, 이미 html은 그려져 있는 상태가 된다. 


### SSR 처리하기

Next.js에서는 이 부분을 간편하게 처리할 수 있다. SSR(Server Side Rendering) 기능을 기본 제공한다.

SSR을 사용하기 위해서는 렌더링될 페이지에 `getServerSideProps` 함수를 사용하면 된다.

이 함수가 활용되는 방식은 이러하다.
1. 페이지 렌더링 전 getServerSideProps 내에서 API 호출
2. API Response 받기
3. Response를 Page에 props로 리턴
4. 페이지 렌더링

```tsx
export default function Page({data}) {
  return (
    // view
    // Head에 data 넘겨주기
  )
}

export async function getServerSideProps(context: GetServerSideProps) {
  try {
    // API 호출
    const data = await axios.get(`/api/page`);

    return {
      props: {
        data
      }
    }
  } catch(error) {
    console.log(error)
  }
}
```


### 페이지 별로 다른 메타 태그 적용하기

각각의 페이지 별로 title이나 description을 다르게 해야한다. 이런 경우 컴포넌트를 생성해 처리하는 것이 편리하다.

```tsx
import Head from "next/head";

interface HeadMetaProps {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  image: string;
}

const HeadMeta: React.FC<HeadMetaProps> = ({
  title,
  description,
  url,
  author,
  image,
}) => {
  return (
    <Head>
      <title>{title || "웹사이트의 기본 노출될 타이틀"}</title>
      <meta
        name="description"
        content={
          description ||
          "웹사이트의 기본 설명"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "기본 타이틀"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://사이트 메인 주소"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content={author || "기본 적용 작성자"} />
    </Head>
  );
};

export default HeadMeta;

```



## Reference
도서 &lt;실전에서 바로 쓰는 Next.js&gt;