//rcc 클래스형
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        vaildated: false,
    };

    handleChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000',
        });
        // this.inputFunc.focus();
        this.inputFunc.current.focus();
    };

    inputFunc = React.createRef();

    render() {
        return (
            <div>
                <input
                    // ref={(refName) => (this.inputFunc = refName)}
                    ref={this.inputFunc}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={
                        this.state.clicked
                            ? this.state.validated
                                ? 'success'
                                : 'failure'
                            : ''
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;
