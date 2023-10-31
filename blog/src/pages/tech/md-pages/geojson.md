---
title: "Leaflet에 GeoJson 불러오기 in React"
date: "2023-10-31"
category: "tech"
slug: "/tech/how-to-adjust-geojson-with-leaflet"
# img: "https://user-images.githubusercontent.com/76241233/203911749-4814e386-efcc-460f-8065-1d1c246a913e.png"
tags: 
 - "JS"
---

<!-- geojson 만드는 방법, 변환 링크 등... -->

## 요구사항 

1. 전국 지도를 띄우고
2. 광역시/도별 행정구역으로 border 처리
3. 각 구역을 clickable하게

만들어야 했다. 

먼저 각 행정구역별로 지도를 그릴 수 있게 좌표 정보를 받아야 했다.

---

## 행정구역 데이터 다운로드
 
<a href="http://www.gisdeveloper.co.kr/?p=2332&ref=park9eon.com" target="_blank">공간정보시스템 - 딥러닝 기반 기술 연구소</a>

여기서 좌표계 prj 파일(GRS80 UTM-K / EPSG:5179)과 최신 행정구역(SHP) 정보를 다운로드하였다.

간단하게 이 정보들이 무얼 의미하는지 살펴보자.

<br/>

### Shapefile

**Shapefile**은 지리/공간 백터 데이터를 저장하는 파일 형식이다. 

벡터이미지는 svg 이미지를 다뤄봤다면 알고 있을텐데, 점과 점을 연결해 그림을 그리는 방식이다. path를 기억하기 때문에 이미지의 크기를 줄이고 늘리는 것에 구애받지 않는 것이 특징이다.

이런 정보들을 지형 정보로 담는 것이다. `.shp` 확장자를 가진 SHP파일은 벡터 지리공간 정보를 담고 있다. 하지만 공간정보시스템에서 다운로드 받은 파일은 총 4가지가 될텐데, 각각은 다음과 같다.

* .shp: 지리지형공간 데이터. 기하학적 정보를 저장
* .dbf: dBASE 파일로 .shp 파일과 관련된 속성 정보를 저장하는 파일
* .shx: shape index 파일로 .shp과 함께 사용되는 선택적 인덱스 파일. 특정 모양을 빠르게 찾을 수 있도록 돕는 것
* .prj: projection 파일로 좌표 시스템 및 공간에 관련된 참조 정보를 포함. (좌표 단위, 투영 방법 등 세부 정보)

결국 Shapefile은 하나의 파일 포맷이 아니라 3개의 확장 포맷(dbf, shp, shx)을 통틀어 Shapefile이라 한다.


### GeoJSON

하지만 저런 파일은 기본적으로 컴퓨터에서 열 수 있게 제공되는 파일 형식도 아니고, 웹(Javascript)도 읽지 못한다.
따라서 자바스크립트가 읽을 수 있게끔 Geometry + JSON 형식으로 변환하여 주는 과정이 필요하다.

변환은 간편하게 웹에서 가능하다.

<a href="https://mapshaper.org/?ref=park9eon.com" target="_blank">mapshaper</a>


위 사이트에 접속해서 공간정보시스템에서 다운로드 받은 4개 파일을 업로드하면 된다. 

![mapshaper에 파일 업로드](https://github.com/Yeony99/Yeony99.github.io/assets/76241233/78a3c44e-82ce-440a-b9ca-cef30d828f07)


파일명을 모두 동일하게 맞춰주는 것이 좋은데, 하지 않아도 작동되는 것으로 확인되었다.

여기서 제대로 행정구역 정보를 사용하고 싶다면! Options에 `encoding="euc-kr"` 인코딩을 꼭 입력해주자.
![mapshaper 인코딩 옵션](https://github.com/Yeony99/Yeony99.github.io/assets/76241233/e941592b-8751-4536-afe9-578fa4b6be63)

옵션을 입력하지 않은 경우 기껏 변환한 json 파일을 열었을 때 한글이 깨져 있는 것을 볼 수 있을 것이다. ~~(자전적 발언)~~

import 버튼을 누르면 예쁘게 잘 그려져 있는 지도를 볼 수 있다.

이제 GeoJSON으로 내보내기 하면 된다. 우측 상단에 Export 버튼을 클릭 후 File Format으로는 GeoJson을 선택해주자.

![mapshaper export](https://github.com/Yeony99/Yeony99.github.io/assets/76241233/a324e7ac-f8a5-468b-aca2-67affaf13702)
![mapshaper export file format](https://github.com/Yeony99/Yeony99.github.io/assets/76241233/cc10f716-0ec9-49bf-946d-b7bef0d421b1)

json파일을 열어보면 다음과 같은 형식으로 구성되어 있다.


```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [...],
          [...],
          ...
        ],
        "properties": {
          "CTPRVN_CD": "11",
          "CTP_ENG_NM": "Seoul",
          "CTP_KOR_NM": "서울특별시"
        }
      },
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [...],
            [...],
            ...
          ],
          "properties": {
            "CTPRVN_CD": "28",
            "CTP_ENG_NM": "Incheon",
            "CTP_KOR_NM": "인천광역시"
          }
        },
    },
    {
        ...
    },
  ]
}

```

`features` 배열에 각 행정구역별로 `properties`와 `geometry` 정보가 들어가 있어 이걸 기준으로 관리하기로 했다. 

<br/>

### React Leaflet

Leaflet에도, React Leaflet에도 GeoJSON 기능을 제공한다.   

[leafletjs](https://leafletjs.com/examples/geojson/)
[react-leaflet GeoJSON](https://react-leaflet.js.org/docs/api-components/#geojson)

간편하게 사용하기 위해 React Leaflet을 설치하였다.   
앞서 GeoJSON으로 변환해 다운로드한 파일을 프로젝트 내부에 넣어준 후 import한다.   
나는 Nextjs를 사용 중이라 public 폴더에 GeoJSON파일을 넣었다.

```tsx
// components/MapComponent.tsx

import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// public 폴더에 위치한 GeoJSON 파일 사용
const geoJsonData = require("public/ctprvn.json");

const MapComponent = () => {

    // 선택한 지형을
    const [selectedFeature, setSelectedFeature] = useState(
        geoJsonData.features[0] // 기본으로 서울특별시 선택
    );

    const onEachFeature = (
        feature, // 지도에서 선택된 feature
        layer
    ) => {
        layer.on({
            click: (e) => {
                setSelectedFeature(feature);
            },
        });
    };

    const style = (feature: any) => {
        // 파라미터로 받은 feature가 이미 선택된 feature인지 확인
        const isSelected = feature === selectedFeature;

        // 결과에 따라 return할 스타일 정의
        return {
            color: isSelected ? "blue" : "pink",
            weight: isSelected ? 4 : 2,
            opacity: isSelected ? 1 : 0.7,
        };
    };

    return (
        <>
            <MapContainer>
                zoomControl={false}
                center={[36.638392, 127.696118]}
                minZoom={6}
                zoom={6}
                style={{ height: "100%", width: "100%", background: "#fff" }} 
            >

                <GeoJSON 
                    data={geoJSONData}
                    style={style}
                    onEachFeature={onEachFeature}
                />
            </MapContainer>
        </>
    )
}
```

<br/>

### 결과

![leaflet-geojson](https://github.com/Yeony99/Yeony99.github.io/assets/76241233/95412b9c-9c12-40ca-991b-4505f8e0c99d)

최종 결과는 위와 같다. 


<br/>

---

## 출처

[대한민국 행정구역(SHP) GeoJSON으로 변환하는 법](https://park9eon.com/how-to-convert-to-korea-shp-geojson/)
[react leaflet](https://react-leaflet.js.org/docs/api-components/#geojson)