import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중..'); //시작, 입력, 등록했을 때마다 호출
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputE1 = useRef(null);

    const onChange = useCallback((e) => {
        //함수 실행문
        setNumber(e.target.value);
    }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성
    //데이터 값이 바뀌지 않아도 되는 부분은 빈배열로 넣어둠.
    const onInsert = useCallback(() => {
        //함수 실행문
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputE1.current.focus(); //등록하고 input에 커서
    }, [number, list]); //number 혹은 list가 바뀌었을때만 함수를 생성.
    //데이터 값이 바뀌어야 하는 부분은 배열로 받아와야함.

    //useMemo 사용
    const avg = useMemo(() => getAverage(list), [list]);
    //시작할때, 등록할때마다 호출 (입력할때마다는 X)
    //[list] 배열의 내용이 바뀌는 것을 감지해서 getAverage(list) 함수가 호출된다.

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputE1} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                    //react에서 map 사용시 키값 필수적용, key값 index로 하면 안되는데 대충해놓음...
                ))}
            </ul>
            <div>
                <b>평균값 : </b>

                {avg}
            </div>
            <hr />
        </div>
    );
};

export default Average;
