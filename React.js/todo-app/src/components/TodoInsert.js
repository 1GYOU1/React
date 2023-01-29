import React, {useCallback, useState} from 'react';
import { MdAdd } from 'react-icons/md';
//아이콘 링크 https://react-icons.github.io/react-icons/icons?name=md
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");
  

    const onChange = useCallback((e) => {//useCallback 변화가 감지되어도 한번만 렌더링
        setValue(e.target.value);
    }, []);
    //,[] 대괄호를 비워두면 초기 렌더링 이후로 렌더링 X, 렌더링이 필요하다면 안에 내용 넣기.

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');//초기화
            e.preventDefault();//전체초기화는 방지(브라우저 새로고침 방지)
        },
        /*
        setValue만 초기화하고 기본동작 취소
        onInsert, value 업데이트 되어야 함
        */
        [onInsert, value]
    );

    return (
                                    //onSubmit enter키로도 사용 가능
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
