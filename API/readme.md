## React.js 기반 API 호출

React의 useState 및 useEffect 훅을 사용하여 API 데이터를 가져오고 화면에 렌더링

- ### fetch API 
- ### axios 라이브러리

<br>

### fetch

```js
import React, { useEffect, useState } from "react";

function DictionarySearchResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://openapi.seoul.go.kr:8088/4b4948426b316779363375646c5141/json/SearchSTNBySubwayLineInfo/0/466/`
    )
      .then((response) => response.json())
      .then((json) => {
        // API 응답에서 "row" 배열을 추출하여 데이터를 설정
        setData(json.SearchSTNBySubwayLineInfo.row);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

  return (
    <div>
      <h1>test</h1>
      <ul>
        {data.map((item) => (
          <li key={item.STATION_CD}>
            <h2>{item.STATION_NM}</h2>
            <p>호선: {item.LINE_NUM}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DictionarySearchResults;
```

<br>

### axios 라이브러리

axios 라이브러리 설치
>$ npm install axios


```js
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios를 import

function DictionarySearchResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API 엔드포인트 URL
    const apiUrl =
      "http://openapi.seoul.go.kr:8088/4b4948426b316779363375646c5141/json/SearchSTNBySubwayLineInfo/0/466/";

    // Axios를 사용한 API 호출
    axios
      .get(apiUrl)
      .then((response) => {
        // API 응답 데이터에서 "row" 배열을 추출하여 데이터 설정
        setData(response.data.SearchSTNBySubwayLineInfo.row);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

  return (
    <div>
      <h1>test</h1>
      <ul>
        {data.map((item) => (
          <li key={item.STATION_CD}>
            <h2>{item.STATION_NM}</h2>
            <p>호선: {item.LINE_NUM}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DictionarySearchResults;
```