/*
#2.2 useClick

작동 순서
1. componentWillMount
: reder 전에 componentWillMount 실행, => element 의 click 이벤트 없애줌

2. render
: 페이지가 redering 됨
3. componentDidMount
redering이 된 후에 componentDidMount 실행 => click 이벤트 등록 'sayHello'

4. [] 의사용
dependency 에 아무것도 들어가있지 않음 => 페이지가 redering 될 때 한 번만 동작

결과 : 클릭 이벤트 지우고 - 렌더링 하고 - 클릭이벤트 등록하고 - 한번만 로딩되니까 중복으로 클릭이벤트 등록 될 일 없음
*/
import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
	const ref = useRef();//document.getElementByID()를 사용한 것과 동등하게 선택하는 역할
	useEffect(() => {
	const element = ref;
	if (element.current) {
	element.current.addEventListener("click", onClick);
	}
	return () => {
		if (element.current) {
			element.current.removeEventListener("click", onClick);
		}
	};
	}, []);
	if (typeof onclick !== "object") {
		return;
	}
		return ref;
	};

const HookUseClick = () => {
	const sayHello = () => console.log("say hello");
	const title = useClick(sayHello);
	return (
		<div>
			<h1 ref={title}>Hi</h1>
		</div>
	);
};

export default HookUseClick;