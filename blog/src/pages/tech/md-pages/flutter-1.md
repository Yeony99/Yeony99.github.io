---
title: "[Flutter] Dart 기본 문법"
date: "2022-09-02"
category: "tech"
slug: "/tech/flutter-dart-and-flutter"
img: "https://user-images.githubusercontent.com/76241233/187564792-d9177d6e-ab8b-4919-8593-128e5ddc9476.png"
tags:
  - "스터디 Flutter"
---

## Dart란?

[다트(Dart)](https://dart.dev/)는 구글이 자바스크립트를 대체하기 위해 2011년도 개발한 **멀티 플랫폼** 프로그래밍 언어입니다.

다트의 특징으로는 모바일 앱, 웹 앱 등 여러 플랫폼을 다트를 이용해 만들 수 있습니다.

### Dart 특징

- statically typed
  - dynamic type을 지원
- 객체 지향 언어
- 단일 상속 지원
- mixin 지원

---

<br/>

## Dart 자료형

다트는 `Java` 혹은 `Javascript`와 유사한 문법을 가지고 있습니다.

먼저 자료형부터 살펴보겠습니다.

- num : 숫자 타입
  - int : 정수 타입
  - double : 실수 타입
- bool : true/false 불리언 타입
- String : 문자열 타입
- List : 중복 허용, 순서가 있는 집합
- Set : 중복 허용하지 않는 순서 없는 집합
- Map : key-value 쌍으로 구성된 집합 (자바스크립트의 Object 타입과 유사)

변수와 함수 선언 예시는 아래와 같습니다.

```dart
String name;
num age;

List<String> students = ['Nayeon', 'Yeony', 'Kim'];

Map<String, int> scores = {
    'math': 97,
    'eng': 77
}

voin main() {
    print('Hello World!');
}

String sayHi() {
    return 'Hi!';
}
```

<br/>

### dynamic

다트의 특징으로 **dynamic type**이 있다고 했는데요.

변수 선언 시 `dynamic`을 붙이면 해당 변수는 모든 형식을 허용하는 형태가 됩니다. 처음 타입이 String이고 후에 int 타입을 할당해도 에러가 나지 않습니다.

```dart
void main() {
    dynamic changing = 'Hi!!';
    changing = 123;

    print(changing); // 123
}
```

<br/>

### var

`var`는 **타입 추론**을 가능케 하는 키워드입니다.

타입을 꼭 선언하지 않아도, 변수에 처음으로 할당되는 값에 따라 자동으로 타입을 추론합니다.  
단, 이후 다른 타입의 값이 할당된다 해도 그 변수의 타입은 변경되지 않습니다.

```dart
void main() {
    var age = 10; // age는 int 타입으로 고정

    age = 20;
    print(age); // 20

    age = 'I am so young'; // Error! (int 변수에는 String을 할당할 수 없음)
}
```

<br/>

### final / const

자바나 자바스크립트에서 볼 수 있던 키워드를 다트에서도 볼 수 있습니다.

모두 **상수**를 의미하지만 차이가 있습니다.

- const : compile-time constant로 앱 빌드시 값 정해짐.
  - life cycle 상 절대 변하지 않음을 의미. (재빌드하지 않아 성능 개선)
- final : run-time constant로 앱 실행시 값이 정해짐

---

<br/>

## Dart의 연산자

자바스크립트를 주로 사용하는 개발자로서 자바스크립트 연산자와 아주 유사하다고 생각되었습니다.  
자바스크립트와 다르거나 다트에만 있는 독특한 연산자만 정리합니다.

### ~/ (정수 나눗셈 연산자)

```dart
void main() {
    print(101~/2); // 50
}
```

<br/>

### is / is! (타입 확인 키워드)

자바스크립트의 `typeof` 연산자와 유사합니다.

```dart
void main() {
    var name = 'Yeony';
    print(name is int); // false;
    print(name is String); // true;
}
```

<br/>

### A?.B (optional chaining)

`?.`를 적어줌으로써 해당 객체의 속성을 사용할 수 있는지 여부에 따라 반환되는 값이 달라집니다.

객체의 속성에 접근할 수 있다면 그대로 반환하고, 사용할 수 없다면 `null`을 반환합니다.

```dart
void main() {
    String? name;

    print(name.length); // Error!
    print(name?.length); // null
}
```

<br/>

### A ?? B (논리 OR)

자바스크립트의 `||` 연산자와 똑같이 동작합니다.

```dart
void main() {
    String name;

    String myName = name ?? 'Yeony';

    print(myName); // name이 null이므로 'Yeony'
}
```

<br/>

### A ??= B (논리)

`??` 연산자와 반대로 동작합니다.

```dart
void main() {
  int age;

  int myAge = 24;

  myAge ??= age;

  print(myAge);	//age가 null이므로 24
}
```

<br/>

---

<br/>

## Dart의 Class

class는 객체를 정의하는 일종의 틀입니다. 특정한 모양의 객체를 생성하기 위해 변수, 메소드를 지정하는 것이죠.

```dart
class Fruit {
    String name = 'Banana';

    void printFruitName() {
        print('This is a ${name}!');
    }
}

void main() {
    Fruit fruit = new Fruit();

    fruit.printFruitName(); // This is a Banana!

    fruit.name = 'Grapes';
    fruit.printFruitName(); // This is a Grapes!
}
```

<br/>

### 생성자

다트의 class또한 다른 객체지향언어와 같이 생성자(constructor)를 가질 수 있습니다

```dart
class Fruit {
    String? name;
    int? price;

    Fruit(String name, int price) {
        this.name = name;
        this.price = price;
    }

    void printFruitName() {
        print('This is a ${name}! This is ${price} won!');
    }
}

void main() {
    Fruit fruit = new Fruit('Strawberry', 10000);

    fruit.printFruitName(); // This is a Strawberry! This is 10000 won!
}
```

**Named Parameter** 를 사용하면 이렇게 작성할 수도 있습니다.

```dart
class Fruit {
    String? name;
    int? price;

    Fruit({String? name, int? price}) // named parameter
        : this.name = name,
          this.price = price;

    void printFruitName() {
        print('This is a ${name}! This is ${price} won!');
    }
}

void main() {
    Fruit fruit = new Fruit(name: 'Strawberry', price: 10000);

    fruit.printFruitName(); // This is a Strawberry! This is 10000 won!
}
```

<br/>

### 상속

클래스에서는 상속이 가능합니다.

상속의 개념을 간단히 설명해보죠.

부모와 자식이 있습니다. 부모는 부모가 가진 것들만 자식에게 줄 수 있습니다. 반면 자식은 부모의 것도 가지고, 본인만의 것도 가질 수 있습니다. 자식이 부모의 것을 가지는 것이 **상속**, 자식이 부모의 것에 더해 자신만의 것을 가지는 것을 **확장**이라고 합니다.

상속을 받을 때는 `extends` 키워드를 사용합니다.

```dart
class Fruit {
    String? name;
    int? price;

    Fruit({String? name, int? price}) // named parameter
        : this.name = name,
          this.price = price;

    void printFruitName() {
        print('This is a ${name}! This is ${price} won!');
    }
}


class Juice extends Fruit {
    Juice({super.name, super.price});

    void printJuiceName() {
        print('This is juice made of ${this.name}!!');
    }
}

void main() {
    Juice juice = new Juice(name: 'Lemon', price : 5000);

    // 부모 class인 Fruit에도 접근 가능
    juice.printFruitName(); // This is a Lemon! This is 5000 won!
    juice.printJuiceName(); // This is juice made of Lemon!!
}
```

<br/>

## Dart의 Interface

다트는 클래스를 활용해 인터페이스를 정의할 수 있습니다.

인터페이스란, 클래스 정의 시 **반드시 정의해야하는 변수 및 함수를 지정**할 때 사용합니다.

앞서 클래스가 일종의 틀이라고 언급했는데, 인터페이스도 유사하지만 **규격**에 가깝습니다.  
다른 클래스를 작성할 때 기본 틀을 제공하는 것이죠.

자바 등에서는 interface 키워드를 이용해 정의하지만, 다트는 `class` 키워드를 사용해 인터페이스를 정의하고, `implements` 키워드로 인터페이스를 사용합니다.

```dart
class Food {
    String? name;

    void printFoodName() {} // 함수 정의만 함
}

class Fruit implements Food {
    String? name;

    Fruit(String name) : this.name = name;

    // 함수 작성
    void printFoodName() {
        print('Hi! There is ${name} here!');
    }
}

void main() {
    Fruit fruit = new Fruit('Melon');

    fruit.printFoodName();
}
```

<br/>

<!--
📍 Dart Language와 Flutter Framework가 각각 무엇인지 이해하고, 둘의 관계를 이해한다.

📍 Dart Language와 Flutter Framework의 장점을 이해하고, 왜/어떻게 사용되는지 이해한다.

📍 C Programming을 배웠다고 가정하고, 프로그래밍 언어의 기본적 문법들을 복습한다.

📍 OOP Language(객체지향언어)인 Dart가 어떤 특징을 가지는지 이해한다.

📍 Dart만이 가진 독특한 문법들을 숙지한다. -->

◾ [[Flutter] Widget 다루기](/tech/flutter-what-is-widget) 👈 다음 글 보기
