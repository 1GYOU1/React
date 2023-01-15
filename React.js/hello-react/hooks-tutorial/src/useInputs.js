import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
        //action의 name이 일치하면 action의 value 값을 갖는다.
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e) => {
        dispatch(e.target);
    };
    return [state, onChange];
}
