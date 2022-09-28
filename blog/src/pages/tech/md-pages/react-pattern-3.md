---
title: "프로바이더 패턴"
date: "2022-10-01"
category: "tech"
slug: "/tech/react-pattern-provider"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "Patterns"
---

## 프로바이더 패턴 (Provider Pattern)

여러 컴포넌트들이 데이터를 공유해서 사용해야 하는 경우에 사용할 수 있는 패턴입니다.

보통 컴포넌트 간에 데이터 전달이 필요하면 `props`를 통해서 전달합니다. 하지만 앱 내의 모든 컴포넌트들이 데이터에 접근해야 한다면 `props`만으로는 한계가 있습니다.


### prop drilling 안티 패턴

리액트 컴포넌트 트리에서 props로 데이터를 전달하기 위해 사용하는 것입니다. 다만 props를 **하위 컴포넌트로 전달하는 용도로만** 사용하는 경우에 이것을 prop drilling이라고 부릅니다.


```javascript
function App() {
  const data = { ... }

  return (
    <div>
      <SideBar data={data} />
      <Content data={data} />
    </div>
  )
}

const SideBar = ({ data }) => <List data={data} />
const List = ({ data }) => <ListItem data={data} />
const ListItem = ({ data }) => <span>{data.listItem}</span>

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
)
const Header = ({ data }) => <div>{data.title}</div>
const Block = ({ data }) => <Text data={data} />
const Text = ({ data }) => <h1>{data.text}</h1>
```

위 코드에서 `Sidebar`는 data를 prop으로 전달받지만, 정작 자기 자신 내에서는 사용하지 않고 `List` 컴포넌트로 보냅니다. 또 이 `List` 컴포넌트를 `ListItem` 컴포넌트로 보내기 위해서만 prop을 받습니다.

이런 방식으로 props를 *내리꽂는* 것은 꽤 지저분합니다. 만약 `data` 라는 프로퍼티 이름을 변경해야 하는 경우 모든 컴포넌트를 수정하게 됩니다. 

**Provider 패턴**은 이런 안티 패턴을 해결하는 경우에 유용합니다.


### Provider 패턴 사용하기

먼저 React의 Context에 대해 알아보겠습니다.

#### React Context

리액트에는 Context가 있습니다. 리액트 공식문서 [Context](https://ko.reactjs.org/docs/context.html)를 보면, **트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유**할 수 있게 한다고 설명하고 있습니다.

이런 Context는 **컴포넌트 트리 속에서** 전역적인 데이터를 공유할 때 사용합니다.



#### Provider 컴포넌트 동작

```javascript
const DataContext = React.createContext()

function App() {
  const data = { ... }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```
<br/>

1. React.createContext로 `Context` 객체를 생성합니다.
2. 데이터를 공유할 모든 컴포넌트를 `Provider`로 감쌉니다. 
3. `value`라는 이름의 prop으로 하위 컴포넌트에 넘겨줄 데이터를 받습니다.


```javascript
const DataContext = React.createContext();

function App() {
  const data = { ... }

  return (
    <div>
      <SideBar />
      <Content />
    </div>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>

function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
```

4. prop을 받을 하위 컴포넌트들은 React의 `useContext` 메소드를 활용해 data에 접근합니다.


#### Hooks

위 코드에서는 각 컴포넌트들이 `useContext`를 직접 import해 사용하였습니다. 이를 대신해 필요로 하는 Context를 직접 반환하는 Hook을 구현할 수 있습니다.

```javascript
// theme 변경 hook

function useThemeContext() {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return theme
}
```

컴포넌트를 `ThemeContext.Provider`로 직접 래핑하지 않고, HOC(고차 컴포넌트)로 만들면 Context 로직과 렌더링 로직이 분리되어 재사용성이 증가합니다.

```javascript
// Context 부
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

// 렌더링 부
export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  )
}
```

하위 컴포넌트들은 `ThemeContext`에 접근하기 위해 `useThemeContext`를 사용하면 됩니다.

```javascript
export default function TextBox() {
  const theme = useThemeContext()

  return <li style={theme.theme}>...</li>
}
```


### Provider 패턴을 사용하는 때

프로바이더 패턴은 필요한 컴포넌트에서 필요한 데이터를 전역적으로 접근할 수 있어 유용합니다.

보통 UI테마를 여러 컴포넌트들이 공유해 사용할 때 이 패턴을 사용합니다. (ex. 다크모드 / 라이트모드)


## 장/단점

### 장점

* 컴포넌트 트리의 각각 노드에 데이터를 전달하지 않아도 다수 컴포넌트에 데이터 공유 가능
* 리팩토링 과정에서 개발자가 실수할 확률을 줄여줌
* prop drilling 안티 패턴을 사용하지 않아도 됨


### 단점

* Provider 패턴을 과도하게 사용시 성능에러가 발생할 수 있음
* Context를 참조하는 모든 컴포넌트들은 컨텍스트 변경 시마다 **모두 리렌더링**됨


### 결론

쓰지 않는 값의 업데이트로 인해 리렌더링 되는 것을 방지하기 위해 여러 Provider로 쪼갤 필요가 있다.