---
title: "타입스크립트의 타입 정리"
date: "2022-10-29"
category: "tech"
slug: "/tech/typescript-types"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags: 
 - "TS"
---

자바스크립트에서는 여러가지 자료형을 제공합니다. ([자바스크립트 자료형](/tech/let-me-know-js-a-bit-js-data-type)) 타입스크립트도 자바스크립트가 제공하는 자료형을 당연히 제공하는데요.

하지만 타입스크립트는 더 많은 타입이 있고, 심지어 개발자가 사용자 정의 타입을 만들 수도 있습니다.

## 타입스크립트의 타입

먼저 타입스크립트가 제공하는 기본 타입을 알아봅시다.

### number

* 자바스크립트의 number와 동일합니다.
* 정수(integer)나 실수(float)의 구별이 없습니다.

```typescript
let i:number = 10
let f:number = 1.3
let n:number = -5
```
---
<br/>

### string

* 자바스크립트의 string과 동일합니다.

```typescript
let s:string = 'str'
let t:string = `str`
let s2:string = "str"
```
---
<br/>

### boolean

* `true`와 `false`만 가집니다.
* 자바스크립트의 truthy나 falsy 값은 해당하지 않습니다.

자바스크립트에서는 `0`, `1`, `null`, `undefined` 등이 `truthy` 혹은 `falsy`, 즉 참 같은 값, 거짓 같은 값으로 판단되어 if 조건문 속에서 사용되는 경우가 있습니다.   
하지만 타입스크립트에서는 `true`와 `false` 외에는 boolean 타입으로 인정하지 않습니다.

```typescript
let t:boolean = true
let f:boolean = false
```
---
<br/>

### object
* 자바스크립트의 object는 모두 타입스크립트의 object입니다.
* 타입스크립트에서는 보다 구체적인 객체 형태를 가질 수 있습니다.

타입스크립트에서 객체를 다루는 방식을 살펴보겠습니다.

객체를 하나 만들고, 새로운 속성을 지정해보겠습니다.

#### 타입스크립트 객체 생성

```typescript
const obj = {
    name: 'Yeony',
    age: 24,
}
console.log(obj.name) // 컴파일 에러 Property 'name' does not exist on type 'object'.
obj.hobby = 'traveling' // 컴파일 에러: Property 'hobby' does not exist on type 'object'.
```

`name`과 `hobby` 모두 속성이 해당 객체에 없다고 표시됩니다.

타입스크립트에서는 위 객체의 데이터 타입을 아래와 같이 추론합니다.

#### 타입스크립트의 타입 추론

```typescript
const obj: {
    name: string;
    age: number;
}
```

이 내용이 obj에 저장된 데이터 타입이라고 생각하는 것이죠. 이 추론에 따르면 `name` 프로퍼티는 무조건 `string`이여야 하고, `age` 또한 `number` 타입이어야 합니다.

`obj`가 객체라고 명시해보겠습니다.

#### 객체 타입 명시

```typescript
// 타입 const obj: object
const obj: object = {
    name: 'Yeony',
    age: 24,
} 

console.log(obj.name) // 컴파일 에러
obj.hobby = 'traveling' // 컴파일 에러
```


타입스크립트는 이제 `obj`가 객체 타입이라고 인식하지만, 컴파일은 여전히 되지 않습니다. 

이 상황을 해결하기 위해 우리는 좀더 상세한 타입 지정을 할 수 있습니다.

#### 상세한 타입 지정

```typescript
const obj: {
    name: string;
    age: number;
} = {
    name: 'Yeony',
    age: 24,
}

console.log(obj.name)
obj.hobby = 'traveling' // 컴파일 에러
```

이제 `name`은 접근이 가능합니다. 하지만 여전히 동적 할당은 컴파일 단계에서 에러가 발생합니다. `hobby`라는 key가 정의되지 않았기 때문입니다.

동적 할당이 가능하게 하려면 프로퍼티 키가 무엇이 들어오더라도 가능하게끔 코드를 수정해야 합니다.

#### 타입스크립트의 동적 할당

자바스크립트의 객체를 상기해봅시다. 객체는 **key-value** 쌍으로 이루어져 있고, key는 문자열입니다. value는 어떤 자료형이든 가능합니다.

따라서 동적 할당이 가능하게 하려면 아래와 같이 작성해야 합니다.

```typescript
const obj: {
    name: string;
    age: number;
    [key: string]: any;
} = {
    name: 'Yeony',
    age: 24,
}

console.log(obj.name)

obj.hobby = 'traveling'
```
---
<br/>

### Array

* 자바스크립트의 array는 모두 타입스크립트의 array입니다.
* 타입을 유연하게 지정하거나, 제한적으로 지정할 수도 있습니다.


#### 특정 타입의 배열

타입스크립트에서는 특정한 타입으로 이루어진 배열을 선언할 수 있습니다.

```typescript
let favoriteFood: string[];

favoriteFood = ["pizza", "chicken"]

favoriteFood = ["gulasch", 1] // 컴파일 에러: Type 'number' is not assignable to type 'string'.
```

`string[]` 이나 `number[]` 같이 작성합니다.

```typescript
// only number
let nums:number[] = [1, 2, 3]
let strs:string[] = ['a', 'b', 'c']
let bools:boolean[] = [true, false, true]
```

#### 타입에 관계없는 배열

자바스크립트에서 작동하는 배열처럼 작성할 경우에는 `any[]` 로 지정해줍니다.

```typescript
let anys:any[] = [1, 'a', true]
```

#### 여러 타입의 배열

단일한 타입이나 타입을 무시하는(any) 배열이 아닌, 특정한 여러 타입만 들어오는 배열을 정의하고 싶을 때엔 이렇게 작성합니다.

```typescript
let selects:(number | string | boolean)[] = [1, 'c', false];
```

이러한 형태를 [union 타입](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) 이라고 합니다.

---
<br/>

### Tuple

* 배열의 형태이지만 **길이와 타입이 고정된** 배열입니다.
* 타입스크립트에만 있습니다.

튜플은 이러한 형태로 작성됩니다.

```typescript
const role = [2, 'author']

// 타입
// role: (string | number)[]
```

다만 위 코드에서는 `role` 이 일반적인 배열로 인식됩니다. 타입스크립트는 개발자가 2가지 요소만 입력할 것이란 걸 아직 모르기 때문입니다. 그러면 더 이상 튜플이 아닙니다.

튜플이라는 것을 명시하려면 이렇게 작성합니다.

#### 튜플 선언

```typescript
const role: [number, string] = [2, 'author']

role[1] = 3 // 컴파일 에러 Type 'number' is not assignable to type 'string'.

role[3] = 11 // 컴파일 에러 Tuple type '[number, string]' of length '2' has no element at index '3'.
```

#### 튜플은 어디에 사용될까?

특정한 규칙(순서)로 정보를 담을 때 유용합니다.

사용자 정보를 (사용자 인덱스 | 이메일 | 비밀번호) 구조로 저장한다고 가정했을 때, 뒤죽박죽되면 당연히 곤란하겠죠.

튜플의 길이를 벗어나게 할당하려고 하거나 명시된 순서에 맞지 않는 자료형의 값을 할당하면 에러가 표시되니 관리하기 수월합니다.


#### 튜플의 단점

튜플은 길이가 고정되어 있다고 했지만, 명시적인 할당에만 반응합니다.

```typescript
const role: [number, string] = [2, 'author']

// role[3] = 11 // 컴파일 에러

role.push('메롱')

console.log(role) // [2, "author", "메롱"] 
```

자바스크립트 Array의 내장 메소드인 `push()` 메소드에는 대응할 수 없다는 단점이 있습니다.

---
<br/>


### Enum

* 타입스크립트에만 있습니다.
    * 다른 언어(Java, C) 등에는 널리 사용됩니다.
* 사용자 지정 타입입니다.
* 자동으로 열거되는 전역 상수 식별자입니다.
* 라벨들은 0부터 시작하는 숫자로 자동 변환됩니다.

사용자 권한을 작성할 때 0은 ADMIN, 1은 USER, 2는 AUTHOR 라고 정했다고 가정해봅시다.    
이 규칙을 절대 잊어버리지 않는다면 큰 문제가 발생하진 않겠지만, if 검사를 할 때 개발 도중 잊어버릴 가능성도 있습니다.

혹은 'ADMIN', 'VALID_USER' 등의 문자열로도 작성할 수 있겠죠. 하지만 `if(role === 'VALID_USER')` 이런 식으로 작성하면 과연 효율이 좋을까요?

개발자가 읽기 쉽고(문자열), 백그라손쉽게 코딩하기 위해 Enum을 사용합니다.

#### Enum 생성

```typescript
enum Role {
    ADMIN, USER, AUTHOR
};

const user:{
    name: string;
    role: Role
} = {
    name: 'Yeony',
    role: Role.USER
}

```

#### Enum의 동작

Enum은 기본적으로 0부터 시작해 할당됩니다.

```typescript
enum Role {
    ADMIN, USER, AUTHOR
};

// --------------------
// enum의 타입
Role.ADMIN = 0
Role.USER = 1
Role.AUTHOR = 2
```

만약 0이 아닌 다른 수로 시작하고 싶다면 아래와 같이 명시합니다.

```typescript
enum Role {
    ADMIN = 3, USER, AUTHOR
};

// --------------------
// enum의 타입
Role.ADMIN = 3
Role.USER = 4
Role.AUTHOR = 5
```

```typescript
enum Role {
    ADMIN = 3, USER = 100, AUTHOR
};

// --------------------
// enum의 타입
Role.ADMIN = 3
Role.USER = 100
Role.AUTHOR = 101
```

숫자가 기본이지만 문자열도 할당할 수 있습니다.

```typescript
enum Role {
    ADMIN = 'ADMIN', USER = 100, AUTHOR
};

// --------------------
// enum의 타입
Role.ADMIN = 'ADMIN'
Role.USER = 100
Role.AUTHOR = 101
```

하지만 문자열로 할당했을 경우, `USER = 100` 같이 숫자로 초기화를 하지 않으면 에러가 발생합니다.

```typescript
enum Role {
    ADMIN = 'ADMIN', USER, AUTHOR // 컴파일 에러 : Enum member must have initializer
}
```

### Any

* 모든 종류의 값 저장 가능합니다.
* 타입 배정이 필요하지 않습니다.

위에서 객체 타입을 보며 잠깐 보았듯, `any`는 아주 유연합니다. 사실상 타입을 신경쓰지 않겠다는 말이기도 하죠.

따라서 가능한 한 새로운 코드를 작성할 때에는 any 타입을 지정하지 않는 것이 좋습니다. 타입스크립트가 제공하는 모든 장점을 any가 상쇄시키기 때문이죠.

이미 있는 프로젝트에 타입스크립트를 점진적으로 적용할 때 유용합니다.

---
<br/>

### Void

* 타입스크립트에만 있습니다. (다른 언어에는 존재합니다.)
* 변수에 `undefined`만 할당할 수 있습니다.
* 함수에는 반환 값을 설정할 수 없는 타입입니다.


자바스크립트에서 함수는 반환 값이 있을 수도 있고, 없을 수도 있습니다. 함수에 `return 값` 코드가 없는 경우에 자바스크립트는 `undefined`를 반환합니다.

타입스크립트에서는 **반환 값이 없다**는 것을 명시적으로 보여주기 위해 `void`를 사용합니다.


```typescript
let ud: void = undefined

function sayHello(name:string): void {
    console.log(`Hi, ${name}!`)
}
```
---
<br/>

### Never

* 타입스크립트에만 있습니다.
* 절대 발생할 수 없는 타입을 나타냅니다.
* **항상 오류**를 출력하거나 **리턴 값을 절대 내보내지 않는** 타입입니다.

```typescript
// 항상 오류
function alwaysError(msg:string): never {
    throw new Error(msg);
}

// 무한루프
function infiniteLoop(): never {
    while(true) {
        //...
    }
}
```

변수의 타입을 `never`로 지정한 경우에는 `never`만 할당할 수 있습니다. `any` 타입도 불가능합니다.

```typescript
let neverType:never;

neverType = 100; // 컴파일 에러

// 함수의 반환 타입이 never
neverType = (function():never { throw new Error('Error') })();
```