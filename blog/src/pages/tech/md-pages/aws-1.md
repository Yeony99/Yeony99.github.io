---
title: "AWS PostgreSQL RDS 생성하기"
date: "2023-07-19"
category: "tech"
slug: "/tech/aws-postgresql-database"
# img: "https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png"
tags: 
 - "BE"
---

Nextjs 프로젝트를 처음부터 끝까지 메인으로 작업하게 되었다. DB나 배포 과정도 알아야 할 것 같아, 팀에서 이미 사용 중인 AWS와 S3를 배우기 시작했다.   
내가 하던 프론트 공부랑은 좀 다른 영역이라 이 부분들은 다 BackEnd 태그로 분류했다.

## RDS란

* AWS에서 제공하는 클라우드 기반 관계형 데이터베이스 서비스
* 클라우드 기반이라 서버 설치 없이 DB를 사용할 수 있다.

AWS는 [한글 가이드](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html)가 굉장히 친절하게 나와있다. 

가이드에서는 EC2 부터 생성 후 RDS를 만들라 하는데, 이 과정은 건너뛰고 RDS부터 생성하였다.

### Create DataBase
![DataBase 만들기](https://github.com/Yeony99/Yeony99/assets/76241233/eb012dbc-ea5b-41ee-a960-d516a7664b97)

PostgreSQL을 팀에서 사용하고 있기 때문에 PostgreSQL을 선택했으나, 각자 사용하는 것을 선택하면 된다.

![Create DB 모드 선택](https://github.com/Yeony99/Yeony99/assets/76241233/00f512f3-b778-4234-8fa7-750297376db3)

DB 생성 시에는 Standard와 Easy 중에 고를 수 있다. Easy는 흔히 사용되는 기본 세팅들을 제공해준다. 나는 Easy 로 생성하였다.    
Easy 로 생성 시 어떤 설정이 되는지 하단에서 확인할 수 있다.   
![Easy 설정](https://github.com/Yeony99/Yeony99/assets/76241233/88977ed6-e2d7-4fd6-80f8-a1886cef102c)      



![DB 인스턴스 설정](https://github.com/Yeony99/Yeony99/assets/76241233/d5c10ec9-0a55-4108-82c2-2b1278f3c8c8)

인스턴스 사이즈, DataBase 이름과 username, password를 설정한다.    
무료로 시도할 거라면 Free Tier를 선택하자.

### RDS 생성 후

![Status Creating](https://github.com/Yeony99/Yeony99/assets/76241233/7de9cc7d-7767-4a36-8a25-861d557e8b38)

데이터베이스의 Status가 **Available**이 될 때까지 기다려야 한다. 

![DataBase 정보](https://github.com/Yeony99/Yeony99/assets/76241233/a75a77e4-2e88-4496-952f-7488fc6ba47c)

생성이 완료되면 **연결 & 보안** 탭을 확인한다.   
Port는 자동으로 생성되어 PostgreSQL의 5432 포트로 설정된 것을 확인할 수 있다.

* Endpoint: AWS 웹 서비스를 위한 진입점의 URL ([AWS의 정의](https://docs.aws.amazon.com/ko_kr/general/latest/gr/rande.html))
    * 나는 리소스에 접근할 수 있는 통로 정도로 이해했다.

여기서 VPC 보안 그룹 (VPC security groups)를 확인하고 인바운드를 수정해야 한다.

### VPC

아마존에서 제공하는 서비스로 Virual Private Cloud다. 퍼블릭 클라우드 내에서 호스팅되는 격리된 네트워크 공간을 제공한다.

![VPC 인바운드](https://github.com/Yeony99/Yeony99/assets/76241233/4964c179-1825-42a8-9891-592788ae6ade)

* 인바운드: 데이터베이스 서버 안으로 들어오는 것
* 아웃바운드: 데이터베이스 서버가 밖으로 응답하는 것

외부에서 RDS에 접근하기 위해서는 VPC (보안그룹)의 인바운드를 수정해야 한다.

![인바운드 수정](https://github.com/Yeony99/Yeony99/assets/76241233/377e7af1-8925-41d7-861b-a62769f2ac10)

**My IP** 로 설정하면 이제 내 IP에서만 접근할 수 있다.


## Reference

[PostgreSQL DB 인스턴스 생성 및 해당 인스턴스에 연결](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html)   
