//useReducer 사용
import React, { useReducer } from 'react';

function reducer(state, action) {
    //action.type에 따라 다른 작업 수행

    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            //아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    //state - 현재값, dispatch - 실행 함수값, reducer 함수를 찾아서 실행시킴
    //reducer 함수, 해당 reducer의 기본값을 넣어준다.
    //dispatch : 액션을 발생시키는 함수.
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;

//useState 사용
// //rsc
// import React, { useState } from 'react';

// const Counter = () => {
//     const [value, setValue] = useState(0);

//     return (
//         <div>
//             <p>
//                 현재 카운터 값은 <b>{value}</b>
//             </p>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>
//         </div>
//     );
// };

// export default Counter;
