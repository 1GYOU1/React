import React, { useRef } from 'react';

const HookUseRef = () => {
	const potato = useRef();//getElementId()와 비슷한 느낌. 선택하는데 사용. reference
    setTimeout(() => potato.current.focus(), 3000);
	return (
		<div>
            <h1>useRef</h1>
			<input ref={potato} placeholder="setTimeout focus 3000" />
		</div>
	);
};

export default HookUseRef;