//react.js/hello-react/src/EventPractice_c.js 클래스형과 같은 내용

//함수형 컴포넌트
import React, { useState } from 'react';

const EventPractice_f = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form, //기존의 form 내용을 이자리에 복사한 뒤
            [e.target.name]: e.target.value, //원하는 값을 덮어씌우기
        };
        setForm(nextForm); //변경된 form
    };

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: '',
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="유저명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
export default EventPractice_f;
