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


