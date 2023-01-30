# __React JS__

[참고사이트 ① - 벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)

## React CDN

```html
<!--React Js-->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!--React DOM-->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<!--babel-->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## babel 

최신 Javascript(ES6, ES7 등..) 문법을 예전 브라우저에서 표출 시키기 위해 일반 Javascript 문법으로 변환해주는 컴파일러

=> Pure React로 변환해주는 언어

babel 사용시 script type 선언 필수 ★
```html
<script type="text/babel"></script>
```

```js
// babel 사용
const Title = (
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>'Hello I am a Title'</h3>
)

//head에 Pure React 자동 컴파일
const h3 = React.createElement('h3', 
	{
		id:'title',
		onMouseEnter: () => console.log('mouse enter'),
	},
	'Hello I am a span'
);
```

## JSX

Javascript 문법을 Xml처럼 사용할 수 있게 해주는 Javascript 확장문법

React.createElement()를 사용하여 객체를 만드는 불편함 해소 및 코드 간소화

```js
const root = document.getElementById('root');

// 일반 함수식으로 변환
function Title(){
	return	(
	<h3 id="title" onMouseEnter={() => console.log('mouse enter')}>Hello I am a Title</h3>
	);
}

// 화살표 함수식으로 변환
const Button = () => (
	<button style={{
			backgroundColor: 'tomato',
		}}
		onClick={() => console.log('im clicked')}>
		Click me
	</button>
);

// 대문자로 불러오기 ★(html 언어와 혼동 주의)
const Container = () => (
	<div>
		<Title />
		<Button />	
	</div>
);
ReactDOM.render(<Container/>, root);
```

<br>

## React Hooks

- React 에서 기존에 사용하던 Class를 이용한 코드를 작성할 필요 없이, state와, 여러 React 기능을 사용할 수 있도록 만든 라이브러리

- 함수 컴포넌트가 어떤 값을 유지할 수 있도록, '캐시'를 만들고, 데이터 캐시를 이용하여 만든 여러개의 API

[React Hooks 참고사이트](https://defineall.tistory.com/900)

<br>

## React 기본 지원 Hooks

[참고사이트](https://defineall.tistory.com/900)

## useState

- React에서 사용자의 반응에 따라, 화면을 바꿔주기(렌더링) 위해 사용되는 트리거역할을 하는 변수

<br>

----

## #5.0 Introduction

## React 시작하기

①node.js 설치

https://nodejs.org

②node.js 버전 확인
>$ node -v

③npx 작동 확인
>$ npx

>$ npx create-react-app 새 폴더명

④Visual studio에서 터미널 열기

>$ cd 새 폴더명

>$ npm start

<br>

----

## #5.1 Tour of CRA

## prop-types 플러그인 설치

prop-types 설치하고 하단 형식으로 타입 검사.

>$ npm i prop-types

<br>

isRequired를 사용하면 입력해야되는 값이 누락되었을때 콘솔 경고를 띄울 수 있음.

react-for-beginners/src/Button.js

```js
import PropTypes from 'prop-types';
.
.
.
function Button({text}){
    return (
        <button>{text}</button>
    )
}
Button.propTypes = {
    text : PropTypes.string.isRequired,
}
.
.
.
```

<br>

## React className

<br>

<img width="544" alt="스크린샷 2023-01-25 오후 2 40 40" src="https://user-images.githubusercontent.com/90018379/214488799-3ec124df-fff1-43f8-8462-b536752de535.png">

<img width="544" alt="스크린샷 2023-01-25 오후 3 03 58" src="https://user-images.githubusercontent.com/90018379/214492148-b517848f-d662-4657-87e0-306da0b72c2b.png">

<br>

React에서는 import한 class가 같은 class여도 자동으로 랜덤으로 지정됨.

<img width="544" alt="스크린샷 2023-01-25 오후 2 39 54" src="https://user-images.githubusercontent.com/90018379/214488788-695c79e3-9ebb-4932-bc75-1f88f7546116.png">

<img width="544" alt="스크린샷 2023-01-25 오후 2 40 17" src="https://user-images.githubusercontent.com/90018379/214488796-3903cb38-eddb-4649-9c83-453ea7550a59.png">

----

## useEffect

useState -> 변경되는 함수 감지할 때마다 render

useEffect -> 불러와질때 한번만 render

```js
useEffect(callback, [])
// API 또는 데이터를 딱 한번만 호출하고 그 뒤로는 호출하기 싫은 경우.
```

```js
useEffect(callback, [data])
// data를 한번 호출하고 그 뒤로는 data가 변화가 감지될 때만 호출.
```

예시 1) #6.1 useEffect 
```js
import { useState, useEffect } from 'react';
import Button from './Button';
import styles from './App.module.css'

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");//onClick 실행될때마다 샐행, render
  useEffect(() => {
    console.log("CALL THE API....");//페이지 불러와질때 한번만 실행
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
```

예시 2) #6.2 Deps
```js
import { useState, useEffect } from 'react';
import Button from './Button';
import styles from './App.module.css'

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=>{
    console.log("I run only once.");
  }, []);//초기에 딱 한번 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);//초기 실행 후 keyword의 변화가 감지될때만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);//초기 실행 후 counter의 변화가 감지될때만 실행
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
```

<br>

2번씩 렌더 진행되는 오류

src/index.js 파일에 <React.StrictMode> -> 제거

```js
root.render(
	<React.StrictMode> -> 제거
  		<App />
	<React.StrictMode> -> 제거
);
```

[React.StrictMode](https://ko.reactjs.org/docs/strict-mode.html)

<br>


