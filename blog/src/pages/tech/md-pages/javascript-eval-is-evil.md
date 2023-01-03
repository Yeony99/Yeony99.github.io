---
title: "자바스크립트 Eval"
date: "2023-01-02"
category: "tech"
slug: "/tech/javascript-eval-is-evil"
# img: "https://user-images.githubusercontent.com/76241233/177932893-5a504b26-12e4-4ade-b1ce-1951d072ba82.jpg"
tags:
  - "JS"
---

## Eval is Evil?

```javascript
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
function solution(n) {
  return eval(`${Array.from((n).toString()).join('+')}`)
}
```

위와 같은 자릿수 더하기 문제를 풀어보다 eval을 사용했다. 
reduce를 주로 쓰긴 하지만, join이 떠오른 김에 `+` 문자열까지 만든 후 한 번에 계산하면 안되나? 싶어서 이렇게 작성하게 됐다.

eval을 좀더 살펴보려고 MDN 문서를 훑는 중에 **eval()을 절대 사용하지 말 것!** 이란 경고를 볼 수 있었다.

좀 더 찾아보니 Eval is Evil!! 이라는 말장난까지 있어서 그 이유를 살펴보기로 한다.

### eval의 기능

eval의 자세한 기능이 궁금하다면 [MDN - eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 문서를 참고하는 것이 좋다.

간략하게 eval의 기능을 설명하자면, 문자를 코드로 실행시키는 함수다. 

다시 말해 코드를 동적으로 작성하고 실행시킬 수 있는 함수가 되겠다.

```javascript
console.log(eval('2 + 2')) // 4

let foo = 10;

console.log(eval('foo') + 1) // 11
```

### 왜 사용할까?

수년 전의 stackoverflow 글들을 보다보니 코드를 동적으로 생성해야 할 때 가장 많이 쓴 듯 하다.

```javascript
eval('document.' + potato + '.style.color = "red"');
```

이런 식으로 사용한 듯.

### 왜 사용하면 안될까?

1. eval 속에 악의적인 코드를 넣는 공격이 가능해진다.
2. 디버깅이 어렵다. (코드 줄 번호 등이 없기 때문)
3. 느리다.

일단 1번만으로도 사용은 안해야 하는 것으로 판명난 듯 하다. 


eval만으로 할 수 있는 작업도 있을 수 있지만, 웬만하면 다 대체 다른 내장 메소드나 구현을 통해 만들 수 있을 것으로 보인다.

## Reference

[stackoverflow - Why is using the JavaScript eval function a bad idea?](https://stackoverflow.com/questions/86513/why-is-using-the-javascript-eval-function-a-bad-idea)