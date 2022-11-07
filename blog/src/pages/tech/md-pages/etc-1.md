---
title: "[오픈소스] MDN 번역 기여하기"
date: "2022-11-07"
category: "tech"
slug: "/tech/my-first-contribution-to-mdn"
img: "https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png"
tags: 
 - "etc"
---

프론트엔드 개발자다 보니 거의 매일 보는 건 [MDN](https://developer.mozilla.org) 문서다. 한국어 번역이 꽤 많이 됐다고 생각했는데, 아직 안된 문서도 상당히 많았다. 

![번역하기 전 localeCompare 페이지](https://user-images.githubusercontent.com/76241233/200257934-1442ad05-e38b-4916-8dff-41df18b35e78.png)
문제풀이를 하다가 `localeCompare` 메소드를 사용할 일이 있었는데 아직 번역이 안되어 있길래 번역을 해보았다.

작년에 한번 npm 라이브러리 문서의 예시 코드를 수정해 기여한 적이 있었는데, 이번에는 더 많은 사람이 참고하고, 나도 자주 읽는 문서 MDN에 기여해보자는 마음으로 번역을 진행하였다.

<details>
    <summary style="color: #aeaeae">번역 후 문서 보기 👈</summary>
    <div markdown="1">
        <a style="color: #8eb98e; text-style: underline;" href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare</a>
    </div>
</details>

<br/>   

---

## MDN Web Docs Localization

MDN에서는 공식적으로 번역 작업을 관리하고 있다. 

* [카카오톡 오픈채팅방 MDN Korea](https://developer.mozilla.org/en-US/docs/MDN/Community/Contributing/Translated_content#korea_ko) 
* [한국(ko) 번역 지침](https://github.com/mdn/translated-content/blob/main/docs/ko/translation-guide.md) 
* [[ko] 한국 첫 기여자들을 위한 가이드라인](https://github.com/mdn/translated-content/issues/827)

번역을 하며 2, 3번째 링크를 참고할 일이 많았다. 특히 가이드라인이 상세하고 친절하게 적혀있으니 꼭 참고하는 것이 좋다.

---

## 번역 기여 방법

가이드라인 문서를 보면 알 수 있지만, MDN의 모든 로케일 문서는 `en-us`를 기준으로 번역이 진행된다. 한국어 번역 또한 `en-us`가 있는 `mdn/content` 리포지토리를 기준으로 번역된다.   
따라서 번역을 기여할 repo(translated-content)와 en-us repo(content) 를 비교하며 번역하는 작업이 필요하다.

한국어 문서가 자동생성(번역이 안된 상태)된 경우가 있고, 아예 없는 경우도 있다.

1. [mdn/translated-content](https://github.com/mdn/translated-content)와 [mdn/content](https://github.com/mdn/content) 리포지토리를 `fork`
2. 로컬로 fork한 리포지토리를 `git clone` 한다.
3. 번역
    * 한국어 문서가 없다 -> `mdn/content`의 경로와 동일하게 `mdn/translated-content`에 동일한 포맷으로 생성 후 번역
    * 한국어 문서가 있다 -> `mdn/translated-content`에서 해당 파일을 찾아 번역 진행
4. `git checkout -b [브랜치명]`으로 브랜치 생성
5. 번역한 파일 commit & push
6. Pull Request 작성

![Pull Request](https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png)

7. 검수 후 Merge되기를 기다리기

---

## PR을 보냈는데 Comment가 달렸다면?

나의 경우에는 용어 지침과 몇몇 부분에서 실수를 한 부분이 있었는데, 감사하게도 코멘트를 달아주신 분이 계셨다.

바로 수정 사항을 반영해서 올렸는데, 이미 PR을 날려서 PR을 닫고 다시 날리지 않고 git 명령어를 이용했다.

```bash
# 커밋 메시지를 수정하지 않고 커밋 개정
git commit --amend --no-edit 

# 로컬과 원격저장소 내용이 일치하도록 강제(force) 덮어쓰기
git push -f origin [브랜치명]
```

위 과정을 진행하면 자동으로 이미 보낸 PR에 바꿔치기하듯 반영된다.   
다만 conflict가 발생할 수 있으니 주의할 것. ~~해당 파일이 나 외에 작업자가 없다면 ...~~


## Reference

[Git 로컬 브랜치를 원격 저장소로 푸시(Push)하는 방법](https://www.freecodecamp.org/korean/news/git-push-to-remote-branch/)