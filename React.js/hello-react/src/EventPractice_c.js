//rcc enter tab으로 파일 형식 만들기(클래스형)
//App.js 연결

//props는 읽기전용 전달받는 용도
//state는 변경될 내용 전달, 입력받는 용도
import React, { Component } from 'react';

class EventPractice_c extends Component {
    state = {
        username: '',
        message: '',
    };

    /* 사용을 지양해야하는 형식 - 이전 방식 this 연결이 끊어질 수 있어서 bind 사용하여 억지로 처리해주는 방식
    일반 함수를 사용하면 this를 잡아주지 못해서 억지로 bind 사용해서 연결해야함.
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

      handleChange (e) {
        this.setState({
        message: e.target.vlaue,
        });
    };

    handleClick () {
        alert(this.state.message);
        this.setState({
        message: '',
        });
    };
    */

    handleChange = (e) => {
        this.setState({
            // message: e.target.value,
            // username: e.target.value,
            [e.target.name]: e.target.value,
            //key:value
        });
    };

    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username: '',
            message: '',
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    /*
                    onChange={(e) => {
                        // console.log(e.target.value);
                        //input 값 변경될때마다 value 값 console에 출력

                        this.setState({
                            message: e.target.value,
                            //state.message에 value값 전달하기
                        });
                    }}
                    */
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    /*
                    onChange={(e) => {
                        // console.log(e.target.value);
                        //input 값 변경될때마다 value 값 console에 출력

                        this.setState({
                            message: e.target.value,
                            //state.message에 value값 전달하기
                        });
                    }}
                    */
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    /*
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message: '',
                        });
                    }}
                */
                    onClick={this.handleClick}
                >
                    확인
                </button>
            </div>
        );
    }
}

export default EventPractice_c;
