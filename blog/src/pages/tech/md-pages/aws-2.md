---
title: "Nextjs에서 AWS S3로 파일 이미지 업로드하기"
date: "2023-07-21"
category: "tech"
slug: "/tech/how-to-upload-files-to-aws-s3-from-nextjs"
# img: "https://user-images.githubusercontent.com/76241233/200255359-19c752e7-dbff-4e39-9815-f6607a55f8e2.png"
tags: 
 - "BE"
 - "Nextjs"
---

S3에 이미지 업로드 하는 과정에서 발생한 여러 삽질과 해결방법 등을 미래의 나를 위한 가이드로 남긴다.

<a href="https://github.com/Yeony99/aws-s3-file-upload" target="_blank">깃허브 예제 코드 확인하기</a>

## AWS

### S3 Bucket 생성

Bucket 생성 시 S3 접근을 하기 위해 Block Public Access를 해제한다.   
사이트의 유저들도 파일 업로드를 해야 하기 때문이다.

![Public Access](https://github.com/Yeony99/Yeony99/assets/76241233/d2aa44cd-0b3c-46a5-a2ac-e6c8a3b8566c)

생성 된 후 **Permissions** 탭에서 Bucket Policy를 수정한다.   
별도의 인증 없이 리소스에 접근할 수 있게 할 것이기 때문에 기본적인 policy만 아래와 같이 작성한다.

`YOUR_BUCKET_NAME` 부분을 수정해 사용하면 된다.

![Policy 작성](https://github.com/Yeony99/Yeony99/assets/76241233/ed4aaa9e-2489-4dfb-a14b-1aaf8764c80a)


```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicListGet",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:List*",
                "s3:Get*"
            ],
            "Resource": [
                "arn:aws:s3:::YOUR_BUCKET_NAME",
                "arn:aws:s3:::YOUR_BUCKET_NAME/*"
            ]
        }
    ]
}
```

CORS 를 위해 Cross-orign resource sharing 부분의 프로퍼티를 수정한다.   
아래 설정은 모든 접근을 허용하도록 간단히 작성했다. 

![CORS 설정 작성](https://github.com/Yeony99/Yeony99/assets/76241233/5a4926db-35aa-493d-b451-68d0349fc436)


```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]
```


Bucket이 퍼블릭으로 바뀐 것을 확인할 수 있다.

![퍼블릭 접근 확인](https://github.com/Yeony99/Yeony99/assets/76241233/ce5d3df2-22fb-46ba-8c53-ab3ac814e23d)


### IAM 설정

~~Life is 아름다운 갤럭시~~

AWS에 연결하기 위해 권한을 만들어줘야 한다. IAM 메뉴를 검색해서 group을 만든다.   
이미 S3에 Access 권한이 있는 경우에는 생성하지 않아도 된다.


![IAM](https://github.com/Yeony99/Yeony99/assets/76241233/0690d987-c410-467d-8aff-b2b4a0a322c4)

Group 생성에서 S3 권한을 주도록 하자.   
S3의 모든 권한을 가질 수 있도록 `AmazonS3FullAccess` policy를 선택 후 그룹을 생성한다.

![User Group 생성](https://github.com/Yeony99/Yeony99/assets/76241233/6badeaf0-d1c5-4d88-ab38-3446527dc75f)

만든 그룹을 선택 후 User를 생성한다.

![User 생성](https://github.com/Yeony99/Yeony99/assets/76241233/059c3080-6369-42a4-9906-20679b625c3d)


### Access Key 생성
User가 성공적으로 생성되었으면 Access Key를 생성한다.

Users > 생성한 유저로 이동해 Security credentials 탭에서 **Access Key** 를 확인한다.

![Create Access Key](https://github.com/Yeony99/Yeony99/assets/76241233/58791f89-aee9-4119-b51c-4f7a6cd4a427)


![Access Key 설정](https://github.com/Yeony99/Yeony99/assets/76241233/e1bf01f7-6a04-4e2d-9abe-2285b02fd5ce)

Access Key ID와 secret access key를 확인한다.   
다시 확인할 수 없으니 꼭 csv 파일로 다운받거나 로컬에 복사해놓는다.   
![Key 확인](https://github.com/Yeony99/Yeony99/assets/76241233/8eb233e4-20f5-462e-bf2c-2276cd53d3b8)


<br/>

## Next.js 프로젝트 세팅

### 프로젝트 생성

```cmd
npx create-next-app@latest
```

나는 `axios`를 주로 사용하기 때문에 axios도 추가로 설치했다.

```cmd
yarn add axios
```
혹은
```cmd
npm install axios
```

AWS를 사용하기 위해 sdk도 추가한다.   
Typescript를 사용하는 경우 `@types/aws-sdk` 도 설치한다.

```cmd
yarn add aws-sdk
yarn add @types/aws-sdk
```

### .env 추가

AWS 정보는 유출되면 끔찍한 일이 벌어질 수 있다... AWS Key 확인에서도 주의사항이 적혀있듯이 plain text로 작성하면 안된다.   
따라서 프로젝트 루트에 `.env` 파일을 추가해 민감한 정보들을 숨겨주도록 한다.

```cmd
yarn add dotenv
```

```env
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
BUCKET_NAME=
```

참고로 깃허브 예제에 올려놓은 `.env.example` 은 동작하지 않는다. 수정 후 `.env.local` 이나 `.env` 등으로 수정해 사용해야 한다.

### API 작성

예제에서는 Next13을 사용한다 (app directory).

```
src
-- app
---- page.tsx
---- api
------ route.ts
```

`src/app/api/route.ts` 부터 작성했다.

```ts
// src/app/api/route.ts

import S3 from "aws-sdk/clients/s3";
import { NextRequest, NextResponse } from "next/server";

const s3 = new S3({
  apiVersion: "2006-03-01",
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  signatureVersion: "v4",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(req: NextRequest) {

  const post = await s3.createPresignedPost({
      Bucket: process.env.BUCKET_NAME,
      Fields: {
          key: 'files/' + req.nextUrl.searchParams.get("file"),
          'Content-Type': req.nextUrl.searchParams.get("fileType"),
      },
      Expires: 60,
      Conditions: [
          ['content-length-range', 0, 1048576], // up to 1 MB
      ],
  })

  return NextResponse.json(post)
};
```

userId나 datetime 등으로 S3의 Bucket 내 계층을 동적으로 추가하고 싶다면, `Fields`의 `key` 부분에 자유롭게 입력하면 된다.

```tsx
Fields: {
    // files/ 계층 생성 -> 하위로 파일 저장
    key: 'files/' + req.nextUrl.searchParams.get("file"),
    'Content-Type': req.nextUrl.searchParams.get("fileType"),
},
```

또한 Conditions 를 설정해 업로드 가능한 최대 파일 크기를 명시할 수도 있다.


### Front 작성

`src/app/pages.tsx` 를 작성한다.


먼저 파일을 담을 수 있도록 input을 작성한다.

```tsx
// src/app/pages.tsx
"use client";

export default function Home() {
    const [file, setFile] = useState<File | null>(null);

    const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] ?? null);
    };

    return (
        <main>
            <h1>AWS S3 파일 업로드</h1>
            <div>
                <input onChange={onChangeFile} type="file">
                <button>저장!</button>
            </div>
        </main>       
    );
}
```

저장 버튼에 onClick 이벤트로 걸 uploadFile 함수를 작성한다.

```tsx
// ...

const uploadFile = async (file: File | null) => {
    try {
        // 파일이 없으면 return
        if (!file) {
            console.log('No file!')
            return;
        }

        // UTF-8 로 인코딩
        const filename = encodeURIComponent(file.name);
        const fileType = encodeURIComponent(file.type);

        // s3 API 호출
        const res = await axios.get(`/api`, {
            params: {
                file: filename,
                fileType,
            },
        });

        // response로 url 과 fields 받음
        const { url, fields } = await res.data;

        // form data 객체 생성
        const formData = new FormData();

        // form data에 데이터 append

        // FormData에 들어가는 데이터
        /**
         * key (파일명)
         * Content-Type
         * bucket
         * X-Amz-Algorithm (해시 처리 알고리즘)
         * X-Amz-Credential (공개키 + 날짜 + Region 등)
         * X-Amz-Date
         * Policy (token)
         * X-Amz-Signature
         * file
        **/
        Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value as string);
        });


        // Bucket의 url에 FormData 정보 담아 POST
        const upload = await axios
        .post(url, formData)
        .then((res) => res)
        .catch((err) => err);

        if (upload.status === 204) {
            console.log("Uploaded successfully!");
        } else {
            alert("파일 용량 초과");
            console.error("Upload failed.");
        }
    } catch (error) {}
};

return (
// ...
    <button onClick={() => uploadFile(file)}>저장!</button>
// ...
)

```

헷갈리면 안되는 부분!

작성한 API 코드는 순전히 s3로 넘길 데이터를 만들어서 return 받는 것 뿐이지 s3로 업로드 된 것이 아니다.   
따라서 GET API 호출 후 전달 받은 url (s3 버킷 주소)와 fields(s3업로드 용으로 가공된 파일 데이터)로 POST API를 한번 더 호출해야 한다.   


S3에 들어가보면 작성한대로 `files/` 계층 아래 `test.txt` 파일이 저장된 것을 확인할 수 있다.

![image](https://github.com/Yeony99/Yeony99/assets/76241233/b1eb8b86-884b-4df4-a457-22f888c887b5)


파일 다운로드는 보통 DB에 file 명을 저장해놓고 처리하기 때문에 깃허브 소스에만 올려두었다.   
소스 확인은 [여기](https://github.com/Yeony99/aws-s3-file-upload)로 


## Reference

[vercel github examples](https://github.com/vercel/examples/tree/main/solutions/aws-s3-image-upload)
[How to Upload Files to AWS S3 From NextJS App](https://betterprogramming.pub/how-to-upload-files-to-amazon-s3-from-nextjs-app-b7ef1909976b)