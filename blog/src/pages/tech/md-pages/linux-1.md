---
title: "Linux 서버에 frontend 파일 올리기"
date: "2023-03-15"
category: "tech"
slug: "/tech/upload-frontend-to-linux-server"
# img: "https://user-images.githubusercontent.com/76241233/203911749-4814e386-efcc-460f-8065-1d1c246a913e.png"
tags: 
 - "Linux"
---

리눅스를 건들일 일이 거의 없었는데, 이번에 프론트엔드 파일을 올려보게 되었다.

정리 겸 작성하는 글이 될 듯 하다.   
이미 리눅스 서버와 계정이 있다는 전제다. ssh와 scp(sftp)를 사용한다.

## ssh란?

Secure shell의 약자로, 암호화 방식을 지원해 강력한 보안성이 있는 프로토콜이다.

## 계정 접속

```powershell
cd ./[올릴 파일이 있는 디렉토리]
```

```powershell
ssh [USER]@[HOST]
```

만약 port가 있다면

```powershell
ssh [USER]@[HOST] -p [PORT]
```

이렇게 접속한다.

* USER: 접속할 리눅스 사용자
* HOST: 네트워크 상으로 접근 가능한 호스트 혹은 IP
* PORT: 리눅스 서버의 SSH 포트. 22번을 사용할 경우 -p 옵션 생략 가능

패스워드를 입력한 후, 리눅스 shell이 뜨면 정상적으로 접속된 것이다.

```powershell
cat /etc/lsb-release

DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=20.04
DISTRIB_CODENAME=focal
DISTRIB_DESCRIPTION="Ubuntu 20.04.5 LTS"
```

현재 작업 환경을 확인할 수 있다.

## SCP와 SFTP 

SCP로 파일 업로드를 시도하다 자꾸 업로드가 안되어서, 나는 결국 SFTP로 처리했다. (scp 명령어를 쓰니 `No such file or directory` 오류가 자꾸 났다.)   
둘다 파일 전송인데 무슨 차이가 있을까 찾아보았다.

|   |SCP|SFTP|
|---|---|---|
|뜻| Secure Copy| Secure File Transfer Protocol|
|속도| SFTP보다 빠르다 | 패킷 암호화 및 일치를 기다려야 해 SCP보다 느림|
|파일 전송 용량| 4GB 이상 전송 불가 | 대용량 전송 가능 |
|불완전 전송 재개| 불가능 | 가능|

대략적으로 SFTP가 SCP보다 더 많은 기능을 제공한다고 보면 되겠다.


## 업로드

나는 SCP에서 에러가 나서 SFTP로 처리했지만, `scp` 명령어는 이렇게 작성하면 된다.

### scp 

```powershell
ssh [USER]@[HOST]

# 접속 후
mkdir [파일을 넣을 디렉토리]
scp -r [프론트엔드 디렉토리명] [USER]@[HOST]:~/[파일 넣을 디렉토리]
```

`mkdir` 명령어로 파일 넣을 디렉토리를 만든 후, scp 명령어로 컴퓨터에 있는 디렉토리를 복사해 넣는다.   
`-r` 옵션을 사용하면 보내고자 하는 디렉토리의 하위 폴더와 파일까지 동시에 전송이 가능하다.


### sftp

sftp 에서는 `put` 명령어를 사용했다. 원격 호스트의 working directory에 이름이 같은 directory가 없으면 오류가 발생한다. 따라서 `mkdir` 명령어로 동일한 이름을 가진 디렉토리를 생성한다.

scp와 마찬가지로 `-r` 옵션으로 하위 디렉토리까지 복사되도록 한다.

```powershell
sftp [USER]@[HOST]

# 접속 후
mkdir [파일 넣을 디렉토리]
put -r [프론트엔드 디렉토리명]
```


### Node 설치

프론트엔드에서 사용한 Node.js 버전에 맞춰 setup_ 뒤의 버전을 작성한다.

버전이 뭐가 있는지는 [nodesource/distributions](https://github.com/nodesource/distributions/tree/master/deb) 참고

```powershell
curl --silent --location https://rpm.nodesource.com/setup_[x].x | sudo bash -

node -v
```

혹은 이렇게도 설치가 가능한 듯 하다.

```powershell
wget https://nodejs.org/dist/v[버전]/node-v[버전]-linux-x64.tar.gz

tar -xvf node-v[버전]-linux-x64.tar.gz
```

### yarn 설치

나는 패키지 매니저로 yarn을 사용하고 있어 추가로 yarn 도 설치했다.

```powershell
sudo npm install -g yarn
```

### 백그라운드 실행 (nohup)

서버가 있으면 프론트엔드 프로젝트의 config 파일에 기입한 PORT로 보일 것이다. 

이 프로젝트는 nuxt를 사용했는데, `nuxt.config.js`에는 이렇게 명시했다.

```json
//
server: {
    host: "0.0.0.0",
    port: 3000
},
//
```

host를 주지 않으면 localhost로 떠버리니 주의할 것.

`yarn dev`나 `yarn start`로 서버를 띄웠는데 엥... 터미널 종료하니 서버에서도 종료되는거다.   
그래서 동료분께 여쭤봤더니, 리눅스의 `nohup` 명령어가 있다고 하셨다.

```powershell
nohup yarn dev &
```

`nohup` 은 **no hang up** 의 약자로 종료하지 말라는 의미다. 터미널 세션 연결을 종료해도 실행시킨 프로그램이 계속 유지된다.


## Reference

[SFTP vs SCP – What’s the Difference for Secure File Sharing?](https://cloudinfrastructureservices.co.uk/sftp-vs-scp-whats-the-difference-for-secure-file-sharing/)   
[SFTP vs. FTPS Comparison: Which One Is Better?](https://www.msp360.com/resources/blog/sftp-vs-ftps/)    
[Linux에 Node.js를 설치하는 방법](https://www.hostwinds.kr/tutorials/how-to-install-node-js-on-linux)    
[쉽게 설명한 nohup과 &(백그라운드) 명령어 사용법](https://joonyon.tistory.com/entry/%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85%ED%95%9C-nohup-%EA%B3%BC-%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%82%AC%EC%9A%A9%EB%B2%95)   