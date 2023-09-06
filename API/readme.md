## API 호출

### React.js 기반 json형식 API 호출

React의 useState 및 useEffect 훅을 사용하여 json형식 API 데이터를 가져오고 화면에 렌더링

- ### fetch 
- ### axios 라이브러리

<br>

api에는 json, xml방식으로 호출하는데 주로 json을 사용한다. 왜냐하면 

- 구조가 복잡하고 중첩 문제: XML 문서는 중첩된 요소로 구성될 수 있으며, 이것은 데이터를 추출하기 어렵게 만들 수 있습니다. 특히 복잡한 XML 문서의 경우, 데이터를 추출하기 위해 많은 수준의 중첩된 반복문과 조건문이 필요할 수 있음.

- 태그와 속성: XML 문서는 요소(element)와 속성(attribute)으로 이루어져 있다. 데이터를 추출하려면 요소의 이름과 속성도 고려해야 하므로 JSON과 비교하여 데이터 구조가 더 복잡해짐.

- 파싱의 어려움: XML을 파싱하기 위해서는 파싱 라이브러리를 사용. XML 파싱 라이브러리는 XML 문서를 JavaScript 객체 또는 다른 데이터 구조로 변환해야 함.

- 버전 및 스키마의 다양성: XML API는 종종 다양한 버전과 스키마를 지원해서 API 요청 및 응답의 형식이 다양할 수 있으며, 이로 인해 파싱 로직이 복잡.

<br>

### fetch

- fetch 함수는 HTTP 요청에 대한 Promise를 반환. 
- Promise는 서버로부터 응답을 받을 때까지 대기하고, 응답이 도착하면 이후의 작업을 처리.

작업 예시 코드

```js
import React, { useEffect, useState } from "react";

function DictionarySearchResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://openapi.seoul.go.kr:8088/4b4948426b316779363375646c5141/json/SearchSTNBySubwayLineInfo/0/466/`
    )
      .then((response) => response.json())//API 요청에 대한 응답을 JSON 형식으로 파싱
      .then((json) => {//JSON 파싱이 완료된 후 실행되는 콜백 함수
        setData(json.SearchSTNBySubwayLineInfo.row);// API 응답에서 "row" 배열을 추출하고, setData 함수를 사용하여 data 상태를 업데이트
      })
      .catch((error) => {//API 요청 중에 발생한 오류를 처리하는 catch 블록
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

then과 catch는 fetch를 사용할 때 주로 사용되는 Promise 기반의 비동기 코드를 작성하는 방법.

**then 메서드**
- Promise가 성공적으로 이행(resolve)될 때 실행
- 서버 응답을 처리하는 역할
- 주로 JSON 파싱 또는 응답 데이터를 가공하는 작업이 이곳에서 수행

**catch 메서드**
- Promise가 거부(reject)될 때 실행
- HTTP 요청이 실패하거나 오류가 발생한 경우, catch 블록에서 오류를 처리
- 주로 네트워크 오류나 서버 오류를 처리하는 데 사용

```js
fetch('https://example.com/api/data')
  .then((response) => {
    // HTTP 응답을 처리하는 코드
    return response.json(); // JSON 파싱 예시
  })
  .then((data) => {
    // 파싱된 데이터를 사용하는 코드
    console.log(data);
  })
  .catch((error) => {
    // 오류를 처리하는 코드
    console.error('오류 발생:', error);
  });
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
    // API 엔드포인트의 URL을 변수 apiUrl에 저장
    const apiUrl =
      "http://openapi.seoul.go.kr:8088/4b4948426b316779363375646c5141/json/SearchSTNBySubwayLineInfo/0/466/";

    // Axios를 사용한 API 호출
    axios
      .get(apiUrl)// axios를 사용하여 API 요청을 보냅니다. apiUrl에 정의된 URL로 GET 요청을 보내고, 응답을 받아 처리
      .then((response) => {//API 요청이 성공한 경우, 응답을 처리하기 위한 함수를 정의합니다. 여기서는 응답 데이터에서 "row" 배열을 추출
        // API 응답 데이터에서 "row" 배열을 추출하여 데이터 설정
        setData(response.data.SearchSTNBySubwayLineInfo.row);//상태 변수 data를 업데이트
      })
      .catch((error) => {//API 요청 중에 오류가 발생한 경우, 오류를 처리하기 위한 함수를 정의
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

### axios와 fetch의 차이

1. **사용법 차이**:

- **axios**: axios는 라이브러리로서 사용되며, 요청을 보내기 위해 axios.get(), axios.post(), axios.put()과 같은 메서드를 사용. 이러한 메서드는 각각 HTTP GET, POST, PUT 요청을 나타냄.

- **fetch**: fetch는 브라우저에 내장된 API로, fetch(url)와 같은 방식으로 요청을 보냄. 기본적으로 GET 요청을 수행하며, 다른 HTTP 메서드를 사용하려면 옵션을 추가해야 함.

2. **Promise 반환**:

- **axios**: axios 메서드는 Promise를 반환. 따라서 .then() 및 .catch()와 같은 Promise 메서드를 사용하여 응답을 처리.

- **fetch**: fetch도 Promise를 반환. 따라서 .then() 및 .catch()를 사용하여 응답을 처리. 하지만 fetch는 HTTP 상태 코드가 200 이상 299 미만인 경우에만 Promise를 이행(resolve)하며, 다른 상태 코드는 기본적으로 오류로 처리됌.

3. **브라우저 호환성**:

- **axios**: axios는 브라우저 및 Node.js에서 모두 사용할 수 있으며, 브라우저 호환성이 좋음.

- **fetch**: fetch는 모던 브라우저에서 지원되며, 일부 오래된 브라우저에서는 폴리필(polyfill)이 필요할 수 있음.

4. **기능 확장성**:

- **axios**: axios는 HTTP 요청에 대한 기능을 확장하거나 인터셉터(interceptor)를 사용하여 요청과 응답을 가로챌 수 있는 기능을 제공.

- **fetch**: fetch는 기본적인 네트워크 요청을 제공하며, 추가 기능은 직접 구현해야함.